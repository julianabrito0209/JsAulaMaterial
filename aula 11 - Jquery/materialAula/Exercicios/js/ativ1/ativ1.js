// Fazer um script de tabuada sendo que o usuário possa escolher de 1 a 10.

//seletores

const resultadoDiv = document.querySelector("#resultadoDiv");

$("#calcular").on("click", function(){
    let numeroTabuadaValue = $("#numeroTabuada").val();

    for (let contador = 1; contador <= 10; contador ++){
        resultadoDiv.innerHTML +=`${contador} x ${numeroTabuadaValue} = ${contador * numeroTabuadaValue} <br>`
    }


})

 