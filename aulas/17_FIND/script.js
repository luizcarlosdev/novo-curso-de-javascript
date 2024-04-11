const parray = document.querySelector("#array");
const txtPesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementosArray = ["HTML","CSS","PHP","MySQL"];
parray.innerHTML = `[${elementosArray}]`;


btnPesquisar.addEventListener("click",(evt) => {
    const retorno = elementosArray.find((e,ind) => {
        if(e.toUpperCase() == txtPesquisar.value.toUpperCase()){
            return e;
        }
    })
    retorno != undefined ? resultado.innerHTML = "Valor encontrado: "+retorno : resultado.innerHTML = "Resultado não encontrado."
})