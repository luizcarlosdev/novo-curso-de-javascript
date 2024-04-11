import { cadastrarUsuario } from "./contatos.js"

import { inicializador } from "./bancoContatos.js"

const formUser = document.querySelector("form")
const nomeUser = document.querySelector("#f_nome")
const emailUser = document.querySelector("#f_email")
const telefoneUser = document.querySelector("#f_telefone")
const buttonCadastrarUsuario = document.querySelector("#btn-cadastrar")
const res = document.querySelector("#res")
res.style.display = "none"

document.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        buttonCadastrarUsuario.click()
    }
})

formUser.addEventListener("submit", event => {
    event.preventDefault()
})

let usuario = {
    nome: nomeUser,
    email: emailUser,
    telefone: telefoneUser
}

buttonCadastrarUsuario.addEventListener("click", () => {
    res.style.display = "inline-block"
    cadastrarUsuario(usuario, res)
    console.log(usuario.nome.value)
})