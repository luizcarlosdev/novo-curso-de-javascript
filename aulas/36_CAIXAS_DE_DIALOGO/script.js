const btn_alert = document.querySelector("#btn_alert")
const btn_confirm = document.querySelector("#btn_confirm")
const btn_prompt = document.querySelector("#btn_prompt")

btn_alert.addEventListener("click", () => {
    alert("Olá, como você está?")
})

btn_confirm.addEventListener("click", (e) => {
    const retorno = confirm("Está gostando do curso?")
    console.log(retorno)
    if (retorno) {
        console.log(e.target)
    }
})

btn_prompt.addEventListener("click", () => {
    const p = prompt("Escreva algo para mim:")
    if (p == null) {
        console.log("Você é o homem invisível de H.G Wells?")
        console.log("Botão CANCELAR pressionado")
    } else {
        console.log(p)
    }
})