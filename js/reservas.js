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
  <div class="detalle-reserva">
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
        <input type="number" id="personas">
        <br>
        <button id="confirmarReserva" class="botonReserva">
          Confirmar reserva
        </button>
        <div id="contenedorCancelar"></div>
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
let input1 = document.querySelector("#calendario1");
let input2 = document.querySelector("#calendario2");

const botonReserva = document.querySelector("#confirmarReserva");
const usuarioActivo = JSON.parse(
    localStorage.getItem("usuarioActivo")
);
const contenedorCancelar = document.querySelector("#contenedorCancelar");


// ARRAY DONDE SE GUARDAN LAS RESERVAS
let reservas = [];


// -------------------------
// CALCULAR NOCHES
// -------------------------

function calcularNoches() {

  let fechaIngreso = new Date(input1.value);
  let fechaSalida = new Date(input2.value);

  let resultado = fechaSalida - fechaIngreso;

  let noches = resultado / (1000 * 60 * 60 * 24);

  return noches;
}


// -------------------------
// CALCULAR PRECIO
// -------------------------

function precio(noches) {

  let cantidad = habitacion.precio;

  let resultado = noches * cantidad;

  return resultado;
}


// -------------------------
// VALIDAR SOLAPAMIENTO
// -------------------------

function haySolapamiento(nuevaEntrada, nuevaSalida) {

  for (let reserva of reservas) {

    let entradaExistente = new Date(reserva.ingreso);
    let salidaExistente = new Date(reserva.salida);

    // VALIDACIÓN DE SOLAPAMIENTO
    if (
      nuevaEntrada < salidaExistente &&
      nuevaSalida > entradaExistente
    ) {

      return true;
    }
  }

  return false;
}


// -------------------------
// REGISTRAR RESERVA
// -------------------------
function verificarSesion(){

    const usuarioActivo = JSON.parse(
        localStorage.getItem("usuarioActivo")
    );

    if(!usuarioActivo){

        alert("Debes iniciar sesión");

        return false;
    }

    return true;
}
function registrarReserva(e) {

  e.preventDefault();

  // VALIDAR SESIÓN
  if (!verificarSesion()) {
    window.location.href = "login.html";
    return;
  }

  let fechaIngreso = new Date(input1.value);
  let fechaSalida = new Date(input2.value);

  // VALIDAR FECHAS VACÍAS
  if (!input1.value || !input2.value) {

    alert("Debes seleccionar ambas fechas");

    return;
  }

  // VALIDAR QUE LA SALIDA SEA MAYOR
  if (fechaSalida <= fechaIngreso) {

    alert("La fecha de salida debe ser mayor");

    return;
  }

  let noches = calcularNoches();

  // VALIDAR MÁXIMO 33 DÍAS
  if (noches > 33) {

    alert("No se permiten reservas mayores a 33 días");

    return;
  }

  // VALIDAR SOLAPAMIENTO
  if (haySolapamiento(fechaIngreso, fechaSalida)) {

    alert("La habitación ya está reservada en esas fechas");

    return;
  }

  // CREAR OBJETO RESERVA
  let nuevaReserva = {
    ingreso: input1.value,
    salida: input2.value,
    noches: noches,
    total: precio(noches),
    usuario: usuarioActivo.email
  };

  // GUARDAR RESERVA
  reservas.push(nuevaReserva);

  console.log(reservas);

  alert("Reserva registrada correctamente");
  // CREAR BOTÓN CANCELAR SOLO DESPUÉS DE RESERVAR

  if (!document.querySelector("#cancelarReserva")) {

  contenedorCancelar.innerHTML = `
  
    <button id="cancelarReserva">
      Cancelar reserva
    </button>
  
  `;
  const botonCancelar = document.querySelector("#cancelarReserva");
  botonCancelar.addEventListener("click", cancelarReserva);
}
}
// -------------------------
// CANCELAR RESERVA
// -------------------------
function cancelarReserva(e) {
  e.preventDefault();
  if (reservas.length === 0) {
    alert("No hay reservas");
    return;
  }
  reservas.pop();
  console.log(reservas);
  alert("Última reserva cancelada");
  contenedorCancelar.innerHTML = "";
}
// -------------------------
// EVENTOS
// -------------------------
botonReserva.addEventListener("click", registrarReserva);
botonCancelar.addEventListener("click", cancelarReserva);