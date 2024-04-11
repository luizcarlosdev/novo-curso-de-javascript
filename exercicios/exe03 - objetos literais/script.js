let button = document.querySelector("button");
let nome = document.querySelector("#nome");
let age = document.querySelector("#idade");
let res = document.querySelector(".res")

const Pessoa = {
    nome:" ",
    idade:" ",

    getNome: function() {
        return this.nome
    },

    getIdade: function() {
        return this.idade
    }
}

button.addEventListener("click",() => {
    Pessoa.nome = nome.value;
    Pessoa.idade = idade.value;
    res.innerHTML = `Nome: ${nome.value} <br/> Idade: ${idade.value}`;
    console.log(Pessoa)
})