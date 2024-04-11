class CarroPadrao {
    constructor() {
        if(this.contructor === CarroPadrao) {
            throw new TypeError("Esta classe não pode ser instânciada")
        }
        if(this.ligar === undefined) {
            throw new TypeError("É obrigatório implementar o método ligar")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao {
    constructor(tipo, estagioTurbo) {
        super()
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 120 + this.turbo
            this.nome = "Normal"
        } else if (tipo == 2) {
            this.velMax = 160 + this.turbo
            this.nome = "Esportivo"
        } else if (tipo == 3) {
            this.velMax = 200 + this.turbo
            this.nome = "Super Esportivo"
        }

        this.velMax += this.turbo.potencia
    }

    info() {
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.ligado)
        console.log(this.portas)
        console.log(this.portas)
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.potencia = 0
        }
        else if (e == 1) {
            this.potencia = 50
        } else if (e == 2) {
            this.potencia = 75
        } else if (e == 3) {
            this.potencia = 100
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4, estagioTurbo)
        this.tipoInfo = 3
        this.velMax = 300 + this.turbo.potencia
        this.nome = "Carro especial"
    }
    info() {
        if (this.tipoInfo == 1) {
            super.info()
        } else {
            console.log(`Nome: ${this.nome}`)
            console.log(`Velocidade: ${this.velMax}`)
            console.log(`Potência: ${this.turbo}`)
            console.log("--------------------------")
        }
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)
const c4 = new CarroPadrao()

c1.info()
console.log("--------------------------")
c2.info()
console.log("--------------------------")
c3.info()