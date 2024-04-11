const parray = document.querySelector("#array");
const txtPesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementosArray = [21, 25, 19, 20, 18, 18, 22];
parray.innerHTML = `[${elementosArray}]`;

btnPesquisar.addEventListener("click", event => {
    const retorno = elementosArray.every((e, i, a) => {
        if(e < 18){
            resultado.innerHTML = `Array não conforme na posição do ${i}`
        }
        return e >= 18;
    })
    if(retorno == true) {
        resultado.innerHTML = "verdadeiro"
    }
    // console.log(retorno)
});