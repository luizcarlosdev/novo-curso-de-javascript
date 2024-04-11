function soma(...valores){
    let res = 0;
    for(let s of valores){
        res+=s
    }
    return res
}

console.log(soma(10,5,15,2))