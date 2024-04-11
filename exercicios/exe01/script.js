const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"];
const btnCursosSelecionados = document.querySelector("#btnCursoSelecionado");
const btnRemoveCurso = document.querySelector("#btnRemoverCurso");

let indice = 0;

const criarNovoCurso = (curso) => {
    let novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso;

    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");

    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);

    return novoElemento
}
cursos.map((el, chave) => {
    const criarNovoElemento = criarNovoCurso(el);
    caixaCursos.appendChild(novoElemento);
    indice++;
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];
    const radioSelecionado = todosRadios.filter((ele, ind, arr) => {
        return ele.checked
    })
    return radioSelecionado[0];
}

btnCursosSelecionados.addEventListener("click", (evt) => {
    const rs = radioSelecionado();
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent;
        console.log(cursoSelecionado);
    } else {
        alert("Selecione um curso.")
    }
})

btnRemoveCurso.addEventListener("click", evt => {
    const rs = radioSelecionado();
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode;
        console.log(cursoSelecionado);
        cursoSelecionado.remove();
    } else {
        alert("Selecione um curso.")
    }
})