const configDataGridView = {
  endPoint: "http://127.0.0.1:1880/produtos",
  idDestino: "dataGridViewDados",
};
const dataGridView = (configDataGridView) => {
  const dataGridViewDados = document.querySelector(
    `#${configDataGridView.idDestino}`
  );
  dataGridView.innerHTML = "";
  fetch(configDataGridView.endPoint)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((element) => {
        const dataGridViewLinha = document.createElement("div");
        dataGridViewLinha.setAttribute("class", "dataGridViewLinha");

        const c1 = document.createElement("div");
        c1.setAttribute("class", "c1");
        c1.innerHTML = element.n_id_produto;
        dataGridViewLinha.appendChild(c1);

        const c2 = document.createElement("div");
        c2.setAttribute("class", "c2");
        c2.innerHTML = element.s_marca_produto;
        dataGridViewLinha.appendChild(c2);

        const c3 = document.createElement("div");
        c3.setAttribute("class", "c3");
        c3.innerHTML = element.s_modelo_produto;
        dataGridViewLinha.appendChild(c3);

        const c4 = document.createElement("div");
        c4.setAttribute("class", "c4");
        c4.innerHTML = element.s_nome_produto;
        dataGridViewLinha.appendChild(c4);

        const c5 = document.createElement("div");
        c5.setAttribute("class", "c5");
        // c5.innerHTML = "Parrudas";
        dataGridViewLinha.appendChild(c5);

        const imgDel = document.createElement("img");
        imgDel.setAttribute("class", "dataGridViewcone");
        imgDel.setAttribute("src", "./deletar.svg");
        c5.appendChild(imgDel);
        imgDel.addEventListener("click", (event) => {
          const id = event.target.parentNode.parentNode.firstChild.innerHTML;
          const linha = event.target.parentNode.parentNode;
          const endPoint = `http://127.0.0.1:1880/removeproduto/${id}`;
          fetch(endPoint).then((res) => {
            if (res.status == 200) {
              linha.remove();
            }
          });
        });

        const imgEdit = document.createElement("img");
        imgEdit.setAttribute("class", "dataGridViewcone");
        imgEdit.setAttribute("src", "./editar.svg");
        imgEdit.addEventListener("click", (event) => {
          document.querySelector("#janelaEditar").classList.remove("ocultar");
          const id = event.target.parentNode.parentNode.firstChild.innerHTML;
          const endPoint = `http://127.0.0.1:1880/produto/${id}`;
          fetch(endPoint)
            .then((res) => res.json())
            .then((res) => {
              document.querySelector("#f_ideditar").value = res[0].n_id_produto;
              document.querySelector("#f_produtoeditar").value =
                res[0].s_marca_produto;
              document.querySelector("#f_marcaeditar").value =
                res[0].s_modelo_produto;
              document.querySelector("#f_modeloeditar").value =
                res[0].s_nome_produto;
            });
        });
        c5.appendChild(imgEdit);

        const imgExibir = document.createElement("img");
        imgExibir.setAttribute("class", "dataGridViewcone");
        imgExibir.setAttribute("src", "./exibir.svg");
        imgExibir.addEventListener("click", (event) => {
          document.querySelector(".janelaView").classList.remove("ocultar");
          const id = event.target.parentNode.parentNode.firstChild.innerHTML;
          const endPoint = `http://127.0.0.1:1880/produto/${id}`;
          fetch(endPoint)
            .then((res) => res.json())
            .then((res) => {
              document.querySelector("#f_id").value = res[0].n_id_produto;
              document.querySelector("#f_produto").value =
                res[0].s_marca_produto;
              document.querySelector("#f_marca").value =
                res[0].s_modelo_produto;
              document.querySelector("#f_modelo").value = res[0].s_nome_produto;
            });
        });
        c5.appendChild(imgExibir);

        dataGridViewDados.appendChild(dataGridViewLinha);
      });
    });
};

dataGridView(configDataGridView);

document.querySelector("#btn-ok").addEventListener("click", (event) => {
  document.querySelector(".janelaView").classList.add("ocultar");
});

document.querySelector("#btn-gravar").addEventListener("click", (event) => {
  const id = document.querySelector("#f_ideditar").value;
  const produto = document.querySelector("#f_produtoeditar").value;
  const marca = document.querySelector("#f_marcaeditar").value;
  const modelo = document.querySelector("#f_modeloeditar").value;
  const endPoint = `http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`;
  fetch(endPoint).then((res) => {
    if (res.status == 200) {
      document.querySelector("#janelaEditar").classList.add("ocultar");
      dataGridView(configDataGridView);
    } else {
      alert("Erro ao atualizar!");
    }
  });
});

document.querySelector("#btn-cancelar").addEventListener("click", (event) => {
  document.querySelector("#janelaEditar").classList.add("ocultar");
});
