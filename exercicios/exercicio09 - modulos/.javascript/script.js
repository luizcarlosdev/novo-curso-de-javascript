import c from "./contatos.js"

const listaContatos = document.querySelector("#listaContatos")
const buttonGravar = document.querySelector("#btn_gravar")
const nomeUser = document.querySelector("#f_nome")
const telUser = document.querySelector("#f_telefone")
const emailUser = document.querySelector("#f_email")

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        buttonGravar.click()
    }
})

buttonGravar.addEventListener("click", () => {
    const user = {
        nome: nomeUser.value,
        telefone: telUser.value,
        email: emailUser.value
    }
    c.addContato(user, listaContatos)
    
    console.log(nomeUser.value)
    c.getTodosContatos()
})
