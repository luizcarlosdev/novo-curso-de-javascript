const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");
const ele = [...document.querySelectorAll(".curso")]
const btn_lixeira = document.createElement("img");
btn_lixeira.setAttribute("src","./54324.png");
btn_lixeira.className = "lixeira";


ele.map((elementos) => {
    elementos.addEventListener("click",event => {
        console.log(event.target)
        caixa1.removeChild(event.target)
    })
})