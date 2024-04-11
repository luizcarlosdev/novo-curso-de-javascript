class Jogador {
    constructor(nome) {
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [
    new Jogador("j1"),
    new Jogador("j2"),
    new Jogador("j3"),
    new Jogador("j4"),
    new Jogador("j5"),
    new Jogador("j6")
]

let s1 = jogadores[2].id
jogadores = jogadores.filter((j) => {
    return j.nome != "j1"
})

console.log(jogadores)