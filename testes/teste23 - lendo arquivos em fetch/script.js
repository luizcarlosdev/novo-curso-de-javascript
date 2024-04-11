const recebido = "texto.txt";

fetch(recebido).then(r => r.text()).then(a => console.log(a))