

$(document).ready(function () {

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?apikey=26897ce82c7584b8fdd33d2c52a9e0ddd0c19ac8&formato=json",


    success: function (data) {




      var dolar = data.Dolares[0].Valor;
      console.log(dolar);

      var precio = $("#precio").text();
      var final = parseFloat(precio) * parseFloat(dolar);
      console.log(precio);
      console.log(final);

      $("#heroInfo").html(`
    
                      <p>Precio del dolar hoy: ${dolar}</p>  

                `)

      $("#final").html(`

        <p>${final}</p>
      `)

    },





  })

})












