
	let profess;
	let profess2 = document.getElementById('profession2');
	$('#profession1').change(function () {
		profess = this.value;
		console.log(profess);  //选中的值
		changep(profess);
	});

	function clickprofess(profess) {
		console.log(profess);
		switch (profess) {
			case '门类':
				return [];
			case '工学':
				return ['计算机类', '电气工程类', '电子工程类', '土木工程类'];
			case '理学':
				return ['数学类', '化学类', '天文学类'];
			case '文学':
				return ['英语类', '传播学类', '汉语言文学类'];
			case '法学':
				return ['监狱学', '国际经贸规则', '司法警察学'];
			case '商学':
				return ['金融类', '会计类', '管理学类', '经济学类'];

		}
	}
	function changep(profess) {
		getp = clickprofess(profess);
		profess2.innerHTML = '';
		getp.forEach(function (po) {
			option = document.createElement('option');
			option.value = po;
			option.textContent = po;
			profess2.appendChild(option);
		});
	}
	profess2.addEventListener('change', function tableupdate() {
		var rows = document.querySelectorAll(".t1 tr");
		for (i = 1; i < rows.length; i++) {
			rows[i].querySelectorAll("td")[0].innerText = document.getElementById('profession1').value;
			rows[i].querySelectorAll("td")[1].innerText = document.getElementById('profession2').value;
			rows[i].querySelectorAll("td")[2].innerText = "" + document.getElementById('profession2').value + "专业";
			console.log(rows[i]);
		}
		// console.log("=" + rows.length);
	});







	var add = document.getElementById('addbutton');
	var deleteb = document.getElementById('deletebutton');
	// var updateb = document.getElementsByClassName('updateButton');
	// var querenb = document.getElementsByClassName('querenButton');
	var table = document.getElementById('table');

	// add
	add.addEventListener('click', function () {
		// 表格末尾加一行
		table.innerHTML += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td><button class="updateButton" onclick="update(this)">修改</button> <button class="querenButton" onclick="queren(this)">确定</button></td></tr>';
	});

	//删除
	deleteb.addEventListener('click', function () {
		// 删最后一行
		table.deleteRow(-1);
	});

	// $('.updateButton').click(function () {
	// 	let a = this.parentElement.parentElement
	// 	console.log(a)
	// 	a = a.getElementsByTagName("td");
	// 	for (let i = 0; i < 5; i++) {
	// 		console.log(a[i])
	// 		a[i].innerHTML = "<input type='text' class=\"input\">";
	// 	}
	// })
	function update(b) {
		let a = b.parentElement.parentElement
		console.log(a)
		a = a.getElementsByTagName("td");
		for (let i = 0; i < 5; i++) {
			console.log(a[i])
			a[i].innerHTML = "<input type='text'class=\"input\">";
		}
	}

	// $('.querenButton').click(function () {
	// 	let a = this.parentElement.parentElement
	// 	// console.log(a)
	// 	a = a.getElementsByTagName("td");
	// 	for (let i = 0; i < 5; i++) {
	// 		// console
	// 		let input = document.getElementsByClassName('input')[0]
	// 		console.log(input)
	// 		let newContent = input.value;
	// 		console.log(newContent)
	// 		a[i].textContent = newContent;
	// 	}
	// })

	function queren(b) {
		let a = b.parentElement.parentElement
		// console.log(a)
		a = a.getElementsByTagName("td");
		for (let i = 0; i < 5; i++) {
			// console
			let input = document.getElementsByClassName('input')[0]
			console.log(input)
			let newc = input.value;
			console.log(newc)
			a[i].textContent = newc;
		}
	}


	var ctx = document.getElementById('c1').getContext('2d');
	var data = [90, 30, 55, 88, 66, 96];
	var bar = 20;
	var off = 10;
	var height = 200;
	var width = 300;

	//坐标轴
	ctx.beginPath();
	ctx.moveTo(20, 10);
	ctx.lineTo(15, 15);
	ctx.moveTo(20, 10);
	ctx.lineTo(25, 15);
	ctx.moveTo(20, 10);
	ctx.lineTo(20, height - 60);
	ctx.lineTo(width - 10, height - 60);
	ctx.moveTo(width - 10, height - 60);
	ctx.lineTo(width - 15, height - 65);
	ctx.moveTo(width - 10, height - 60);
	ctx.lineTo(width - 15, height - 55);
	ctx.strokeStyle = '#000000';
	ctx.stroke();

	//柱状图
	for (let i = 0; i < data.length; i++) {
		ctx.fillStyle = 'rgb(161, 217, 245)';
		ctx.fillRect(i * (bar + off) + 30, height - data[i] - 60, bar, data[i]);
	}

	// x字
	ctx.fillText("技能", 250, 150)




	var ctx1 = document.getElementById('c2').getContext('2d');

	//坐标轴
	ctx1.beginPath();
	ctx1.moveTo(20, 10);
	ctx1.lineTo(15, 15);
	ctx1.moveTo(20, 10);
	ctx1.lineTo(25, 15);
	ctx1.moveTo(20, 10);
	ctx1.lineTo(20, height - 60);
	ctx1.lineTo(width - 10, height - 60);
	ctx1.moveTo(width - 10, height - 60);
	ctx1.lineTo(width - 15, height - 65);
	ctx1.moveTo(width - 10, height - 60);
	ctx1.lineTo(width - 15, height - 55);
	ctx1.strokeStyle = '#000000';
	ctx1.stroke();


	//划线
	ctx1.beginPath()
	ctx1.moveTo(20, height - 60)
	for (let i = 0; i < data.length; i++) {
		ctx1.lineTo(i * 25 + 30, height - data[i] - 60)
	}
	ctx1.stroke();
	ctx1.fillText("任务", 250, 150)


	var ctx2 = document.getElementById('c3').getContext('2d')

	var total = 0;
	for (let i = 0; i < data.length; i++) {
		total += data[i];
	}

	var start = 0;
	for (var i = 0; i < data.length; i++) {
		let end = 2 * Math.PI * (data[i] / total)
		ctx2.beginPath();
		ctx2.moveTo(100, 70);
		ctx2.arc(100, 70, 60, start, start + end);
		ctx2.closePath();
		ctx2.fillStyle = `rgb(${i * 40},150,250)`;
		ctx2.fill();
		start += end;
	}

	// let getc1 = document.getElementById('getc1')
	// let getc2 = document.getElementById('getc2')
	// let getc3 = document.getElementById('getc3')
	let c1 = document.getElementById('c1')
	let c2 = document.getElementById('c2')
	let c3 = document.getElementById('c3')
	$('#getc1').mouseenter(function () {
		// if (c1.style.display == 'none') {
		c1.style.display = 'block'
		c2.style.display = 'none'
		c3.style.display = 'none'

	})
	// getc1.addEventListener('mouseenter', function () {
	// 	if (c1.style.display == 'none') {
	// 		c1.style.display = 'block'
	// 		c2.style.display = 'none'
	// 		c3.style.display = 'none'
	// 	}
	// })
	$('#getc1').mouseleave(function () {
		if (c1.style.display == 'block') {
			c1.style.display = 'none'
			c2.style.display = 'none'
			c3.style.display = 'none'
		}
	})
	$('#getc2').mouseenter(function () {
		// if (c2.style.display == 'none') {
			c1.style.display = 'none'
			c2.style.display = 'block'
			c3.style.display = 'none'
		
	})
	$('#getc2').mouseleave(function () {
		if (c2.style.display == 'block') {
			c1.style.display = 'none'
			c2.style.display = 'none'
			c3.style.display = 'none'
		}
	})
	$('#getc3').mouseenter(function () {
		// if (c3.style.display == 'none') {
			c1.style.display = 'none'
			c2.style.display = 'none'
			c3.style.display = 'block'
		
	})
	$('#getc3').mouseleave(function () {
		if (c3.style.display == 'block') {
			c1.style.display = 'none'
			c2.style.display = 'none'
			c3.style.display = 'none'
		}
	})






