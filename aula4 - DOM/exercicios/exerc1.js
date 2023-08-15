//1) Crie um campo <input type="text"> e aplique os seguintes controles com base nos eventos abaixo:
//• No evento de foco modifique o background do input para amarelo.
//• Quando o campo perder o foco, recupere o seu respectivo valor e:
//     o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo deve ter seu background alterado para vermelho.
//     o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background deve ser alterado para verde.

const nome = document.getElementById("nome")
var nome = document.querySelector("nome");

nome.addEventListener('focusin', corY())
nome.addEventListener('focusout', corG());
nome.addEventListener('', function(){

    nome.style.backgroundColor = "yellow";
});

divTeste.addEventListener('click', alerta);

    divTeste.style.backgroundColor = "pink";
    divTeste.style.Color = "white";
    divTeste.innerHTML = "<h6>Você saiu da DIV!</h6>"
    


});


function alerta(){
    window.alert('Você clicou na DIV!');
}

function entraDiv(){
    divTeste.style.backgroundColor= "green";
    divTeste.style.color= "black";
    //divTeste.innerText = "Você entrou da div!"; // innerText vai trocar o conteúdo do texto, mas aproveita a formatação. / enquanto o innerHTML vai fazer a substituição completa, texto e formatação HTML
    divTeste.innerHTML = "<h6>Você entrou na DIV!</h6>"
    
}






nome.addEventListener(validar);




//validar quantidade de caracteres
function validar(){
    var nome = document.querySelector('nome').value;
    
    if (nome.lenght < 3 ){
        nome.style.backgroundColor = "red"
    }
    else{
        nome.style.backgroundColor = "green"
    }
}