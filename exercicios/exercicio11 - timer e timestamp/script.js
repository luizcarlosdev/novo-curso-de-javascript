const timer = document.querySelector("#timer");
const btnTimerStart = document.querySelector("#btn_iniciar");
const btnTimerPause = document.querySelector("#btn_parar");
const btnTimerErase = document.querySelector("#btn_zerar");
const btnTimerParcial = document.querySelector("#btn_parcial");
const parciaisRegistradas = document.querySelector("#parciaisRegistradas");

let intervalo = null;
let tmpini = null;

const contador = () => {
  const tmpAtual = Date.now();
  let seg = Math.floor((tmpAtual - tmpini) / 1000);
  timer.innerHTML = converter(seg);
};

const converter = (seg) => {
  const hora = Math.floor(seg / 3600);
  let resto = seg % 3600;
  const minuto = Math.floor(resto / 60);
  const segundo = Math.floor(resto % 60);
  const tempoFormatado =
    (hora < 10 ? "0" + hora : hora) +
    ":" +
    (minuto < 10 ? "0" + minuto : minuto) +
    ":" +
    (segundo < 10 ? "0" + segundo : segundo);
  return tempoFormatado;
};

// setInterval(contador, 1000);

btnTimerStart.addEventListener("click", () => {
  tmpini = Date.now();
  intervalo = setInterval(contador, 1000);
});

btnTimerParcial.addEventListener("click", () => {
    let parcial = timer.innerHTML;
    parciaisRegistradas.innerHTML += `<p>${parcial}</p>`;
})

btnTimerPause.addEventListener("click", () => {
  clearInterval(intervalo);
});

btnTimerErase.addEventListener("click", () => {
  tmpini = Date.now();
  timer.innerHTML = "00:00:00";
  clearInterval(intervalo);
  parciaisRegistradas.innerHTML = " "
});
