$(document).ready(function () {
    var number = $(".preview-img").size();
    var position = 0;

    $(".preview-left").click(function () {
        if (position < 0) {
            $(".preview-imgs").animate({left: (position + 1) * 158 + "px"});
            position++;
        }
    });



    $(".preview-right").click(function () {
        if (- position + 3 < number) {
            $(".preview-imgs").animate({ left: (position - 1) * 158 + "px" });
            position--;
        } 
    });


    $(".preview-left").mouseover(function () {
        $(this).css("background-image", "url(Images/left2.gif)");
    });

    $(".preview-left").mouseout(function () {
        $(this).css("background-image", "url(Images/left1.gif)");
    });

    $(".preview-right").mouseover(function () {
        $(this).css("background-image", "url(Images/right2.gif)");
    });

    $(".preview-right").mouseout(function () {
        $(this).css("background-image", "url(Images/right1.gif)");
    });


    $(".preview-img").click(function () {
        var order = $(this).children().attr("alt");
        $(".slide-main").children().attr("src", "Images/detail" + order + ".jpg");

    });
});