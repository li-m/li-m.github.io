$(document).ready(function () {
	var div = $("div.content");

    $("#nav1").click(function () {
        div.animate({ left: '+=1000px' }, "slow");
		setTimeout('window.location.href="Guide.html"',1000);
    });

	
    $("#nav2").click(function () {
		var height = $("div.content").height();
		div.animate({ top: '-=' + height }, "slow");
		setTimeout('window.location.href="Home.html"',1000);
    });

    $("#nav3").click(function () {
        div.animate({ left: '-=1000px' }, "slow");
		setTimeout('window.location.href="Register.html"',1000);
    });


});