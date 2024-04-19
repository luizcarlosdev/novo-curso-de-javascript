const obj = {0:"Rien",1:"ok",length:2}

console.log(Array.from(obj,(r,s) => {
    return r+"ola"+s
}))
console.log("----------------------------------")

console.log(Array.of(7))

console.log("----------------------------------")

let w = ["a","b","c"];
let awr = w[Symbol.iterator]();
console.log(awr.next().value)
console.log(awr.next().value)
console.log(awr.next().value)
console.log(awr.next().value)