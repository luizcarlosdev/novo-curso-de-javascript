const bloco = document.createElement("div")
const inputNumber = document.createElement("input")
const inputButton = document.createElement("input")
inputNumber.setAttribute("type", "number")
inputButton.setAttribute("type", "button")
inputButton.value = "Gerar elemento"
bloco.setAttribute("style", `display: flex; align-items: center`)
bloco.appendChild(inputNumber)
bloco.appendChild(inputButton)
document.body.appendChild(bloco)

const valor = inputNumber.value


const criarElemento = () => {
    const elementoCriado = document.createElement("div")
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    elementoCriado.setAttribute("style", `border: 5px solid black; height:170px; width:170px;background-color:rgb(${r},${g},${b})`)
    console.log(elementoCriado)
    document.body.appendChild(elementoCriado)
}

for(let i = 0; i <= 10; i++) {
    criarElemento()
  }
