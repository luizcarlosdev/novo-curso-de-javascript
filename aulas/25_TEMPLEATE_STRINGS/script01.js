const caixa = document.querySelector("#caixa")

const carros = ["Polo","Golf","T-cross","HRV"]

const ul = document.createElement("ul")
let li = document.createElement("li")

carros.map((el) => {
    li.innerHTML += `<p>${el}</p>`
})

ul.appendChild(li)

let curso = "Javascript"
const canal = "CFB cursos"
const frase = `Este é o curso de ${curso} do canal ${canal}.`

caixa.appendChild(ul)