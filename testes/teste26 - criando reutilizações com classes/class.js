class Mensagem {
  tittle = null;
  textBox = null;
  footerText = null;
  boxMessage = null;
  elementor = document.body;
  constructor(object) {
    this.tittle = object.textTittle;
    this.footerText = object.footerText;
  }

  createMessageBox(boxHeaderColor,textBox) {
    this.color = boxHeaderColor;
    this.textBox = textBox;
    const divBoxStyle =
      "display: grid;" +
      "grid-templeate-columns: 1fr;" +
      "place-items: center;" +
      "background-color: rgba(0,0,0,0.7);" +
      "position: absolute;" +
      "top: 0px;" +
      "left: 0px;" +
      "width: 100%;" +
      "height: 100vh;";

    const divBox = document.createElement("div");
    divBox.setAttribute("style", divBoxStyle);
    this.elementor.prepend(divBox);

    const boxModelFatherStyle =
      "overflow: hidden;" +
      "width: 430px;";

    const boxModelFather = document.createElement("div");
    boxModelFather.setAttribute("style", boxModelFatherStyle);
    divBox.appendChild(boxModelFather);

    const boxHeaderStyle = 
    "width: 100%;" +
    "padding: 20px 10px;" +
    "border-radius: 0px 5px 5px 0px;" +
    "color: #ffffff;" +
    "background-color:" + this.color+";";

    const boxHeader = document.createElement("div");
    boxHeader.setAttribute("style", boxHeaderStyle);
    boxHeader.innerHTML = this.tittle;
    boxModelFather.appendChild(boxHeader);

    const boxBodyStyle = 
    "width: 100%;" +
    "height: 60px;" +
    "padding: 40px 15px;" +
    "background-color: #ccc";
    "color: #000;" +
    "border-radius: 0px 0px 3px 3px;"

    const boxBody = document.createElement("div");
    boxBody.setAttribute("style", boxBodyStyle);
    boxBody.innerHTML = this.textBox;
    boxModelFather.appendChild(boxBody);

    const boxFooterStyle = 
    "width: 100%;" +
    "padding: 15px 10px;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "background-color: #eee;";


    const boxFooter = document.createElement("div");
    boxFooter.setAttribute("style", boxFooterStyle);
    boxModelFather.appendChild(boxFooter);

    const buttonConfirmStyle = 
    "padding: 10px 5px;" +
    "width: 150px;" +
    "background-color: #000;" +
    "color: #ffffff;" +
    "text-align: center;" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "cursor: pointer;"

    const buttonConfirm = document.createElement("div");
    buttonConfirm.innerHTML = "Fechar Aba";
    buttonConfirm.setAttribute("style", buttonConfirmStyle);
    boxFooter.appendChild(buttonConfirm);

    buttonConfirm.addEventListener("click", element => {
        divBox.remove();
    })
  };
}
