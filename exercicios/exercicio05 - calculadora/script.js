const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const teclaCopy = document.querySelector("#tcopy")
const limpar = document.querySelector("#limparTecla")
const teclaIgual = document.querySelector("#tigual")
const teste = document.getElementById("teste")
const btnTeste = document.getElementById("btn-teste")
const aba = document.getElementById("calc-aba")
const calc = document.querySelector(".calc")
const hiddenButton = document.querySelector("#icon")

aba.addEventListener("click", () => {
    aba.classList.toggle("exibir")
    if(aba.classList.contains("exibir")){
        hiddenButton.className = "fa-solid fa-minus"
        calc.classList.add("calc-exibir")
    } else {
        hiddenButton.className = "fa-solid fa-plus"
        calc.classList.remove("calc-exibir")
    }
})

let sinal = false
let decimal = false

teclasNum.forEach((el) => {
    el.addEventListener("click", (event) => {
        sinal = false
        if (event.target.innerHTML == ",") {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == "0") {
                    display.innerHTML = "0,"
                }
            }
        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = " "
            }
            display.innerHTML += event.target.innerHTML
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (event) => {
        if (!sinal) {
            sinal = true
            if (display.innerHTML == "0") {
                display.innerHTML = " "
            }
            if (event.target.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
    
                display.innerHTML += event.target.innerHTML
            }
        }

    })
})

teclaIgual.addEventListener("click", event => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

limpar.addEventListener("click",() => {
    display.innerHTML = "0"
})

teclaCopy.addEventListener("click",event => {
    navigator.clipboard.writeText(display.innerHTML)
})

// btnTeste.addEventListener("click",() => {
//     teste.select()
//     teste.setSelectionRange(0,9999) // mobile
//     navigator.clipboard.writeText(teste.value)
// })