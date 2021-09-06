$(document).ready(() => {

    // Este script es para cerrar el modal del navbar en mobile cuando se selecciona un elemento para dentro de la misma pagina, ya que quedaba abierto
    $('.navbar a').click(function () {
        $('#menu-mobile').addClass("collapsed")
        $('#menu-mobile').attr("aria-expanded", "false")
        $('.navbar-collapse').removeClass("show")
    })
})