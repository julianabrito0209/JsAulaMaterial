//2-Sucessor e antecessor, faça uma aplicação que colete um número digitado pelo usuário e logo em seguida mostre em ordem:
// o numero anterior a ele, o próprio número escolhido e o número sucessor a ele

window.alert("Calculando o sucessor e o antecessor");

let numero = parseInt(window.prompt("Digite um número: ")); 

//const sucessor = numero + 1;
//const antecessor = numero - 1;


window.alert(`O número escolhido foi ${numero}, seu antecessor é ${numero -1} e seu sucessor é ${numero +1}!`);