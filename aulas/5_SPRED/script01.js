const obj1 = {
    nome:"Bruno",
    energia:100,
    vidas:3,
    magia:150
}

const obj2 = {
    nome:"Bruce",
    energia:88,
    vidas:5,
    forca:907
}

const obj3 = {...obj1,...obj2};


console.log(obj3)

const soma = (v1,v2,v3) => {
    return v1 + v2 + v3
}

let valores = [1,5,4,7]

console.log(soma(...valores))