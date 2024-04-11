const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn-esquerda")
const btn_direita = document.querySelector("#btn-direita")
const btn_parar = document.querySelector("#btn-parar")

const init = () => {
    carro.style = "position: relative; left: 0px;width:100px"
    window.innerWidth - parseInt(carro.style.width)
}

let anima = null

let tamax = null

const mover = (direcao) => {
    if (direcao > 0) {
        if (parseInt(carro.style.left) <= tamax) {
            carro.style.left = parseInt(carro.style.left) + (10 * direcao) + "px"
        }
    } else if (direcao < 0) {
        if (parseInt(carro.style.left) >= tamax) {
            carro.style.left = parseInt(carro.style.left) + (10 * direcao) + "px"
        }
    }
}

btn_parar.addEventListener("click", event => {
    clearInterval(anima)
})

btn_esquerda.addEventListener("click", event => {
    clearInterval(anima)
    anima = setInterval(mover, 30, -1)
})

btn_direita.addEventListener("click", event => {
    clearInterval(anima)
    anima = setInterval(mover, 30, 1)
})

window.addEventListener("load", init())
window.addEventListener("resize", () => {
    tamax = window.innerWidth - parseInt(carro.style.width)
})

document.addEventListener("keypress", event => {
    if (event.key === "a") {
        btn_esquerda.click()
    }

    if (event.key === "d") {
        btn_direita.click()
    }
})