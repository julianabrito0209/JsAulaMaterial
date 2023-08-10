//1-calcule conta, faça uma aplicação js que pegue o número de clientes em uma mesa, 
//o valor total da conta e após isso divida a conta de forma igual a todos os clientes

window.alert("Calculando a conta da mesa");
let conta = parseInt(window.prompt("Digite o valor da conta: R$ ")); 
let clientes = Number(window.prompt("Digite a quantidade de pessoas na mesa:")) ;

const fracao = conta / clientes;
var contaTotal = (conta / clientes ).toFixed(2); // vai estabelecer 2 casas decimais após a vírgula

window.alert(`O valor para cada indivíduo será de R$: ${contaTotal}`);
