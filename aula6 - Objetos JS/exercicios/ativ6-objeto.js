class Carro{
    constructor(marca,modelo, ano, cor, velocidadeMaxima, velocidadeAtual){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = velocidadeAtual;
        this.acelerar = function(numero){
            if(numero > 0 & numero < 150){
                this.velocidadeAtual = numero;
                return `Velocidade atual ${this.velocidadeAtual}.`
            }
            else{
                return "Velocidade não permitida!"
            }
        }
        
}}

    
var Dolphin = new Carro("Byd", "dolphin", 2023, "grey", 150, 0 )

   