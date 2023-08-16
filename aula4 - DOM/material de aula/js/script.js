// DOM :

// Capaz de selecionar elementos dentro do HTML; 
// Js muito utilizado para ações, animações e verificações; Assim o DOM atraves de diversos seletores, permite que o HTML faça esse controle. 
// Hierarquia de seleção do DOM:
// Window
// -> Location -> URL
// -> Document -> HTML -> Head -> Body -> Footer
// -> History -> Back / Next


var divTeste = document.getElementById("teste")

divTeste.addEventListener('click', alerta);
divTeste.addEventListener('mouseenter', entraDiv);
divTeste.addEventListener('mouseout', function(){
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
