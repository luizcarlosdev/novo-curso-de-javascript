let cores = ["Azul","Verde","Vermelho",["claro","escuro","medio"]]
let cursos = ["HTML","CSS","Javascript",cores];

let caixa = document.querySelector("#caixa");

cursos[0] = "PHP";

console.log(cursos[3][3][2]);

// cursos.push("C++");
// cursos.unshift("Python");
// cursos.shift()

cursos.map((el) => {
    let p = document.createElement("p");
    p.innerHTML = el;
    caixa.appendChild(p)
})

console.log(cursos)