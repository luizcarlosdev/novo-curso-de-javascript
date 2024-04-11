const olhos = [...document.querySelectorAll(".olho")]

let posx_mouse = 0;
let posy_mouse = 0;

window.addEventListener("mousemove",event => {
    posx_mouse = event.clientX
    posy_mouse = event.clientY

    const rotacao = Math.atan2(posy_mouse,posx_mouse) * 180/Math.PI

    olhos.forEach(element => {
        element.style.transform = "rotate("+rotacao+"deg)"
    })
})

olhos[0]