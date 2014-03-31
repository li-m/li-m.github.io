$(document).ready(function () {
    $(".province").mouseover(function () {
        var name = $(this).attr("id");
        $("#cover").css("background-image", "url('map/" + name + ".png')");
        $("#map-text").css("padding", "5px");

        if (window.addEventListener) {
            $(this)[0].addEventListener('mousemove', mouse, false);
            if (/Apple/.test(navigator.vendor))
                $(this)[0].addEventListener('scroll', ascroll, false);
        }
        else if (window.attachEvent) {
            $(this)[0].attachEvent('mousemove', mouse);
        };
    });

    $(".province").mouseout(function () {
        $("#cover").css("background-image", "url('map/trans.png");
        $("#map-text").text("");
        $("#map-text").css("padding","0");

        if (window.addEventListener) {
            $(this)[0].removeEventListener('mousemove', mouse, false);
        } else if (window.attachEvent) {
            $(this)[0].detachEvent('mousemove', mouse);
        };
    });

});

mouse = function (e) {

//    e = e || window.event;
//    ymouse = !isNaN(e.pageY) ? e.pageY : e.clientY; // y-position
    //    xmouse = !isNaN(e.pageX) ? e.pageX : e.clientX; // x-position
    var xmouse = e.pageX - $("#trans").offset().left - 25;
    var ymouse = e.pageY - $("#trans").offset().top - 40;

    $("#map-text").css({ "left": xmouse, "top": ymouse });
    $("#map-text").text($(this).attr("alt"));
};

