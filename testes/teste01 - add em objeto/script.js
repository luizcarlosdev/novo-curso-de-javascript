const nome = document.querySelector("#f_nome")
const idade = document.querySelector("#f_idade")
const button = document.querySelector("input[type=button]")
const res = document.querySelector("div#res")

let objeto = {
    nome: " ",
    idade: " "
}

button.addEventListener("click",() => {
    objeto.nome = nome.value
    objeto.idade = Number(idade.value)
    res.innerHTML = `<li>Nome: ${objeto.nome}</li>`
    res.innerHTML += `<li>Idade: ${objeto.idade}</li>`
    console.log(objeto)
})

