// No exercício 2 da aula 10;
// implementar o botao do tema dark e tema light 



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

$("#btnTemaDark").on("click", function(){
    areaTexto.addClass("temaEscuro");

})

$("#btn").on("mouseout", function(){
    areaTexto.removeClass("temaEscuro");
    areaTexto.addClass("temaClaro");
})