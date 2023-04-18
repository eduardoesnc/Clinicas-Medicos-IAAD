function alternarElementoAtivo(event) {
    const elementoClicado = event.target;
    const elementos = document.querySelectorAll('[id^="link"]');

    elementos.forEach((elemento) => {
        if (elemento === elementoClicado) {
        elemento.classList.add('active');
        } else {
        elemento.classList.remove('active');
        }
    });

    const secoes = document.querySelectorAll('section');

    secoes.forEach((secao) => {
        if (secao.id === elementoClicado.id.replace('link', 'secao')) {
        secao.classList.add('ativa');
        } else {
        secao.classList.remove('ativa');
        }
    });
    }

    const elementos = document.querySelectorAll('[id^="link"]');
    elementos.forEach((elemento) => {
    elemento.addEventListener('click', alternarElementoAtivo);
});

const fecharModalNovoMedico = document.getElementById("fechar-modal-novo-medico");
const modalNovoMedico = document.getElementById("novo-medico");

const fecharModalEditarMedico = document.getElementById("fechar-modal-editar-medico");
const modalEditarMedico = document.getElementById("editar-medico");

const fecharModalNovaClinica = document.getElementById("fechar-modal-nova-clinica");
const modalNovaClinica = document.getElementById("nova-clinica");

const fecharModalEditarClinica = document.getElementById("fechar-modal-editar-clinica");
const modalEditarClinica = document.getElementById("editar-clinica");

const fecharModalClinicaMedico = document.getElementById("fechar-modal-clinica-medico");
const modalClinicaMedico = document.getElementById("clinica-medico");

function abrirModalNovaClinica(){
    modalNovaClinica.style.display = "block";
}

function abrirModalNovoMedico(){
    modalNovoMedico.style.display = "block";
}

function abrirModalEditarMedico(){
    modalEditarMedico.style.display = "block";
}

function abrirModalEditarClinica(){
    modalEditarClinica.style.display = "block";
}

function abrirModalClinicaMedico(){
    modalClinicaMedico.style.display = "block";
}

fecharModalEditarMedico.addEventListener("click", function() {
    modalEditarMedico.style.display = "none";
});

fecharModalNovoMedico.addEventListener("click", function() {
    modalNovoMedico.style.display = "none";
});

fecharModalNovaClinica.addEventListener("click", function() {
    modalNovaClinica.style.display = "none";
});

fecharModalEditarClinica.addEventListener("click", function() {
    modalEditarClinica.style.display = "none";
});

fecharModalClinicaMedico.addEventListener("click", function() {
    modalClinicaMedico.style.display = "none";
});


function setInfoMed(codMed, nomeMed, genMed, emailMed, telMed) {
    document.getElementById('editCodMedico').value = codMed;
    document.getElementById('editNomeMed').value = nomeMed;
    document.getElementById('editGenero').value = genMed;
    document.getElementById('editEmailMed').value = emailMed;
    document.getElementById('editTelefoneMed').value = telMed;
}

function setInfoCli(codCli, nomeCli, endCli, emailCli, telCli) {
    document.getElementById('editCodCli').value = codCli;
    document.getElementById('editNomeCli').value = nomeCli;
    document.getElementById('editEnderecoCli').value = endCli;
    document.getElementById('editEmailCli').value = emailCli;
    document.getElementById('editTelefoneCli').value = telCli;
}

function setInfoCliMed(codMed, nomeMed) {
    document.getElementById('codMedCliMed').value = codMed;
    document.getElementById('nomeMedCliMed').value = nomeMed;

}

function toggleDropdown(item) {
    var dropdownContent = item.nextElementSibling;
    if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
    } else {
    dropdownContent.style.display = "none";
    }
}