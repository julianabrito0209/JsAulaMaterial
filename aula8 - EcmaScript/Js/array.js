// O indexOf retorna o índice

var frutas = ['Kiwi', 'Melancia', 'Morango','Jaca'];

//o indexof vai no array e verifica se aquela string pesquisada está no array. 

var frutasPesquisa = frutas.indexOf('Kiwi')
console.log(frutasPesquisa)

var frutasPesquisa = frutas.indexOf('Morango');
if(frutasPesquisa === -1){
    console.log("Fruta não encontrada!");

}else{
    console.log("Fruta encontrada!");

}


//INCLUDES retorna um booleano

var legumes = ['Alface', 'Tomate', 'Acelga', 'Cenoura'];

var legumesPesquisa = legumes.includes('batata');
if(legumesPesquisa === false){
    console.log ("Legume não encontrado!");

}else{
    console.log('Legume encontrado!')
}
