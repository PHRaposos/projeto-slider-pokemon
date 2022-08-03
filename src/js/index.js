/*

OBJETIVO 1 - quando clicar na seta de avançar temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jetio de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder





*/
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
 
  const cartaoselecionado = document.querySelector(".selecionado")
  cartaoselecionado.classList.remove("selecionado");

}

function mostrarCartao(indiceCartao){

  cartoes[indiceCartao].classList.add("selecionado" );


}

btnAvancar.addEventListener("click", function () {

  if(cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado()

  cartaoAtual++;
  mostrarCartao(cartaoAtual) 
});

btnVoltar.addEventListener("click", function () {
  
  if(cartaoAtual === 0 ) return;

  esconderCartaoSelecionado()

  cartaoAtual--;
  mostrarCartao(cartaoAtual)
});
