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
  <div class="detalle">
    <p id="anterior">◀︎</p>
    <img src="${habitacion.imagenes[0]}" class="imagen-carrusel">
    <p id="siguiente">▶︎</p>
    <div class="info">
      <h1>${habitacion.nombre}</h1>
      <p><strong>Camas:</strong> ${habitacion.camas}</p>
      <p><strong>Capacidad:</strong> ${habitacion.personas}</p>
      <p><strong>Baño:</strong> ${habitacion.baño}</p>
      <p><strong>Servicios:</strong> ${habitacion.servicios}</p>
      <p><strong>Precio:</strong> $${habitacion.precio}</p>
      <form class="formularioReserva">
        <p>Seleccione la fecha de ingreso</p>
        <input type="date" name="calendario" id="calendario1">
        <p>Seleccione la fecha de salida:</p>
        <input type="date" name="calendario" id="calendario2">
        <p>Seleccione la cantidad de personas</p>
        <input type="number" name="" id="personas">
    </form> 
    </div>
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
let input1 =document.querySelector("#calendario1")
let input2 =document.querySelector("#calendario2")
input1.addEventListener("input", function(){
  return console.log(input1.value)
})
input2.addEventListener("input", function(){
  return console.log(input2.value)
})
function calcularNoches(input1, input2){
  let fechaIngreso = new Date(input1.value);
  let fechaSalida = new Date(input2.value);
  let resultado = fechaSalida - fechaIngreso;
  let noches = resultado / (1000 * 60 * 60 * 24);
  return noches;
}

function precio(noches){
  let cantidad = habitacion.precio;
  let resultado = noches * cantidad;
  return resultado;
}