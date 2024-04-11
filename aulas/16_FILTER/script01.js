const idades = [15,21,30,17,18,44,12,50];
const menor = idades.filter(value => {
    if(value < 18) {
        return value
    }
})
const maior = idades.filter((valor,ind) => {
    if(valor >= 18){
        return valor;
    }
})

// function filtro(valor){
//     if(valor >= 18){
//         return valor
//     }
// }

console.log(menor)
console.log(maior)