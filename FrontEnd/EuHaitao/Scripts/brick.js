$(document).ready(function () {

    $("#brick-select2").click(function () {

        $(".brickk").css("display", "none");
        $(".brickkk").css("display", "block");

    })



    $("#brick-select1").click(function () {

        $(".brickk").css("display", "block");
        $(".brickkk").css("display", "none");
        $(".help").css("display", "none");
    })


    $(".call").click(function () {
        if ($(".help").css("display") == "none") {
            $(".help").css("display", "block");
        } else {
            $(".help").css("display", "none");
        }
    })

    $("#help-close, #help-next").click(function () {
        $(".help").css("display", "none");
    })


});