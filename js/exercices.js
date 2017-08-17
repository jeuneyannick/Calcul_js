window.onload = function (){
    var leftField = document.getElementById("left");
    var topField = document.getElementById("top");
    var block = document.getElementById("block")
    var myForm = document.getElementById('my-Form');
    document.getElementById('div');
    var timer;
    var move = function (e){
        e.preventDefault();
        clearInterval(timer);// on supprime l'intervalle s'il existe déjà

        var leftValue = parseFloat(leftField.value);
        var topValue = parseFloat(topField.value);

        if (!Number.isNaN(leftValue) && !Number.isNaN(topValue)) {

            //On définit une fonction qui s'éxécutera à intervalle régulier de 500 millisecondes

        //alert("Y :"+blockPosY+" - X:"+blockPosX);

            timer = setInterval(function () {
                var blockPosY = block.offsetTop; // position verticale actuelle du block
                var blockPosX = block.offsetLeft;// position horizontale actuelle du block
           if (topValue > blockPosY) {//si la destination est supérieure à l'origine
                    block.style.left = blockPosY + 1 + "px"
                } else if (leftValue < blockPosY) {
                       block.style.left = blockPosY - 1 +"px"
                }
            }

            if (topValue > blockPosX) {//si la destination est supérieure à l'origine
                block.style.left = blockPosX + 1 + "px"
            } else if (leftValue < blockPosX) {
                   block.style.left = blockPosX - 1 +"px"
            }


            //block.style.top = topValue+"px";
            //block.style.left = topValue+"px";
        }


    }, 50);

    myForm.addEventListener("submit",move);
}
