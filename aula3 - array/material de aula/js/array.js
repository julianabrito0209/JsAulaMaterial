//var frutas1 = "morango"
//var frutas2 = "pessego"
//var frutas3 = "kiwi"

//ARRAY
// METODO 1

var frutas = Array();
frutas[0] = "Morango";
frutas[1] = "Pessego";
frutas[2] = "Kiwi";
frutas[3] = "Abacate";

console.log(frutas);

// METODO 2

var legumes = ["repolho", "Alface", "Cenoura", "Brócolis"];
console.log(legumes);
console.log(legumes [2]);

// COMANDOS DO ARRAY
// ADICIONAR ELEMENTOS NO FIM DO ARRAY

frutas.push("Uva");
console.log(frutas);

// ADICIONAR ELEMENTOS NO COMEÇO DO ARRAY

frutas.unshift("Laranja");
console.log(frutas);

// REMOVER ELEMENTOS NO FIM DO ARRAY

frutas.pop(); // pop vai tirar sempre o último elemento do array. 
console.log(frutas);

// REMOVER ELEMENTOS NO FIM DO ARRAY

frutas.shift();
console.log(frutas);

//ADICIONAR ELEMENTOS NO MEIO DO ARRAY
//SLICE( indice, quantos incices ele vai sobrescrever, dados)

frutas.splice(2, 0, "Abacaxi"); // o zero nao vai sobrescrever ninhuem. ele só acrescenta naquele local 
frutas.splice(3, 1, "Goiaba");
frutas[0] = "Jabuticaba";
console.log(frutas);

// COPIAR ARRAY
var frutasBackup = frutas.slice();
console.log(frutasBackup);