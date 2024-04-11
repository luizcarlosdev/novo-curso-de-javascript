import { contatos } from "./bancoDeContatos.js";

let contato = {
    getTodosContatos : function() {
        console.log(contatos)
    },

    getContato: function (ind) {
        return contatos[ind]
    },

    addContato: function (novoContato, destinoDom) {
        contatos.forEach(el => {
            
        })
        const div = document.createElement("div")
        div.setAttribute("class", "contato")
        const p_nome = document.createElement("p")
        p_nome.innerHTML = novoContato.nome
        const p_telefone = document.createElement("p")
        p_telefone.innerHTML = novoContato.telefone
        const p_email = document.createElement("p")
        p_email.innerHTML = novoContato.email
        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)
        destinoDom.appendChild(div)
        console.log(novoContato.nome)
        contatos.push("Nome: "+p_nome.innerHTML)
        contatos.push("Telefone: " +p_telefone.innerHTML)
        contatos.push("Email: " +p_email.innerHTML)
    }
}

export default contato