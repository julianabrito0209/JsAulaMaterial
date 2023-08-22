const nome = "Victor"
const sobrenome = "Santos"
const nCartao = "4897"

//padStart(maxcaracteres, o texto a ser concatenado)

var nomeCompletoStart = sobrenome.padStart(12, nome)
document.getElementById("concatenacaoStart").innerHTML = nomeCompletoStart;

var nomeCompletoEnd = sobrenome.padEnd(12, nome)
document.getElementById("concatenacaoEnd").innerHTML = nomeCompletoEnd;

var cartaoEscondido = nCartao.padStart(12, "*");
document.getElementById("concatenacaoExemplo").innerHTML = cartaoEscondido;
