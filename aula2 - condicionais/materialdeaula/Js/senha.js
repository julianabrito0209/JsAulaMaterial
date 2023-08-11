const senhadousuario = "ADM";
const emaildousuario = "fulano@gmail.com"

window.alert("Bem vindo a sua conta!");
var email = window.prompt("Insira o seu email"); 
var senha = window.prompt("Insira a sua senha!");

if(email != emaildousuario || senha != senhadousuario);{
    window.alert("O e-mail ou a senha estão incorretos! Tente novamente");
    location.reload();
}else{
    window.alert("Seja bem vindo(a)!");
}