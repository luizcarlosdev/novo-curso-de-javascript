class Cxmsg {
  titulo = null;
  texto = null;
  cor = null;
  destino = null;
  divMsg = null;

  constructor(config) {
    this.titulo = config.titulo;
    this.texto = config.texto;
    this.cor = config.cor;
    this.destino = document.body;
  }

  mostrar = () => {
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

    const estiloTitulo =
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

    const titulo = document.createElement("div");
    titulo.innerHTML = this.titulo;
    titulo.setAttribute("style", estiloTitulo);
    areaCaixaMsg.appendChild(titulo);
  };

  ocultar = () => {};
}
