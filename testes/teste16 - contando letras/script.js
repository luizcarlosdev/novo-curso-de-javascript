let a = "Luiz"

let b = []

let d = []

let i = 0

let vazio = 0

b.push(a.split(""))

b[0].forEach(e => {
    if (e == " ") {
        vazio++
    }
    else {
        i++
    }
})

console.log(i)

console.log("A quantidade de letras é: "+Number(i)+".")