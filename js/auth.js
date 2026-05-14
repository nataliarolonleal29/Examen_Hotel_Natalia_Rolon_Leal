// Registro localStorage

const registroForm=document.getElementById("registro-form");

if (registroForm){
    registroForm.addEventListener("submit", (e)=>{
        e.preventDefault();
    
        const nombre=document.getElementById("nombre").value.trim();
        const correo=document.getElementById("correo").value.trim();
        const contraseña=document.getElementById("contraseña").value.trim();
    
        if(nombre==="" || correo==="" || contraseña===""){
            alert("Todos los campos son obligatorios");
            return;
        }

        const emailValid=
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailValid.test(email)){
            alert("Correo inválido");
            return;
        }

        if(password.lenght < 6){
            alert("La contraseña debe tener mínimo 6 caracteres");
            return;
        }
    
        let usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];
    
        const exists=usuarios.find(user => user.correo === correo);
    
        if(exists){
            alert("El usuario ya existe");
            return;
        }
    
        const nuevoUsuario={
            id: Date.now(),
            nombre,
            correo,
            contraseña
        };
    
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
    
        const email=document.getElementById("login-email").value.trim();
        const password=document.getElementById("login-password").value.trim();
    
        const usuarios=JSON.parse(localStorage.getItem("usuarios")) || [];
    
        const usuarioEncontrado=usuarios.find(usuario=>{
            usuario.email===email &&
            usuario.password===password
        });
    
        //dos formas de hacerlo
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

        /* if(usuarioEncontrado){
            localStorage.setItem("loggedUser", JSON.stringify(usuarioEncontrado));
            alert("¡Bienvenido, ", usuario.nombre, "!");
    
            window.location.href="index.html";
        } else{
            alert("Datos incorrectos");
        } */
    });
}



// Logout
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href="login.html";
}

