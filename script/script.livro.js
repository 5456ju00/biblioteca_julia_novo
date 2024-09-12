var meuFormulario = document.getElementById("cadastro_livro");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_livro();
});

function cadastrar_livro() {
  const cadastrar_livro = Number(document.getElementById("cadastrar_livro").value);
  return cadastrar_livro;
}

function cadastrar_livro() {
 const cadastrar_livro = Number(document.getElementById("cadastrar_livro").value); 
 return segundo_numero_inteiro;
}

function somar() {
  let cadastrar_livro = cadastrar_livro();
  let cadastrar_livro = cadastrar_livro();
  let cadastrar_livro = cadastrar_livro + cadastrar_livro;
  imprimirResultadoNaTela(cadastrar_livro);
}


function imprimirResultadoNaTela(resultado_soma) {
  document.getElementById("resultado_soma").value = resultado_soma;
}