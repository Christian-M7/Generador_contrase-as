let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');
let botonCopiar = document.getElementById('copiar');
let mensajeSeguridad = document.getElementById('mensajeSeguridad');

const cadenaCarateres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890!@#$%^&*()';

function generarClave(){

    let numeroCantidad = parseInt (cantidad.value);
    console.log(numeroCantidad);

    if(isNaN(numeroCantidad) || numeroCantidad < 6 ){
        alert("La cantidad de caracteres debe de ser mayor a 6");
        return;
    } 

    let newpassword = '';
    for( let i = 0; i < numeroCantidad; i++ ){

        let caracteresAleatorios = cadenaCarateres [Math.floor(Math.random() * cadenaCarateres.length)];

        console.log(caracteresAleatorios);

        newpassword += caracteresAleatorios;

    }

    console.log('su nueva contraseña es:', newpassword);

    contraseña.value = newpassword;
    validarSeguridadContraseña(newpassword);

}

function validarSeguridadContraseña(newpassword) {
    let tieneMayuscula = /[A-Z]/.test(newpassword);
    let tieneMinuscula = /[a-z]/.test(newpassword);
    let tieneNumero = /[0-9]/.test(newpassword);
    let tieneEspecial = /[!@#$%^&*()]/.test(newpassword);

    mensajeSeguridad.className = "mensaje-seguridad";
    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        mensajeSeguridad.innerHTML = "Contraseña fuerte";
        mensajeSeguridad.style.color = "green";
    } else {
        mensajeSeguridad.innerHTML = "Contraseña débil: debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.";
        mensajeSeguridad.style.color = "red";
    }
}

function limpiarCampo(){

    cantidad.value = '';
    contraseña.value = '';
    mensajeSeguridad.innerHTML = '';

}

function copiarContraseña() {
    if (contraseña.value !== '') {
        navigator.clipboard.writeText(contraseña.value)
            .then(() => {
                alert('Contraseña copiada al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar la contraseña', err);
            });
    } else {
        alert('No hay contraseña generada para copiar.');
    }
}