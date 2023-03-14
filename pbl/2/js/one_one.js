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

// function selectonclick() {
// 	let fuvalue = document.querySelector("select").value;
// 	console.log(fuvalue);


// 	if (fuvalue == "工学") {
// 		let fu = lbsj[0].children;
// 		let fubq = document.getElementById("qy");
// 		for (let j = 0; j < fu.length; j++) {
// 			let opc = document.createElement("option");
// 			console.log(fu);
// 			opc.textContent = fu[j];


// 			fubq.append(opc);
// 		}

// 	} else {
// 		let fu = lbsj[1].children;
// 		console.log(fu);
// 		let fubq = document.getElementById("qy");



// 		//清空原本的option
// 		console.log(fubq);
// 		//	fubq.removeChild();
// 		for (var opj = 0; opj < fubq.children.length; opj++) {
// 			fubq.children[opj].textContent = fu[opj];
// 		}


// 		for (let j = opj; j < fu.length; j++) {
// 			let opc = document.createElement("option");
// 			opc.textContent = fu[j];
// 			console.log(fu[j]);
// 			fubq.append(opc);
// 		}
// 	}
// }

function figure() { //呈现弹窗
	let tc = document.getElementById("tu");
	tc.className = "txxs";
}

function exit() {
	let tc = document.getElementById("tu");
	tc.className = "txyc";
}

// function sxt() {
// 	let canvas = document.getElementById("sx")
// 	canvas.width = 150
// 	canvas.height=300
// 	let ctx = canvas.getContext("2d")
// 	let data = [30, 40, 80, 90, 120]

// 	function zuobiao(x, y, d, r) {
// 		let x1 = r + Math.cos(d + Math.PI / 180) + x
// 		let y1 = r + Math.sin(d + Math.PI / 180) + y
// 		return [x1, y1]
// 	}
// 	let sum = 0
// 	for (i in data) {
// 		sum += data[i]
// 	}
// 	function hua(x,y,r,d1,d2){    //x,y表示圆形坐标   r表示半径  d1表示开始角度   d2表示结束角度
// 		let begin = zuobiao(x,y,d1,r)
// 		let end = zuobiao(x,y,d2,r)
// 		ctx.beginPath()
// 		ctx.moveTo(begin[0],begin[1])
// 		ctx.lineTo(x,y)
// 		ctx.lineTo(end[0],end[1])

// 		ctx.fill()
// 	}
// }
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
	// ctx.fillStyle = "white"
	// drawSector(size / 2, size / 2, 100, 95, 135)

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
	// ctx.lineWidth = 1;//设置边框大写
	// ctx.fillStyle = "yellow";//填充实体颜色
	// ctx.strokeStyle = "red";//填充边框颜色
	// ctx.strokeRect(50.5,50.5,100,100);//对边框的设置
	// ctx.fillRect(0,0,1000,650);//对内容的设置
	//坐标轴坐标
	// var data = [0, 30, 60, 90, 120, 140];
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

function zzt() {
	var zht = [100, 200, 50, 70]
	var zh = document.getElementById("zz").getContext("2d");

	for (let i = 0; i < zht.length; i++) {
		zh.fillStyle = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

		zh.fillRect(i * 10, 150 - zht[i], 10, zht[i]);

	}

}

data_two = [{
	zym: "计算机科学与技术",
	qy: "300",
	gw: "5000",
	jn: "400",
	rw: "4500",
	zdxz: "2k",
	zgxz: "12k"
}, {
	zym: "软件工程",
	qy: "",
	gw: "",
	jn: "",
	rw: "",
	zdxz: "",
	zgxz: ""
}, {
	zym: "网络工程",
	qy: "",
	gw: "",
	jn: "",
	rw: "",
	zdxz: "",
	zgxz: ""
}, {
	zym: "信息安全",
	qy: "",
	gw: "",
	jn: "",
	rw: "",
	zdxz: "",
	zgxz: ""
}, {
	zym: "物联网工程",
	qy: "",
	gw: "",
	jn: "",
	rw: "",
	zdxz: "",
	zgxz: ""
}, {
	zym: "数字媒体技术",
	qy: "",
	gw: "",
	jn: "",
	rw: "",
	zdxz: "",
	zgxz: ""
}, {
	zym: "智能科学与技术",
	qy: "",
	gw: "",
	jn: "",
	rw: "",
	zdxz: "",
	zgxz: ""
}, {
	zym: "空间信息与数字技术",
	qy: "",
	gw: "",
	jn: "",
	rw: "",
	zdxz: "",
	zgxz: ""
}, {
	zym: "电子与计算机工程",
	qy: "",
	gw: "",
	jn: "",
	rw: "",
	zdxz: "",
	zgxz: ""
}, {
	zym: "数据科学与大数据技术",
	qy: "",
	gw: "",
	jn: "",
	rw: "",
	zdxz: "",
	zgxz: ""
}, ]

function table_two() {
	var table = document.getElementById("table_two")
	var table_01 = table.children[0].children[1];
	// let clone = table_01.cloneNode(true);
	// console.log(clone.children[0].innerText)
	for (let i = 1; i < data_two.length; i++) {
		let clone = table_01.cloneNode(true);
		clone.children[0].innerText = data_two[i].zym;
		clone.children[1].innerText = data_two[i].qy;
		clone.children[2].innerText = data_two[i].gw;
		clone.children[3].innerText = data_two[i].jn;
		clone.children[4].innerText = data_two[i].rw;
		clone.children[5].innerText = data_two[i].zdxz;
		clone.children[6].innerText = data_two[i].zgxz;
		table.append(clone)
	}

}
data_one = [{
	ml: "工学",
	zyl: "计算器类",
	zymc: "计算机科学与技术"
}, {
	ml: "工学",
	zyl: "计算器类",
	zymc: "软件工程"
}, {
	ml: "工学",
	zyl: "计算器类",
	zymc: "数据科学与大数据技术"
}, {
	ml: "工学",
	zyl: "计算器类",
	zymc: "计算机科学与技术"
}, {
	ml: "工学",
	zyl: "计算器二类",
	zymc: "计算机科学与技术"
}, {
	ml: "工学",
	zyl: "计算器二类",
	zymc: "计算机科学与技术"
}, {
	ml: "工学",
	zyl: "计算器二类",
	zymc: "计算机科学与技术"
}, {
	ml: "工学",
	zyl: "计算器二类",
	zymc: "计算机科学与技术"
}, {
	ml: "工学",
	zyl: "计算器二类",
	zymc: "计算机科学与技术"
}, {
	ml: "工学",
	zyl: "计算器二类",
	zymc: "计算机科学与技术"
}, {
	ml: "理学",
	zyl: "理学1",
	zymc: "理学1-1"
}, {
	ml: "理学",
	zyl: "理学1",
	zymc: "理学1-2"
}, {
	ml: "理学",
	zyl: "理学1",
	zymc: "理学1-3"
}, {
	ml: "理学",
	zyl: "理学2",
	zymc: "理学2-1"
}, {
	ml: "理学",
	zyl: "理学2",
	zymc: "理学2-2"
}, {
	ml: "理学",
	zyl: "理学2",
	zymc: "理学2-3"
}, {
	ml: "理学",
	zyl: "理学3",
	zymc: "理学3-1"
}, {
	ml: "理学",
	zyl: "理学3",
	zymc: "理学3-2"
}, {
	ml: "理学",
	zyl: "理学3",
	zymc: "理学3-3"
}, ]

function table_one() {
	var table = document.getElementsByClassName("sjxx");
	table01 = table[0].children[0].children[0]
	for (let i = 0; i < data_one.length; i++) {
		// let clone = table01.cloneNode(true);
		let tr = document.createElement("tr");
		let td1 = document.createElement("td");
		td1.innerText = data_one[i].ml;
		tr.append(td1);
		let td2 = document.createElement("td");
		td2.innerText = data_one[i].zyl;
		tr.append(td2);
		let td3 = document.createElement("td");
		td3.innerHTML = '<input type="radio">' + data_one[i].zymc
		tr.append(td3);
		table01.append(tr)
	}
}

function select() {
	var select = document.getElementById("select")
	let selectdata = ["工学", "理学"]
	for (let i = 0; i < selectdata.length; i++) {
		let select_data = document.getElementById("select").children[0].cloneNode(true);
		select_data.value = i + 1;
		select_data.innerText = selectdata[i];
		select.append(select_data)
	}

}
var name_ml = "";
var number = 1
//点击门类之后专业类进行更新
function choose(e) {
	name_ml = e.innerText;
	var zhuanyeleidata = document.getElementById("qy")
	var zhuanyelei = document.getElementById("qy").children;
	if (zhuanyelei.length > 1) {
		for (let i = 0; i < number; i++) {
			zhuanyelei[1].remove();
		}
	}
	number = 0;
	let number_one = 0
	let list = []
	for (let i = 0; i < data_one.length; i++) {
		if (e.innerText === data_one[i].ml) {
			let data = zhuanyelei[0].cloneNode(true)
			if (list.indexOf(data_one[i].zyl) === -
				1) { //list.indexOf()该函数是括号中的元素是否在list当中如果没在的话则会返回-1，如果存在的话则会返回该元素首次出现的地方
				data.innerText = data_one[i].zyl
				// data.onclick = table_choose_two(this);
				data.value = number_one
				// data.onclick = function(){table_choose_two(this)}
				number_one++;
				zhuanyeleidata.append(data)
				number++;
				list.push(data_one[i].zyl) //js数组当中的增加元素
				console.log(list)
			}

		}
	}

	table_choose_one(e)
}
//点击门类之后表格进行更新
function table_choose_one(e) {
	let table = document.getElementById("sjxx").children[0].children[0]
	for (let i = 0; i < data_one.length; i++) {
		if (table.children.length > 1) {
			table.children[1].remove()
		}
	}
	if (e.innerText != "门类") {
		for (let i = 0; i < data_one.length; i++) {
			if (e.innerText == data_one[i].ml) {
				let tr = document.createElement("tr");
				let td1 = document.createElement("td");
				td1.innerText = data_one[i].ml
				tr.append(td1)
				let td2 = document.createElement("td");
				td2.innerText = data_one[i].zyl;
				tr.append(td2);
				let td3 = document.createElement("td");
				td3.innerHTML = '<input type="radio">' + data_one[i].zymc
				tr.append(td3);
				table.append(tr);
			}
		}
	} else {
		table_one();
	}
}
//点击专业类之后表格进行更新
function table_choose_two(e) {
	let table = document.getElementById("sjxx").children[0].children[0]
	for (let i = 0; i < data_one.length; i++) { //删除原表格当中的数据
		if (table.children.length > 1) {
			table.children[1].remove()
		}
	}
	if (e.innerText != "专业类") {
		for (let i = 0; i < data_one.length; i++) {
			if (e.innerText == data_one[i].zyl && name_ml == data_one[i].ml) {
				let tr = document.createElement("tr");
				let td1 = document.createElement("td");
				td1.innerText = data_one[i].ml
				tr.append(td1)
				let td2 = document.createElement("td");
				td2.innerText = data_one[i].zyl;
				tr.append(td2);
				let td3 = document.createElement("td");
				td3.innerHTML = '<input type="radio">' + data_one[i].zymc
				tr.append(td3);
				table.append(tr);
			}
		}
	} else {
		for (let i = 0; i < data_one.length; i++) {
			if (name_ml == data_one[i].ml) {
				let tr = document.createElement("tr");
				let td1 = document.createElement("td");
				td1.innerText = data_one[i].ml
				tr.append(td1)
				let td2 = document.createElement("td");
				td2.innerText = data_one[i].zyl;
				tr.append(td2);
				let td3 = document.createElement("td");
				td3.innerHTML = '<input type="radio">' + data_one[i].zymc
				tr.append(td3);
				table.append(tr);
			}
		}
	}


}


function user_exit() {
	alert("你已成功退出")
}

var location_data = ["成都","北京","上海","深圳","长沙","高兴"]
function location_updata(){
	var location = document.getElementById("location");
	for(let i=0;i<location_data.length;i++){
		let option = document.createElement("option");
		option.innerText = location_data[i]
		location.append(option)
	}
}




location_updata()
select()
table_one()
table_two()
