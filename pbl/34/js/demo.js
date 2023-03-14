select_categories = document.getElementById('categories');
select_professional = document.getElementById('professional');
select_categories.addEventListener('change', function () {
	selectedCountry = this.value;
	updateProfessionallist(selectedCountry);
});
function getprofessional(categories) {
	switch (categories) {
		case '':
			return [];
		case '工学':
			return ['电气工程类', '计算机类', '电子工程类', '土木工程类'];
		case '理学':
			return ['数学类', '化学类', '天文学类'];
	}
}
function updateProfessionallist(selectedCountry) {
	professionalList = getprofessional(selectedCountry);
	select_professional.innerHTML = '';
	professionalList.forEach(function (professionalclass) {
		option = document.createElement('option');
		option.value = professionalclass;
		option.textContent = professionalclass;
		select_professional.appendChild(option);
	});
}
select_professional.addEventListener('change', function tableupdate() {
	var rows = document.querySelectorAll("#table_one tr");
	console.log(rows);
	for (i = 1; i < rows.length; i++) {
		rows[i].querySelectorAll("td")[0].innerText = document.getElementById('categories').value;
		rows[i].querySelectorAll("td")[1].innerText = document.getElementById('professional').value;
		rows[i].querySelectorAll("td")[2].innerText = "" + document.getElementById('categories').value + "" + document.getElementById('professional').value + "专业" + i;
		console.log(rows[i]);
	}
	console.log("行数：" + rows.length);
});

function delect(e) {
	if (confirm("是否删除这一行信息")) {
		e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
	}
}
/*此代码旨在在调用函数时从 HTML 页中删除元素。该函数将元素作为参数，然后提示用户确认消息，以确定他们是否要删除该元素。如果用户确认要删除该元素，则该函数将通过浏览元素的父节点并在相应的父节点上调用该方法，从 HTML 页中删除该元素。delecteremoveChild

此代码的总体设计思想是为用户提供一种通过与元素交互并确认他们打算删除元素来从页面中删除元素的方法。该函数使用 DOM（文档对象模型）API 在 HTML 文档中父节点和子节点的层次结构中导航，并删除所需的元素。*/
var search_btn = document.getElementById("search_btn");
search_btn.onclick = function () {
	var search = document.getElementById("search");
	filter = search.value;
	td = document.getElementById("table_three").querySelectorAll("td");

	for (i = 0; i < td.length; i++) {
		if (td[i].innerText.indexOf(filter) >= 0) {
			td[i].style.background = "red";
		} else {
			td[i].style.background = "#82a7fd";

		}
	}
}
function xiugai(e) {
	var tdElements = e.parentNode.parentNode.querySelectorAll("td");
	document.querySelector(".create_center").style.display = "block";
	var inputElements = document.querySelectorAll("#myForm input[type=text]");
	inputElements.forEach(function (input, index) {
		input.value = tdElements[index].textContent;
	});
	document.getElementById('submit').onclick = function (event) {
		event.preventDefault();
		document.querySelector(".create_center").style.display = "none";
		var tdElement = e.parentNode;
		var trElement = tdElement.parentNode;
		var tdElements = trElement.querySelectorAll("td");
		tdElements[0].textContent = inputElements[0].value;
		tdElements[1].textContent = inputElements[1].value;
		tdElements[2].textContent = inputElements[2].value;
		tdElements[3].textContent = inputElements[3].value;
		tdElements[4].textContent = inputElements[4].value;
		tdElements[5].textContent = inputElements[5].value;
	};
}
document.getElementById('increase_btn').onclick = function () {
	document.querySelector(".create_center_increase").style.display = "block";
	document.getElementById('submit_increase').onclick = function (event) {
		event.preventDefault();
		document.querySelector(".create_center").style.display = "none";
		var majorName = document.getElementById("myForm_increase").elements[0].value;
		var manager = document.getElementById("myForm_increase").elements[1].value;
		var courseCount = document.getElementById("myForm_increase").elements[2].value;
		var studentCount = document.getElementById("myForm_increase").elements[3].value;
		var teacherToStudentRatio = document.getElementById("myForm_increase").elements[4].value;
		var matchDegree = document.getElementById("myForm_increase").elements[5].value;
		var newRow = document.createElement("tr");
		newRow.innerHTML = `<td>${majorName}</td><td>${manager}</td><td>${courseCount}</td><td>${studentCount}</td><td>${teacherToStudentRatio}</td><td>${matchDegree}</td><td><input type="button" value="删除" onclick="delect(this)" /></td><td><input type="button" onclick="xiugai(this)" value="修改" /></td>`;
		console.log(newRow);
		document.querySelector(".create_center_increase").style.display = "none";
		var table = document.getElementById("table_three");
		table.appendChild(newRow);
	};
};

cities = [
	{
		name: '北京',
		major: '软件工程',
		enterprise: '联想集团',
		position: '边缘计算资深产品经理',
		skill: 'Python',
		task: '边缘计算产品的规划',
		min: 15000,
		max: 27000,
	},
	{
		name: '北京',
		major: '计算机科学',
		enterprise: '商汤科技',
		position: 'AI芯片设计高级工程师',
		skill: 'C语言',
		task: '自研AI处理器的方案讨论',
		min: 15000,
		max: 34000,
	}
	, {
		name: '北京',
		major: '电子信息工程',
		enterprise: '华为技术有限公司',
		position: '光学工程师',
		skill: 'Metalens',
		task: '负责深度传感技术突破',
		min: 60000,
		max: 80000,
	},
	{
		name: '北京',
		major: '软件工程',
		enterprise: '联想集团',
		position: '边缘计算资深产品经理',
		skill: 'Python',
		task: '边缘计算产品的规划',
		min: 15000,
		max: 27000,
	},
	{
		name: '北京',
		major: '计算机科学',
		enterprise: '商汤科技',
		position: 'AI芯片设计高级工程师',
		skill: 'C语言',
		task: '自研AI处理器的方案讨论',
		min: 15000,
		max: 34000,
	}
	, {
		name: '北京',
		major: '电子信息工程',
		enterprise: '华为技术有限公司',
		position: '光学工程师',
		skill: 'Metalens',
		task: '负责深度传感技术突破',
		min: 60000,
		max: 80000,
	}, {
		name: '上海',
		major: '软件工程',
		enterprise: '上海企业',
		position: '网络安全',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	},
	{
		name: '上海',
		major: '信息安全',
		enterprise: '上海企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	}
	, {
		name: '上海',
		major: '电子信息工程',
		enterprise: '上海企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	}
	, {
		name: '上海',
		major: '网络安全',
		enterprise: '上海企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 36000,
		max: 40000,
	},
	{
		name: '上海',
		major: '信息安全',
		enterprise: '上海企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	},
	{
		name: '上海',
		major: '计算机科学',
		enterprise: '上海企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	}, {
		name: '广州',
		major: '软件工程',
		enterprise: '广州企业',
		position: '网络安全',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	},
	{
		name: '广州',
		major: '信息安全',
		enterprise: '广州企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	}
	, {
		name: '广州',
		major: '电子信息工程',
		enterprise: '广州企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	}
	, {
		name: '广州',
		major: '网络安全',
		enterprise: '广州企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 36000,
		max: 40000,
	},
	{
		name: '广州',
		major: '信息安全',
		enterprise: '广州企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	},
	{
		name: '广州',
		major: '计算机科学',
		enterprise: '广州企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	}, {
		name: '成都',
		major: '软件工程',
		enterprise: '成都企业',
		position: '网络安全',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	},
	{
		name: '成都',
		major: '信息安全',
		enterprise: '成都企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	}
	, {
		name: '成都',
		major: '电子信息工程',
		enterprise: '成都企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	}
	, {
		name: '成都',
		major: '网络安全',
		enterprise: '成都企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 36000,
		max: 40000,
	},
	{
		name: '成都',
		major: '信息安全',
		enterprise: '成都企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	},
	{
		name: '成都',
		major: '计算机科学',
		enterprise: '成都企业',
		position: '软件工程师',
		skill: 'Java',
		task: '开发 Web 应用',
		min: 10000,
		max: 20000,
	}


]
citySelector = document.getElementById('city-selector');
companyTable = document.getElementById('table_two');
function onCitySelectorChange() {
	cityName = this.value;
	companyTable.innerHTML = '<tr><th>专业名</th><th>企业</th><th>岗位</th><th>技能</th><th>任务</th><th>最低薪酬</th><th>最高薪酬</th></tr>';
	for (city of cities) {
		if (city.name === cityName) {
			tr = document.createElement('tr');
			tr.innerHTML = `<td>${city.major}</td><td>${city.enterprise}</td><td>${city.position}</td><td>${city.skill}<td>${city.task}</td><td>${city.min}</td><td>${city.max}</td>`;
			companyTable.appendChild(tr);
		}
	}
}
citySelector.addEventListener('change', onCitySelectorChange);

var items = document.querySelectorAll('.item');
var infoBlocks = document.querySelectorAll('.info');
items.forEach(item => {
	item.addEventListener('click', () => {
		var infoId = item.getAttribute('data-info');
		infoBlocks.forEach(block => {
			if (block.id === infoId) {
				if (block.style.display === 'block') {
					block.style.display = 'none';
				} else {
					block.style.display = 'block';
				}
			} else {
				block.style.display = 'none';
			}
		});
		document.querySelectorAll('.table').forEach(table => {
			table.style.display = 'none';
		});
	});
});

var infoElements = document.querySelectorAll(".info");

infoElements.forEach((infoElement, index) => {
	var industryElement = infoElement.querySelector(".industry");
	industryElement.addEventListener("click", () => {
		if (index < 3) {
			var table1 = document.querySelector("#table_1");
			table1.style.display = table1.style.display === "none" ? "block" : "none";
		} else {
			var table2 = document.querySelector("#table_2");
			table2.style.display = table2.style.display === "none" ? "block" : "none";
		}
	});
});

var canvas = document.getElementById('chart');
var context = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;
context.fillStyle = '#eeeeee';
context.fillRect(0, 0, canvas.width, canvas.height);
// 绘制 x 轴
context.beginPath();
context.moveTo(50, 250);
context.lineTo(450, 250);
context.moveTo(445, 245);
context.lineTo(450, 250);
context.lineTo(445, 255);
context.stroke();

// 绘制 y 轴
context.beginPath();
context.moveTo(50, 250);
context.lineTo(50, 50);
context.moveTo(45, 55);
context.lineTo(50, 50);
context.lineTo(55, 55);
context.stroke();
// 设置柱子的颜色
context.fillStyle = '#a1d9f5';
context.fillRect(75, 50, 20, 200);
context.fillRect(105, 60, 20, 190);
context.fillRect(135, 70, 20, 180);
context.fillRect(165, 80, 20, 170);
context.fillRect(195, 90, 20, 160);
context.fillRect(225, 100, 20, 150);
context.fillRect(255, 110, 20, 140);
context.fillRect(285, 120, 20, 130);
context.fillRect(315, 130, 20, 120);
context.fillRect(345, 140, 20, 110);
// 设置标签的样式
context.font = '14px sans-serif';
context.fillStyle = 'black';

// 循环遍历柱子
for (var i = 0; i < 10; i++) {
	// 在柱子旁边添加标签
	context.fillText(i + 1, 80 + i * 30, 265);
}

// 在 x 轴下方添加标签
context.fillText('任务', 225, 280);

// 在 y 轴左侧添加标签
context.save();
context.translate(20, 150);
context.rotate(-Math.PI / 2);
context.fillText('词频', -10, 0);
context.restore();




var canvas = document.getElementById('chart_1');
var context = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;
context.fillStyle = '#eeeeee';
context.fillRect(0, 0, canvas.width, canvas.height);
// 绘制 x 轴
context.beginPath();
context.moveTo(50, 250);
context.lineTo(450, 250);
context.moveTo(445, 245);
context.lineTo(450, 250);
context.lineTo(445, 255);
context.stroke();

// 绘制 y 轴
context.beginPath();
context.moveTo(50, 250);
context.lineTo(50, 50);
context.moveTo(45, 55);
context.lineTo(50, 50);
context.lineTo(55, 55);
context.stroke();
// 设置柱子的颜色
context.fillStyle = '#a1d9f5';
context.fillRect(75, 50, 20, 200);
context.fillRect(105, 60, 20, 190);
context.fillRect(135, 70, 20, 180);
context.fillRect(165, 80, 20, 170);
context.fillRect(195, 90, 20, 160);
context.fillRect(225, 100, 20, 150);
context.fillRect(255, 110, 20, 140);
context.fillRect(285, 120, 20, 130);
context.fillRect(315, 130, 20, 120);
context.fillRect(345, 140, 20, 110);
// 设置标签的样式
context.font = '14px sans-serif';
context.fillStyle = 'black';

// 循环遍历柱子
for (var i = 0; i < 10; i++) {
	// 在柱子旁边添加标签
	context.fillText(i + 1, 80 + i * 30, 265);
}

// 在 x 轴下方添加标签
context.fillText('任务', 225, 280);

// 在 y 轴左侧添加标签
context.save();
context.translate(20, 150);
context.rotate(-Math.PI / 2);
context.fillText('词频', -10, 0);
context.restore();








var canvas = document.getElementById('pie');
var context = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;
context.fillStyle = '#eeeeee';
context.fillRect(0, 0, canvas.width, canvas.height);

var centerX = 150;
var centerY = 150;
var radius = 100;
var data = [0.3, 0.1, 0.6];
var colors = ['blue', 'green', 'red'];
var startAngle = -Math.PI / 2;
for (var i = 0; i < data.length; i++) {
	var endAngle = startAngle + data[i] * Math.PI * 2;
	context.beginPath();
	context.moveTo(centerX, centerY);
	context.arc(centerX, centerY, radius, startAngle, endAngle);
	context.closePath();
	context.fillStyle = colors[i];
	context.fill();
	startAngle = endAngle;
}
// 设置文本的样式
context.font = '14px sans-serif';
context.fillStyle = 'black';
context.textAlign = 'right';

// 在饼状图的右边添加文本
context.fillText('TOP 5:', 310, 120);
context.fillText('北京', 330, 150);
context.fillText('上海', 330, 170);
context.fillText('广州', 330, 190);
context.fillText('成都', 330, 210);
context.fillText('深圳', 330, 230);


var cells = document.getElementsByClassName("cell");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
	var id = this.getAttribute("data-id");
	toggleVisibility(id);
	var dataElements = document.getElementsByClassName("data");
	for (var j = 0; j < dataElements.length; j++) {
	  if (dataElements[j].id !== id) {
		dataElements[j].style.display = "none";
	  }
	}
  });
}

function toggleVisibility(id) {
  var element = document.getElementById(id);
  if (element.style.display === "none") {
	element.style.display = "block";
  } else {
	element.style.display = "none";
  }
}