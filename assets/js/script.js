//para que funcione tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// //REQUERIMIENTO 7: alert correo enviado MEDIANTE ID previamente incorporado en HTML. Referencia en olivia ross pagina 7.

// $('#enviarCorreo').click(function (){
// alert("El correo fue enviado correctamente...")
// });

//REQUERIMIENTO 8 cambiar color de títulos a rojo al hacer doble click. Piden que sea con método ON. https://www.w3schools.com/jquery/event_on.asp#:~:text=The%20on()%20method%20attaches,()%20and%20delegate()%20methods.


//
$('body').on('dblclick','h4',function () { //también puedo poner div
$(this).css("color",'red');
});
//
// // ALTERNATIVA AL REQUERIMIENTO 8
// // $('h4').on('dblclick',function () {
// // $(this).css("color",'red');
// // });
//
//
// // REQUERIMIENTO 9: desaparecer textos de tarjetas
//
// // $('.card-title').click(function(){
// // $('.card-text').toggle();
// // });
//
// // ALTERNATIVA CON LOS TÍTULOS SEPARADOS //
// $('.panqueques').click(function(){
// $('.texto-panqueque').toggle();
// });
