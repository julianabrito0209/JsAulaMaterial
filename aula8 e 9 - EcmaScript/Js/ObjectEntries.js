const cursos = {
    html : 41,
    css : 80,
    javascript : 23, 
    bootstrap : 50,

}

//keys retorna um array com apenas os nomes das propriedades
const cursoskey = Object.keys(cursos)
document.getElementById("objectKey").innerHTML = cursoskey;

//entries retorna um array com os nomes das propriedades e seus valores
const cursosEntries = Object.entries(cursos);
document.querySelector("#objectEntries").innerHTML = cursosEntries;

