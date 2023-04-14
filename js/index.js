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

const abrirModalNovaClinica = document.getElementById("abrir-modal-nova-clinica");
const fecharModalNovaClinica = document.getElementById("fechar-modal-nova-clinica");
const modalNovaClinica = document.getElementById("nova-clinica");

abrirModalNovaClinica.addEventListener("click", function() {
    modalNovaClinica.style.display = "block";
});

abrirModalNovoMedico.addEventListener("click", function() {
    modalNovoMedico.style.display = "block";
});

fecharModalNovoMedico.addEventListener("click", function() {
    modalNovoMedico.style.display = "none";
});

fecharModalNovaClinica.addEventListener("click", function() {
    modalNovaClinica.style.display = "none";
});

function toggleDropdown(item) {
    var dropdownContent = item.nextElementSibling;
    if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
    } else {
    dropdownContent.style.display = "none";
    }
}