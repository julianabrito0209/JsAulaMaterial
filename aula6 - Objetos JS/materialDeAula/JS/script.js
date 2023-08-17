var client1nome = "Roberto";
var cliente1DN = "11/02/1998";
var cliente1cpf = 99999900011 ;
var cliente1ag = 1235;
var cliente1ag = 6001;

class cliente {
    nome;
    DN;
    cpf;
    cc;
    ag;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor;
            return valor;
        }else{
            return;
        }
    };
    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            return "valor depositado!"

        } else{
            return"Depósito não autorizado! "
        }


    };
}
// um objeto não tem só atributos, ele pode ter funções.

// criando objetos (função "new")

var cliente1 = new cliente();
cliente1.nome = "Juliana";
cliente1.DN = "11/02/1998";
cliente1.cpf = 99999900011;
cliente1.ag = 1235;
cliente1.cc = 6001;
cliente1.saldo = 0;

console.log(cliente1);

var cliente2 = new cliente();
cliente2.nome = "Marcos";
cliente2.DN = "10/12/1986";
cliente2.cpf = 98888880022;
cliente2.ag = 1235;
cliente2.cc = 5210;
cliente2.saldo = 0;

console.log(cliente2);

// controlando objeto
cliente1.saldo = 3000;
//saque efetuado
cliente1.sacar(20);
console.log(cliente1.saldo);

//saque não efetuado
cliente1.sacar(100000);
console.log(cliente1.saldo);

//deposito efetuado
cliente1.depositar(2000);
console.log(cliente1.saldo);

//deposito não efetuado
cliente1.depositar(-100);
console.log(cliente1.saldo);
