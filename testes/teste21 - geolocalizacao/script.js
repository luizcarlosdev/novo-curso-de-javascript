const latitude = document.querySelector("#info1");
const longitude = document.querySelector("#info2");

const coletaDados = localizacao => {
    latitude.innerHTML = "Latitude: " + localizacao.coords.latitude;
    longitude.innerHTML = "Longitude: " + localizacao.coords.longitude;
};

navigator.geolocation.getCurrentPosition(coletaDados);