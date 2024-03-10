const datoNombre = document.querySelector('#datoNombre');
const datoContacto = document.querySelector('#datoContacto');
const datoMensaje = document.querySelector('#datoMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

var mensaje;

function enviar (){
    mensaje = `https://api.whatsapp.com/send?phone=543764293332&text="hola,%20mi%20nombre%20es%20${datoNombre.value}%20estoy%20interesados%20en%20contratar%20sus%20servisios%20${datoMensaje.value}%20puede%20contactarme%20desde%20${datoContacto.value}"
    `;
    btnEnviar.href= mensaje;
}