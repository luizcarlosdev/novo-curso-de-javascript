const cursos = [...document.querySelectorAll(".curso01")]

cursos.map((ele) => {
    ele.addEventListener('onclick',(ev) => {
        this.ev = evt.target
        ele.style.display = "none"
    })
})