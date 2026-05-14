import { habitaciones } from "./habitaciones.js";
console.log(habitaciones);
const contenedor = document.getElementById("contenedor-habitaciones")
habitaciones.forEach(habitacion => {

    contenedor.innerHTML += `
    
      <div class="card">
  
        <img src="${habitacion.imagen}">
  
        <h2>${habitacion.nombre}</h2>
  
        <p>${habitacion.camas} camas</p>
  
        <p>Capacidad: ${habitacion.personas}</p>
  
        <p class="precio">$${habitacion.precio}</p>
  
        <button>Reservar</button>
  
      </div>
  
    `
  })