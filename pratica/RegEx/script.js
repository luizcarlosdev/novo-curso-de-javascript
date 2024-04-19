/*
g -- encontra todas as ocorrências, nao se delimitando na primeira ocasiao de encontro;

i -- case insensitive, nao diferenciando letras maiusculas de minusculas;

( ) -- cria grupos;

| -- representa 'ou';
*/

const texto =
  "João trouxe flores para seu jacaré de estimação em 10 de janeiro de 1970, Maria, Maria era o nome dela. Foi um ano excelente na vida de João. Maria Teve 5 filhos, todos adultos atualmente.";

const regExp1 = /Jacaré | joão | maria/gi;

console.log(regExp1.test(texto));

console.log("------------------------------");

const regExp2 = /João|maria/gi;

console.log(texto.match(regExp2));
console.log(texto.replace(/joão/gi, "Hipócrates"));
console.log("------------------------------");

console.log("Bem melhor assim!")