console.log()

var lbsj = [{
	id: 1,
	fu: "工学",
	children: ["工1", "工2", "工3"]
}, {
	id: 2,
	fu: "理学",
	children: ["理1", "理2", "理3", "理4"]
}]
//接着细化下拉选择框的数据绑定及更新

var lbsj2 = [{
	id: 1,
	ml: "工学",
	zyl: [{
		"工1": ["工1-1", "工1-2", "工1-3"]
	}, {
		"工2": ["工2-1", "工2-2"]
	}, {
		"工3": ["工3-1", "工3-2", "工3-3", "工3-4"]
	}]
}, {
	id: 2,
	ml: "理学",
	zyl: [{
		"理学专业1": ["理学1-1", "理学1-2", "理学1-3"]
	}]
}, ]


function zxzy(e) {

	console.log(e);
	for (let i = 0; i < lbsj2.length; i++) {

		if (e == "工1") {

			for (let j = 0; j < 3; j++) {

				document.createElement("div").textContent = lbsj2[0].zyl[0]["工1"][j];
			}



		}

	}

}

function selectonclick() {
	let fuvalue = document.querySelector("select").value;
	console.log(fuvalue);


	if (fuvalue == "工学") {
		let fu = lbsj[0].children;
		let fubq = document.getElementById("qy");
		for (let j = 0; j < fu.length; j++) {
			let opc = document.createElement("option");
			console.log(fu);
			opc.textContent = fu[j];


			fubq.append(opc);
		}

	} else {
		let fu = lbsj[1].children;
		console.log(fu);
		let fubq = document.getElementById("qy");



		//清空原本的option
		console.log(fubq);
		//	fubq.removeChild();
		for (var opj = 0; opj < fubq.children.length; opj++) {
			fubq.children[opj].textContent = fu[opj];
		}


		for (let j = opj; j < fu.length; j++) {
			let opc = document.createElement("option");
			opc.textContent = fu[j];
			console.log(fu[j]);
			fubq.append(opc);
		}
	}
}

function figure() { //呈现弹窗
	let tc = document.getElementById("tu");
	tc.className = "txxs";
}

function exit() {
	let tc = document.getElementById("tu");
	tc.className = "txyc";
}

function sxt() {
	let canvas = document.getElementById("sx")
	let size = 150
	canvas.width = canvas.height = size
	let ctx = canvas.getContext("2d")

	let data = [80, 60, 70, 50, 40, 150, 120]

	function cp(x, y, d, r) {
		let x1 = r * Math.cos(d * Math.PI / 180) + x
		let y1 = r * Math.sin(d * Math.PI / 180) + y
		return [x1, y1]
	}
	data.sort(function(a, b) {
		return b - a
	}) //按照从大到小的顺序重新排序
	let sum = 0
	for (i in data) {
		sum += data[i]
	}

	function drawSector(x, y, r, d1, d2) {
		let sp = cp(x, y, d1, r)
		let ep = cp(x, y, d2, r)
		ctx.beginPath()
		ctx.moveTo(sp[0], sp[1])
		ctx.lineTo(x, y)
		ctx.lineTo(ep[0], ep[1])
		ctx.arc(x, y, r, d1 * Math.PI / 180, d2 * Math.PI / 180, 0)
		ctx.fill()
	}
	function draw() {
		let sd = 0
		ctx.clearRect(0, 0, size, size)
		for (i in data) {
			ed = data[i] / sum * 360 + sd
			ctx.fillStyle = "hsl(" + i / data.length * 360 + "deg,60%,50%)"
			drawSector(size / 2, size / 2, size / 2, sd, ed)
			sd = ed
		}
	}
	draw()

}

function zxt() {

	var canvas = document.getElementById("zx");
	var startX = 140;
	var startY = 140;
	var ctx = canvas.getContext('2d');
	// //设置边框
	 ctx.lineWidth = 1;//设置边框大写
	 ctx.fillStyle = "yellow";//填充实体颜色
	 ctx.strokeStyle = "red";//填充边框颜色
	 ctx.strokeRect(50.5,50.5,100,100);//对边框的设置
	 ctx.fillRect(0,0,1000,650);//对内容的设置
	//坐标轴坐标
	 var data = [0, 30, 60, 90, 120, 140];
	//坐标点
	var point = [
		[30, 50],
		[40, 55],
		[50, 60],
		[90, 120],
		[120, 90],
		[130, 70],
		[140, 50],

	];
	//建立坐标系
	function creat() {
		ctx.beginPath();
		ctx.moveTo(startX, 0);
		ctx.lineTo(startX, startY);
		ctx.moveTo(startX, startY);
		ctx.lineTo(650, startY);
		ctx.closePath();
		ctx.stroke();

	}
	//填充横纵坐标
	function insert() {
		var x = 100;
		var y = 600;
		//绘制横坐标
		for (var i in data) {
			ctx.fillText(data[i], x, y + 20);
			x += 100;
		}
		x = 100;
		y = 600;
		//绘制纵坐标
		for (var i in data) {
			ctx.fillText(data[i], x - 20, y);
			y -= 100;
		}
	}
	//绘制折线
	var num = 0;
	var sh = setInterval(function() {
		//只有第一个点重新开始绘制
		if (num == 0)
			ctx.beginPath();
		//终止
		if (num == 8) {
			clearInterval(sh);
		}
		var x = point[num][0];
		var y = point[num][1];
		//转换坐标
		x += 100;
		y = startY - y;
		ctx.arc(x, y, 2, 0, 2 * Math.PI);
		//进行点的内部链接
		if (num != 0)
			ctx.lineTo(x, y);
		num++;
		ctx.moveTo(x, y);
		ctx.strokeStyle = "#b320ff";
		//；连接边框
		ctx.stroke();
		console.log(num);
	}, 400);
	creat();
	insert();


}

function sdt() {
	var sdxy = [{
		x: 10,
		y: 20
	}, {
		x: 40,
		y: 40
	}, {
		x: 280,
		y: 140
	}, {
		x: 280,
		y: 10
	}, {
		x: 0,
		y: 0
	}]


	var sd = document.getElementById("sd").getContext("2d");



	for (let i = 0; i < sdxy.length - 1; i++) {
		sd.beginPath();

		sd.fillStyle = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;



		sd.arc(sdxy[i].x, sdxy[i].y, 10, 0, Math.PI * 2, true);
		let x = sdxy[i + 1].x;
		let y = sdxy[i + 1].y;
		sd.moveTo(x, y);
		sd.fill();

	}

}
function zzt(){
	var zht = [100, 200, 50, 70]
	var zh = document.getElementById("zz").getContext("2d");
	
	for (let i = 0; i < zht.length; i++) {
		zh.fillStyle = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
	
		zh.fillRect(i * 10, 150 - zht[i], 10, zht[i]);
	
	}
	
}