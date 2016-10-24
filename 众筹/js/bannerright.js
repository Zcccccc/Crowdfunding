var width = -290;
$(".focus .right-banner .more").click(function(){
	width = width -290;
	$(".focus .right .scroll .content1 .cover").animate({
		left:width+"px"
	},600);
	$(".focus .right .scroll .content2 .cover").stop().delay(600).animate({
		left:width+"px"
	},600);
	$(".focus .right .scroll .content3 .cover").stop().delay(1200).animate({
		left:width+"px"
	},600);
	if($(".focus .right .scroll .content1 .cover").css("left") == "-580px"){
		console.log(233)
		$(".focus .right .scroll .content1 .cover").animate({
		left:-290+"px"
	},0);
		$(".focus .right .scroll .content2 .cover").animate({
		left:-290+"px"
	},0);
		$(".focus .right .scroll .content3 .cover").animate({
		left:-290+"px"
	},0);
		width = -290;
	};
});
$(".focus .right-banner .on").click(function(){
	console.log($(".focus .right .scroll .content1 .cover").css("left"))
	width = width +290;
	$(".focus .right .scroll .content1 .cover").animate({
		left:width+"px"
	},600);
	$(".focus .right .scroll .content2 .cover").stop().delay(600).animate({
		left:width+"px"
	},600);
	$(".focus .right .scroll .content3 .cover").stop().delay(1200).animate({
		left:width+"px"
	},600);
	if($(".focus .right .scroll .content1 .cover").css("left") == "-290px"){
		console.log(123)
		$(".focus .right .scroll .content1 .cover").animate({
		left:-580+"px"
	},0);
		$(".focus .right .scroll .content2 .cover").animate({
		left:-580+"px"
	},0);
		$(".focus .right .scroll .content3 .cover").animate({
		left:-580+"px"
	},0);
		width = -580;
	};
});