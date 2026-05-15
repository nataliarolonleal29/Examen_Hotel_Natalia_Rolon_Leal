import { habitaciones } from "./habitaciones.js";
console.log(habitaciones);
const contenedor = document.getElementById("contenedor-habitaciones");
habitaciones.forEach(habitacion => {

  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
  
    <img src="${habitacion.imagenes[0]}">
    <h2>${habitacion.nombre}</h2>
    <p>${habitacion.camas} camas</p>
    <p>Capacidad: ${habitacion.personas}</p>
    <p class="precio">$${habitacion.precio}</p>gi
    <button>Reservar</button>

  `;
  card.addEventListener("click", () => {
    window.location.href = `habitacion.html?id=${habitacion.id}`;
  });
  contenedor.appendChild(card);

});
