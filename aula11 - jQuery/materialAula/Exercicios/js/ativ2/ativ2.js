// No exercício 2 da aula 10;
// implementar o botao do tema dark e tema light 


//quantidade dinamica

var areaTexto = $("#areaTexto")
var mudaTema = $("#mudaTema")
var headerTema = $("#headerTema")
var numeroPalavras = $("#numeroPalavras")
var numeroCaracteres = $("#numeroCaracteres")

mudaTema.on("click", function(){
    if(mudaTema.hasClass("temaClaro")){
        
        mudaTema.removeClass("temaClaro")
        mudaTema.addClass("temaEscuro")
        
        areaTexto.removeClass("temaClaro")
        areaTexto.addClass("temaEscuro")
        
        headerTema.removeClass("temaClaro")
        headerTema.addClass("temaEscuro")

    }else{
        mudaTema.removeClass("temaEscuro")
        mudaTema.addClass("temaClaro")

        areaTexto.removeClass("temaEscuro")
        areaTexto.addClass("temaClaro")
        
        headerTema.removeClass("temaEscuro")
        headerTema.addClass("temaClaro")
    }
})

//on = addEventListener
areaTexto.on("input", function(){
    let areaTextoValor = areaTexto.val()
    var quantidadeDePalavras = areaTextoValor.split(" ").length;
    numeroPalavras.text(quantidadeDePalavras);

    var quantidadeDeCaracteres = areaTextoValor.length;
    numeroCaracteres.text(quantidadeDeCaracteres);


})

// $("#btnTemaDark").on("click", function(){
//     areaTexto.addClass("temaEscuro");

// })

// $("#btn").on("mouseout", function(){
//     areaTexto.removeClass("temaEscuro");
//     areaTexto.addClass("temaClaro");
// })