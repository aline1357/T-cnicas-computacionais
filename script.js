const caixaPrincipal = document.querySelector(“.caixa-principal”);
const caixaPerguntas = document.querySelector(“.caixa-perguntas”);
const caixaAlternativas = document.querySelector(“.caixa-alternativas”);
const caixaResultado = document.querySelector(“.caixa-resultado”);
const textoResultado = document.querySelector(“.texto-resultado”);
const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: [
          "No início ficou com medo do que essa tecnologia pode fazer. ",
          "Achou assustador pensar na velocidade na qual a tecnologia está avançando.",
        ],
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: [
          "Quis saber como usar IA no seu dia a dia.",
          "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia.",
        ],
      },
    ],
  },
];
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + “ “;
atual++;
mostraPergunta();
}
function dadoD6() {
    var numero = Math.floor(Math.random() * 6) + 1;
    return numero;
}

console.log(dadoD6());
export const perguntas = [
{
  export function aleatorio (lista){
    const posicao = Math.floot(Math.random()* lista.length);
    return lista[posicao];
    import {aleatorio} from ‘./aleatorio.js’;
import {perguntas} from ‘./perguntas.js;
const botaoJogarNovamente = document.querySelector(“.novamente-btn”);
    function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
      function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
botaoJogarNovamente.addEventListener("click", jogaNovamente());
        function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar"); botaoJogarNovamente.addEventListener("click", jogaNovamente());
}
        function jogaNovamente() {
atual = 0;
historiaFinal = "";
caixaResultado.classList.remove("mostrar");
mostraPergunta();
}
        function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar"); botaoJogarNovamente.addEventListener("click", jogaNovamente);
}
        

}
const nome = aleatorio(nomes);
      const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda","Gustavo", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
      import {aleatorio, nome} from './aleatorio.js';
      caixaPerguntas.textContent = "Em 2049, …";
      caixaPerguntas.textContent = `Em 2049, ${nome}`;
      function substituiNome(){
    for(const pergunta of perguntas){
        
    }
}
      function substituiNome(){
for(const pergunta of perguntas){
pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
      
