const nave = function(energia){
    // this sempre e somente sempre é utilizado em métodos;
    this.energia = energia
    this.displaros = 100
}

const n1 = new nave(100)

nave.prototype.vidas = 5

nave.prototype.disparar = function() {
    if(this.displaros > 0){
        this.displaros--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.displaros)