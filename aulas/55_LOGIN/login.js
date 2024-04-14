class Login {
  static logado = false;
  static matLogado = null;
  static nomeLogado = null;
  static acessoLogado = null;
  static estiloCss = null;
  static config = null;
  static endPoint =
    "https://048bf990-08a2-4bf3-b66e-6678f13d3a98-00-3t9uqtugat1me.worf.replit.dev/";
  // https://048bf990-08a2-4bf3-b66e-6678f13d3a98-00-3t9uqtugat1me.worf.replit.dev/?matricula=123&senha=321

  static login = (mat, pas) => {
    this.endPoint += `?matricula=${mat}&senha=${pas}`;
    this.estiloCss =
      " .fundoLogin {display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px;background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box;}" +
      " .baseLogin {height: 50%; display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit;}" +
      " .elementosLogin {position: relative; display: flex; align-items: flex-start; justify-content: center; flex-direction: column; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}" +
      ".logoLogin {display: flex; align-items: center; justify-content: center; width: 50%; background-color: #bbb; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit;}" +
      " .logoLogin img { width: 90%; box-sizing: inherit;}" +
      " .campoLogin { width: 100%; display: flex; align-items: flex-start; justify-content: flex-start; row-gap: 6px; margin-bottom: 10px; flex-direction: column; box-sizing: inherit;}" +
      " .campoLogin label { font-size: 18px; font-style: italic;} +";
    " .campoLogin input { padding: 10px; background-color: #fff; border-radius: 5px; width: 90%;}" +
      ".botoesLogin { position: absolute; bottom: 15px; display: flex; width: 100%; justify-content: space-around; align-items: center; box-sizing: inherit;}" +
      ".botoesLogin button { cursor: pointer; width: 120px; background-color: #048; color: #fff; border-radius: 5px; padding: 10px; box-sizing: inherit;}";

    const Stylestilo = document.createElement("style");
    Stylestilo.setAttribute("id","estiloLogin");
    Stylestilo.setAttribute("rel", "stylesheet");
    Stylestilo.setAttribute("type", "text/css");
    Stylestilo.innerHTML = this.estiloCss;
    document.head.appendChild(Stylestilo)

    //<link rel="stylesheet" href="style.css">
    // fetch(this.endPoint)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res) {
    //       this.logado = true;
    //       this.matLogado = mat;
    //       this.nomeLogado = res.nome;
    //       this.acessoLogado = res.acesso;
    //       console.log(res);
    //     } else {
    //       console.log("Usuário não encontrado.");
    //     }
    //   });
  };
}

export { Login };
