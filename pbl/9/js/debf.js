var array = [
    { "zym": "软件工程", "qy": "", "gw": "", "jn": "", "rw": "", "zdxc": "", "zgxc": "" },
    { "zym": "网络工程", "qy": "", "gw": "", "jn": "", "rw": "", "zdxc": "", "zgxc": "" },
    { "zym": "信息安全", "qy": "", "gw": "", "jn": "", "rw": "", "zdxc": "", "zgxc": "" },
    { "zym": "物联网工程", "qy": "", "gw": "", "jn": "", "rw": "", "zdxc": "", "zgxc": "" },
    { "zym": "电子与计算机工程", "qy": "", "gw": "", "jn": "", "rw": "", "zdxc": "", "zgxc": "" },
    { "zym": "数据科学与大数据技术", "qy": "", "gw": "", "jn": "", "rw": "", "zdxc": "", "zgxc": "" },
    { "zym": "网络空间安全", "qy": "", "gw": "", "jn": "", "rw": "", "zdxc": "", "zgxc": "" }
];
var tbody = document.getElementById("sjxi")
for (var i = 0; i < array.length; i++) {
    var tr = document.createElement("tr")
    tbody.appendChild(tr)
    for (var j in array[i]) {
        var td = document.createElement("td")
        td.innerHTML = array[i][j]
        tr.appendChild(td)
    }
}
// 绘制表格
var data = [
    { qy_bg: "企业", gw_bg: "岗位", jn_bg: "技能", rw_bg: "任务" },
    { qy_bg: "", gw_bg: "", jn_bg: "", rw_bg: "" },
    { qy_bg: "", gw_bg: "", jn_bg: "", rw_bg: "" },
    { qy_bg: "", gw_bg: "", jn_bg: "", rw_bg: "" },
    { qy_bg: "", gw_bg: "", jn_bg: "", rw_bg: "" }
];
var canvas1 = document.getElementById("canva1");
canvas1.width = 300;
canvas1.height = 150;
canvas1.style.border = "1px solid #ccc";
canvas1.style.backgroundColor = "#fff";
var canva1 = canvas1.getContext("2d");
canva1.font = "12px Micorsoft YaHei";
var rectW = (canvas1.width) / 4;
var rectH = (canvas1.height) / 5;

for (var i = 0; i <= 5; i++) {  
    canva1.moveTo(rectW * i, 0);   
    canva1.lineTo(rectW * i, canvas1.height);   
    canva1.moveTo(0, rectH * i);
    canva1.lineTo(canvas1.width, rectH * i);
    canva1.stroke();  
    canva1.strokeStyle = "rgb(255, 111, 0)";
}
 
for (var i = 0; i < data.length; i++) {
    var qy_bg = data[i].qy_bg;
    var gw_bg = data[i].gw_bg;
    var jn_bg = data[i].jn_bg;
    var rw_bg = data[i].rw_bg;
    canva1.fillText(qy_bg, 27, i * rectW + 18.5);  
    canva1.fillText(gw_bg, 100, i * rectW + 18.5);   
    canva1.fillText(jn_bg, 175, i * rectW + 18.5);   
    canva1.fillText(rw_bg, 252, i * rectW + 18.5);  
}

// 绘制饼状图
(function () {
    var data = [
        { title: "北京", value: 0.24, color: "rgb(255, 85, 0)" },
        { title: "上海", value: 0.26, color: "rgb(255, 105, 0)" },
        { title: "深圳", value: 0.12, color: "rgb(255, 140, 0)" },
        { title: "成都", value: 0.30, color: "orange" },
        { title: "广州", value: 0.08, color: "rgb(255, 175, 0)" }
    ];

    var w = 300;
    var h = 150;
    var cx = w / 2;
    var cy = h / 2;
    var r = 50;

    var canvas2 = document.getElementById("canva2");
    canvas2.style.border = "1px solid #ccc";
    canvas2.style.backgroundColor = "#fff";
    canvas2.width = w;
    canvas2.height = h;

    var canva2 = canvas2.getContext("2d");
    canva2.font = "12px Micorsoft YaHei";
   
    var beginAngle = Math.PI / 6; 
    data.forEach(function (item) {
        
        var angle = item.value * 2 * Math.PI;
        
        var endAngle = beginAngle + angle;

        canva2.beginPath();
        canva2.moveTo(cx, cy);
        canva2.arc(cx, cy, r, beginAngle, endAngle);
        canva2.fillStyle = item.color;
        canva2.fill();

        var txtAngle = beginAngle + angle / 2;
        if (txtAngle >= Math.PI / 2 && txtAngle < Math.PI * 3 / 2) {
            canva2.textAlign = "end";
        } else {
            canva2.textAlign = "start";
        }

        var tx = cx + (r + 10) * Math.cos(txtAngle);
        var ty = cy + (r + 10) * Math.sin(txtAngle);
        canva2.fillText(item.title + " " + item.value * 100 + "%", tx, ty);

        beginAngle = endAngle;
    })
})()

//绘制柱状图
var data = [
    { city: "北京", number: 945, color: "rgb(255, 111, 0)" },
    { city: "上海", number: 745, color: "rgb(255, 111, 0)" },
    { city: "广州", number: 645, color: "rgb(255, 111, 0)" },
    { city: "深圳", number: 545, color: "rgb(255, 111, 0)" },
    { city: "成都", number: 345, color: "rgb(255, 111, 0)" }
];
var x = 35, y = 125;
var xWidth = 20;
var yWidth = 10;

var canvas3 = document.querySelector("#canva3");
canvas3.width = 300;
canvas3.height = 150;
canvas3.style.border = "1px solid #ccc";
canvas3.style.backgroundColor = "#fff";

var canva3 = canvas3.getContext("2d");
canva3.font = "12px Micorsoft YaHei";

canva3.save();
canva3.translate(x, y);
canva3.beginPath();
//x轴
canva3.moveTo(0, 0);
canva3.lineTo(xWidth * 11, 0);
canva3.lineTo(xWidth * 11 - 10, -10);
canva3.moveTo(xWidth * 11, 0);
canva3.lineTo(xWidth * 11 - 10, 10);
canva3.fillText("技能", xWidth * 11, 15);

//y轴
canva3.moveTo(0, 0);
canva3.lineTo(0, -yWidth * 11);
canva3.lineTo(-10, -yWidth * 11 + 10);
canva3.moveTo(0, -yWidth * 11);
canva3.lineTo(10, -yWidth * 11 + 10);
canva3.fillText("词频", -30, -yWidth * 10);
canva3.strokeStyle = "gray";
canva3.stroke();

canva3.beginPath();
canva3.textAlign = "center";
canva3.textBaseline = "top";
data.forEach(function (item, index) {
    canva3.fillStyle = item.color;
    canva3.fillRect(index * 2 * xWidth + xWidth, -item.number / 100 * yWidth, xWidth, item.number / 100 * yWidth);
    canva3.fillText(item.city, index * 2 * xWidth + xWidth + xWidth / 2, 8);
})
canva3.restore();

// 绘制折线图
var data = [
    { city: "北京", value: 10 },
    { city: "上海", value: 30 },
    { city: "广州", value: 20 },
    { city: "深圳", value: 50 },
    { city: "成都", value: 40 }
];
var xWidth = 35;
var yWidth = 20;
var x = 45, y = 130;
var len = data.length;

var canvas4 = document.querySelector("#canva4");
canvas4.width = 300;
canvas4.height = 150;
canvas4.style.border = "1px solid #ccc";
canvas4.style.backgroundColor = "#fff";

var canva4 = canvas4.getContext("2d");
canva4.font = "12px Micorsoft YaHei";

canva4.beginPath();
//x轴
var xLength = xWidth * (len + 1);
canva4.moveTo(x, y);
canva4.lineTo(x + xLength, y);
canva4.lineTo(x + xLength - 7, y - 7);
canva4.moveTo(x + xLength, y);
canva4.lineTo(x + xLength - 7, y + 7);
//刻度
canva4.textAlign = "center";
canva4.textBaseline = "top";
for (var i = 1; i <= len; i++) {
    canva4.moveTo(x + xWidth * i, y);
    canva4.lineTo(x + xWidth * i, y - 5);
    canva4.fillText(data[i - 1].city, x + xWidth * i, y + 5);
    canva4.fillText("任务", x + xWidth * 6, y + 5);
}

//y轴
var yLength = yWidth * (len + 1);
canva4.moveTo(x, y);
canva4.lineTo(x, y - yLength);
canva4.lineTo(x - 7, y - yLength + 7);
canva4.moveTo(x, y - yLength);
canva4.lineTo(x + 7, y - yLength + 7);
//刻度
canva4.textAlign = "end";
canva4.textBaseline = "middle";
for (var i = 0; i <= 5; i++) {
    canva4.moveTo(x, y - i * yWidth);
    canva4.lineTo(x + 5, y - i * yWidth);
    canva4.fillText(i * 10, x - 5, y - i * yWidth)
    canva4.fillText("词频", x - 10, y - 5.8 * yWidth);
}
canva4.strokeStyle = "gray";
canva4.stroke();

canva4.beginPath();
data.forEach(function (item, index) {
    canva4.lineTo(x + (index + 1) * xWidth, y - item.value / 10 * yWidth);
});
canva4.strokeStyle = "rgb(255, 115, 0)";
canva4.stroke();

var qy = document.querySelector("#qy")
qy.onmouseover = function () {
    var can1 = document.querySelector("#canva1")
    can1.className = "show"
}
qy.onmouseout = function () {
    var can1 = document.querySelector("#canva1")
    can1.className = "hidden"
}
var gw = document.querySelector("#gw")
gw.onmouseover = function () {
    var can2 = document.querySelector("#canva2")
    can2.className = "show"
}
var gw = document.querySelector("#gw")
gw.onmouseout = function () {
    var can2 = document.querySelector("#canva2")
    can2.className = "hidden"
}
var jn = document.querySelector("#jn")
jn.onmouseover = function () {
    var can3 = document.querySelector("#canva3")
    can3.className = "show" 
}
var jn = document.querySelector("#jn")
jn.onmouseout = function () {
    var can3 = document.querySelector("#canva3")
    can3.className = "hidden" 
}
var rw = document.querySelector("#rw")
rw.onmouseover = function () {
    var can4 = document.querySelector("#canva4")
    can4.className = "show"
}
var rw = document.querySelector("#rw")
rw.onmouseout = function () {
    var can4 = document.querySelector("#canva4")
    can4.className = "hidden"
}
