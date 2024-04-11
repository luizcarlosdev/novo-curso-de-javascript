function canal() {
    let n1 = 10;
    let n2 = 2;
    let res = n1*n2;
    if(res%2 == 0){
        return "par"
    } else {
        return "ímpar"
    }
}

let res = canal()

console.log(res)