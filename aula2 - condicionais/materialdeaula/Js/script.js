// OPERADORES LOGICOS
// & (E)
// || (OU)
// ! (NAO)

// OPERADORES RELACIONAIS
// > MAIOR QUE
// < MENOR QUE
// >= MAIOR OU IGUAL QUE 
// <= MENOR OU IGUAL QUE 
// == IGUAL A 
// != DIFERENTE

//ESTRUTURA DO IF
// IF - SE
// ELSE - SENAO
//   IF (CONDICAO){
//     BLOCO DE CODIGO
//     }
// ELSE{
//     BLOCO DE CODIGO    
//   }

if(false){
    console.log("Você está no if");
    }
    else{
        console.log("Você está no else");
    }

// MAIOR DE IDADE IF SCRIPT

window.alert("Boa tarde!");
const idade = Number(window.prompt("Qual é a sua idade?"));

if (idade < 0 || isNaN(idade) ){
    window.prompt("Idade Invalida");
    location.reload(); // comando location.reload faz recarregar a página
}  
    else{
        if (idade >=0 & idade <= 17){
         window.prompt("Você é menor de idade, acesso não permitido");
         location.reload(); // comando location.reload faz recarregar a página

        } else {
            window.alert("Você é maior de idade, seja bem vindo!");
        }
    }
    