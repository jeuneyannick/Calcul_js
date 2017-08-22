$(function(){// window.onload = function () {};
  $(".toggle-dropdown").on("click", function(e) {
      e.preventDefault();

      var btnToggle = $(this);// on récupère la cible de l'evenement.
      var parentBlock = btnToggle.parents(".dropdown-wrapper");
      var contentBlock = parentBlock.find(".dropdown-content");// On récupère les descendants de parentBlockqui correspondent au sélecteur .drpodown-content


      // element.is("test"); vérifie que l'élément element correspond au séléecteur .test
      if(contentBlock.is(":visible")) {//vérifie si contentBlock est visible
          content.hide();

      } else {
          contentBlock.show();
      }

      //contentBlock.show();// affiche un élement
      //contentBlock.hide();// masque une élément (display)
      //contentBlock.show(800);
      //contentBlock.slideDown(400);// affiche un élément en augmentant progressivement sa hauteur
      //contentBlock.slideUp(400);// masque un élément en diminuant sa hauteur
      //contentBlock.slideToggle();// ouvre un élement fermé en augmentant sa hauteur ou ferme ouvert en diminuant sa hauteur
      //contentBlock.fadeIn();//fait appraitre un élément en augmentant progressivement l'opacité
      //contentBlock.fadeOut();//fait disparaitre un élément en diminuant l'opacité
      //contentBlock.fadeToggle();
      /*************************POPIN********************************/
      });
      $(".toggle-popin").on("click",function (e) {
          e.preventDefault();
          $(".shadows").fadeToggle();
      });




});
