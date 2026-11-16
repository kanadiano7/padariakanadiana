// Funcionalidade escolhida: modo escuro / modo claro

// 1. Vai buscar o botão pelo id
var botao = document.getElementById("botao-modo");

// 2. Quando o botão é clicado, corre esta função
botao.addEventListener("click", function () {

  // Liga ou desliga a classe "escuro" no <body>
  document.body.classList.toggle("escuro");

  // Muda o texto do botão conforme o modo atual
  if (document.body.classList.contains("escuro")) {
    botao.textContent = "Modo claro";
  } else {
    botao.textContent = "Modo escuro";
  }
});
