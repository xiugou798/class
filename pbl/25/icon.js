var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();//Z
ctx.strokeStyle="#FFD700";
ctx.moveTo(25,10);//设置结束坐标
ctx.lineTo(75,10);//绘制线条
ctx.lineWidth = 5;//线条宽度
ctx.lineCap="round"// 向两端线条添加圆形的边缘，其余参数还有square和butt（默认）
ctx.stroke();//重新开始一条路径使颜色不互相影响
ctx.beginPath();
ctx.strokeStyle="#FFD700";
ctx.moveTo(75,10);
ctx.lineTo(12,80);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#FFD700";
ctx.moveTo(12,80);
ctx.lineTo(87,80);
ctx.stroke();

ctx.beginPath();//L
ctx.strokeStyle="#FFD700";
ctx.moveTo(50,10);
ctx.lineTo(50,80);
ctx.stroke();

ctx.beginPath();//W
ctx.strokeStyle="balck";
ctx.moveTo(10, 25);
ctx.lineTo(27,60);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="balck";
ctx.moveTo(50,35);
ctx.lineTo(72,60);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="balck";
ctx.moveTo(72,60);
ctx.lineTo(90,25);
ctx.stroke();
ctx.closePath();
ctx.fill();