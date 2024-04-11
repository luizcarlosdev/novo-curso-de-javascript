let nome = new String("Luiz Carlos Lima Da Silva 2004")
let email = "luiz.carlos.2004@outlook.com"
let numeros = "1,10,100,1000"

console.log(nome)

console.log(nome.search(/lima/i))

console.log(nome.match(/A/ig))

console.log(nome.replace(/i/ig, "y"))

console.log(email.match(/\d/ig))
console.log(email.match(/\s/ig))
console.log(email.match(/\bL/ig))

console.log(nome.match(/u/ig))

console.log(numeros.match(/10?/ig))