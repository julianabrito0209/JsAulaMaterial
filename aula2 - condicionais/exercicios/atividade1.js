//1) Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo usuário. 

//Considere os seguintes critérios:

//Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
//Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
//Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
//Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.

//Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados para o usuário.

window.alert("Boa tarde!");
const idade = Number(window.prompt("Qual é a sua idade?"));

if (idade < 0 || isNaN(idade) ){
    window.prompt("Idade Invalida");
    location.reload(); 
}else{
    if (idade >=0 & idade <= 14){
    window.prompt("Você é CRIANÇA");
    location.reload();
    }else{
        if(idade >=15 & idade <= 29){
        window.prompt("Você é JOVEM");
        location.reload();}
            else{
                if(idade >=30 & idade <= 59){
                window.prompt("Você é ADULTO");
                location.reload();}        
                    else{
                        if(idade >=60){
                        window.prompt("Você é IDOSO");}}}}}
                        location.reload();
        