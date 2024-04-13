class BoxModel {
  static element = null;
  static parentElement = document.body;

  static createElements(text, tittle, color="#00f") {
    this.text = text;
    this.tittle = tittle;
    this.color = color;

    const elementStyle =
      "width: 100%;" +
      "height: 100vh;" +
      "position: absolute;" +
      "top: 0px;" +
      "left: 0px;" +
      "background-color: rgba(0,0,0,0.7);" +
      "display: grid;" +
      "grid-templeate-columns: 1fr;" +
      "place-items: center;";

    this.element = document.createElement("div");
    this.element.setAttribute("style", elementStyle);
    this.parentElement.prepend(this.element);

    const messageBoxStyle = 
    "width: 350px;" +
    "overflow: hidden;";

    const messageBox = document.createElement("div");
    messageBox.setAttribute("style", messageBoxStyle);
    this.element.appendChild(messageBox);

    const  messageBoxHeaderStyle = 
    "width:100%;" +
    "padding: 14px 14px;" +
    "background-color:" + this.color + ";" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "color: #ffffff;";

    const messageBoxHeader = document.createElement("div");
    messageBoxHeader.setAttribute("style", messageBoxHeaderStyle);
    messageBoxHeader.innerHTML = this.tittle;
    messageBox.appendChild(messageBoxHeader);

    const messageBoxBodyStyle = 
    "width:100%;" +
    "padding: 40px 15px;" +
    "background-color: #ccc;"  +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;" +
    "color: #000000;";

    const messageBoxBody = document.createElement("div");
    messageBoxBody.setAttribute("style", messageBoxBodyStyle);
    messageBoxBody.innerHTML = this.text;
    messageBox.appendChild(messageBoxBody);

    const  messageBoxFooterStyle = 
    "width:100%;" +
    "padding: 5px 14px;" +
    "background-color:" + this.color + ";" +
    "display: flex;" +
    "align-items: center;" +
    "justify-content: center;";

    const messageBoxFooter = document.createElement("div");
    messageBoxFooter.setAttribute("style", messageBoxFooterStyle);
    messageBox.appendChild(messageBoxFooter);

    const messageBoxFooterButtonStyle = 
    "width: 50%;" +
    "cursor: pointer;" +
    "font-size: 0.78rem;" +
    "border: none;" +
    "border-radius: 5px;" +
    "padding: 10px;" +
    "color: #000000;" +
    "text-align: center;";

    const messageBoxFooterButton = document.createElement("button");
    messageBoxFooterButton.setAttribute("style", messageBoxFooterButtonStyle);
    messageBoxFooterButton.innerHTML = "Confirmar";
    messageBoxFooter.appendChild(messageBoxFooterButton);

    messageBoxFooterButton.addEventListener("click", event => {
        event.target.parentNode.parentNode.parentNode.remove()
    })
  }
}

export { BoxModel }
