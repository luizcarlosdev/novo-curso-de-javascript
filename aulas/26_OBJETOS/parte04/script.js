class Carro{ // classe Pai
    constructor(nome,portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }

    ligar = function() {
        this.ligado = true;
    }

    desligar = function() {
        this.ligado = false;
    }

    setCor = function(cor) {
        this.cor = cor;
    }

    setVel = function(vel) {
        this.vel = vel;
    }
}

class Militar extends Carro { // classe Filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas);
        this.blindagem = blindagem;
        this.municao = municao;
    }

    atirar = function() {
        if(this.municao > 0) {
            this.municao--;
        }
    }

}

const c1 = new Carro("Normal",4);

const c2 = new Militar("Tanque",1,100,50)

c1.ligar();
c1.setCor("Preto");

c2.ligar();
c2.setCor("Verde Militar");
c2.setVel("45Km/h")
c2.atirar();
c2.atirar();
c2.atirar();

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`); 
console.log(`Ligado: ${(c1.ligado)?"Sim":"Não"}`); 
console.log(`Velocidade: ${c1.vel}`); 
console.log(`Cor: ${c1.cor}`);
console.log("_____________________________________________");

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`); 
console.log(`Ligado: ${(c2.ligado)?"Sim":"Não"}`);
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Municao: ${c2.municao}`)
console.log(`Velocidade: ${c2.vel}`); 
console.log(`Cor: ${c2.cor}`);
console.log("_____________________________________________");