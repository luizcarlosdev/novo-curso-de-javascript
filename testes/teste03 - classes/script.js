const nome = document.querySelector("#f_nome")
const portas = document.querySelector("#f_portas")
const municao = document.querySelector("#f_municao")
const blindagem = document.querySelector("#f_blindagem")
const radioNMilitar = document.querySelector("#f_militar")
const radioNormal = document.querySelector("#f_normal")
const btn = document.querySelector("#btn")
const res = document.querySelector("#res")


let a_carros = []

radioNMilitar.addEventListener("click",() => {
    municao.removeAttribute("disabled")
    blindagem.removeAttribute("disabled")
})

radioNormal.addEventListener("click",() => {
    municao.setAttribute("disabled","disabled")
    blindagem.setAttribute("disabled","disabled")
})

const GerenciarCarros = () => {
    
}

class Carro{
    constructor() {
        this.nome = nome.value
        this.portas = Number(portas.value)
        this.municao = Number(municao.value)
        this.blindagem = Number(blindagem.value)
    }
}


btn.addEventListener("click",() => {
    let c1 = new Carro()
    console.log(c1)
})