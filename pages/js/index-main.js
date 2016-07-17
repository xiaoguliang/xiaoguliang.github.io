$(function(){
	
	$(".link .button").hover(function(){
		var title = $(this).attr("data-title");
		flag = false;
		// document.title = title;
		$(".tip em").text(title);
		var pos = $(this).position().left;
		var dis =($(".tip").outerWidth() - $(this).outerWidth())/2;
		var l = pos - dis + 15;
		$(".tip").css({"opacity":1,"left": l + "px"}).animate({"top":180,"opacity": 1},500);
	},function(){
		$(".tip").animate({"top":160,"opacity":0},500);
		// if (!$(".tip").is(":animate")) 
		// 	{
		// 		$(".tip").animate({"top":160,"opacity":0},500);
		// 	};
		
	});

})