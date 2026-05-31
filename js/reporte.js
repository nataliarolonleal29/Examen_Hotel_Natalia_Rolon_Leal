function generarReporte() {

    const añoSeleccionado =
        document.getElementById("año").value;

    document.getElementById("tituloReporte").textContent =
        `Reporte del año ${añoSeleccionado}`;

    const reservas =
        JSON.parse(localStorage.getItem("reservas")) || [];

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    const tabla =
        document.getElementById("tablaReporte");

    tabla.innerHTML = "";

    console.log("Año seleccionado:", añoSeleccionado);
    console.log("Tipo:", typeof añoSeleccionado);

    for(let i = 0; i < 12; i++){

        let ocupacion = 0;
        let cancelaciones = 0;

        reservas.forEach(reserva => {

            /* const fecha = new Date(reserva.ingreso);
        
            const año = fecha.getFullYear();
        
            const mes = fecha.getMonth(); */

            const [añoReserva, mesReserva] = reserva.ingreso.split("-");

            const año = Number(añoReserva);
            const mes = Number(mesReserva) - 1;
        
            console.log(
                "Reserva:",
                reserva.ingreso,
                "Año reserva:",
                año,
                "Año seleccionado:",
                añoSeleccionado,
                "Mes:",
                mes
            );
        
            if (
                Number(añoSeleccionado) === año &&
                mes === i
            ) {
                ocupacion++;
            }
            console.log(
                Number(añoSeleccionado),
                año,
                Number(añoSeleccionado) === año);
        });

        /* reservas.forEach(reserva => {

            const fecha =
                new Date(reserva.fechaEntrada);

            const año =
                fecha.getFullYear();

            const mes =
                fecha.getMonth();

            if(
                año == añoSeleccionado &&
                mes === i
            ){

                if(reserva.estado === "ocupada"){
                    ocupacion++;
                }

                if(reserva.estado === "cancelada"){
                    cancelaciones++;
                }
            }

        }); */

        tabla.innerHTML += `
            <tr>
                <td>${meses[i]}</td>
                <td>${ocupacion}</td>
                <td>${cancelaciones}</td>
            </tr>
        `;
    }

    console.log(reservas);
    
    reservas.forEach(reserva => {
        console.log(reserva.ingreso);
    });

}