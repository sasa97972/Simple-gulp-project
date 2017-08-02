$(document).ready(function() {

    $(".nav__responsive-mnu").click(function() {
        $(".nav__list").slideToggle(500);
        $(".nav__lines").toggleClass("nav__lines_active");
    });
    $(".nav__link").click(function() {
    if ($(".nav__responsive-mnu").is(':visible') && $(".nav__list").is(':visible')) {
        $(".nav__list").slideToggle(500);
        $(".nav__lines").toggleClass("nav__lines_active");
    }}); //Responsive menu

    var $menu = $("nav");
    $(window).scroll(function(){
        if (!$(".nav__responsive-mnu").is(':visible')) {
            if ( $(this).scrollTop() > 1){
                $("nav").addClass("nav_collapse").fadeIn(500);
            } else if($(this).scrollTop() <= 1) {
                $("nav").removeClass("nav_collapse").fadeIn(500);
            }
            console.log($("nav").height());
        }
    }); //fixed menu

});