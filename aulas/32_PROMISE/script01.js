const numero = document.querySelector("#numero");
const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    numero.innerHTML = "Processando..."
    promessa().then((retorno) => {
        numero.innerHTML = retorno;
        numero.classList.remove("erro");
        numero.classList.add("ok");
    }).catch((erro) => {
        numero.innerHTML = erro;
        numero.classList.add("erro");
        numero.classList.remove("ok");
    });
})


const promessa = function () {
    let p = new Promise((resolve, reject) => {
        let resultado = true;
        let tempo = 3000;
        setTimeout(() => {
            if (resultado) {
                resolve("Deu certo");
            } else {
                reject("Deu errado :(");
            }
        }, tempo);
    });
    return p
}


numero.innerHTML = "Esperando...";
