$(function() {
    var btn = $("#toggle-nav");

    btn.on("click", function(e) {
        e.preventDefault();

        $("#main-nav").toggleClass("opened")

    });
  //btn.off("click"); // supprime l'écouteur d'évenement click sur btn

});
// vider le cache du navigateur: ctrl/cmd shift R
// pour vider le cache; on peut avoir des extensions
