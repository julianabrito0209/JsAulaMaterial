//2-Sucessor e antecessor, faça uma aplicação que colete um número digitado pelo usuário e logo em seguida mostre em ordem:
// o numero anterior a ele, o próprio número escolhido e o número sucessor a ele

window.alert("Calculando o sucessor e o antecessor");

let numero1 = parseInt(window.prompt("Digite um número: ")); 

const sucessor = numero1 + 1;
const antecessor = numero1 - 1;


window.alert(`O número escolhido foi ${numero1}, seu antecessor é ${antecessor} e seu sucessor é ${sucessor}!`);