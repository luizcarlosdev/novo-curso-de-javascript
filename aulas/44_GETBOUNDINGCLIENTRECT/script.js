const q1 = document.querySelector("#q1")
const q2 = document.querySelector("#q2")
const posx = document.querySelector("#posx")
const posy = document.querySelector("#posy")
const largura = document.querySelector("#largura")
const altura = document.querySelector("#altura")

q1.accessKey = "b"
q2.accessKey = "n"

console.log(q1.accessKey)

function info(element) {
    let domRect = element.getBoundingClientRect()
    posx.innerHTML = `posx: ${domRect.x}px`
    posy.innerHTML = `posy: ${parseInt(domRect.y)}px`
    largura.innerHTML = `largura: ${parseInt(domRect.width)}px`
    altura.innerHTML = `altura: ${parseInt(domRect.height)}px`
}

q1.addEventListener("click", event => {
    info(event.target)
})

q2.addEventListener("click", event => {
    info(event.target)
})