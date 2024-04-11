const mostrar = document.querySelector(".mostrar")
const nome = document.querySelector("#nome")
const n1 = document.querySelector("#first")
const n2 = document.querySelector("#sec")
const n3 = document.querySelector("#third")
const button = document.querySelector("#btn-add")

let objeto = [
    {

    }
]

button.addEventListener("click", () => {
    objeto[0].valor1 = n1.value
    objeto[0].valor2 = n2.value
    objeto[0].valor3 = n3.value

    objeto.forEach(el => {
        const $div = document.createElement("div")
        $div.setAttribute("class", "box")
        $div.innerHTML += "Valor 1: "+el.valor1+ "<br/>"
        $div.innerHTML += "Valor 2: "+el.valor2+ "<br/>"
        $div.innerHTML += "Valor 3: "+el.valor3+ "<br/>"
        mostrar.appendChild($div)
    })
    console.log(objeto)
    n1.value = " "
    n2.value = " "
    n3.value = " "
})