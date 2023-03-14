function xhr_() {
	let xs1 = document.getElementById("xhr_")
	xs1.className = "xs_"
	let xs2 = document.getElementById("jsq_")
	xs2.className = "yc_"
	let xs3 = document.getElementById("xitong")
	xs3.className = "yc_"
	let xs4 = document.getElementById("shouye")
	xs4.className = "yc_"

}

function jsq() {
	let xs1 = document.getElementById("xhr_")
	xs1.className = "yc_"
	let xs2 = document.getElementById("jsq_")
	xs2.className = "xs_"
	let xs3 = document.getElementById("xitong")
	xs3.className = "yc_"
	let xs4 = document.getElementById("shouye")
	xs4.className = "yc_"
}

function xitong() {
	let xs1 = document.getElementById("xhr_")
	xs1.className = "yc_"
	let xs2 = document.getElementById("jsq_")
	xs2.className = "yc_"
	let xs3 = document.getElementById("xitong")
	xs3.className = "xs_"
	let xs4 = document.getElementById("shouye")
	xs4.className = "yc_"
}

function shouye() {
	let xs1 = document.getElementById("xhr_")
	xs1.className = "yc_"
	let xs2 = document.getElementById("jsq_")
	xs2.className = "yc_"
	let xs3 = document.getElementById("xitong")
	xs3.className = "yc_"
	let xs4 = document.getElementById("shouye")
	xs4.className = "xs_"
}

function shizhong() {
	var time = document.getElementById("time");
	var date = document.getElementById("date");

	function addtime() {
		var now = new Date();  //取当前的时间保留
		//获取时分秒
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		time.innerHTML = add0(hours) + ':' + add0(minutes) + ':' + add0(seconds);
		//获取年月日
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();

		var week = now.getDay();
		date.innerHTML = year + '年' + add0(month) + '月' + add0(day) + '日' + week_(week);
	}
	addtime();
	setInterval(addtime, 1000); //每一秒（1000毫秒）执行一次addtime（）函数    addtime()表示执行该函数、addtime表示该函数本身

	function add0(n) {
		return n < 10 ? '0' + n : n //判断n是否小于10如果是则在n前面加个0
	}

	function week_(n) { //得到星期几
		switch (n) { //类似于输入值然后进行多重判断
			case 0:
				return '星期日';
			case 1:
				return '星期一';
			case 2:
				return '星期二';
			case 3:
				return '星期三';
			case 4:
				return '星期四';
			case 5:
				return '星期五';
			case 6:
				return '星期六';
		}

	}
}
shizhong()

function gerenxx_xs(){
	let xs = document.getElementById("gerenxx");
	xs.className="gerenxx"
}
function gerenxx_yc(){
	let xs = document.getElementById("gerenxx");
	xs.className="yc_"
}






function canvas_one(){
	let canvas = document.getElementById("canvas_one")
	let ctx = canvas.getContext('2d')
	canvas.width = 150
	canvas.height = 150
	ctx.beginPath() //清空画布原有的重新开始画
	ctx.translate(canvas.width / 2, canvas.height / 2) // 将坐标移动到画布中央
	let R = 40
	let x
	let y
	for (let i = 0; i < 6; i++) { //六边形的六个点
		// 标注出每一个点的坐标
		x = Math.cos((60 * i) / 180 * Math.PI) * R
		y = -Math.sin((60 * i) / 180 * Math.PI) * R // canvas中x轴正方向向右，y轴正方向向下
		ctx.lineTo(x, y) //先标记这个点
	}
	ctx.lineTo(0, 0) //再加入原点（0，0）
	ctx.closePath() //闭合那几个点，将最后一个点与第一个点
	ctx.stroke() //通过标记的点来连接
}
canvas_one()

function canvas_xs(){
	let xs = document.getElementById("canvas_");
	xs.className = "canvas_one"
}
function canvas_yc(){
	let xs = document.getElementById("canvas_");
	xs.className = "yc_"
}
function yingcang(){
	let xs1 = document.getElementById("canvas_");
	xs1.className = "yc_"
	let xs2 = document.getElementById("gerenxx")
	xs2.className="yc_"
}