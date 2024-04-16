// Selecionando os elementos
const header = document.querySelector("#header");
const menu = document.querySelector("#menu");
const main = document.querySelector("#main");

// Selecionando os botões
const homeButton = document.querySelector("#home_btn");
const newButton = document.querySelector("#new_btn");
const searchButton = document.querySelector("#search_btn");
const managementButton = document.querySelector("#management_btn");
const aboutButton = document.querySelector("#about_btn");

// Função para selecionar a aba
const selectTab = (element) => {
  const tabs = Array.from(document.querySelectorAll(".tab"));
  tabs.forEach((tab) => {
    tab.classList.remove("selectedTab");
  });
  element.classList.add("selectedTab");
};

// Adicionando eventos aos botões
homeButton?.addEventListener("click", (event) => {
  selectTab(event.target);
  window.open("./home.html", "main_iframe");
});

newButton?.addEventListener("click", (event) => {
  selectTab(event.target);
  window.open("./novo.html", "main_iframe");
});

searchButton?.addEventListener("click", (event) => {
  selectTab(event.target);
  window.open("./pesquisar.html", "main_iframe");
});

managementButton?.addEventListener("click", (event) => {
  selectTab(event.target);
  window.open("./gestao.html", "main_iframe");
});

aboutButton?.addEventListener("click", (event) => {
  selectTab(event.target);
  window.open("./sobre.html", "main_iframe");
});
