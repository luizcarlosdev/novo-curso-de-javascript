class Login {
  static logado = false;
  static matLogado = null;
  static nomeLogado = null;
  static acessoLogado = null;
  static estiloCss = null;
  static config = {
    cor: "#048",
    img: "./logo_cfbcursos.png",
  };
  static endPoint =
    "https://048bf990-08a2-4bf3-b66e-6678f13d3a98-00-3t9uqtugat1me.worf.replit.dev/";
  // https://048bf990-08a2-4bf3-b66e-6678f13d3a98-00-3t9uqtugat1me.worf.replit.dev/?matricula=123&senha=321

  static login = (config = null) => {
    if (config != null) {
      this.config = config;
    }
    //this.endPoint += `?matricula=${mat}&senha=${pas}`;
    this.estiloCss =
      " .fundoLogin {display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px;background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box;}" +
      " .baseLogin {height: 50%; display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit;}" +
      " .elementosLogin {position: relative; display: flex; align-items: flex-start; justify-content: center; flex-direction: column; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}" +
      ".logoLogin {display: flex; align-items: center; justify-content: center; width: 50%; background-color: #bbb; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit;}" +
      " .logoLogin img { width: 90%; box-sizing: inherit;}" +
      " .campoLogin { width: 100%; display: flex; align-items: flex-start; justify-content: flex-start; row-gap: 6px; margin-bottom: 10px; flex-direction: column; box-sizing: inherit;}" +
      " label { font-size: 18px; font-style: italic;} +";
    " input { padding: 10px; background-color: #fff; border-radius: 5px; width: 90%;}" +
      ".botoesLogin { position: absolute; bottom: 15px; display: flex; width: 100%; justify-content: space-around; align-items: center; box-sizing: inherit;}" +
      `.botoesLogin button { cursor: pointer; width: 120px; background-color: #${this.config.cor}; color: #fff; border-radius: 5px; padding: 10px; box-sizing: inherit;`;

    const Stylestilo = document.createElement("style");
    Stylestilo.setAttribute("id", "id_estiloLogin");
    Stylestilo.setAttribute("rel", "stylesheet");
    Stylestilo.setAttribute("type", "text/css");
    Stylestilo.innerHTML = this.estiloCss;
    document.head.appendChild(Stylestilo);

    const corpo = document.body;

    const fundoLogin = document.createElement("div");
    fundoLogin.setAttribute("id", "fundoLogin");
    fundoLogin.setAttribute("class", "fundoLogin");
    corpo.prepend(fundoLogin);

    const baseLogin = document.createElement("div");
    baseLogin.setAttribute("id", "baseLogin");
    baseLogin.setAttribute("class", "baseLogin");
    fundoLogin.appendChild(baseLogin);

    const elementosLogin = document.createElement("div");
    elementosLogin.setAttribute("id", "elementosLogin");
    elementosLogin.setAttribute("class", "elementosLogin");
    elementosLogin.setAttribute("style", "position: relative;");
    baseLogin.appendChild(elementosLogin);

    const campoLogin1 = document.createElement("div");
    campoLogin1.setAttribute("id", "campoLogin");
    campoLogin1.setAttribute("class", "campoLogin");
    elementosLogin.appendChild(campoLogin1);

    const label = document.createElement("label");
    label.setAttribute("for", "f_username");
    label.innerHTML = "Username";
    campoLogin1.appendChild(label);

    const inputName = document.createElement("input");
    inputName.setAttribute("name", "f_username");
    inputName.setAttribute("id", "f_username");
    inputName.setAttribute("type", "text");
    inputName.setAttribute(
      "style",
      " padding: 10px;" +
        " background-color: #fff;" +
        "border-radius: 5px;" +
        "width: 90%;"
    );
    campoLogin1.appendChild(inputName);

    const inputStyle =
      " padding: 10px;" +
      " background-color: #fff;" +
      "border-radius: 5px;" +
      "width: 90%;";

    const campoLogin2 = document.createElement("div");
    campoLogin2.setAttribute("class", "campoLogin");
    elementosLogin.appendChild(campoLogin2);

    const label2 = document.createElement("label");
    label2.setAttribute("for", "f_senha");
    label2.innerHTML = "Password";
    campoLogin2.appendChild(label2);

    const inputSenha = document.createElement("input");
    inputSenha.setAttribute("type", "password");
    inputSenha.setAttribute("id", "f_senha");
    inputSenha.setAttribute("name", "f_senha");
    inputSenha.setAttribute(
      "style",
      " padding: 10px;" +
        " background-color: #fff;" +
        "border-radius: 5px;" +
        "width: 90%;"
    );
    campoLogin2.appendChild(inputSenha);

    const botoesLoginStyle =
      "width: 100%;" +
      "display: flex;" +
      "align-items: center;" +
      "justify-content: space-around;" +
      "position: absolute;" +
      "bottom: 25px;" +
      "padding: 0px 12px;";

    const botoesLogin = document.createElement("div");
    botoesLogin.setAttribute("id", "botoesLogin");
    botoesLogin.setAttribute("class", "botoesLogin");
    botoesLogin.setAttribute("style", botoesLoginStyle);
    elementosLogin.appendChild(botoesLogin);

    const btn_login = document.createElement("button");
    btn_login.setAttribute("id", "btn_login");
    btn_login.setAttribute("class", "btn_login");
    btn_login.setAttribute(
      "style",
      " cursor: pointer;" +
        "width: 120px;" +
        "background-color: #048;" +
        " color: #fff;" +
        " border-radius: 5px;" +
        "padding: 10px;" +
        "    box-sizing: inherit;"
    );
    btn_login.innerHTML = "Login";
    btn_login.addEventListener("click", () => {
      this.verificaLogin();
    });
    botoesLogin.appendChild(btn_login);

    const btn_cancelar = document.createElement("button");
    btn_cancelar.setAttribute("id", "btn_cancelar");
    btn_cancelar.setAttribute("class", "btn_cancelar");
    btn_cancelar.setAttribute(
      "style",
      " cursor: pointer;" +
        "width: 120px;" +
        "background-color: #048;" +
        " color: #fff;" +
        " border-radius: 5px;" +
        "padding: 10px;" +
        "    box-sizing: inherit;"
    );
    btn_cancelar.innerHTML = "Cancelar";
    btn_cancelar.addEventListener("click", () => {
      this.fechar();
    });
    botoesLogin.appendChild(btn_cancelar);

    const logoLogin = document.createElement("div");
    logoLogin.setAttribute("id", "logoLogin");
    logoLogin.setAttribute("class", "logoLogin");
    baseLogin.appendChild(logoLogin);

    const img = document.createElement("img");
    img.setAttribute("src", "./logo_cfbcursos.png");
    logoLogin.appendChild(img);
  };

  static verificaLogin = () => {
    const mat = document.querySelector("#f_username").value;
    const pas = document.querySelector("#f_senha").value;
    const endPoint = `https://048bf990-08a2-4bf3-b66e-6678f13d3a98-00-3t9uqtugat1me.worf.replit.dev/?matricula=${mat}&senha=${pas}`;
    fetch(endPoint)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.logado = true;
          this.matLogado = mat;
          this.nomeLogado = res.nome;
          this.acessoLogado = res.acesso;
          this.fechar()
        } else {
          this.logado = false;
          this.matLogado = null;
          this.nomeLogado = null;
          this.acessoLogado = null;
          alert("Login não efetuado! Username ou senha incorretos")
        }
      });
    // if (mat == "123" && pas == "321") {
    //   return true;
    // } else {
    //   return false;
    // }
  };

  static fechar = () => {
    const fundoLogin = document.querySelector("#fundoLogin");
    fundoLogin.remove();
    const id_estiloLogin = document.querySelector("#id_estiloLogin");
    id_estiloLogin.remove();
  };
}

export { Login };
