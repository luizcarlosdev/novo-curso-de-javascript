const configDataGridView = {
    endPoint: "produtos.json",
    idDestino: "dataGridViewDados"
}
const dataGridView = (configDataGridView) => {
    const dataGridViewDados = document.querySelector(`#${configDataGridView.idDestino}`);
    dataGridView.innerHTML = " ";
  fetch(configDataGridView.endPoint)
    .then((res) => res.json())
    .then((res) => {
        res.forEach(element => {
            const dataGridViewLinha = document.createElement("div");
            dataGridViewLinha.setAttribute("class","dataGridViewLinha");

            const c1 = document.createElement("div");
            c1.setAttribute("class","c1");
            c1.innerHTML = element.id;
            dataGridViewLinha.appendChild(c1);

            const c2 = document.createElement("div");
            c2.setAttribute("class","c2");
            c2.innerHTML = element.produto;
            dataGridViewLinha.appendChild(c2);

            const c3 = document.createElement("div");
            c3.setAttribute("class","c3");
            c3.innerHTML = element.marca;
            dataGridViewLinha.appendChild(c3);

            const c4 = document.createElement("div");
            c4.setAttribute("class","c4");
            c4.innerHTML = element.modelo;
            dataGridViewLinha.appendChild(c4);

            const c5 = document.createElement("div");
            c5.setAttribute("class","c5");
            // c5.innerHTML = "Parrudas";
            dataGridViewLinha.appendChild(c5);

            const imgDel = document.createElement("img");
            imgDel.setAttribute("class","dataGridViewcone");
            imgDel.setAttribute("src","./deletar.svg")
            c5.appendChild(imgDel);

            const imgEdit = document.createElement("img");
            imgEdit.setAttribute("class","dataGridViewcone");
            imgEdit.setAttribute("src","./editar.svg")
            c5.appendChild(imgEdit);

            const imgExibir = document.createElement("img");
            imgExibir.setAttribute("class","dataGridViewcone");
            imgExibir.setAttribute("src","./exibir.svg")
            c5.appendChild(imgExibir);

            dataGridViewDados.appendChild(dataGridViewLinha);
        })
    });
};

dataGridView(configDataGridView);
