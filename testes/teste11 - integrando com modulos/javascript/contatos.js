import { contatos, inicializador } from "./bancoContatos.js"

function cadastrarUsuario(novoUsuario, campo) {
    const divUsuario = document.createElement("div")
    const nome_usuario = document.createElement("p")
    const email_usuario = document.createElement("p")
    const telefone_usuario = document.createElement("p")
    divUsuario.setAttribute("class", "usuario")
    const nomeUsuario = novoUsuario.nome.value
    const emailUsuario = novoUsuario.email.value
    const telefoneUsuario = novoUsuario.telefone.value
    nome_usuario.textContent = nomeUsuario
    email_usuario.textContent = emailUsuario
    telefone_usuario.textContent = telefoneUsuario
    campo.appendChild(divUsuario)
    divUsuario.appendChild(nome_usuario)
    divUsuario.appendChild(email_usuario)
    divUsuario.appendChild(telefone_usuario)
    console.log(inicializador)
    contatos.push(`Nome: ${nomeUsuario}`)
    contatos.push(`Email: ${emailUsuario}`)
    contatos.push(`Telefone: ${telefoneUsuario}`)
    console.log(contatos)
}

export {cadastrarUsuario}