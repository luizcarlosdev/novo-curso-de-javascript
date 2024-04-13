import { Cxmsg } from "./script.js";

const config = {
  cor: "#48f",
  tipo: "sn",
  textos: ["SIM","NÃO"],
  comando_sn: () => {}
};

// config.tipo = "ok"

const fsim = () => {
  console.log("botao sim!")
}

const criarRGB = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let colorCreated = `rgb(${r},${g},${b})`;
  return colorCreated;
};

const colorRed = {
  cor: criarRGB(),
};


const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg");

btn_mostrarcxmsg.addEventListener("click", () => {
  config.comando_sn = () => {fsim()};
  Cxmsg.mostrar(config,"JavaScript", "Aula 52");
});
