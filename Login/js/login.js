var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

// constantes para registrar eventos de mouse
const inputs = document.querySelectorAll('.contenedor__login-register input');
const btnLogin = document.querySelector('.formulario__login');
const btnRegistro = document.querySelector('.formulario__register');
const cajaRegistro = document.querySelector('#btn__registrarse');
const cajaLogin = document.querySelector('#btn__iniciar-sesion');

//expresiones regulares
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,40}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,40}$/, // 4 a 40 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// campos sin validar
const campos={
    passwordLog: false,
    correoLog: false,
    usuarioReg: false,
    nombreReg: false,
    passwordReg: false,
    correoReg: false
}

//se ejecuta solo cuando e sea igual al input en el que se encuentra el usuario
const validarFormulario =(e) =>{
    switch (e.target.name){
        case "email_log":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('login_email').classList.remove('mensaje_visible');
                document.getElementById('login_email').classList.add('mensaje_oculto');
                campos.correoLog=true;
            }else{
                document.getElementById('login_email').classList.remove('mensaje_oculto');
                document.getElementById('login_email').classList.add('mensaje_visible');
                campos.correoLog=false;
            }
        break;
        case "password_log":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('login_password').classList.remove('mensaje_visible');
                document.getElementById('login_password').classList.add('mensaje_oculto');
                campos.passwordLog=true;
            }else{
                document.getElementById('login_password').classList.remove('mensaje_oculto');
                document.getElementById('login_password').classList.add('mensaje_visible');
                campos.passwordLog=false;
            }
        break;
        case "nombre_reg":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('registro_nombre').classList.remove('mensaje_visible');
                document.getElementById('registro_nombre').classList.add('mensaje_oculto');
                campos.nombreReg=true;
            }else{
                document.getElementById('registro_nombre').classList.remove('mensaje_oculto');
                document.getElementById('registro_nombre').classList.add('mensaje_visible');
                campos.nombreReg=false;
            }
        break;
        case "email_reg":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('registro_email').classList.remove('mensaje_visible');
                document.getElementById('registro_email').classList.add('mensaje_oculto');
                campos.correoReg=true;
            }else{
                document.getElementById('registro_email').classList.remove('mensaje_oculto');
                document.getElementById('registro_email').classList.add('mensaje_visible');
                campos.correoReg=false;
            }
        break;
        case "usurio_reg":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('registro_usuario').classList.remove('mensaje_visible');
                document.getElementById('registro_usuario').classList.add('mensaje_oculto');
                campos.usuarioReg=true;
            }else{
                document.getElementById('registro_usuario').classList.remove('mensaje_oculto');
                document.getElementById('registro_usuario').classList.add('mensaje_visible');
                campos.usuarioReg=false;
            }
        break;
        case "password_reg":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('registro_password').classList.remove('mensaje_visible');
                document.getElementById('registro_password').classList.add('mensaje_oculto');
                campos.passwordReg=true;
            }else{
                document.getElementById('registro_password').classList.remove('mensaje_oculto');
                document.getElementById('registro_password').classList.add('mensaje_visible');
                campos.passwordReg=false;
            }
        break;
    }
}

//ejecutamos por cada input
inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario); //comprueba al levantar una tecla
    input.addEventListener('blur', validarFormulario); //comprueba al hacer click fuera del formulario
});

cajaRegistro.addEventListener('click', register);
cajaLogin.addEventListener('click', iniciarSesion);

btnLogin.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(campos.correoLog && campos.passwordLog){
        
        reseteo();
        document.getElementById('mensaje_error-log').classList.remove('mensaje_visible');
        document.getElementById('mensaje_error-log').classList.add('mensaje_oculto');

        document.getElementById('mensaje_correcto-log').classList.remove('mensaje_oculto');
        document.getElementById('mensaje_correcto-log').classList.add('mensaje_visible');
    }
    else{
        document.getElementById('mensaje_correcto-log').classList.remove('mensaje_visible');
        document.getElementById('mensaje_correcto-log').classList.add('mensaje_oculto');

        document.getElementById('mensaje_error-log').classList.remove('mensaje_oculto');
        document.getElementById('mensaje_error-log').classList.add('mensaje_visible');
    }
});

btnRegistro.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(campos.nombreReg && campos.usuarioReg && campos.correoReg && campos.passwordReg){

        reseteo();
        document.getElementById('mensaje_error-reg').classList.remove('mensaje_visible');
        document.getElementById('mensaje_error-reg').classList.add('mensaje_oculto');

        document.getElementById('mensaje_correcto-reg').classList.remove('mensaje_oculto');
        document.getElementById('mensaje_correcto-reg').classList.add('mensaje_visible');
    }

    else{
        document.getElementById('mensaje_correcto-reg').classList.remove('mensaje_visible');
        document.getElementById('mensaje_correcto-reg').classList.add('mensaje_oculto');

        document.getElementById('mensaje_error-reg').classList.remove('mensaje_oculto');
        document.getElementById('mensaje_error-reg').classList.add('mensaje_visible');
    }

});

//restaura las cajas de inputs
function reseteo(){
    document.getElementsByClassName("password_log")[0].value = "";
    document.getElementsByClassName("email_log")[0].value = "";
    document.getElementsByClassName("password_reg")[0].value = "";
    document.getElementsByClassName("email_reg")[0].value = "";
    document.getElementsByClassName("nombre_reg")[0].value = "";
    document.getElementsByClassName("usuario_reg")[0].value = "";
}

//cambios responsivos
function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();

function iniciarSesion(){
    if (window.innerWidth > 850){
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register(){
    if (window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
} 
