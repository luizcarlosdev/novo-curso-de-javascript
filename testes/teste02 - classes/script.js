const nomeForm = document.querySelector("#f_nome")
const idadeForm = document.querySelector("#f_idade")
const salarioForm = document.querySelector("#f_salario")


const nome = nomeForm.value
const idade = Number(idadeForm.value)
const salario = Number(salarioForm.value)
const button = document.querySelector("input[type=button]")
const res = document.querySelector("#imposto")

class Pessoa {
    constructor(nome, idade, salario, imposto) {
        this.nome = nomeForm.value
        this.idade = Number(idadeForm.value)
        this.salario = Number(salarioForm.value)
        this.imposto = salario / (5 / 100)
    }

    getNome = function () {
        return this.nome
    }

    getIdade = function(){
        return this.idade
    }

}

function criarUsuario() {
    if (nomeForm.value == 0) {
        alert("Dados não fornecido")
        res.style.display = "none"
    } else {
        let user_01 = new Pessoa(nome, idade, salario, salario)
        res.style.display = "block"
        res.innerHTML = `${user_01.getNome()}<br/>`
        res.innerHTML += `${user_01.getIdade()}`
        console.log(user_01.getNome())
    }
}

button.addEventListener("click", criarUsuario)
