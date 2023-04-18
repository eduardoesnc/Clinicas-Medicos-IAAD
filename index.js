const express = require('express');
const http = require('http');
const mysql = require('mysql');
const ejs = require('ejs');
const path = require('path');

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clinicasmedicas'
  });

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

app.get('/css/style.css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public/css/style.css'));
});

app.get('/js/script.js', (req, res) => {
    res.set('Content-Type', 'text/javascript');
    res.sendFile(path.join(__dirname, 'public/js/script.js'));
});


app.get('/', (req, res) => {
    const sqlClinica = 'SELECT * FROM clinica';
connection.query(sqlClinica, (errorClinica, resultsClinica) => {
  if (errorClinica) throw errorClinica;
  const clinica = resultsClinica;

  // Obter dados da tabela "Medico"
  const sqlMedico = 'SELECT * FROM medico';
  connection.query(sqlMedico, (errorMedico, resultsMedico) => {
    if (errorMedico) throw errorMedico;
    const medico = resultsMedico;

    // Obter dados da tabela "ClinicaMedico"
    const sqlClinicaMedico = 'select cm.CodCli, cm.CodMed, cm.DataIngresso, cm.CargaHorariaSemanal, m.NomeMed, m.Telefone, m.Email, c.NomeCli from clinicamedico as cm, medico as m, clinica as c where cm.CodCli = c. CodCli and cm.CodMed = m.CodMed';
    connection.query(sqlClinicaMedico, (errorClinicaMedico, resultsClinicaMedico) => {
      if (errorClinicaMedico) throw errorClinicaMedico;
      const clinicaMedico = resultsClinicaMedico;

      // Renderizar a página EJS com os dados obtidos
      res.render('index', { clinica: clinica, medico: medico, clinicaMedico: clinicaMedico });
    });
  });
});
});

// INSERIR MEDICO
app.post('/inserirMedico', (req, res) => {
    const query = 'INSERT INTO Medico (CodMed, NomeMed, Genero, Telefone, Email) VALUES (?, ?, ?, ?, ?);';
    const codMedico = req.body.codMedico;
    const nome = req.body.nome;
    const genero = req.body.genero;
    const telefone = req.body.telefone;
    const email = req.body.email;
  
    const values = [codMedico, nome, genero, telefone, email]; // valores a serem inseridos nas colunas
  
    connection.query(query, values, (error, results, fields) => {
      if (error) throw error;
      res.redirect('/');
    });
});

//EDITAR MEDICO
app.post('/editarMedico', (req, res) => {
    const query = `
    UPDATE medico SET 
        NomeMed = ?,
        Genero = ?,
        Telefone = ?,
        Email = ?
    WHERE CodMed = ?
    `;
    const editCodMedico = req.body.editCodMedico;
    const editNomeMed = req.body.editNomeMed;
    const editGenero = req.body.editGenero;
    const editTelefoneMed = req.body.editTelefoneMed;
    const editEmailMed = req.body.editEmailMed;
  
    const values = [editNomeMed, editGenero, editTelefoneMed, editEmailMed, editCodMedico]; // valores a serem inseridos nas colunas
  
    connection.query(query, values, (error, results, fields) => {
      if (error) throw error;
      res.redirect('/');
    });
});

//EXCLUIR MEDICO
app.delete('/excluirRegistroMed/:id', (req, res) => {
    const query = 'DELETE FROM medico WHERE CodMed = ?';
    const idRegistro = req.params.id;
  
    const values = [idRegistro]; // valores a serem inseridos nas colunas
  
    connection.query(query, values, (error, results, fields) => {
        if (error) {
            console.erroror(error);
            res.status(500).send('Erro ao excluir o registro');
        } else {
            // Enviar uma resposta de sucesso
            res.redirect('/');
        }
    });
});

// INSERIR CLINICA
app.post('/inserirClinica', (req, res) => {
    const query = 'INSERT INTO Clinica (CodCli, NomeCli, Endereco, Telefone, Email) VALUES (?, ?, ?, ?, ?);';
    const codigo = req.body.codigo;
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const telefone = req.body.telefone;
    const email = req.body.email;
  
    const values = [codigo, nome, endereco, telefone, email]; // valores a serem inseridos nas colunas
  
    connection.query(query, values, (error, results, fields) => {
      if (error) throw error;
      res.redirect('/');
    });
});

//EDITAR CLINICA
app.post('/editarClinica', (req, res) => {
    const query = `
    UPDATE clinica SET 
        NomeCli = ?,
        Endereco = ?,
        Telefone = ?,
        Email = ?
    WHERE CodCli = ?
    `;
    const editCodCli = req.body.editCodCli;
    const editNomeCli = req.body.editNomeCli;
    const editEnderecoCli = req.body.editEnderecoCli;
    const editEmailCli = req.body.editEmailCli;
    const editTelefoneCli = req.body.editTelefoneCli;
  
    const values = [editNomeCli, editEnderecoCli, editTelefoneCli, editEmailCli, editCodCli]; // valores a serem inseridos nas colunas
  
    connection.query(query, values, (error, results, fields) => {
      if (error) throw error;
      res.redirect('/');
    });
});

// DELETAR CLINICA
app.delete('/excluirRegistroCli/:id', (req, res) => {
    const query = 'DELETE FROM clinica WHERE CodCli = ?';
    const idRegistro = req.params.id;
  
    const values = [idRegistro]; // valores a serem inseridos nas colunas
    
    if (idRegistro != '9999999') {
        
    connection.query(query, values, (error, results, fields) => {
        if (error) {
            console.erroror(error);
            res.status(500).send('Erro ao excluir o registro');
        } else {
            // Enviar uma resposta de sucesso
            res.redirect('/');
        }
    });

    }else{
        console.log('A Clínica Sede não pode ser excluída')
    }
});

// INSERIR CLINICAMEDICO
app.post('/inserirClinicaMedico', (req, res) => {
    const query = 'INSERT INTO ClinicaMedico (CodCli, CodMed, DataIngresso, CargaHorariaSemanal) VALUES (?, ?, ?, ?);';
    const codMedCliMed = req.body.codMedCliMed;
    const DataEntradaMed = req.body.DataEntradaMed;
    const CargaHorariaMed = req.body.CargaHorariaMed;
    const codCliCliMed = req.body.dispCli;
  
    const values = [codCliCliMed, codMedCliMed, DataEntradaMed, CargaHorariaMed]; // valores a serem inseridos nas colunas
  
    connection.query(query, values, (error, results, fields) => {
      if (error) throw error;
      res.redirect('/');
    });
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});