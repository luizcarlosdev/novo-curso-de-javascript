let number1 = document.querySelector("#num1")
let number2 = document.querySelector("#num2")
let resultado = document.querySelector("#resultado")

let btnSoma = document.querySelector("#btn-soma")
let btnSub = document.querySelector("#btn-sub")
let btnMult = document.querySelector("#btn-mult")
let btnDiv = document.querySelector("#btn-div")

let funcoes = [
    () => {
        resultado.innerHTML = Number(number1.value) + Number(number2.value);
    },

    () => {
        resultado.innerHTML = Number(number1.value) - Number(number2.value);
    },

    () => {
        resultado.innerHTML = Number(number1.value) * Number(number2.value);
    },

    () => {
        resultado.innerHTML = Number(number1.value) / Number(number2.value);
    }
]

btnSoma.addEventListener("click",funcoes[0])
btnSub.addEventListener("click",funcoes[1])
btnMult.addEventListener("click",funcoes[2])
btnDiv.addEventListener("click",funcoes[3])