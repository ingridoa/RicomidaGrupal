const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//AL HACER CLICK A NUESTRO BOTON ENNVIAR POR CORREO, SALDRA UNA ALERTA INDICANDO QUE EL CORREO YA FUE ENVIADO
$("#enviarCorreo").click(function() {
    console.log ("Prueba")
    alert("El correo fue enviado correctamente");
});

//AL HACER DOBLECLICK A LOS DOS UNICOS TITULOS CON "H4" QUE SE TIENE EN LA PAGINA, CAMBIARA DE COLOR ROJO
$("h1").on("dblclick", function() {
    $(this).css("color", "red");
});

//SELECCIONA TODOS LOS CONTENIDOS DE LAS TARJETAS Y ALTERNA SU VISIBILIDAD (DESAPARECE EL CONTENIDO MAS NO LAS IMAGENES NI EL TITULO)
$(".card-title").click(function() {
    $(".card-text").toggle();
});