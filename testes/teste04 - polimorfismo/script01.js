class Pai{
    constructor(n1,n2) {
        this.n1 = n1
        this.n2 = n2
    }

    soma(){
        console.log(this.n1 + this.n2)
    }
}

let c1 = new Pai(10,2)

c1.soma()

class Filho extends Pai{
    constructor(n1,n2) {
        super(n1,n2)
        this.n1 = n1
        this.n2 = n2
    }
    soma(){
        super.soma()
    }
}

let c2 = new Filho(3,3)

c2.soma()