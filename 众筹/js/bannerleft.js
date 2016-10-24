//JSON格式数据
			var data = [
				{
					name : "我是图片1",
					anchorHref : "https://www.baidu.com/",
					imageUrl : "./image/banner1.jpg"
				},
				{
					name : "我是图片2",
					anchorHref : "http://www.qq.com/",
					imageUrl : "./image/banner2.jpg"
				},
				{
					name : "我是图片3",
					anchorHref : "https://www.taobao.com/",
					imageUrl : "./image/banner3.jpg"
				},
				{
					name : "我是图片4",
					anchorHref : "https://www.tmall.com/",
					imageUrl : "./image/banner4.jpg"
				},
				{
					name : "我是图片5",
					anchorHref : "https://www.163.com/",
					imageUrl : "./image/banner5.jpg"
				},
				// {
				// 	name : "我是图片6",
				// 	anchorHref : "https://www.sohu.com/",
				// 	imageUrl : "http://static.ikindness.cn/static/image/banner/6.jpg"
				// },
				// {
				// 	name : "我是图片7",
				// 	anchorHref : "https://www.1688.com/",
				// 	imageUrl : "http://static.ikindness.cn/static/image/banner/7.jpg"
				// }
			];
			//创建一个轮播图组件
			Banner({
				element : ".banner", //必需, 轮播图插入的页面位置 (选择器字符串)
				keywords : { //必需, 字段名称 (参照以上data格式, 与data配置数据共同作用)
					title : "name", //必需, 图片标题字段名称
					href : "anchorHref", //必需, 图片链接字段名称
					url : "imageUrl" //必需, 图片地址字段名称
				},
				data : data, //必需, 数据 (参照以上data格式, 与keywords配置字段名称共同作用)
				theme : 2, //非必需, 轮播主题 (默认0:切换, 1:淡入淡出, 2:滑动)
				controller : 1, //非必需, 是否启用前后翻页控制 (默认0:不启用, 1:启用)
				indicator : 2, //非必需, 指针主题 (默认0:不启用, 1:方块, 2:圆点, 3:宽矩形)
				duration : 2 //非必需, 轮播秒数间隔 (默认2)
			});