export { mudarInfo };

const nome = document.querySelector("#f_nome");
const idade = document.querySelector("#f_idade");
const button = document.querySelector("#button");

button.addEventListener("click", event => {
  event.preventDefault()
})

button.addEventListener("click", () => {
  let validationName = nome.validity;
  let validationAge = idade.validity;
  if (validationName.valueMissing) {
    nome.setCustomValidity("Insira o seu nome aqui");
    nome.reportValidity();
  }
  if (validationAge.valueMissing) {
    idade.setCustomValidity("Insira a sua idade");
    idade.reportValidity();
  } else {
    window.location = "novo.html";
  }
  function mudarInfo(user, age) {
    user.innerHTML = nome.value;
    age.innerHTML = idade.value;
  }
});
