const parray = document.querySelector("#array");
const txtPesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementosArray = [1,2,3,4,5];
parray.innerHTML = `[${elementosArray}]`;
let aux = []
let atual = []

btnPesquisar.addEventListener("click", event => {
   resultado.innerHTML =  elementosArray.reduce((ant,atu,ind) => {
    aux.push(ant);
    atual.push(atu);
        return atu + ant;
    })

    resultado.innerHTML += "</br>"+aux+"</br>";
    resultado.innerHTML += "</br>"+atual;
});