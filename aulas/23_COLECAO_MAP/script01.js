const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("curso","Javascript");
mapa.set(10,"CFB cursos");
mapa.set(1,100);
mapa.set("canal",100);

mapa.delete(1)

console.log(mapa);

let res = "";
if(mapa.has("canal")){
    res = "A chave existe na coleção com o valor de: "+mapa.get("canal");
    res += "<br/> O tamanho da coleção é  "+mapa.size;
} else {
    res = "A chave não existe na coleção";
}
caixa.innerHTML  = res;

mapa.forEach((el) => {
    console.log(el)
})