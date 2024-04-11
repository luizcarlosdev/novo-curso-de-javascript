const f_nome = document.querySelector("#f_nome");
const f_idade = document.querySelector("#f_idade");
const f_msg = document.querySelector("#f_msg");
const btn_validar = document.querySelector("#btn_validar");


btn_validar.addEventListener("click", event => {
    let validacaoIdade = f_idade.validity;
    let validacaoNome = f_nome.validity;
    if (validacaoIdade.valueMissing) {
        f_idade.setCustomValidity("Erro ao enviar os dados");
        f_idade.reportValidity()
    } else {
        f_msg.innerHTML = " ";
    }
    if (validacaoNome.valueMissing) {
        f_nome.setCustomValidity("Insira o seu nome aqui");
        f_nome.reportValidity()
    } else {
        f_msg.innerHTML = " ";
    }
    if (validacaoIdade.rangeOverflow || validacaoIdade.rangeUnderflow) {
        f_idade.setCustomValidity("Insira dados de idade já estipulados.");
        f_idade.reportValidity()
    } else {
        f_msg.innerHTML = " "
    }
    event.preventDefault();
});