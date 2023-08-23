//2) Fazer um site de escrever textos onde possa implementar as funções de replace e replace all

var textoDigitado = document.getElementById("textoDigitado")
var termo = document.getElementById("termo");
var novoTermo = document.getElementById("novoTermo");

var trocaBtn = document.getElementById("troca")
var trocaTudoBtn = document.getElementById("trocaTudo")

trocaBtn.addEventListener('click', trocaTermo );
trocaTudoBtn.addEventListener('click', trocaTodos );

function trocaTermo(){
    let textoDigitadoValor = textoDigitado.value
    let termoValor = termo.value
    let novoTermoValor = novoTermo.value
    
    var textoFormatado = textoDigitadoValor.replace(termoValor, novoTermoValor)
    textoDigitado.value = textoFormatado;
}

function trocaTodos(){
    let textoDigitadoValor = textoDigitado.value
    let termoValor = termo.value
    let novoTermoValor = novoTermo.value

    var textoFormatado = textoDigitadoValor.replaceAll(termoValor, novoTermoValor)
    textoDigitado.value = textoFormatado;
    
}





console.log(textoDigitado)
console.log(textoDigitadoValor.replace(termoValor, novoTermoValor))
console.log(textoDigitadoValor.replaceAll(termoValor, novoTermoValor))


