const pessoa = {
    nome:"Bruno",
    canal:"CFB cursos",
    curso:"Javascript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }
}

const string_pessoa = '{"nome":"Bruno","canal":"CFB cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json = JSON.stringify(pessoa)
const o_json_pessoa = JSON.parse(s_json)

console.log(pessoa)
console.log(s_json)
console.log(o_json_pessoa)