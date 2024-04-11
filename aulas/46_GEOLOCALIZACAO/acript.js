const long = document.querySelector("#long");
const lati = document.querySelector("#lati");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao);
} else {
    console.log("não funciona");
};

function mostrarLocalizacao(pos) {
    long.innerHTML = "Longitude: " + pos.coords.longitude;
    lati.innerHTML = "Latitude: " + pos.coords.latitude;
};

function erroLocalizacao() {
    alert("Erro ao obter a localização!");
};