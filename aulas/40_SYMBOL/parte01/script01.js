const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for("luiz")
const s4 = Symbol()

console.log(s1)
console.log(s2)
console.log(Symbol.keyFor(s3))
