	// 目标: data中的数据按照比例显示到饼图中
	// 步骤:
	//求数组元素的和
	var data = [500, 400, 300, 450];
	var sum = 0;
	for (var i = 0; i < data.length; i++) {
		sum += data[i];
	}
	console.log(sum);
	// 2.设置一个起始弧度
	var startAngle = 0;
	// 3.画饼图
	var canvas = document.querySelector('canvas');
	var context = canvas.getContext('2d');
	data.forEach(function(item) {
		context.beginPath();
		//画线
		context.moveTo(canvas.width / 3, canvas.height / 3);
		//画圆弧
		context.arc(canvas.width / 3, canvas.height / 3, 50, startAngle, startAngle + (item / sum * Math.PI *
			2));
		context.closePath();
		//描边
		startAngle = startAngle + (item / sum * Math.PI * 2);
		context.strokeStyle = "blue";
		context.stroke();
		//画文字
		context.font = "16px serif";
		context.fillText("北京 500", 160, 70);
		context.fillText("上海 300", 160, 90);
		context.fillText("成都 450", 160, 110);
		context.fillText("广州 400", 160, 130);
	})

