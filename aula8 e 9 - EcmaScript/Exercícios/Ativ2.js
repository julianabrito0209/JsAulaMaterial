//2) Fazer um site de escrever textos onde possa implementar as funções de replace e replace all

var textoDigitado = document.getElementById("texto")
var termo = document.getElementById("termo");
var novoTermo = document.getElementById("novoTermo");

var trocaBtn = document.getElementById("troca")
var trocaTudoBtn = document.getElementById("trocaTudo")

trocaBtn.addEventListener('click', trocaTermo );
trocaTudoBtn.addEventListener('click', trocaTodos );

function trocaTermo(){
    let textoDigitadoValor = textoDigitado.value
    let termovalor = termo.value
    let novoTermoValor = novoTermo.value
    var textoFormatado = textoDigitado.replace(termo, novoTermo)
}

function trocaTodos(){
    textoDigitado.replaceAll(termoValor, novoTermoValor)
}





console.log(textoDigitado)
console.log(textoDigitado.replace(termo, novoTermo))
console.log(textoDigitado.replaceAll(termo, novoTermo))


