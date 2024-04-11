function Pessoa(pnome, pidade) {
    this.nome = pnome,
    this.idade = pidade,

    this.getNome = function () {
        return this.nome
    },

    this.getIdade = function() {
        return this.tipo
    },

    this.setNome = function (nome) {
        this.nome = nome
    },

    this.setIdade = function (idade) {
        this.idade = idade.value
    },

    this.info = function () {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("................")
    }
}

let pessoas = []

const btnAdd = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const addPessoa = () => {
    res.innerHTML = " ";
    pessoas.map((p) => {
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome: ${p.getNome()}<br/> Idade: ${p.getIdade()}`
        res.appendChild(div);
    });
}

btnAdd.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade");
    const p = new Pessoa(nome.value, Number(idade.value));
    pessoas.push(p);
    nome.value = " ";
    idade.value = " ";
    nome.focus();
    addPessoa()
    console.log(pessoas)
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        btnAdd.click()
    }
})
