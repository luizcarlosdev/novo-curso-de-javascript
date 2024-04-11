class Carro {
    constructor(pnome,ptipo){
        this.nome = pnome
        if(ptipo == 1){
            this.tipo = "Espotivo"
            this.valmax = 300
        } else if(ptipo == 2) {
            this.tipo = "Utilitário"
            this.valmax = 100
        } else if(ptipo == 3) {
            this.tipo = "Passeio"
            this.valmax = 160
        } else{
            this.tipo = "Militar"
            this.valmax = 180
        }
    }

    getNome() {
        return this.nome
    }
    
    getTipo() {
        return this.tipo
    }

    getVel() {
        return this.valmax
    }

    getInfo() {
        return [this.nome,this.tipo,this.valmax]
    }

    setNome(nome) {
        this.nome = nome
    }

    setTipo(tipo) {
        this.tipo = tipo
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade máxima: ${this.valmax}`)
        console.log(`Tipo de carro: ${this.tipo}`)
    }
}

let c1 = new Carro("Rapidão",1)
let c2 = new Carro("Super Luxo",2)
let c3 = new Carro("Bombadão",10)
let c4 = new Carro("Carrego Tudo",2)

c1.setNome("Super Veloz")

c1.setTipo("Escondidinho de fubá")

c1.info()

// console.log(c1.getNome())
// console.log(c1.getInfo())
// console.log(c1.getInfo()[0])

// c1.info()
// c2.info()

// console.log(c1.nome)
// console.log(c1.valmax)
// console.log(c1.tipo)
// console.log(c1.nome)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)