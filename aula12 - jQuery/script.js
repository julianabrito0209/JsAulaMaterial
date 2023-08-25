//efeitos e animações no jQuery 

$("#aumentar").on("click", function(){
    $("#caixa").animate({width : "500px", height : "500px", borderRadius: "0"})
})

$("#diminuir").on("click", function(){
    $("#caixa").animate({width: "300px"}).animate({height:"300px"}).animate({borderRadius:"100%"})
})
$("#direita").on("click", function(){
    $("#caixa").animate({marginLeft: "500px", rotate: "360deg"}, {duration:1000, complete : () =>{alert("Me contrata ;)")}})
})
$("#esquerda").on("click", function(){
    $("#caixa").animate({marginLeft: "0px",  rotate: "-360deg", marginTop: "200px"}, {duration:1000, })
})
$("#sumir").on("click", function(){
    //$("#caixa").fadeOut(500)
    $("#caixa").slideUp(500)
    //$("#caixa").hide(2000)
})
$("#aparecer").on("click", function(){
    $("#caixa").slideDown(500)
    //$("#caixa").fadeIn(500)
    //$("#caixa").show(2000)
})
$("#trocar").on("click", function(){
    $("#caixa").slideToggle(500)
    //$("#caixa").fadeToggle(500)
    
})
$("#desativar").on("click", function(){
    $("#caixaDeTexto").attr("disabled", "true")
    $("#caixaDeTexto").css("backgroundColor", "aquamarine")
    $("#caixaDeTexto").css("border", "none")

})
//.attr(colocar o atricuto e o valor dele )