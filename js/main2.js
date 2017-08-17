$(function() {
    var leftField = $("#left");
    var topField = $("#top");
    var block = $("#block");

    $("#my-form").on("submit",function(e) {
        e.preventDefault();


        var leftValue = parseInt(leftField.val());
        var topValue = parseInt(topField.val());

        if ($.isNumeric(leftValue) && $.isNumeric(topValue)) {
            block.stop().animate({"left": leftValue, "top": topValue}, 30000); // équivalent de
            //block.style.left = leftValue


        }

    });

});
