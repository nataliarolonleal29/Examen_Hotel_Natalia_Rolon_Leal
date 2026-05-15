import { habitaciones } from "./habitaciones.js";

const parteReserva = document.getElementById("reservacion");
const pago = document.getElementById("pago");

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const habitacion = habitaciones.find(h => h.id == id);

if (!habitacion) {

  parteReserva.innerHTML = `
    <h1>Habitación no encontrada</h1>
  `;

} else {

  parteReserva.innerHTML = `
    <div class="parte-habitacion">
      <h1>${habitacion.nombre}</h1>
      <p id="anterior">◀︎</p>
      <img src="${habitacion.imagenes[0]}" class="imagen-carrusel">
      <p id="siguiente">▶︎</p>
      <div class="info">
        <p>${habitacion.descripcion}</p>
        <p><strong>Camas:</strong> ${habitacion.camas}</p>
        <p><strong>Capacidad:</strong> ${habitacion.personas}</p>
        <p><strong>Baño:</strong> ${habitacion.baño}</p>
        <p><strong>Servicios:</strong> ${habitacion.servicios.join(" • ")}</p>
        <p><strong>Precio:</strong> $${habitacion.precio}</p>
        <button>Confirmar reserva</button>
      </div>
    </div>
    <div class="calendario">
      <form action="">
        <input type="date" name="calendario" id="">
        <input type="number" name="Personas" id="">
      </form>
    </div>
  `;

}

pago.innerHTML = `
  <div class="parte-pagar">

    <div class="checkout-content">
      <h3>Método de Pago</h3>
    </div>

    <div class="tarjeta-checkout">
      <input type="radio" name="pago" id="visa" checked>
      <label for="visa">💳 Visa / Mastercard</label>
    </div>

    <div class="tarjeta-checkout">
      <input type="radio" name="pago" id="efecty">
      <label for="efecty">💵 Efecty</label>
    </div>

    <div class="tarjeta-checkout">
      <input type="radio" name="pago" id="pse">
      <label for="pse">📲 PSE</label>
    </div>

  </div>
`;
const id=
function Reservar (id)
