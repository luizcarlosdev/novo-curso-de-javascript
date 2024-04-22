const homeBtn = document.querySelector("#home-btn");
const addBtn = document.querySelector("#add-btn");
const gerBtn = document.querySelector("#ger-btn");
const aboutBtn = document.querySelector("#about-btn");

const removeClass = (tab) => {
  const tabs = Array.from(document.querySelectorAll("button"));
  tabs.forEach((elements) => {
    elements.classList.remove("colorDefault");
  });
  tab.classList.add("colorDefault");
};

console.log(homeBtn);

homeBtn.addEventListener("click", (event) => {
  removeClass(event.target);
  window.open("https://www.cursoemvideo.com/","main-iframe");
});

addBtn.addEventListener("click", (event) => {
  removeClass(event.target);
  window.open("https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal","main-iframe");
});

gerBtn.addEventListener("click", (event) => {
  removeClass(event.target);
});

aboutBtn.addEventListener("click", (event) => {
  removeClass(event.target);
});
