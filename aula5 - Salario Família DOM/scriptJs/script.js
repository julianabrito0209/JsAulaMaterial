var empregado = document.getElementById("empregado");
var filho = document.getElementById("filho");
var salario = document.getElementById("salario");
var botaocalcular = document.querySelector("#botao");
const resultado = document.getElementById("resultado");


botaocalcular.addEventListener('click', calcular)

function calcular(){
    if (empregado.value === ""){
    window.alert("Por favor insira seu nome");
    }
    else{
        if (filho.value === "" ){
        window.alert("Insira a quantidade de filhos");
        }
        else{
            if(salario.value === " " ){
            window.alert("Insira seu salário")
            }
            else{
                //calcular
                if(salario.value <= 806.80){
                    familia = filho.value * 41.37;
                }
                else{
                    if(salario.value >= 806.81 & salario.value <= 1212.64){
                        familia = filho.value * 29.16;
                    }
                    else{
                        familia = 0;
                    }
                }
                resultado.style.display = "flex";
                resultado.innerHTML =`${empregado.value}, o salário família é de: $`

        }
    }
}
}