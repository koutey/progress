const nombre = document.getElementById('nombre');
const contraseña = document.getElementById('contraseña');
const error = document.getElementById('error');
error.style.color = 'red';
let contenedor = document.getElementById('contenedor')
let lista = []

function  redireccion(){
    window.location.href  = 'aaa.html'     
}

function funcionEnviar(){

    var mensajeError = [];

    if(nombre.value == '' || nombre.value == null){
        mensajeError.push('ingresa un nombre')
    }
    else if(contraseña.value == '' || contraseña.value == null){
        mensajeError.push('ingresa una contraseña')
    }   else{
        redireccion();
    }
    error.innerHTML = mensajeError.join(', ');

    return false;
}

