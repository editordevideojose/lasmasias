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

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".form-section");
    const continueButtons = document.querySelectorAll(".continue-btn");
    const submitButton = document.querySelector(".submit-btn");
    const modal = document.getElementById("confirmation-modal");
    const finalizeButton = document.getElementById("finalize-btn");

    let currentSection = 0;
    sections[currentSection].classList.add("active");

    continueButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const nextSection = parseInt(btn.getAttribute("data-next")) - 1;
            sections[currentSection].classList.remove("active");
            sections[nextSection].classList.add("active");
            currentSection = nextSection;
        });
    });

    // Show modal on submit
    submitButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Redirect to index.html on finalize
    finalizeButton.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});













// Obtener el total de luna.html
function getTotalFromLuna() {
    const totalElement = document.getElementById('total');
    return parseFloat(totalElement.textContent) || 0;
}

// Calcular la seña y el saldo pendiente
function updatePagoSection() {
    const total = getTotalFromLuna();
    const seña = total / 2;
    const saldoPendiente = seña; // El saldo pendiente es el mismo que la seña para este caso

    document.getElementById('total-pagar').textContent = total.toFixed(2);
    document.getElementById('seña').textContent = seña.toFixed(2);
    document.getElementById('saldo-pendiente').textContent = saldoPendiente.toFixed(2);
}

// Actualizar los valores al cargar la página
window.onload = function() {
    updatePagoSection();
};








// Obtener el total guardado de localStorage
function getTotalFromLocalStorage() {
    return parseFloat(localStorage.getItem('total')) || 0;
}

// Actualizar la sección de pago
function updatePagoSection() {
    const total = getTotalFromLocalStorage();
    const seña = total / 2;
    const saldoPendiente = seña;

    document.getElementById('total-pagar').textContent = total.toFixed(2);
    document.getElementById('seña').textContent = seña.toFixed(2);
    document.getElementById('saldo-pendiente').textContent = saldoPendiente.toFixed(2);
}

// Actualizar los valores al cargar la página
window.onload = function() {
    updatePagoSection();
};
