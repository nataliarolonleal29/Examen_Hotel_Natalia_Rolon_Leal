console.log("Buscador conectado");

import { habitaciones } from "../habitaciones";

import{
    obtenerReservas,
    guardarReserva
}
from "./reservas.js";

const btnBuscar=document.getElementById("btnBuscar");

const resultados=document.getElementById("resultadosHabitaciones");

btnBuscar.addEventListener("click", ()=>{
    const fechaEntrada=document.getElementById("fechaEntrada").value;
    const fechaSalida=document.getElementById("fechaSalida").value;
    const personas=Number(document.getElementById("cantidadPersonas").value);

    if(!fechaEntrada || !fechaSalida || !personas){
        alert("Completa todos los campos");
        return;
    }

    const habitacionesDisponibles=habitaciones.filter(habitacion=>{
        if(habitacion.personas < personas){
            return false;
        }

        const reservas=obtenerReservas();

        const ocupada=reservas.some(reserva=>{
            if(reserva.habitacionId !== habitacion.id){
                return false;
            }

            return !(
                fechaSalida <= reserva.fechaEntrada ||
                fechaEntrada >= reserva.fechaSalida
            );
        });

        return !ocupada;
    });

    mostrarHabitaciones(
        habitacionesDisponibles,
        fechaEntrada,
        fechaSalida,
        personas
    );
});

function mostrarHabitaciones(habitaciones,entrada,salida,personas) {
    resultados.innerHTML="";

    if(habitaciones.length===0){
        resultados.innerHTML=`<h2>No hay habitaciones disponibles😭</h2>`;
        return;
    }

    const noches=calcularNoches(entrada,salida);

    habitaciones.forEach(habitacion => {
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
                <button class="btnReservar" data-id="${habitacion.id}">Reservar</button>
            </div>
        </article>
        `;
    });

    activarBotonesReserva(entrada,salida,personas);
}

function calcularNoches(entrada,salida) {
    const fecha1= new Date(entrada);
    const fecha2= new Date(salida);
    const diferencia= fecha2-fecha1;

    return diferencia/(1000*60*60*24);
}

function activarBotonesReserva(entrada,salida,personas) {
    const botones=document.querySelectorAll(".btnReservar");
    botones.forEach(boton=>{
        boton.addEventListener("click", ()=>{
            const usuario=JSON.parse(localStorage.getItem("usuarioActual"));

            if(!usuario){
                alert("Debes iniciar sesión");

                window.location.href="login.html";
                return;
            }

            const reserva={
                habitacionId: Number(boton.dataset.id),
                usuarioId: usuario.id,
                fechaEntrada: entrada,
                fechaSalida: salida,
                personas
            };

            guardarReserva(reserva);
            alert("Reserva realizada con éxito");
        });
    });
}