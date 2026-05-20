/* function irAdmin() {
    const usuarioActual=JSON.parse(localStorage.getItem("usuarioActual"));

        if(!usuarioActual){
            alert("Debes iniciar sesión");
            window.location.href="login.html";
            return;
        }

        if(usuarioActual.email !== "admin@hotel.com"){
            alert("No tienes permisos de administrador");
            return;
        }

        window.location.href="admin.html";
}

window.irAdmin=irAdmin; */