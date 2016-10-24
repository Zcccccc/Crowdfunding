var id;
$(".nav .weekly .right-panel li").hover(function(){
	id = this.getAttribute("id");
	var top = 16,
		num = 62,
		ntop =  (id - 1) * num + top,
		i = 0,
		b = document.querySelector(".indicate");
	b.style.top = ntop + "px";
	$(this).css("background-color", "#ff6458");
	var li = document.querySelectorAll(".J_top");
	for(;i < li.length;i++){
		var nid = li[i].getAttribute("id");
		if(nid !== id){
			li[i].style.backgroundColor = "#b3bfc7"
		}
	}
	var box = document.querySelectorAll(".nav .weekly a");
	console.log(box);
	for(var k = 0;k < box.length;k++){
		var j = k + 1;
		if(j == id){
			box[k].classList.remove("hidden");
		}else{
			box[k].classList.add("hidden");
		}
	}
});