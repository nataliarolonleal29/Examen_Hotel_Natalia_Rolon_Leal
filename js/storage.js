// Registro localStorage

const registroForm=document.getElementById("registro-form");

if (registroForm){
    registroForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        
        const identificacion=document.getElementById("identificacion").value.trim();
        const nombre=document.getElementById("nombre").value.trim();
        const nacionalidad=document.getElementById("nacionalidad").value.trim();
        const telefono=document.getElementById("telefono").value.trim();
        const email=document.getElementById("email").value.trim();
        const password=document.getElementById("password").value.trim();
    
        if(identificacion==="" || nombre==="" || nacionalidad==="" || telefono==="" || email==="" || password===""){
            alert("Todos los campos son obligatorios");
            return;
        }

        const nombreValid=
        /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

        if(!nombreValid.test(nombre)){
            alert("El nombre solo puede contener letras");
            return;
        }

        if(nombre.length<3){
            alert("El nombre debe tener mínimo 3 letras");
            return;
        }

        if(!nombreValid.test(nacionalidad)){
            alert("La nacionalidad solo puede contener letras");
            return;
        }

        const idValid=
        /^[0-9]+$/;

        if(!idValid.test(identificacion)){
            alert("La identificación sólo puede tener números");
            return;
        }

        if(identificacion.length<10){
            alert("La identificación es inválida");
            return;
        }

        if(identificacion.length>10){
            alert("La identificación es inválida");
            return;
        }

        if(!idValid.test(telefono)){
            alert("El teléfono solo puede contener números");
            return;
        }

        if(
            telefono.length<7 ||
            telefono.length>10
        ){
            alert("Teléfono inválido");
            return;
        }

        const emailValid=
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailValid.test(email)){
            alert("Correo inválido");
            return;
        }

        if(password.length < 6){
            alert("La contraseña debe tener mínimo 6 caracteres");
            return;
        }
    
        let usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];
    
        const exists=usuarios.find(user => user.email === email);
    
        if(exists){
            alert("El usuario ya existe");
            return;
        }

        const emailExists=usuarios.find(user => user.email === email);
        if (emailExists){
            alert("Ese correo ya está registrado");
            return;
        }

        const idExists=usuarios.find(user => user.identificacion === identificacion);
        if(idExists){
            alert("La identificación ya existe");
            return;
        }
    
        const nuevoUsuario = {

            id: Date.now(),
            identificacion,
            nombre,
            nacionalidad,
            telefono,
            email,
            password,
            rol: "cliente"
        };
        
        if(
            email === "lauragomez@gmail.com" &&
            password === "1234567"

        ){
            nuevoUsuario.rol = "admin";
        }
    
        usuarios.push(nuevoUsuario);
    
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("Usuario Registrado Correctamente");
        registroForm.reset();
        window.location.href="login.html";
    });
}



// Login localStorage
const loginForm=document.getElementById("login-form");

if(loginForm){
    loginForm.addEventListener("submit", (e)=>{
        e.preventDefault();
    
        const email=document.getElementById("email").value.trim();
        const password=document.getElementById("password").value.trim();
    
        const usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];
    
        const usuarioEncontrado=usuarios.find(usuario=>{
            return(
                usuario.email===email &&
                usuario.password===password
            );
        });
    
        if(!usuarioEncontrado){
            alert("Correo o contraseña incorrectos");
            return;
        }
        localStorage.setItem(
            "usuarioActivo",
            JSON.stringify(usuarioEncontrado)
        );
        alert(`Bienvenido ${usuarioEncontrado.nombre}`);
        window.location.href="index.html";
    });
}

function obtenerUsuarioActivo() {
            return JSON.parse(localStorage.getItem("usuarioActivo"));
        }

        const userInfo=document.getElementById("userInfo");

        if(userInfo){
            const usuarioActivo=obtenerUsuarioActivo();

            if(usuarioActivo){
                userInfo.innerHTML=`Hola, ${usuarioActivo.nombre}`;
            } else{
                userInfo.innerHTML=`Invitado`;
            }
        }


function logout() {
    localStorage.removeItem("usuarioActivo");
    window.location.href="login.html";
}        
const panelAdmin =
document.getElementById("panelAdmin");

const usuarioActivo =
JSON.parse(localStorage.getItem("usuarioActivo"));

if (panelAdmin) {

  if (
    usuarioActivo &&
    usuarioActivo.rol === "admin"
  ) {

    panelAdmin.style.display = "block";

  } else {

    panelAdmin.style.display = "none";

  }

}