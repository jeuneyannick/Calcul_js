window.onload = function () {
    var links = document.getElementsByTagName("a");
    console.log(links);

    links[2].style.color = "darkred"; // change la couleur du troisième élément du tableau links
    // récupere une liste d'éléments par leur class

    var activeLinks = document.getElementsByClassName("active-link");
    console.log("test")

    activeLinks[0].style.color = "";
    links[0].className += "test";// ajoute une className

    // ajoute une classe au second lien
    links[1].classList.add("test");
    var lastLink = links[links.length - 1];
    // vérifie que lastLink a la classe active-link
     console.log(lastLink.classList.contains("active-link"));
    // supprime une classe au dernier lien
    lastLink.classList.remove("active-link");

    console.log(lastLink.classList.contains("active-link"));
    // si on ajoute une classe si elle n'est pas présente; on la supprime sinon

    links[2].classList.toggle("test"); // supprime la classe
    links[3].classList.toggle("test"); // ajoute la classe

    // sélectionne le premier élément qui correspond au sélecteur
    var  elem = document.querySelector(".active-link")
    // sélectionne tous les éléments qui correspondent au sélécteur
    var elems = document.querySelectorAll(".active-link")

    // crée un nouvel élément
    var newLink = document.createElement("a");
    newLink.href ="#";
    newLink.textContent = "Nouveau Lien";

    // insère l'élement dans le body (à la fin)
    document.body.appendChild(newLink);

    var nav = document.getElementById("main-nav");
    // insère l'élément avant l'élément nav
    document.body.insertBefore(newLink,nav)

    //récupère l'élément directement après
    console.log(newLink.nextSibling);

    






}
