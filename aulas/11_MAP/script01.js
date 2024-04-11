const converterInt = (e)=>parseInt(e)
const dobrar = e => e*2;

let num = ["1","2","3","4","5"].map(converterInt)
let num2 = [...num].map(dobrar)
console.log(num2)
console.log(num)

num.map(converterInt);
console.log(num)

// const elementos = document.querySelectorAll("div");
// const valores = Array.prototype.map.call(elementos,({innerHTML}) => innerHTML);
// console.log(valores)

// let el = [...document.getElementsByTagName("div")];
// console.log(el);

// el.map((e,i) => {
//     e.innerHTML = "Mudei tudo";
//     console.log(e.innerHTML)
// })




// const cursos=['HTML5','CSS3','Javascript','PHP','React'];
// let c = cursos.map((elemento,indice) => {
//     if(indice == 0) {
//         indice = 'Primeiro termo do array'
//     }
//     return elemento
// })

// console.log(c)