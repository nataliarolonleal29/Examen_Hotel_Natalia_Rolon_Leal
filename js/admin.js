const usuarioActivo = JSON.parse(
  localStorage.getItem("usuarioActivo")
);

// PROTEGER PANEL
if (!usuarioActivo || usuarioActivo.rol !== "admin") {

  alert("No tienes permisos");

  window.location.href = "index.html";
}

const contenedor =
document.getElementById("contenedorAdmin");

let reservas =
JSON.parse(localStorage.getItem("reservas")) || [];

mostrarReservas();

function mostrarReservas() {

  contenedor.innerHTML = "";

  reservas.forEach(reserva => {

    const card = document.createElement("div");

    card.classList.add("card-admin");

    card.innerHTML = `

      <h2>${reserva.habitacion}</h2>

      <p>Usuario:
      ${reserva.usuario}</p>

      <p>Ingreso:
      ${reserva.ingreso}</p>

      <p>Salida:
      ${reserva.salida}</p>

      <p>Total:
      $${reserva.total}</p>

      <button class="editar">
        Editar
      </button>

      <button class="eliminar">
        Eliminar
      </button>

    `;

    // BOTÓN ELIMINAR
    const btnEliminar =
    card.querySelector(".eliminar");

    btnEliminar.addEventListener("click", () => {

      eliminarReserva(reserva.id);

    });

    // BOTÓN EDITAR
    const btnEditar =
    card.querySelector(".editar");

    btnEditar.addEventListener("click", () => {

      editarReserva(reserva.id);

    });

    contenedor.appendChild(card);

  });

}
function eliminarReserva(id) {

  reservas = reservas.filter(
    reserva => reserva.id !== id
  );

  localStorage.setItem(
    "reservas",
    JSON.stringify(reservas)
  );

  mostrarReservas();

}
function editarReserva(id) {

  const nuevaFecha =
  prompt("Nueva fecha de ingreso");

  reservas = reservas.map(reserva => {

    if (reserva.id === id) {

      reserva.ingreso = nuevaFecha;
    }

    return reserva;

  });

  localStorage.setItem(
    "reservas",
    JSON.stringify(reservas)
  );

  mostrarReservas();

}