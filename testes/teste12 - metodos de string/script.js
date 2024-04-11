const texto = document.getElementById("insira-texto")
const buttonAdd = document.getElementById("btn-add")
const visualizadorQuantidade = document.getElementById("visualizador")
const ph = document.getElementById("ph")
const res = document.getElementById("res")

let colecao = []

let auxiliar = []

let i = 0

buttonAdd.addEventListener("click", () => {
    i = 0
    colecao = []
    res.style.display = "block"
    res.innerHTML = " "
    const quebra = new String(texto.value)
    const textoQuebrado = quebra.split("")
    textoQuebrado.map((element) => {
        colecao.push(element)
    })
    colecao.forEach(element => {
        const ul = document.createElement("ul")
        const li = document.createElement("li")
        li.innerHTML = element == " " ? " " : "Caractere: " + element
        ul.setAttribute("style", "list-style-type:none;")
        li.setAttribute("style", "margin: 5px 0px;")
        ul.appendChild(li)
        res.appendChild(ul)
        if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u") {
            li.style.color = "violet"
        }
    })
    verificarExistencia()
})

function verificarExistencia() {
    if (colecao.indexOf("a") != -1) {
        colecao.filter(evt => {
            if (evt == "a" || evt == "A") {
                console.log(evt)
                i++
            }
        })
    }

    if (colecao.indexOf("e") != -1) {
        colecao.filter(evt => {
            if (evt == "e" || evt == "E") {
                console.log(evt)
                i++
            }
        })
    }

    if (colecao.indexOf("i") != -1) {
        colecao.filter(evt => {
            if (evt == "i" || evt == "I") {
                console.log(evt)
                i++
            }
        })
    }

    if (colecao.indexOf("o") != -1) {
        colecao.filter(evt => {
            if (evt == "o" || evt == "O") {
                console.log(evt)
                i++
            }
        })
    }

    if (colecao.indexOf("u") != -1) {
        colecao.filter(evt => {
            if (evt == "u" || evt == "U") {
                console.log(evt)
                i++
            }
        })
    }
    // const paragrafoVogaisQuantidade = document.createElement("paragrafoVogaisQuantidade")
    // paragrafoVogaisQuantidade.setAttribute("id", "vogais")
    ph.innerHTML = "Há, ao todo, "+i+" vogais acima :)"
    // visualizadorQuantidade.appendChild(paragrafoVogaisQuantidade)
    console.log(i)
}