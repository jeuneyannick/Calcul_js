function toggleBackgroundColor (color) {
    document.body.style.backgroundColor = color;
    document.getElementById("btn-blue").style.color = "bisque";
     var newParagraph = document.createElement("p");
     newParagraph.innerHTML = "<strong> Du texte </strong>";
     document.body.appendChild(newParagraph);
}


window.onload = function () {

    var blueButton = document.getElementById("btn-blue");

    blueButton.addEventListener("click", function () {

           toggleBackgroundColor ("blue");
    });

}
