

class Loja{
    constructor(nome,localidade,marca,dono){
        this.nome = nome;
        this.localidade = localidade;
        this.marca = marca;
        this.dono = dono;
        this.produtos = [];
        this.cadastrarProdutos = function(nome,valor,tamanho, marca){
            this.produtos.push(new Produto(nome,valor,tamanho, marca));
            return `O produto ${nome} foi adicionado com sucesso.`

        };
        this.listarProdutos = function(){
            console.log(this.produtos);
            return `Aqui está a lista de produtos`
        }

        this.removerProdutos = function(indice){
            this.produtos.splice(indice, 1);
            return `O produto de índice ${indice} foi retirado com sucesso.`
        
        }
    }
}
class Produto{
    constructor(nome,valor,tamanho, marca){
        this.nome = nome;
        this.valor = valor;
        this.tamanho = tamanho;
        this.marca = marca;
    }
}



//comandos

const americanas = new Loja("Lojas Americanas", "W3Sul", "Americanas express", "Victor")

//var kitkat = new Produto("chocolate", 1,5, "grande", "nestle")