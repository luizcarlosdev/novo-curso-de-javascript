const url = document.querySelector("#url")
const btn_url = document.querySelector("#btn_url")

btn_url.addEventListener("click", event => {
    event.preventDefault()
})

btn_url.addEventListener("click", event => {
    // window.location = "http://www.google.com.br"
    // window.location.assign('http://www.google.com.br')
    //window.location.reload()
    //window.history.forward()
    // window.history.go(1)
    // console.log(window.history.length)
    window.location = url.value
})