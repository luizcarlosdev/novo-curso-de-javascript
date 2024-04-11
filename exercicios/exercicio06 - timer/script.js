const data = new Date();
const div_relogio = document.querySelector("#div_relogio")
const div_data = document.querySelector("#div_data")
const btn_ativar = document.querySelector("#btn_ativar")
const btn_parar = document.querySelector("btn_parar")
const tmp_alarme = document.querySelector("#hora_alarme")
const timer = document.querySelector("#timer")

let somAlarme = new Audio("Tchaikovsky-Valse-Sentimentale.mp3")
somAlarme.loop = -1
let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual+(tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = "Hora do alarme: "+dt_alarme.getHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds()
})


const clock = () => {
    const data = new Date()
    const hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours()
    const minutos = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()
    const segundos = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()
    const horaCompleta = hora+":"+minutos+":"+segundos
    div_relogio.innerHTML = horaCompleta
}

const intervalo = setInterval(clock,1000)
