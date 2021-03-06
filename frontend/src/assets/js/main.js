var widthScreen = $(window).width();

$('document').ready(function() {
    menuAdjunst(widthScreen)
    $(window).resize(function() {
        widthScreen = $(window).width();
        menuAdjunst(widthScreen)
    })



    console.log(widthScreen);
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