const data = new Date();
const horaDiv = document.querySelector("#hora")
const relogio = document.querySelector("#relogio")

console.log(relogio)

// console.log(Date.now())
const dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate()
const mes = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth()
const ano = data.getFullYear()

const dataString = dia+"/"+mes+"/"+ano

const span = document.createElement("span")
span.textContent = dataString
horaDiv.appendChild(span)

const clock = () => {
    const data = new Date()
    const hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours()
    const minutos = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()
    const segundos = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()
    const horaCompleta = hora+":"+minutos+":"+segundos
    const spanHora = document.createElement("span")
    relogio.innerHTML = horaCompleta
}

const intervalo = setInterval(clock,1000)
