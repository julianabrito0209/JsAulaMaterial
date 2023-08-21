// primeiro selecionar todos os elementos do html que precisarão ser manipulados no script. 
const nome = document.querySelector("#nome");
const descricao = document.querySelector("#descricao");
const data = document.querySelector("#data");
const diretor = document.querySelector("#diretor");
const categoria = document.querySelector("#categoria");
const cadastrarBtn = document.querySelector("#cadastrar");
const resultado = document.querySelector("#resultado");

// apos puxar todos os itens que serão trabalhados no script; pensar em qual sera a primeira atividade que se deve ter atenção: no caso, quando o primeiro filme for cadastrado, ao clicar no botao " cadastrar" o conteudo devera ser salvo, por isso, adicionar o comando abaixo: 

cadastrarBtn.addEventListener("click", cadastrar );

function cadastrar (){
    class Filme{
        constructor(nome, descricao, data, diretor, categoria){
            this.nome = nome;
            this.descricao = descricao;
            this.data = data;
            this.diretor = diretor;
            this.categoria = categoria;
        }
    }
    let nomeInput = nome.value;
    let descricaoInput = descricao.value;
    let dataInput = data.value;
    let diretorInput = diretor.value;
    let categoriaInput = categoria.value;

    var filme = new Filme (nomeInput, descricaoInput, dataInput, diretorInput, categoriaInput)

   
    
    resultado.style.display = "block";
    resultado.innerHTML = `Nome: ${filme.nome} <br> Descrição: ${filme.descricao} <br> Data: ${filme.data} <br> Diretor: ${filme.diretor} <br> Categoria: ${filme.categoria}`


}