$(document).ready(function(){
    $('#botonLista').click(function(){
      listaelementos();
    });

    $('#botontarjetatexto').click(function(){
        tarjeta_texto();
    });
    
    $('#botonCalcularImporte').click(function(){
        calcularImporte();
    });

    $('#botonAgregarImporte').click(function(){
        agregarImporte();
    });
});

function listaelementos() { 
    let parrafos = $("p").length;
    let divs = $("div").length;
    let lis = $("li").length;
  
    $("#elementoparrafos").append("<p>" + parrafos + "</p>");
    $("#elementodivs").append("<p>" + divs + "</p>");
    $("#elementolis").append("<p>" + lis + "</p>");
}

function tarjeta_texto() {
    let sumatorio = 0;
    let nodo = $('<p>').text($('#text').val());
    $('#elemento').append(nodo);
}

// Calcular el importe de una compra de un usuario
   
function calcularImporte() {// ejercicio 4 
    // Los datos de la compra están en un 
    // JSON , incluido en el script.
    let total = 0;
    $.each(datos_compra.productos, function(i, elemento) {
        let cantidad_descuento = elemento.importe * elemento.descuento;
        total = total + (elemento.importe - cantidad_descuento);
    });
    total = total.toFixed(2);  // Mostrando solo dos decimales
    let nodo1 = $('<p>').text(total);
    $('#importe_compra').append(nodo1);
        
    let nombree = datos_compra.Nombre;
    let nodo2 = $('<p>').text(nombree);
    $('#nombre_').append(nodo2);
}
      

// Agregar en la página el importe y día que será 
// efectuado el pago (fecha actual si la compra no es a crédito)
function agregarImporte () { // ejercicio 5
    
    let fecha_actual = new Date();
    ahora = fecha_actual.toLocaleString();
    
    if (datos_compra.pago == "inmediato") {
        nodo = document.createTextNode(ahora);
    } else {
        texto = "no inmediato";
        nodo = document.createTextNode(texto);
    }
    $("#pago_").append(nodo);
}

let datos_compra = {
    Nombre : "Pepe",
    DNI : "68583961U",
    ano_nacimiento : "1998",
    numero_cuenta : "E12 1234 1234 12 0123456789",
    pago : "inmediato",
    productos : [
        {
            nombre: "Manzanas",
            peso: 4,
            importe: 2.5,
            marca: "Auchan",
            descuento: 0
        },
        {
            nombre: "Peras",
            peso: 1,
            importe: 0.90,
            marca: "Peras La Paz",
            descuento : 0.10
        }
    ]
};