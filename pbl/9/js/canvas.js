var canvas = document.getElementById('canvas')
canvas.width = 200;
canvas.height = 200;
var ctx = canvas.getContext('2d')

ctx.beginPath()
// 画圆
ctx.arc(70, 70, 50, Math.PI * 2, 0)
ctx.moveTo(105, 70)
// 画嘴巴
ctx.arc(70, 70, 35, 0, Math.PI)
ctx.moveTo(105, 50)
// 画右边眼睛
ctx.arc(95, 50, 10, 0, Math.PI, true)
ctx.moveTo(55, 50)
// 画左边眼睛
ctx.arc(45, 50, 10, 0, Math.PI, true)
ctx.strokeStyle = "rgb(255, 98, 0)";
ctx.stroke();
ctx.closePath();