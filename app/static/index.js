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

const abrirModalNovoMedico = document.getElementById("abrir-modal-novo-medico");
const fecharModalNovoMedico = document.getElementById("fechar-modal-novo-medico");
const modalNovoMedico = document.getElementById("novo-medico");

const abrirModalEditarMedico = document.getElementById("abrir-modal-editar-medico");
const fecharModalEditarMedico = document.getElementById("fechar-modal-editar-medico");
const modalEditarMedico = document.getElementById("editar-medico");

const abrirModalNovaClinica = document.getElementById("abrir-modal-nova-clinica");
const fecharModalNovaClinica = document.getElementById("fechar-modal-nova-clinica");
const modalNovaClinica = document.getElementById("nova-clinica");

const abrirModalEditarClinica = document.getElementById("abrir-modal-editar-clinica");
const fecharModalEditarClinica = document.getElementById("fechar-modal-editar-clinica");
const modalEditarClinica = document.getElementById("editar-clinica");

const abrirModalClinicaMedico = document.getElementById("abrir-modal-clinica-medico");
const fecharModalClinicaMedico = document.getElementById("fechar-modal-clinica-medico");
const modalClinicaMedico = document.getElementById("clinica-medico");

abrirModalNovaClinica.addEventListener("click", function() {
    modalNovaClinica.style.display = "block";
});

abrirModalNovoMedico.addEventListener("click", function() {
    modalNovoMedico.style.display = "block";
});

abrirModalEditarMedico.addEventListener("click", function() {
    modalEditarMedico.style.display = "block";
});

abrirModalEditarClinica.addEventListener("click", function() {
    modalEditarClinica.style.display = "block";
});

abrirModalClinicaMedico.addEventListener("click", function() {
    modalClinicaMedico.style.display = "block";
});

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


function setInfoMed(codMed, nomeMed, genMed, emailMed, telMed, codCliMed, dataMed, chMed) {
    document.getElementById('editCodMedico').value = codMed;
    document.getElementById('editNomeMed').value = nomeMed;
    document.getElementById('editGenero').value = genMed;
    document.getElementById('editEmailMed').value = emailMed;
    document.getElementById('editTelefoneMed').value = telMed;
    document.getElementById('editCodigoCliMed').value = codCliMed;
    document.getElementById('editData-entradaMed').value = dataMed;
    document.getElementById('editCargaHorariaMed').value = chMed;
}

function setInfoCli(codCli, nomeCli, endCli, emailCli, telCli) {
    document.getElementById('editCodCli').value = codCli;
    document.getElementById('editNomeCli').value = nomeCli;
    document.getElementById('editEnderecoCli').value = endCli;
    document.getElementById('editEmailCli').value = emailCli;
    document.getElementById('editTelefoneCli').value = telCli;
}

function setInfoCliMed(codMed, nomeMed) {
    document.getElementById('codMed-CliMed').value = codMed;
    document.getElementById('nomeMed-CliMed').value = nomeMed;

}

function toggleDropdown(item) {
    var dropdownContent = item.nextElementSibling;
    if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
    } else {
    dropdownContent.style.display = "none";
    }
}