const f_texto = document.querySelector("#f_texto");
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener("click", event => {

});

let num = 10;
localStorage.setItem("nome", "Luiz Carlos Lima da Silva");
localStorage.setItem("idade", 19);
window.localStorage.setItem("numero", 33);
console.log(localStorage.getItem("numero"));
console.log(localStorage.key(0));