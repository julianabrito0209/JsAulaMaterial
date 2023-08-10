console.log("Olamundo!");

//caixas de texto
//window.alert("Meu primeiro Alert!");
//window.confirm("O seu dia está legal?")
//window.prompt("Qual é o seu nome?")

//Variáveis
//variável do escopo lobal, que sobrescreve
var nome = "Victor Santos"; // a variavel pode ser alterada ao longo do código
//variavel do escopo global que nao sobrescreve
const corFavorita = "Vermelha"; // o const não permite alteração. ele é fixo;
//
//o let só existe dentro do bloco function dele;
//diferente do var e do const, o let nao fica salvo na memória
// variavel dentro do escopo local, que sobrescreve
let numero1 = 3;

// concatenação
window.alert("Seja bem vindo(a)", "+nome+" , sua cor favorita é: "+corFavorita");
window.alert(`Seja bem vindo(a) ${nome}, sua cor favorita é : ${corFavorita}`);