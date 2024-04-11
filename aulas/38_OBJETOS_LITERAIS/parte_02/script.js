const objetos = document.querySelector("#objetos")

let computador = {
    cpu: "",
    ram: "",
    hd: "",
    info: function() {
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

computador["monitor"] = "22pol"
computador.placavideo = "rtx"

const c1  = Object.assign({}, computador)

// c1.info()

const o1 = {obj1:'1'}
const o2 = {obj2:'1'}
const o3 = {obj3:'1'}
const o4 = Object.assign(o1,o2,o3)

delete(computador.cpu)
// console.log(computador)
// console.log(o4)

const c2 = Object.create(computador)
c2.ram = "32gb"
c2.info()

// console.log(computador)

// console.log(computador.info())

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

