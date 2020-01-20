const botonh =window.document.querySelector('#botonhome');
botonh.addEventListener('click',mostrarDatoshome);
const botonW =window.document.querySelector('#botonwhatzapp');
botonW.addEventListener('click',mostrarDatoswhatzapp);
const botonz =window.document.querySelector('#botonZpotify');
botonz.addEventListener('click',mostrarDatos);
function mostrarDatoshome(){
    const contenido =window.document.querySelector('#contenidourl');
    contenido.setAttribute('src','../home/index.html');

}

function mostrarDatoswhatzapp(){
    const contenido =window.document.querySelector('#contenidourl');
    contenido.setAttribute('src','../whatzapp/index.html');

}

function mostrarDatos(){
    const contenido =window.document.querySelector('#contenidourl');
    contenido.setAttribute('src','../Zpotify/index.html');
}