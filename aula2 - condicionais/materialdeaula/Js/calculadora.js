window.alert("bem vindo a calculadora!");
const numero1 = Number(window.prompt("Digite o seu número:"));
const operador = window.prompt("Digite a operação desejada:(Obs: Apenas +, -, /, *)");
numero2 = Number(window.prompt("Digite o segundo número"));
var resultado = undefined;

switch(operador){
    case "+": 
        resultado = numero1 + numero2;
        window.alert(`Oresultado do calculo é de ${resultado}`);
        location.reload();
        break
    case "-":
        resultado = numero1 - numero2;
        window.alert(`O resultado do calculo é ${resultado}`);
        location.reload();
        break
    case "*":
        resultado = numero1 * numero2;
        window.alert(`O resultado do calculo é ${resultado}`);
        location.reload();
        break
    case "/":
        resultado = numero1 / numero2
        window.alert(`O resultado do calculo é ${resultado}`);
        location.reload();
        break

    default:
        window.alert(`Operador inválido! Tente novamente!`)
    }       