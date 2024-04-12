// const head = document.head;
const body = document.body;

// const estilo = "<link rel='stylesheet' href='topo.css'>";
// head.innerHTML += estilo;

const estiloTopo =
  "display: flex;" +
  "align-items: center;" +
  "justify-content: space-between;" +
  "background-color:#00f;";

const topo = document.createElement("div");
topo.setAttribute("id", "topo");
topo.setAttribute("style", estiloTopo);
body.prepend(topo);

const estiloLogoImg = " width: 200px;"

const logo =
  "<div id='logo' class='logo'>" +
  "<img src='images.png' tittle='CFBcursos' style='"+estiloLogoImg+"'/>"+
  "</div>";


topo.innerHTML += logo;

const login =
  "<div id='login' class='login'>" +
  "<p id='matricula'>Matrícula:<span></span></p>" +
  "<p id='nome'>Nome:<span></span></p>" +
  "</div>";

topo.innerHTML += login;
