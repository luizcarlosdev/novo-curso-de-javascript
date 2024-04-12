const body = document.body;
const head = document.head;

const style = "<link rel='stylesheet' href='estilo.css' />";
head.innerHTML += style;

const headerStyle =
  " height: 250px;" + "width: 100%;" + "background-color: #000000d0;" + "display: flex;" + "align-items: center;" + "justify-content: space-around;";

const tittleStyle =
  "color: #ffffff;" + "text-align: left;" + "font-family: Arial;";

const $header = document.createElement("header");
$header.setAttribute("style", headerStyle);
body.prepend($header);

const $tittleHeader = document.createElement("h1");
$tittleHeader.innerHTML = "Meu site em JavaScript";
$tittleHeader.setAttribute("style",tittleStyle);
$header.appendChild($tittleHeader);

console.log($tittleHeader)
