/* =====================================================
   CS2 INSIDER – Scripts do site
   1) Menu responsivo (celulares)
   2) Validação do formulário de contato (demonstrativo)
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  iniciarMenu();
  iniciarFormulario();
});

/* ---------- 1. Menu responsivo ---------- */
function iniciarMenu() {
  var botao = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".main-nav");

  if (!botao || !menu) {
    return;
  }

  botao.addEventListener("click", function () {
    var aberto = menu.classList.toggle("open");
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
  });
}

/* ---------- 2. Formulário de contato ---------- */
function iniciarFormulario() {
  var form = document.getElementById("form-contato");

  if (!form) {
    return;
  }

  var status = document.getElementById("form-status");

  form.addEventListener("submit", function (evento) {
    // Não há backend: o envio é sempre interrompido (formulário demonstrativo)
    evento.preventDefault();

    var valido = true;
    var campos = form.querySelectorAll("input, textarea");

    campos.forEach(function (campo) {
      var erro = document.getElementById(campo.id + "-erro");
      campo.classList.remove("invalid");
      if (erro) {
        erro.textContent = "";
      }

      if (!campo.checkValidity()) {
        valido = false;
        campo.classList.add("invalid");
        if (erro) {
          erro.textContent = campo.validationMessage;
        }
      }
    });

    if (!valido) {
      status.className = "form-status";
      form.querySelector(".invalid").focus();
      return;
    }

    status.className = "form-status show";
    status.textContent =
      "Formulário validado com sucesso! Este formulário é demonstrativo: nenhuma mensagem foi enviada.";
    form.reset();
  });
}
