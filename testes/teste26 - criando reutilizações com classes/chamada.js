const btnClasses = document.querySelector("#btnClasses");

const chamada = {
    textTittle: "Escritos Seletos",
    textBox: "Meu site está ficando um pouco mais profissional!",
    footerText: "Aperte Aqui!"
}

const msg = new Mensagem(chamada);

btnClasses.addEventListener("click", () => {
    msg.createMessageBox('red','Meus sites estão ficando bons, graças à Miserocórdia de Deus!')
})