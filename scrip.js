// Modo oscuro //

let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function(){
    let val = body.classList.toggle("dark")
    localStorage.setItem("modo",val)
});

let valor = localStorage.getItem("modo");

if(valor == "true"){
    body.classList.add("dark")
}else{
    body.classList.remove("dark")
};


// Contacto //

class Formulario{
    constructor(nombreFormulario,apellidoFormulario,emailFormulario,asuntoFormulario){
        this.nombre = nombreFormulario;
        this.apellido = apellidoFormulario;
        this.email = emailFormulario;
        this.asunto = asuntoFormulario;
    }
};

let usuario = []

let nombreApellido = /^[a-zA-ZáéíóúñÑ]*$/;

let correo = /^[a-zA-Z0-9.+@\.com]*$/;

let numero = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;

let mensaje = /^[a-zA-Z0-9áéíóúñÑ_]*$/;

let nombre = document.getElementById("nombre");

let apellido = document.getElementById("apellido");

let email = document.getElementById("email");

let asunto = document.getElementById("asunto");

let boton = document.getElementById("enviar");

let labelNombre = document.getElementById("labelNombre")

let labelApellido = document.getElementById("labelApellido")

let labelCorreo = document.getElementById("labelCorreo")

let labelAsunto = document.getElementById("labelAsunto")



nombre.addEventListener("keyup",function(){
    if(nombreApellido.test(nombre.value)){
        console.log("Campo valido")
        labelNombre.innerText = "Campo valido";
        labelNombre.style.color = "blue"
        labelNombre.style.fontSize = "13px"
        
    }else{
        console.log("Campo incorrepto")
        labelNombre.innerText = "Campo incorrecto";
        labelNombre.style.color = "red"
        labelNombre.style.fontSize = "13px"
    }

    if(nombre.value == ""){
        console.log("Campo vacio")
        labelNombre.innerText = "Campo vacio";
        labelNombre.style.color = "black"
        labelNombre.style.fontSize = "13px"
    }
});


apellido.addEventListener("keyup",function(){
    if(nombreApellido.test(apellido.value)){
        console.log("Campo valido")
        labelApellido.innerText = "Campo valido";
        labelApellido.style.color = "blue"
        labelApellido.style.fontSize = "13px"
        
    }else{
        console.log("Campo incorrepto")
        labelApellido.innerText = "Campo incorrecto";
        labelApellido.style.color = "red"
        labelApellido.style.fontSize = "13px"
    }

    if(apellido.value == ""){
        console.log("Campo vacio")
        labelApellido.innerText = "Campo vacio";
        labelApellido.style.color = "black"
        labelApellido.style.fontSize = "13px"
    }
});


email.addEventListener("keyup",function(){
    if(correo.test(email.value)){
        console.log("Campo valido")
        labelCorreo.innerText = "Campo valido";
        labelCorreo.style.color = "blue"
        labelCorreo.style.fontSize = "13px"
        
    }else{
        console.log("Campo incorrepto")
        labelCorreo.innerText = "Campo incorrecto";
        labelCorreo.style.color = "red"
        labelCorreo.style.fontSize = "13px"
    }

    if(email.value == ""){
        console.log("Campo vacio")
        labelCorreo.innerText = "Campo vacio";
        labelCorreo.style.color = "black"
        labelCorreo.style.fontSize = "13px"
    }
});


asunto.addEventListener("keyup",function(){
    if(mensaje.test(asunto.value)){
        console.log("Campo valido")
        labelAsunto.innerText = "Campo valido";
        labelAsunto.style.color = "blue"
        labelAsunto.style.fontSize = "13px"
        
    }else{
        console.log("Campo incorrepto")
        labelAsunto.innerText = "Campo incorrecto";
        labelAsunto.style.color = "red"
        labelAsunto.style.fontSize = "13px"
    }

    if(asunto.value == ""){
        console.log("Campo vacio")
        labelAsunto.innerText = "Campo vacio";
        labelAsunto.style.color = "black"
        labelAsunto.style.fontSize = "13px"
    }

});


function guardado(evento){

    evento.preventDefault();

    usuario.push( new Formulario(nombre,apellido,email,asunto) )

    console.log("Usuario guardado");

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("asunto").value = "";
    
};

enviar.addEventListener("click", guardado);



// Reloj //

function tiempo() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;

    mm = (mm < 10) ? "0" + mm : mm;

    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" +ss;

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time
}

setInterval(tiempo, 1000)
