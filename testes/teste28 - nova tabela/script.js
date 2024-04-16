class Tabela {
  criarTabela() {
    const endPoint = "products.json";
    const body = document.body;
    const table = document.createElement("table");
    body.prepend(table);
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const tr = document.createElement("tr");
    thead.appendChild(tr);
    const tdhead1 = document.createElement("td");
    const tdhead2 = document.createElement("td");
    const tdhead3 = document.createElement("td");
    const tdhead4 = document.createElement("td");
    const tdhead5 = document.createElement("td");

    tdhead1.innerHTML = "ID";
    tdhead2.innerHTML = "PRODUTO";
    tdhead3.innerHTML = "MODELO";
    tdhead4.innerHTML = "MARCA";
    tdhead5.innerHTML = "FUNÇÔES";

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    fetch(endPoint).then((res) =>
      res.json().then((res) => {
        res.forEach((res) => {
          tr.appendChild(tdhead1);
          tr.appendChild(tdhead2);
          tr.appendChild(tdhead3);
          tr.appendChild(tdhead4);
          tr.appendChild(tdhead5);

          const trBody = document.createElement("tr");
          tbody.appendChild(trBody);
          const tdBody1 = document.createElement("td");
          const tdBody2 = document.createElement("td");
          const tdBody3 = document.createElement("td");
          const tdBody4 = document.createElement("td");
          const tdBody5 = document.createElement("td");

          const imgDelete = document.createElement("img");
          imgDelete.setAttribute("src", "./image-delete.svg");

          const imgEdit = document.createElement("img");
          imgEdit.setAttribute("src", "./image-edit.svg");

          const imgShowInfo = document.createElement("img");
          imgShowInfo.setAttribute("src", "./image-eye.svg");

          const blockDiv = document.createElement("div");
          blockDiv.appendChild(imgDelete);
          blockDiv.appendChild(imgEdit);
          blockDiv.appendChild(imgShowInfo);
          blockDiv.setAttribute("id", "blockDiv");
          document.body.appendChild(blockDiv);

          tdBody1.innerHTML = res.id;
          tdBody2.innerHTML = res.produto;
          tdBody3.innerHTML = res.modelo;
          tdBody4.innerHTML = res.marca;
          tdBody5.appendChild(blockDiv);

          trBody.appendChild(tdBody1);
          trBody.appendChild(tdBody2);
          trBody.appendChild(tdBody3);
          trBody.appendChild(tdBody4);
          trBody.appendChild(tdBody5);
        });
      })
    );
  }
}

const t = new Tabela();

t.criarTabela();

export { Tabela };
