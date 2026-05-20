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
    <img src="${habitacion.imagenes[0]}" class="imagen-carrusel">
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

let input1 = document.querySelector("#calendario1");
let input2 = document.querySelector("#calendario2");

const botonReserva = document.querySelector("#confirmarReserva");
const usuarioActivo = JSON.parse(
    localStorage.getItem("usuarioActivo")
);
const contenedorCancelar = document.querySelector("#contenedorCancelar");


// ARRAY DONDE SE GUARDAN LAS RESERVAS
let reservas =
JSON.parse(localStorage.getItem("reservas")) || [];


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

function haySolapamiento(
  nuevaEntrada,
  nuevaSalida,
  habitacionId
) {

  for (let reserva of reservas) {

    // SOLO VALIDAR MISMA HABITACIÓN
    if (reserva.habitacionId === habitacionId) {

      let entradaExistente =
      new Date(reserva.ingreso);

      let salidaExistente =
      new Date(reserva.salida);

      // VALIDAR FECHAS
      if (
        nuevaEntrada < salidaExistente &&
        nuevaSalida > entradaExistente
      ) {

        return true;
      }
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
function mostrarPago() {

  pago.innerHTML = `

    <div class="parte-pagar">

      <div class="checkout-content">
        <h2>Finalizar Reserva</h2>
      </div>

      <form class="formularioPago">

        <label>Nombre completo</label>
        <input type="text" required>

        <label>Nacionalidad</label>
        <input type="text" required>

        <label>Edad</label>
        <input type="number" required>

        <label>Cédula</label>
        <input type="number" required>

        <h3>Método de Pago</h3>

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

        <button type="submit" class="btn-pagar">
          Pagar reserva
        </button>

      </form>

    </div>

  `;
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
  if (
  haySolapamiento(
    fechaIngreso,
    fechaSalida,
    habitacion.id
  )){

    alert("La habitación ya está reservada en esas fechas");

    return;
  }

  // CREAR OBJETO RESERVA
  let nuevaReserva = {
    id: Date.now(),
    ingreso: input1.value,
    salida: input2.value,
    noches: noches,
    total: precio(noches),
    usuario: usuarioActivo.email,
    habitacion: habitacion.nombre,
    habitacionId: habitacion.id
};

  // GUARDAR RESERVA
  reservas.push(nuevaReserva);

  localStorage.setItem(
    "reservas",
    JSON.stringify(reservas)
  );

  console.log(reservas);

  alert("Reserva registrada correctamente");
  mostrarPago();
  // CREAR BOTÓN CANCELAR SOLO DESPUÉS DE RESERVAR
   if (!document.querySelector("#cancelarReserva")) {

    contenedorCancelar.innerHTML = `
    
      <button id="cancelarReserva">
        Cancelar reserva
      </button>
    
    `;
  const botonCancelar = document.querySelector("#cancelarReserva");
  botonCancelar.addEventListener("click", () => {
    cancelarReserva(nuevaReserva.id);
  });
}
}

// -------------------------
// CANCELAR RESERVA
// -------------------------
function cancelarReserva(idReserva) {

  reservas = reservas.filter(
    reserva => reserva.id !== idReserva
  );

  localStorage.setItem(
    "reservas",
    JSON.stringify(reservas)
  );

  alert("Reserva cancelada");
}
  // Obtener reserva con barra buscadora
  export function obtenerReservas() {
    return JSON.parse(localStorage.getItem("reservas")) || [];
  }

<<<<<<< HEAD
  export function guardarReserva(reserva) {
    const reservas=obtenerReservas();
    reservas.push(reserva);

  localStorage.setItem("reservas", JSON.stringify(reservas));
}
botonReserva.addEventListener(
  "click",
  registrarReserva
);
=======

// Obtener reserva con barra buscadora
/* export function obtenerReservas() {
  return JSON.parse(localStorage.getItem("reservas")) || [];
}

export function guardarReserva(reserva) {
  const reservas=obtenerReservas();
  reservas.push(reserva);

  localStorage.setItem("reservas", JSON.stringify(reservas));
} */
>>>>>>> 75509ff7f2dc30dabaa494a39eac8d050cf8f460
