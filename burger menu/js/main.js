window.onload = function () {

    var nav = document.getElementById("main-nav");
    var btn = document.getElementById("toggle-nav");
    //on ajoute un écouteur d'évenement sur l'evenement click ou button
    var toggleNav = function(e) {
        e.preventDefault();//supprime le comportement par défaut de l'evenement
        //nav.style.right = "0";
        nav.classList.toggle("opened");
    };
    //on ajoute un écouteur d'évenement sur l'evenement click du bouton
    btn.addEventListener("click",toggleNav);

    //on supprime l'écouteur d'évenement
    //btn.removeEventListener("click",toggleNav);

}
