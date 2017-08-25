$(function(){

    var parcours = $("#parcours");
    var competences = $("#competences");
    var experiences = $("#experiences");
    var contact = $("#contact");
    var motivation = $("#motivation");
    var linkPar = $("#par");
    var linkComp = $("#comp");
    var linkExp = $("#exp");
    var linkCont = $("#cont");
    var linkMot = $("#mot");

    linkPar.on("click",function(e){
        linkPar.addClass("brillance");
        $("brillance").css(":hover", "background: lightsalmon", "color:red", "padding:8px",);
    });
    linkComp.on("mouseover",function(e){
        linkComp.addClass("brillance");
    });
    linkCont.on("click",function(e){
        linkCont.addClass("brillance");
    });

});
