class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }

    getInfo = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta) ? "Sim" : "Não"}`)
    }
    static setAlerta = function() {
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(40)


Npc.setAlerta()

npc1.getInfo()
console.log("-------------------------------------------")
npc2.getInfo()
console.log("-------------------------------------------")
npc3.getInfo()