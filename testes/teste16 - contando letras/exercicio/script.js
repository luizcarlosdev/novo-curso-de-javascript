const texto = document.querySelector("#texto")
const btnQuebrar = document.querySelector("#btn-contar")
const select = document.querySelector("#select")
const section = document.querySelector("section")
const p_letra = document.querySelector("#vogal")
const p_vogal = document.querySelector("#letra")
const res = document.querySelector("#res")
const res_ul = document.querySelector("#res ul")
const priLetra = document.querySelector("#priLetra")

let letras = []

let primeiraLetra = []

let quantidadeLetras = 0

let quantidadeVogais = 0

p_letra.style.display = "none"
p_vogal.style.display = "none"
priLetra.style.display = "none"


btnQuebrar.addEventListener("click", () => {
    // res.style.display = "block"
    p_letra.style.display = "block"
    p_vogal.style.display = "block"
    priLetra.style.display = "block"
    letras = []
    primeiraLetra = []
    quantidadeLetras = 0
    quantidadeVogais = 0
    const valorTextual = texto.value
    const valorString = valorTextual.toString()
    letras.push(valorString.split(""))
    primeiraLetra.push(valorString.split(""))
    const pri_letra = primeiraLetra[0][0]
    letras.forEach(element => {
        element.map(e => {
            if (e == "a" || e == "A") {
                quantidadeVogais++
            }

            if (e == "e" || e == "E") {
                quantidadeVogais++
            }

            if (e == "i" || e == "I") {
                quantidadeVogais++
            }

            if (e == "o" || e == "O") {
                quantidadeVogais++
            }

            if (e == "u" || e == "U") {
                quantidadeVogais++
            }

            if (e == " ") {
            } else {
                quantidadeLetras++
            }
        })

        p_letra.innerHTML = "Há, ao todo, " + quantidadeLetras + " letras acima"
        p_vogal.innerHTML = "Há, ao todo, " + quantidadeVogais + " vogais acima"
        priLetra.innerHTML = "A primeira letra é: "+pri_letra

    })
})
