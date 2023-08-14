// REPETIÇÕES
// WHILE (VERIFICA E FAZ)

var contador = 0;
console.log("WHILE")
while (contador <= 10){
    console.log(contador);
    contador++;
    let barra = "-----------"
    console.log(barra);
}

// DO WHILE (FAZ E VERIFICA)

var contador2 = 1;
console.log("DO WHILE")
do {
    console.log(contador2);
    contador2++
}
while(contador2 <= 10);

// FOR
//for(variavel; condição; controlador){
//    bloco de código
//    }
console.log("FOR")

for (var contador3 = 10; contador3 >= 0; contador3--){
    console.log(contador3);
}

//WHILE COM LENGTH
var teste = ["ex1", "ex2", "ex3", "ex4", "ex5"];
var contador4 = 0;

while ( contador4 < teste.length){
    console.log(teste[contador4])
    contador4++
}

// FOR EACH

var cores = ["vermelho", "Azul", "Amarelo", "Verde"];
console.log("FOR EACH");

//cores.forEach((element) => console.log(element))

cores.forEach((element) => {
    console.log(element)
})



