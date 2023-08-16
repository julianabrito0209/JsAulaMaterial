
var input = document.getElementById("inputNome");
// var input = document.querySelector("#inputNome");

input.addEventListener("focus" , corY );
input.addEventListener("focusout" , corG );

function corY(){
    input.style.backgroundColor = "yellow";
    }

function corG(){
    if (input.value.length < 3){
        input.style.backgroundColor = "red";
        let resposta = document.getElementById("resposta");
        resposta.style.color = "red"
        resposta.innerText = "O número de caracteres não é suficiente!";
    }

    else{
        input.style.backgroundColor = "green";
        let resposta = document.getElementById("resposta");
        let conteudodoInput = input.value;
        let contarInput = input.value.length;
        resposta.style.color = "green";
        resposta.innerHTML = `O número de caracteres ${contarInput} <br> o que está escrito ${conteudodoInput}`;
    }}
