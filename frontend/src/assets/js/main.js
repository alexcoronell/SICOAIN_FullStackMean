var widthScreen = $(window).width();


$('document').ready(function() {
    var urlActual = $(location).attr('href');
    if (urlActual != 'http://localhost:4200/') {
        $(location).attr('href', '/');
    }

    menuAdjunst(widthScreen)
    $(window).resize(function() {
        widthScreen = $(window).width();
        menuAdjunst(widthScreen)
    })

})

function menuAdjunst(widthScreen) {
    if (widthScreen <= 600) {
        $(".dropdown-trigger").dropdown({
            hover: false
        });
    } else {
        $(".dropdown-trigger").dropdown({
            hover: true
        });
    }
}