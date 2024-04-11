function* contador() {
    let i = 0;
    while(true) {
        yield i++
        if(i > 5){
            break
        }
    }
}

const iterador = contador()

for(let c of iterador){
 console.log(c)
}