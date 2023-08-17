class Celular {
    modelo;
    tela;
    camera;
    processador;
    memoria;
    software;
    dono;
    adicionais;
    valor;

}

class Dono{
    constructor(nome, email, idade, backup, numero){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.backup = backup;
        this.numero = numero; 

    }
}
var dono1 = new Dono("Juliana", "juliana0209@gmail.com", 37, false, "61999873510")
var dono2 = new Dono("Jorge", "jorge209@gmail.com", 30, true, "61996098233")

var xiaomi = new Celular();
xiaomi.modelo = "Poco 5";
xiaomi.tela = "OLED";
xiaomi.camera = "112MP";
xiaomi.processador = "SnapDragon855";
xiaomi.memoria = "8G ram";
xiaomi.software = "Android"
xiaomi.dono = [dono1, dono2];
xiaomi.adicionais = ["fone", "cartaoSD", "capinha"];
xiaomi.valor = 3000