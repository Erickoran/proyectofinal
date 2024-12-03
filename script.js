// Función para manejar el clic en el botón "Solicitar más información"
function contactar(vehiculo) {
    alert("Has solicitado más información sobre: " + vehiculo);
}

// Función para enviar el formulario de contacto
function enviarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    alert('Gracias, ' + nombre + '. Hemos recibido tu mensaje: \n' + mensaje + '\nTe contactaremos pronto a ' + email + '.');

    document.getElementById('formContacto').reset(); // Resetea el formulario después de enviarlo
}

"scripts": {
  "test": "mocha"
}

