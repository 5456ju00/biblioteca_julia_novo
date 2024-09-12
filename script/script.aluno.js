var meuFormulario = document.getElementById("cadastro_aluno");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastro_aluno();
});

function cadastro_aluno() {
  const cadastro_aluno = Number(document.getElementById("cadastro_aluno").value);
  return cadastro_aluno;
}

function cadastro_aluno() {
 const cadastro_aluno = Number(document.getElementById("cadastro_aluno").value); 
 return cadastro_aluno;
}


function somar() {
  let cadastro_aluno = capturarPrimeiroNumeroInteiro();
  let cadastro_aluno = capturarSegundoNumeroInteiro();
  let resultado_soma = cadastro_aluno + cadastro_aluno;
  imprimirResultadoNaTela(resultado_soma);
}


function imprimirResultadoNaTela(resultado_soma) {
  document.getElementById("resultado_soma").value = resultado_soma;
}