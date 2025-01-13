const apiKey = "2eaa3fe5d97159a3e224bd4072d2ee5b";  // Nueva API Key
const lat = -35.029795;  // Latitud de El Nihuil
const lon = -68.697099;  // Longitud de El Nihuil

function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la solicitud a la API");
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const condition = data.weather[0].description;
            document.getElementById("weather").innerHTML = `
                <p>${temperature}°C</p>
                <p>${condition}</p>
            `;
        })
        .catch(error => {
            console.error("Error al obtener el clima:", error);
            document.getElementById("weather").innerText = "No se pudo obtener el clima.";
        });
}

// Llamada a la función al cargar la página
window.onload = getWeather;






const huespedesContainer = document.getElementById('huespedes');

// Eliminar cualquier contenido previo en el contenedor
huespedesContainer.innerHTML = '';

for (let i = 1; i <= 7; i++) {
    const huespedDiv = document.createElement('div');
    huespedDiv.classList.add('huesped');
    huespedDiv.innerHTML = `
        <h3>Huésped ${i}</h3>
        <input type="text" id="nombre-${i}" name="huesped-${i}-nombre" placeholder="Nombre y apellido">

        <input type="text" id="dni-${i}" name="huesped-${i}-dni" placeholder="DNI">

        <input type="number" id="edad-${i}" name="huesped-${i}-edad" placeholder="Edad">

        <label for="foto-dni-${i}">Adjuntar foto/PDF del DNI:</label>
        <input type="file" id="foto-dni-${i}" name="huesped-${i}-foto-dni">

        <label for="socio-huesped-${i}">¿Es socio del Club de Pescadores?</label>
        <select id="socio-huesped-${i}" name="socio-huesped-${i}">
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select>
    `;
    huespedesContainer.appendChild(huespedDiv);
}























