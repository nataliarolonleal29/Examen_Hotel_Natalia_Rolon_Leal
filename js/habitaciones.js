const contenedor = document.getElementById("contenedor-habitaciones")
const habitaciones = [
  {
    id: 1,
    nombre: "Suite Familiar",
    camas: 2,
    personas: 4,
    baño: "Tina y regadera",
    precio: 320,
    servicios: ["Wifi", "Jacuzzi", "Minibar", "TV Smart"],
    imagen: "./assets/images/habitacion familiar.webp"
  },

  {
    id: 2,
    nombre: "Habitación Doble",
    camas: 1,
    personas: 2,
    baño: "Regadera",
    precio: 180,
    servicios: ["Wifi", "Aire acondicionado"],
    imagen: "./assets/images/habitcion doble.jpg"
  },

  {
    id: 3,
    nombre: "Habitación Matrimonial",
    camas: 1,
    personas: 2,
    baño: "Tina",
    precio: 250,
    servicios: ["Wifi", "TV Smart", "Balcón"],
    imagen: "./assets/images/habitacion matrimonial.png"
  },

  {
    id: 4,
    nombre: "Habitación Individual",
    camas: 1,
    personas: 1,
    baño: "Regadera",
    precio: 95,
    servicios: ["Wifi", "Ventilador"],
    imagen: "./assets/images/individual.jpg"
  },

  {
    id: 5,
    nombre: "Suite Deluxe",
    camas: 2,
    personas: 5,
    baño: "Tina y regadera",
    precio: 450,
    servicios: ["Wifi", "Jacuzzi", "Minibar", "Sala privada"],
    imagen: "./assets/images/suite-premium.jpg"
  },

  {
    id: 6,
    nombre: "Habitación Triple",
    camas: 3,
    personas: 3,
    baño: "Regadera",
    precio: 210,
    servicios: ["Wifi", "TV", "Escritorio"],
    imagen: ".assets/images/habitacion-triple.jpg"
  },

  {
    id: 7,
    nombre: "Suite Ejecutiva",
    camas: 1,
    personas: 2,
    baño: "Tina",
    precio: 370,
    servicios: ["Wifi", "Oficina", "Cafetera"],
    imagen: "./assets/images/habitacion ejecutiva.jpg"
  },

  {
    id: 8,
    nombre: "Suite Deluxe",
    camas: 2,
    personas: 4,
    baño: "Tina y regadera",
    precio: 390,
    servicios: ["Wifi", "Jacuzzi", "TV Smart", "Vista al mar"],
    imagen: "./assets/images/habitacion r.webp"
  },

  {
    id: 9,
    nombre: "Habitación Económica",
    camas: 1,
    personas: 2,
    baño: "Regadera",
    precio: 120,
    servicios: ["Wifi"],
    imagen: "./assets/images/habitacion economica.avif"
  },

  {
    id: 10,
    nombre: "Habitación Matrimonial",
    camas: 1,
    personas: 2,
    baño: "Tina",
    precio: 340,
    servicios: ["Wifi", "Jacuzzi", "Decoración especial"],
    imagen: "./assets/images/habitacion 2.jpg"
  },

  {
    id: 11,
    nombre: "Suite Deluxe",
    camas: 1,
    personas: 2,
    baño: "Regadera",
    precio: 230,
    servicios: ["Wifi", "TV Smart", "Aire acondicionado"],
    imagen: "./assets/images/habitacion 1.jpg"
  },

  {
    id: 12,
    nombre: "Suite Deluxe",
    camas: 1,
    personas: 3,
    baño: "Tina",
    precio: 410,
    servicios: ["Wifi", "Minibar", "Vista panorámica"],
    imagen: "./assets/images/habitacion king.jpg"
  },

  {
    id: 13,
    nombre: "Suite Ejecutiva",
    camas: 3,
    personas: 6,
    baño: "Tina y regadera",
    precio: 780,
    servicios: ["Wifi", "Piscina privada", "Jacuzzi", "Cocina"],
    imagen: "./assets/images/habitacion precidencial.jpg"
  },

  {
    id: 14,
    nombre: "Habitación Doble",
    camas: 4,
    personas: 4,
    baño: "Regadera",
    precio: 80,
    servicios: ["Wifi", "Lockers"],
    imagen: "./assets/images/doble.webp"
  },

  {
    id: 15,
    nombre: "Suite Familiar",
    camas: 3,
    personas: 5,
    baño: "Tina y regadera",
    precio: 500,
    servicios: ["Wifi", "Cocina", "TV Smart", "Balcón"],
    imagen: "./assets/images/king.avif"
  }
];
habitaciones.forEach(habitacion => {

  contenedor.innerHTML += `
  
    <div class="card">

      <img src="${habitacion.imagen}">

      <h2>${habitacion.nombre}</h2>

      <p>${habitacion.camas} camas</p>

      <p>Capacidad: ${habitacion.personas}</p>

      <p>$${habitacion.precio}</p>

      <button>Reservar</button>

    </div>

  `
})
