import { Cxmsg } from "../52_CAIXAS_DE_DIALOGO_PERSONALIZADAS/script.js";

let colors = {
    cor: "orange"
};

Cxmsg.config(colors);

document.querySelector("button").addEventListener("click", () => {
    Cxmsg.mostrar("Java","Programador Sênior!");
});