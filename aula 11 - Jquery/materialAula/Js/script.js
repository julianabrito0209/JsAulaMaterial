//var paragrafoLorem = jQuery("#paragrafoLorem") nessa maneira, ele mostraria os atributos do paragrafoLorem, Tipo, etc.    se usar o .text ele vai usar os valores inseridos la. 

//jQuery ("." ou "#") - seletor do jQuery
//jQuery = $ (versão resumida)

var paragrafoLorem = jQuery("#paragrafoLorem").text()

// text() - lista o valor
// text("ELEMENTO") - sobrescreve o valor 
const usuario = "juliana"; 
var usuarioHtml = $("#username").text(usuario);

console.log(paragrafoLorem)

var quantidadeDePalavras = paragrafoLorem.split(" ").length;

// split pega o texto e "picota" ele, colocando entre os parenteses o que deve ser contado " " ou "."

//quantidade dinamica

var areaTexto = $("#areaTexto")
var numeroPalavras = $("#numeroPalavras")
var numeroCaracteres = $("#numeroCaracteres")

//on = addEventListener
areaTexto.on("input", function(){
    let areaTextoValor = areaTexto.val()
    var quantidadeDePalavras = areaTextoValor.split(" ").length;
    numeroPalavras.text(quantidadeDePalavras);

    var quantidadeDeCaracteres = areaTextoValor.length;
    numeroCaracteres.text(quantidadeDeCaracteres);


})

$("#btn").on("mouseenter", function(){
    areaTexto.addClass("temaEscuro");

})

$("#btn").on("mouseout", function(){
    areaTexto.removeClass("temaEscuro");
    areaTexto.addClass("temaClaro");
})