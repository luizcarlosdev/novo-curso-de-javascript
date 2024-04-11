// Obrigado pela sua infiita misericórdia, Senhor Jesus Cristo, Filho de Davi! Amém!!!

const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    let estadoValidacao = f_nota.validity;
    let msg = null;
    if (estadoValidacao.valueMissing) {
        f_nota.setCustomValidity("Faltam dados essenciais para o prosseguimento.")
    } else if (estadoValidacao.rangeOverflow) {
        f_nota.setCustomValidity("Nossa! Que nota alta!")
    } else if (estadoValidacao.rangeUnderflow) {
        f_nota.setCustomValidity("Nossa! Que nota baixa!")
    }
    f_nota.reportValidity()
    // f_msg.innerHTML = f_nota.validationMessage;
    evt.preventDefault()
})