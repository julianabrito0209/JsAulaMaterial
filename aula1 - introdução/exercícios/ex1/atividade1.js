//1-calcule conta, faça uma aplicação js que pegue o número de clientes em uma mesa, 
//o valor total da conta e após isso divida a conta de forma igual a todos os clientes

window.alert("Calculando a conta da mesa");
let numero1 = parseInt(window.prompt("Digite o valor da conta: R$ ")); 
let numero2 = Number(window.prompt("Digite a quantidade de pessoas na mesa:")) ;

const fracao = numero1 / numero2;


window.alert(`O valor para cada indivíduo será de R$: ${fracao}`);