class Cursos{
    static cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspeberry", "C++", "Python", "Java", "C#"]
    constructor() { }
    
    static getTodosCursos = () => {
        return this.cursos
    }

    static getCurso = (curso_ind) => {
        return this.cursos[curso_ind]
    }

    static CursoLength = () => {
        return this.cursos.length
    }

    static addCurso = (novo_curso) => {
        this.cursos.push(novo_curso)
    }

    static delCurso = () => {
        this.cursos = []
    }

}

export default Cursos
