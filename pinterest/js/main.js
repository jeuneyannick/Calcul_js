$(function(){
    var columnWidth = $("#wrapper").width()/ 5;
    $("#wrapper").masonry({itemSelector : ".item", columnWidth : columnWidth });
    var grid = $("#wrapper").masonry({itemSelector : ".item", columnWidth : columnWidth,
     transitionDuration : 0});

    grid.imagesLoaded().progress(function () {// fonction de callback qui est appelée à chaque chargement d'une image dans le conteneur
        grid.masonry("layout");

    });

});
