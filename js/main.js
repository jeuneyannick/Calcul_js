//commentaire de ligne
/*
commentaire de bloc
*/
// On attend que le docuement soit entièrement chargé-pas efficace à 100%.
window.onload = function () {
    var myForm = document.getElementById("my-form")
    // on récupère les champs #number-1 et #number-2
     var number1 = document.getElementById("number-1");
     var number2 = document.getElementById("number-2");
     var resultField = document.getElementById("result-field")

     // on declare la fonction calculate()
     function calculate(valeur1,valeur2){
         return valeur1 + valeur2;

     //resultField.value =result;

     //console.log(result);

    }



      // var calculate = function() {};
     //ajout d'un écouteur sur l'evenement "submit"du formulaire
     //myForm.onsubmit = function(){};

     //idem
     myForm.addEventListener("submit", function(e){
            //alert("envoi du formaulaire");

            // bloque l'envoi du formulaire vers le serveur
            e.preventDefault();
            var value1 = parseFloat(number1.value, 10);
            var value2 = parseFloat(number2.value, 10);

            if (!Number.isNaN(value1)
                && !Number.isNaN(value2))
                {
                    calculate(value1, value2);
                } else {
                    alert("erreur")
                }
                

     });
};
