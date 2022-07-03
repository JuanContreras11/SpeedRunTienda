const inputs = document.querySelectorAll('.formulario__login input');
var formularioLog = $(".formulario__login");
var formularioReg = $(".formulario__register");

//metodo personalizados para los telefonos, correo y nombre
jQuery.validator.addMethod("usuario", function(value, element) {
    return this.optional( element ) || /^[a-zA-Z0-9\_\-]{4,40}$/.test( value );
}, 'Ingrese un usuario valido');
  
jQuery.validator.addMethod("correo", function(value, element) {
    return this.optional( element ) || /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test( value );
}, 'Ingrese un correo valido');  

jQuery.validator.addMethod("nombre", function(value, element) {
    return this.optional( element ) || /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test( value );
}, 'Ingrese su nombre');  


//metodo de validacion jQuery
$(document).ready(function() {

    //formulario de login
    formularioLog.validate({
        errorClass: "no_valido",
        rules:{
            email_log:{
                required: true,
                minlength: 4,
                correo: true
            },
            password_log:{
                required: true,
                minlength: 8
            }
        },
        messages:{
            email_log:{
                required: "Por favor, ingrese un correo",
                minlength: "Correo demasiado corto",
                correo: "el correo ingresado no es valido"
            },
            password_log:{
                required: "Ingrese su contraseña",
                minlength: "Su password es muy corto"
            }
        },
        submitHandler: function(form) {
        form.submit();
        alert("Ha iniciado sesion correctamente");
        }
    });

    //formulario de registro
    formularioReg.validate({
        errorClass: "no_valido",
        rules:{
            nombre_reg:{
                required: true,
                minlength: 3,
                nombre: true
            },
            email_reg:{
                required: true,
                minlength: 5,
                correo: true
            },
            usuario_reg:{
                required: true,
                minlength: 5,
                usuario: true
            },
            password_reg:{
                required: true,
                minlength: 5
            }
        },
        messages:{
            nombre_reg:{
                required: "Por favor, ingrese su nombre",
                minlength: "Nombre demasiado corto",
                nombre: "Caracteres no permitidos en el nombre"
            },
            email_reg:{
                required: "Ingrese un correo de contacto",
                minlength: "Correo muy corto",
                correo: "Su correo no es valido"
            },
            usuario_reg:{
                required: "Ingrese un nombre de usuario",
                minlength: "Su nombre de usuario debe tener mas de 4 caracteres de largo",
                usuario: "Caracteres no permitidos en el nombre Usuario"
            },
            password_reg:{
                required: "Ingrese una contraseña",
                minlength: "Su contraseña es muy débil"
            }
        },
        submitHandler: function(form) {
        form.submit();
        alert("Se ha registrado exitosamente");
        }
    });

});

//variables para el comportamiento animado de los formularios
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

// eventos click que gatillan la animacion en jQuery
$( "#btn__iniciar-sesion" ).click(function() {
    iniciarSesion();
});

$( "#btn__registrarse" ).click(function() {
    register();
});

$(window).on('resize', function(){
    anchoPage();
});

//funciones para el control de la animacion
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