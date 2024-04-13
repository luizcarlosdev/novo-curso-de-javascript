let obj = {
    a: 14,
    b:17
}

let obj1 = {
    c: 19,
    d: 15
}

const result = Object.assign(obj,obj1)
console.log(result)

console.log("-----------------------------------------");

let flamengo = [
    ['torcida','jogadores','botafogo','madureira'],
    ['titulo','nao sei o que colocar mais']
];

const flamangoEmVasco = Object.fromEntries(flamengo)

console.log(flamangoEmVasco);

console.log("-----------------------------------------");

let saoPaulo = {
    titulos: 47,
    jogadores: 23
};

let saoPauloCampeao = Object.keys(saoPaulo);
let saoPauloC = Object.values(saoPaulo);

console.log(saoPauloCampeao,saoPauloC)
let mudar = () => {
    console.log(Object.entries(saoPauloC)[0]);
}

mudar()