var meuFormulario = document.getElementById("cadastrar_emprestimo");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_emprestimo();
});

function cadastrar_emprestimo() {
  const cadastrar_emprestimo = Number(document.getElementById("cadastrar_emprestimo").value);
  return cadastrar_emprestimo;
}

function cadastrar_emprestimo() {
 const cadastrar_emprestimo = Number(document.getElementById("cadastrar_emprestimo").value); 
 return cadastrar_emprestimo;
}


function somar() {
  let cadastrar_emprestimo = cadastrar_emprestimo();
  let cadastrar_emprestimo = cadastrar_emprestimo();
  let cadastrar_emprestimo = cadastrar_emprestimo + cadastrar_emprestimo;
  imprimirResultadoNaTela(cadastrar_emprestimo);
}


function imprimirResultadoNaTela(resultado_soma) {
  document.getElementById("resultado_soma").value = resultado_soma;
}