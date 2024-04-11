const p_temp = document.querySelector("#p_temp");
const p_nivel = document.querySelector("#p_nivel");
const p_press = document.querySelector("#p_press");
const btn_texto = document.querySelector("#btn_texto");

const obterDados = () => {
  const endPoint =
    "https://048bf990-08a2-4bf3-b66e-6678f13d3a98-00-3t9uqtugat1me.worf.replit.dev/";
  fetch(endPoint)
    .then((resposta) => resposta.json())
    .then((dados) => {
      p_temp.innerHTML = "Temperatura: " + dados.temperatura;
      p_nivel.innerHTML = "Nível: " + dados.nivel;
      p_press.innerHTML = "Pressão: " + dados.pressao;
    });
};

//let interval = setInterval(obterDados, 5000);

let dados = {
  nome: "Luiz",
  canal: "Sarti",
  curso: "Javascript",
};

let cabecalho = {
  method: "POST",
  body: JSON.stringify(dados),
};

const gravarDados = () => {
  const endPoint =
    "https://048bf990-08a2-4bf3-b66e-6678f13d3a98-00-3t9uqtugat1me.worf.replit.dev/";
  fetch(endPoint, cabecalho)
    .then((res) => res.json())
    .then((ret) => {
      console.log(ret);
    });
};

btn_texto.addEventListener("click", () => {
    gravarDados();
});
