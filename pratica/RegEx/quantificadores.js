// * (opcionais)
// + (obrigatório) 1 ou mais vezes
// ? (opcionais)
// \ caractere de escape

const texto =
  "João trouxe flores para seu jacaré de estimação em 10 de janeiro de 1970, Maria, Maria era o nome dela. Foi um ano excelente na vida de João. Maria jooãooooo Teve 5 filhos, todos adultos atualmente.";

const arquivos = [
  "Atenção.jpg",
  "FOTO.jpeg",
  "Meu gatinho.jpg",
  "Meu gatinho.JPEeeeeeeeeeeeeeeeeeeeEEEEEEEEEG",
  "lista de compras.txt",
];

// const regExp1 = /Jo+ão+ /gi;

// console.log(texto.match(regExp1));

const rgp2 = /\.jpe?g/ig;

for(let i of arquivos) {
    console.log(i.match(rgp2))
}
