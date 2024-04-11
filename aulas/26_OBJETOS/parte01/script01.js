class Pessoa {
    constructor(pnome){
        this.nome = pnome
        this.sobrenome = "Lima da Silva"
    }
}

let p1 = new Pessoa("Luiz")
let p2 = new Pessoa("Maria")
let p3 = new Pessoa("Leoni")
let p4 = new Pessoa()

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
console.log(p4.sobrenome)