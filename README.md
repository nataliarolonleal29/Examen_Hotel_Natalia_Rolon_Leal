# Examen Hotel el Rincón del Carmen

## Para visualizar el examen
Para visualizar el examen realizado por Natalia Rolón Leal, se debe ingresar a la página de Habitaciones, después se realiza una reserva, y cuando se dé click en el botón "Confirmar reserva", se va a visualizar la finalización del pago y **la generación de la factura de cada habitación exacta**, con sus respectivos datos específicos.
![Factura](assets/images/README%20capturas/captura%20para%20readme.png)

## Descripción
Sitio web responsive para la gestión y reserva de habitaciones de hotel, desarrollado con HTML5, CSS3 y JavaScript Vanilla, utilizando LocalStorage para la simulación de almacenamiento de datos y autenticación de usuarios.

## Descripción del Proyecto
El proyecto consiste en el desarrollo de una página web moderna, agradable y funcional para el hotel El Rincón del Carmen, permitiendo a los usuarios:

- Visualizar habitaciones y servicios del hotel.
- Consultar disponibilidad según fechas y cantidad de personas.
- Registrarse e iniciar sesión.
- Reservar habitaciones.
- Cancelar reservas.
- Gestionar usuarios y autenticación.
- Simular un panel de administrador.

Todo el funcionamiento del sistema se basa en el uso de LocalStorage, simulando el comportamiento de una base de datos.

## Funcionalidades Principales

### Landing Page
- Diseño moderno y responsive.
- Hero section principal.
- Carrusel automático de servicios.
- Galería de habitaciones.
- Sidebar responsive para navegación móvil.
- Navbar interactiva.
- Footer informativo.
![Landing_Page](assets/images/README%20capturas/landingpage.JPG)

## Sistema de Búsqueda de Habitaciones
Los usuarios pueden:

- Seleccionar fecha de entrada.
- Seleccionar fecha de salida.
- Indicar cantidad de personas.
![barra_buscadora](assets/images/README%20capturas/searchbar.JPG)

El sistema:

- Filtra habitaciones disponibles.
- Calcula automáticamente el total de noches.
- Calcula el precio total.
- Evita reservas solapadas.
- Muestra habitaciones no disponibles.
![resultados_filtrados](assets/images/README%20capturas/resultados%20filtrados.JPG)

## Sistema de Usuarios
### Registro de usuarios

Campos requeridos:

- Número de identificación
- Nombre completo
- Nacionalidad
- Teléfono
- Correo electrónico
- Contraseña
![registro](assets/images/README%20capturas/registro.JPG)

### Validaciones implementadas
- Campos obligatorios.
- Validación de correo electrónico.
- Contraseña mínima de 6 caracteres.
- Nombre y nacionalidad solo con letras.
- Teléfono solo numérico.
- Identificación única.
- Correos duplicados no permitidos.
![validaciones_registro](assets/images/README%20capturas/validaciones%20registro.JPG)

### Login y Logout
- Inicio de sesión mediante LocalStorage.
- Persistencia de sesión.
- Cierre de sesión.
- Visualización del usuario actual.
![localStorage](assets/images/README%20capturas/localstorage.JPG)

### Sistema de Reservas
- Reserva de habitaciones.
- Validación de disponibilidad.
- Almacenamiento en LocalStorage.
- Evita reservas en fechas ocupadas.
- Asociación de reservas con el usuario autenticado.
![reservas](assets/images/README%20capturas/reservas.JPG)

### Panel de Administrador
- Acceso exclusivo para administrador.
- Validación de permisos.
- Redirección protegida.
![admin_boton](assets/images/README%20capturas/admin%20perfil.JPG)

### Responsive Design

El proyecto fue optimizado principalmente para dispositivos móviles:

- Diseño adaptable.
- Carruseles responsive.
- Inputs adaptables.
- Imágenes optimizadas.
- Navbar responsive.
- Prevención de scroll horizontal.
![responsive](assets/images/README%20capturas/responsive.JPG)

### Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript ES6+
- LocalStorage
- Responsive Design
- Flexbox
- CSS Grid
![lenguajes](assets/images/README%20capturas/lenguajes.jpg)

### Estructura del Proyecto
Proyecto_Hotel_Rincon_del_Carmen_Natalia_Rolon_Sara_Colmenares
│
├── css
│   ├── style.css
|   ├── admin.css
|   ├── reservas.css
│   └── responsive.css
│
├── js
│   ├── storage.js
│   ├── admin.js
│   ├── habitaciones.js
│   ├── app.js
│   ├── detalle-habitacion.js
│   ├── reservas.js
│   ├── room-card.js
│   ├── utils.js
│   └── carrusel.js
|        └── components
|               ├── buscador.js
|               ├── carousel.js
|               └── slider.js
│
├── assets
│   └── images
│
├── index.html
├── login.html
├── register.html
├── reservas.html
├── contacto.html
├── catalogo.html
├── habitacion.html
├── admin.html
└── README.md

## Cómo Ejecutar el Proyecto
1. Abrir el proyecto
Abrir la carpeta del proyecto en Visual Studio Code.

2. Clonar el repositorio en la terminal
git clone https://github.com/nataliarolonleal29/Proyecto_Hotel_Rincon_Carmen_Natalia_Rolon_Sara_Colmenares.git

3. Ejecutar con Live Server

Se recomienda utilizar la extensión:

Live Server para evitar errores relacionados con módulos JavaScript (type="module").

## Uso de LocalStorage

El proyecto utiliza LocalStorage para almacenar:

- Usuarios registrados.
- Usuario autenticado.
- Reservas realizadas.
- Disponibilidad de habitaciones.

## Autoras
- Natalia Rolón Leal
- Sara Lucía Colmenares Bonilla

## Aprendizajes

Durante el desarrollo de este proyecto se fortalecieron conocimientos sobre:

- Manipulación del DOM.
- Eventos en JavaScript.
- LocalStorage.
- Validaciones de formularios.
- Responsive Design.
- Modularización con JavaScript.
- Diseño web adaptable.
- Manejo de arrays y objetos.
- Simulación de autenticación y reservas.