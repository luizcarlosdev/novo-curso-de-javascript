class Login {
    static logado = false;
    static matLogado = null;
    static nomeLogado = null;
    static acessoLogado = null;
    static endPoint = "https://048bf990-08a2-4bf3-b66e-6678f13d3a98-00-3t9uqtugat1me.worf.replit.dev/";
    // https://048bf990-08a2-4bf3-b66e-6678f13d3a98-00-3t9uqtugat1me.worf.replit.dev/?matricula=123&senha=321

    static login = (mat, pas) => {
        this.endPoint += `?matricula=${mat}&senha=${pas}`;
        fetch(this.endPoint).then(res => res.json()).then(res => {
            if(res) {
                this.logado = true;
                this.matLogado = mat;
                this.nomeLogado = res.nome;
                this.acessoLogado = res.acesso;
                console.log(res);
            } else {
                console.log("Usuário não encontrado.")
            }
        })
    }
}

export { Login };
