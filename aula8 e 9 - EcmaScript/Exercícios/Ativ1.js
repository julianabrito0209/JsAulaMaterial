//1) Fazer um array de filmes e listar cada elemento com a formatação = "Filme 1 : {elemento}"

var filmes = ["Black Panther", "Capitã Marvel", "O incrível Hulk", "Thor Ragnarok", "Homem de Ferro"]
var listaFilmes = filmes.map((filme) => "<li> Filme :" +filme+ "</li>")
document.getElementById("mapFilmes").innerHTML = `<ul>${listaFilmes}</ul>`
var listaFinal = listafilmes