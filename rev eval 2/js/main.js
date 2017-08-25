$(function(){
    var bouton = $("#bouton");
    var effet = $(".row");
    bouton.on("click", function (){
        $("#carouselExampleIndicators").toggle("passage");
    });
