const btnGravar = document.querySelector("#btn-gravar");
const btnCancelar = document.querySelector("#btn-cancelar");  // Corrected variable name
const f_id = document.querySelector("#f_id");
const f_nome = document.querySelector("#f_nome");
const f_celular = document.querySelector("#f_celular");
const f_email = document.querySelector("#f_email");
const f_nascimento = document.querySelector("#f_nasc");  // Corrected variable name

btnGravar.addEventListener("click", (event) => {
  const dados = {
    "f_nome": f_nome.value,
    "f_celular": f_celular.value,
    "f_email": f_email.value,
    "f_nascimento": f_nascimento.value,
  };
  const cabecalho = {
    method: 'POST',  // Corrected property name
    body: JSON.stringify(dados),
  };
  const endPoint = "http://127.0.0.1:1880/contatos";
  fetch(endPoint, cabecalho)
    .then((res) => {
      if (res.status == 200) {
        console.log("ok");
      } else {
        console.log("erro ao gravar novo contato");
      }
    });
});
