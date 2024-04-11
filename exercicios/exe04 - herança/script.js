const nome = document.querySelector("#f_nome")
const portas = document.querySelector("#f_portas")
const municao = document.querySelector("#f_municao")
const blindagem = document.querySelector("#f_blindagem")
const button = document.querySelector("#btn")
const militar = document.querySelector("#f_militar")
const normal = document.querySelector("#f_normal")
const res = document.querySelector("#res")

res.style.display = "none"

let a_items = []


document.addEventListener("keypress",e => {
    if(e.key == "Enter") {
        button.click()
    }
})

militar.addEventListener("click", (e) => {
    municao.value = 0
    blindagem.value = 0
    blindagem.removeAttribute("disabled")
    municao.removeAttribute("disabled")
})

normal.addEventListener("click", () => {
    municao.value = 0
    blindagem.value = 0
    blindagem.setAttribute("disabled", "disabled")
    municao.setAttribute("disabled", "disabled")
})

const addItems = () => {
    res.style.display = "block"
    res.innerHTML = ""
    a_items.forEach(c => {
        const $div = document.createElement("div")
        const $btn = document.createElement("button")
        $btn.addEventListener("click",() => {
            $btn.parentNode.remove()
        })
        $btn.setAttribute("class","btnRemove")
        $btn.innerHTML = "Remover"
        $div.setAttribute("class", "campo")
        $div.innerHTML = `Nome: ${c.nome}<br/>`
        $div.innerHTML += `Portas: ${c.portas}<br/>`
        if (c.municao != undefined || c.blindagem != undefined) {
            $div.innerHTML += `Munição: ${c.municao}<br/>`
            $div.innerHTML += `Blindagem: ${c.blindagem}<br/>`
        }
        res.appendChild($div)
        $div.appendChild($btn)
    })
}

button.addEventListener("click", () => {
    if (normal.checked) {
        const c = new Item(nome.value, portas.value)
        a_items.push(c)
    } else if (militar.checked) {
        const c = new Objeto(nome.value, portas.value, municao.value, blindagem.value)
        a_items.push(c)
    }

    addItems()
})

class Item {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
    }
}



class Objeto extends Item {
    constructor(nome, portas, municao, blindagem) {
        super(nome, portas);
        this.municao = municao
        this.blindagem = blindagem

    }
}
