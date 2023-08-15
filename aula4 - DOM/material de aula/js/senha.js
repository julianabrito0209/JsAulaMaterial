const emailDoUsuario = "juliana0209@gmail.com";
const senhaDoUsuario = "1234";


var botaologar = document.querySelector('#logar');

botaologar.addEventListener('click', validar);

function validar(){
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;

    if (email === emailDoUsuario & senha === senhaDoUsuario){
        window.alert("Seja bem-vindo ao nosso website!");
        window.location.href = "https://www.google.com"
    }
    else{
        window.alert("Email ou senha incorretos! Insira as informações novamente");
    }
}