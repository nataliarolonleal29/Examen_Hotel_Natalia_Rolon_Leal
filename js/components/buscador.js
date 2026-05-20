import { habitaciones }
from "../habitaciones.js";
/*console.log("Buscador FUNCIONA");*/

const btnBuscar=document.getElementById("btnBuscar");
const resultados=document.getElementById("resultadosHabitaciones");

btnBuscar.addEventListener("click", ()=>{
    console.log("CLICK DETECTADO");

    const fechaEntrada=document.getElementById("fechaEntrada").value;
    const fechaSalida=document.getElementById("fechaSalida").value;
    const personas=Number(document.getElementById("cantidadPersonas").value);

    if(fechaEntrada==="" || fechaSalida==="" || personas===0){
        alert("Debes completar todos los campos");
        return;
    }

    if(fechaEntrada>=fechaSalida){
        alert("La fecha de salida debe ser mayor");
        return;
    }

    const reservas=JSON.parse(localStorage.getItem("reservas")) || [];

    const habitacionesDisponibles=habitaciones.filter(habitacion=>{
        if(habitacion.personas < personas){
            return false;
        }

        const reservada=reservas.some(reserva=>{
            return(reserva.habitacionId===habitacion.id &&(
                fechaEntrada<reserva.fechaSalida &&
                fechaSalida<reserva.fechaEntrada
            ));
        });
        
        return !reservada;

    });

    mostrarHabitaciones(
        habitacionesDisponibles,
        fechaEntrada,
        fechaSalida,
        personas
    );
});

function mostrarHabitaciones(habitacionesFiltradas,fechaEntrada,fechaSalida,personas) {
    resultados.innerHTML="";

    if(habitacionesFiltradas.length===0){
        resultados.innerHTML=`<h2>No hay habitaciones disponibles😭</h2>`;
        return;
    }

    const noches=calcularNoches(fechaEntrada,fechaSalida);

    habitacionesFiltradas.forEach(habitacion => {
        const total=habitacion.precio*noches;

        resultados.innerHTML +=`
        <article class="card-habitacion">
            <img src="${habitacion.imagenes[0]}" alt="habitacion">
            <div class="info-habitacion">
                <h3>${habitacion.nombre}</h3>
                <p>👥 ${habitacion.personas} personas</p>
                <p>🛏️ ${habitacion.camas} camas</p>
                <p>💲 ${habitacion.precio} por noche</p>
                <p>🌙 ${noches} noches</p>
                <h4>Total: $${total}</h4>
                <button class="btnReservar" onclick="reservarHabitacion(
                    ${habitacion.id},
                    '${fechaEntrada}',
                    '${fechaSalida}'
                )">Reservar</button>
            </div>
        </article>
        `;
    });
}

function calcularNoches(fechaEntrada,fechaSalida) {
    const entrada= new Date(fechaEntrada);
    const salida= new Date(fechaSalida);
    const diferencia= salida-entrada;

    return diferencia / (1000 * 60 * 60 * 24);
}

window.reservarHabitacion=
function (
    habitacionId,
    fechaEntrada,
    fechaSalida
){
    const usuarioActual=JSON.parse(localStorage.getItem("usuarioActual"));

    if(!usuarioActual){
        window.location.href="catalogo.html";
        /* alert("Debes iniciar sesión");
        window.location.href="login.html";
        return;*/
    }

    const reservas=JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push({
        id: Date.now(),
        usuarioId: usuarioActual.id,
        habitacionId,
        fechaEntrada,
        fechaSalida
    });

    localStorage.setItem("reservas", JSON.stringify(reservas));
    alert("Reserva realizada con éxito");
}