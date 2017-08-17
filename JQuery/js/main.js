    $(function(){
         $("body").css("background","red");
         //selectionne un élement
         var body = $("body");
         var contentBlock = $("#content");
         var articles = $(".text"); // liste d'élements


         var firstArticle = articles.eq(0); // sélectionne l'élement à l'index 0 de la liste articles

         var parentBlock = firstArticle.parent(); // récupère le parent direct de l'élément firstArticle (contentBlock)

         var childBlocks = contentBlock.children(); // récupère tous les enfants directs de contentBlock
         var paragraph =  contentBlock.find("p"); // récupère tous les descendants de contentBlock qui correspondent au séléecteur p.

         var pParent = paragraph.parents("#content"); // récupère les parents de paragraph qui correspondent au sélécteur #content

         var secondArticle = firstArticle.next(); //sélectionne l'élément suivant
         var reFirstArticle = second.article.prev(); // sélectionne l'élémént précédescendants
     });
