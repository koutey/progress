const nombre = document.getElementById('nombre');
const contraseña = document.getElementById('contraseña');
const error = document.getElementById('error');
error.style.color = 'red';

function  redireccion(){
    location.href   = 'https://www.youtube.com/watch?v=zAL8i0FzxL8'     
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