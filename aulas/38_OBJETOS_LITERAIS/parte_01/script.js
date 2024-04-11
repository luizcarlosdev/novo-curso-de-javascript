const objetos = document.querySelector("#objetos")

let computador = {
    cpu: "i9",
    ram: "64 gb",
    hd: "2Tb",
    info: function() {
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

computador["monitor"] = "22pol"
computador.placavideo = "rtx"

console.log(computador)

console.log(computador.info())

const computadores = [
    {
        cpu: "i9",
        ram: "64 gb",
        hd: "2Tb"
    } ,

    {
        cpu: "i5",
        ram: "32 gb",
        hd: "2Tb"
    } , 
    {
        cpu: "i7",
        ram: "16 gb",
        hd: "1Tb"
    }

]

// console.log(computador)
// objetos.innerHTML = computadores[0].cpu

computadores.forEach((c) => {
    const div = document.createElement("div")
    div.setAttribute("class","computador")
    div.innerHTML += c.cpu+"<br/>"
    div.innerHTML += c.ram+"<br/>"
    div.innerHTML += c.hd+"<br/>"
    objetos.appendChild(div)
})

