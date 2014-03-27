function setWidth(){
	var distance1 = $(".right-item:last").position().left;
	var distance2 = $(window).width() - 160 > $(".right-item:last").width() + 10 ? $(window).width() - 160 : $(".right-item:last").width() + 10;

	var distance = distance1 + distance2;

	$(".right").css("width", distance);
}
$(document).ready(function (){
	setWidth();
	var flag = false;
	$(".meuh").click(function(){
		if(flag == false){
			flag = true;
			$(".bg-meuh").css("display","block");
			$(".left").css("text-shadow","0 0 3px yellow");
			$(".right-item").css("opacity","0.5");
		}
		else {
			flag = false;
			$(".bg-meuh").css("display","none");			
			$(".left").css("text-shadow","");
			$(".right-item").css("opacity","");
		}	
	});
		
	$('.right-item-title').click(function(){
		var flip = $(this).attr("id");
		$('#' + flip + 'c').slideToggle("fast");
		setWidth();
	});
	$('.left-a').click(function(event) {
		event.preventDefault();
		
		var x =$(this).parent().attr('id');
		var a = $("#" + x + '-i').parent().position().left;
		
		//var a = $($(this).attr('href'))[0].scrollLeft();
		scrollBy(-9999, 0);		
		scrollBy(a, 0);
	});
});


$(function() {
    var scrollHorizontal = function(event, delta) {
			scrollBy(-event.deltaY * event.deltaFactor, 0);
    };

    $("body")
        .mousewheel(function(event, delta) {
            scrollHorizontal(event, delta);
            return false; // prevent default
        });
});
        