import { habitaciones } from "./habitaciones.js";

const contenedor = document.getElementById("card-completa");

// LEER EL ID DE LA URL
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// BUSCAR LA HABITACIÓN
const habitacion = habitaciones.find(h => h.id == id);

// MOSTRAR INFORMACIÓN
contenedor.innerHTML = `

  <div class="detalle">
    <p id="anterior">◀︎</p>
    <img src="${habitacion.imagenes[0]}" class="imagen-carrusel">
    <p id="siguiente">▶︎</p>
    <div class="info">
      <h1>${habitacion.nombre}</h1>
      <p>${habitacion.descripcion}</p>
      <p><strong>Camas:</strong> ${habitacion.camas}</p>
      <p><strong>Capacidad:</strong> ${habitacion.personas}</p>
      <p><strong>Baño:</strong> ${habitacion.baño}</p>
      <p><strong>servivios:</strong> ${habitacion.servicios}</p>
      <p><strong>Precio:</strong> $${habitacion.precio}</p>
      <a href="reservas.html?id=${habitacion.id}"><button>Reservar</button></a>
    </div>
  </div>

`;
const imagen = document.querySelector("img")
const btnSiguiente = document.getElementById("siguiente");
const btnAnterior = document.getElementById("anterior");
let indiceActual = 0;
function mostrarImagen(){

   imagen.style.opacity = 0;

   setTimeout(()=>{

      imagen.src = habitacion.imagenes[indiceActual];

      imagen.style.opacity = 1;

   },400);

}
btnSiguiente.addEventListener("click", ()=>{

   indiceActual++;

   if(indiceActual >= habitacion.imagenes.length){

      indiceActual = 0;

   }

   mostrarImagen();

});
btnAnterior.addEventListener("click", ()=>{

   indiceActual--;

   if(indiceActual < 0){

      indiceActual = habitacion.imagenes.length - 1;

   }

   mostrarImagen();

});
contenedor.addEventListener("click", () => {
   window.location.href = `habitacion.html?id=${habitacion.id}`;
 });
contenedor.appendChild();
