const texto = document.querySelector("#texto");

const endPoint = "hello.txt";

fetch(endPoint).then(res => res.text()).then(res => {
    console.log(res)
})