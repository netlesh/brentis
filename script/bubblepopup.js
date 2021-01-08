$(document).ready(function(){
	$("#topmenu li").hover(function() {
		$(this).children("span").animate({opacity: "show", top: "-58"}, "slow");
	}, function() {
		$(this).children("span").animate({opacity: "hide", top: "-70"}, "slow");
	});
});