const pessoa = {
    nome: "Luiz Carlos",
    getNome:function() {
        return this.nome;
    },
    
    setNome:function(nome){
        return this.nome = nome;
    }
}

const p2 = pessoa;
const p3 = pessoa;

console.log(p2.getNome())

console.log(pessoa.setNome("Carlos"))
