const inputs = document.querySelectorAll('.formulario__Contacto input');
const enviar = document.querySelector('.formulario__Contacto');
var formulario = $(".formulario__Contacto");


//metodo personalizados para los telefonos, correo y nombre
jQuery.validator.addMethod("telefono", function(value, element) {
    return this.optional( element ) || /^[+]?\d{7,13}$/.test( value );
}, 'Ingrese un telefono valido');
  
jQuery.validator.addMethod("correo", function(value, element) {
    return this.optional( element ) || /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test( value );
}, 'Ingrese un correo valido');  

jQuery.validator.addMethod("nombre", function(value, element) {
    return this.optional( element ) || /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test( value );
}, 'Ingrese su nombre');  

$(document).ready(function() {
    formulario.validate({
        errorClass: "no_valido",
        rules:{
            nombre: {
                required: true,
                minlength: 4,
                nombre: true
            },
            correo:{
                required: true,
                minlength: 4,
                correo: true
            },
            telefono:{
                telefono:true,
                required: true,
                minlength: 8,
                maxlength: 13
            },
            mensaje:{
                required: true,
                minlength: 8
            }
        },
        messages:{
            nombre:{
                required: "Por favor, ingrese su nombre",
                minlength: "Su nombre debe contener al menos 4 caracteres",
                nombre: "Caracteres no permitidos en el nombre"
            },
            correo:{
                required: "Por favor, ingrese un correo",
                correo: "el correo ingresado no es valido"
            },
            telefono:{
                required: "Por favor, ingrese un telefono de contacto",
                minlength: "Su telefono debe tener al menos 8 digitos",
                telefono: "Por favor, ingrese un telefono valido",
                maxlength: "telefono demasiado largo"
            },
            mensaje:{
                required: "Ingrese una consulta",
                minlength: "Su consulta es muy corta"
            }
        },
        submitHandler: function(form) {
        form.submit();
        alert("Su consulta ha sido enviada");
        }
    });

});



//comportamiento boton solo con jquery
/*
$("#btn_Contacto").click(function(event){
    alert("Su consulta ha sido enviada");
    $('#formulario__Contacto').submit();
    $("#formulario__Contacto").trigger("reset");
}); */

