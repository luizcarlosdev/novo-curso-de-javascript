const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");

caixa1.addEventListener("click",(event) => {
    console.log("clicou")
    console.log(event)
})

btn_c1.addEventListener("click",(event) => {
    event.stopPropagation();
})

const cursos = [...document.querySelectorAll(".curso")];
cursos.map((elementos) => {
    elementos.addEventListener("click",event => {
        event.stopPropagation();
    })
})