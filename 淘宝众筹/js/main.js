var first = document.querySelectorAll(".nav-item.first.full"),
	itemImg = document.querySelectorAll(".project-pic"),
	itemName = document.querySelectorAll(".project-intro"),
	itemDeal = document.querySelectorAll(".info-deal"),
	itemDollar = document.querySelectorAll(".info-dollar"),
	itemSupport = document.querySelectorAll(".info-support"),
	itemTag = document.querySelectorAll(".tag-con"),
	itemBar = document.querySelectorAll(".bar-in");
console.log(itemImg);
// function ajax(option){
// 					//宿主对象 XMLHttpRequest
// 					var xhr = new XMLHttpRequest(),
// 						type = option.type,
// 						data = option.data;
// 					//readyState
// 					//0 请求未发送
// 					//1 请求打开
// 					//2 请求发送成功
// 					//3 服务端成功接收请求
// 					//4 服务端响应成功
// 					function queryString(data){
// 						var str = "",
// 							i;
// 						for(i in data){
// 							str += "&" + i + "=" + data[i];
// 						}
// 						return str.slice(1);
// 					}
// 					xhr.onreadystatechange = function(){
// 						console.log(["请求未发送", "请求打开", "请求发送成功", "服务端成功接收请求", "服务端响应成功"][xhr.readyState]);
// 						xhr.readyState === 4 && xhr.status === 200 && option.success(option.dataType === "json" ? JSON.parse(xhr.responseText) : xhr.responseText);
// 					};
// 					//打开请求
// 					xhr.open(type, option.url + (type === "get" ? "?" + queryString(data) : ""), option.async);
// 					//设置请求头
// 					type === "post" && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post
// 					//发送请求
// 					xhr.send(type === "get" ? null : queryString(data));//get
// 				}
$.ajax({
		type : "get",
		url : "http://www.ikindness.cn/api/test/getFund",
		dataType : "json",
		async : 1,
		success : function(data){
			console.log(data.data);
			var i,
				j;
			var _data = data.data;
			console.log(_data);
			for(i = 0;i < _data.length;i++){
				if(_data[i].id == 0){
					mainImg = first[0].querySelector(".main-img"),
					mainName = first[0].querySelector(".name"),
					mainNum = first[0].querySelector(".J_money")
					mainImg.setAttribute("src", _data[i].image);
					mainName.innerText = _data[i].name;
					mainNum.innerText = _data[i].sum;
					console.log(_data[i].label);
				}
				else if(_data[i].id == 10){
					mainImg = first[1].querySelector(".main-img"),
					mainName = first[1].querySelector(".name"),
					mainNum = first[1].querySelector(".J_money")
					mainImg.setAttribute("src", _data[i].image);
					mainName.innerText = _data[i].name;
					mainNum.innerText = _data[i].sum;
				}
				else if(_data[i].id == 20){
					mainImg = first[2].querySelector(".main-img"),
					mainName = first[2].querySelector(".name"),
					mainNum = first[2].querySelector(".J_money")
					mainImg.setAttribute("src", _data[i].image);
					mainName.innerText = _data[i].name;
					mainNum.innerText = _data[i].sum;
				}
				else if(_data[i].id == 30){
					mainImg = first[3].querySelector(".main-img"),
					mainName = first[3].querySelector(".name"),
					mainNum = first[3].querySelector(".J_money")
					mainImg.setAttribute("src", _data[i].image);
					mainName.innerText = _data[i].name;
					mainNum.innerText = _data[i].sum;
				}
				else if(_data[i].id == 40){
					mainImg = first[4].querySelector(".main-img"),
					mainName = first[4].querySelector(".name"),
					mainNum = first[4].querySelector(".J_money")
					mainImg.setAttribute("src", _data[i].image);
					mainName.innerText = _data[i].name;
					mainNum.innerText = _data[i].sum;
				}
				else if(_data[i].id == 50){
					mainImg = first[5].querySelector(".main-img"),
					mainName = first[5].querySelector(".name"),
					mainNum = first[5].querySelector(".J_money")
					mainImg.setAttribute("src", _data[i].image);
					mainName.innerText = _data[i].name;
					mainNum.innerText = _data[i].sum;
				}
				else if(_data[i].type == 1){
					var label = _data[i].label;
					itemImg[i-1].setAttribute("src", _data[i].image);
					itemName[i-1].innerText = _data[i].name;
					itemDeal[i-1].querySelector(".info-num").innerText = _data[i].rate + "%";
					itemDollar[i-1].querySelector(".info-num").innerText = _data[i].sum;
					itemSupport[i-1].querySelector(".info-num").innerText = _data[i].amount;
					for(j = 0;j < label.length;j++){
						var tag = document.createElement("span");
						tag.className = "tag";
						tag.innerText = label[j];
						itemTag[i-1].appendChild(tag);
					}
				}
				else if(_data[i].type == 2){
					var label = _data[i].label;
					console.log(i);
					itemImg[i-2].setAttribute("src", _data[i].image);
					itemName[i-2].innerText = _data[i].name;
					itemDeal[i-2].querySelector(".info-num").innerText = _data[i].rate + "%";
					itemDollar[i-2].querySelector(".info-num").innerText = _data[i].sum;
					itemSupport[i-2].querySelector(".info-num").innerText = _data[i].amount;
					for(j = 0;j < label.length;j++){
						var tag = document.createElement("span");
						tag.className = "tag";
						tag.innerText = label[j];
						itemTag[i-2].appendChild(tag);
					}
				}
				else if(_data[i].type == 3){
					var label = _data[i].label;
					console.log(i);
					itemImg[i-3].setAttribute("src", _data[i].image);
					itemName[i-3].innerText = _data[i].name;
					itemDeal[i-3].querySelector(".info-num").innerText = _data[i].rate + "%";
					itemDollar[i-3].querySelector(".info-num").innerText = _data[i].sum;
					itemSupport[i-3].querySelector(".info-num").innerText = _data[i].amount;
					for(j = 0;j < label.length;j++){
						var tag = document.createElement("span");
						tag.className = "tag";
						tag.innerText = label[j];
						itemTag[i-3].appendChild(tag);
					}
				}
				else if(_data[i].type == 4){
					var label = _data[i].label;
					console.log(i);
					itemImg[i-4].setAttribute("src", _data[i].image);
					itemName[i-4].innerText = _data[i].name;
					itemDeal[i-4].querySelector(".info-num").innerText = _data[i].rate + "%";
					itemDollar[i-4].querySelector(".info-num").innerText = _data[i].sum;
					itemSupport[i-4].querySelector(".info-num").innerText = _data[i].amount;
					for(j = 0;j < label.length;j++){
						var tag = document.createElement("span");
						tag.className = "tag";
						tag.innerText = label[j];
						itemTag[i-4].appendChild(tag);
					}
				}
				else if(_data[i].type == 5){
					var label = _data[i].label;
					console.log(i);
					itemImg[i-5].setAttribute("src", _data[i].image);
					itemName[i-5].innerText = _data[i].name;
					itemDeal[i-5].querySelector(".info-num").innerText = _data[i].rate + "%";
					itemDollar[i-5].querySelector(".info-num").innerText = _data[i].sum;
					itemSupport[i-5].querySelector(".info-num").innerText = _data[i].amount;
					for(j = 0;j < label.length;j++){
						var tag = document.createElement("span");
						tag.className = "tag";
						tag.innerText = label[j];
						itemTag[i-5].appendChild(tag);
					}
				}
				else if(_data[i].type == 6){
					var label = _data[i].label;
					console.log(i);
					itemImg[i-6].setAttribute("src", _data[i].image);
					itemName[i-6].innerText = _data[i].name;
					itemDeal[i-6].querySelector(".info-num").innerText = _data[i].rate + "%";
					itemDollar[i-6].querySelector(".info-num").innerText = _data[i].sum;
					itemSupport[i-6].querySelector(".info-num").innerText = _data[i].amount;
					if (_data[i].rate < 100) {
						itemBar[i-6].style.width = _data[i].rate + "%";
					}
					for(j = 0;j < label.length;j++){
						var tag = document.createElement("span");
						tag.className = "tag";
						tag.innerText = label[j];
						itemTag[i-6].appendChild(tag);
					}
				}
			}
		}
	})