class Cxmsg {
  static cor = "#888";
  static destino = null;
  static divMsg = null;
  static tipo = null;
  static comando_sn = null;

  static mostrar = (config,titulo, texto) => {
    this.cor = config.cor;
    this.tipo = config.tipo;
    this.comando_sn = config.comando_sn;
    this.destino = document.body;
    this.titulo = titulo;
    this.texto = texto;
    this.divMsg = document.createElement("div");
    const estiloDivMsg =
      "display: flex;" +
      "justify-content:center;" +
      "align-items: center;" +
      "position: absolute;" +
      "top> 0px;" +
      "left: 0px;" +
      "width: 100%;" +
      "height: 100vh;" +
      "background-color: rgba(0,0,0,0.7);";
    this.divMsg.setAttribute("id", "divMsg");
    this.divMsg.setAttribute("style", estiloDivMsg);
    this.destino.prepend(this.divMsg);

    const areaCaixaMsg = document.createElement("div");
    const areaCaixaMsgEstilo =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: flex-start;" +
      "flex-direction: column;" +
      "width: 300px;";
    areaCaixaMsg.setAttribute("style", areaCaixaMsgEstilo);
    this.divMsg.appendChild(areaCaixaMsg);

    const estiloTituloCxmsg =
      "display: flex;" +
      "justify-content:flex-start;" +
      "align-items: center;" +
      "width: 100%;" +
      "background-color:" +
      this.cor +
      ";" +
      "color: #FFFFFF;" +
      "padding: 5px;" +
      "border-radius: 5px 5px 0px 0px;";

    const tituloCxmsg = document.createElement("div");
    tituloCxmsg.innerHTML = this.titulo;
    tituloCxmsg.setAttribute("style", estiloTituloCxmsg);
    areaCaixaMsg.appendChild(tituloCxmsg);

    const estilo_corpoCxmg =
      "display: flex;" +
      "justify-content: flex-start;" +
      "align-items: center;" +
      "width: 100%;" +
      "background-color: #eee;" +
      "color: #000;" +
      "text-align: center;" +
      "padding: 30px 5px;";

    const corpoCxmsg = document.createElement("div");
    corpoCxmsg.innerHTML = this.texto;
    corpoCxmsg.setAttribute("style", estilo_corpoCxmg);
    areaCaixaMsg.appendChild(corpoCxmsg);

    const estilo_rodapeCxmsg =
      "display: flex;" +
      "justify-content: space-around;" +
      "align-items: center;" +
      "width: 100%;" +
      "background-color: #ccc;" +
      "color: #000;" +
      "padding: 5px;" +
      "border-radius: 0px 0px 5px 5px;";

    const rodapeCxmsg = document.createElement("div");
    rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg);
    areaCaixaMsg.appendChild(rodapeCxmsg);

    const estilo_botaoCxmsg =
      "background-color:" +
      this.cor +
      ";" +
      "color: #fff;" +
      "padding: 10px 50px;" +
      "border-radius: 5px;" +
      "cursor: pointer;" +
      "text-transform: uppercase;";

    const btn_ok = document.createElement("button");
    btn_ok.innerHTML = "OK";
    btn_ok.setAttribute("style", estilo_botaoCxmsg);
    rodapeCxmsg.appendChild(btn_ok);

    btn_ok.addEventListener("click", (event) => {
      this.ocultar();
    });
  };

  static ocultar = () => {
    this.divMsg.remove();
  };
}

export { Cxmsg };
