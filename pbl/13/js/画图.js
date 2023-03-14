function t1() {
    let canvas = document.getElementById('t1');
    let ctx = canvas.getContext("2d");
    canvas.style.border = "1px solid #ccc";
    ctx.lineWidth = 0.8;
    ctx.font = "10.5px Microsoft YaHei  ";
    ctx.fillStyle = "black";
    var rowb = 10;
    for (var m = 0; m < 10; m++) {
        ctx.beginPath();
        ctx.moveTo(10, rowb);
        ctx.strokeStyle = " #BFC4DD";
        ctx.lineTo(290, rowb);
        ctx.stroke();
        rowb += 15;
    }
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.strokeStyle = " #BFC4DD";
    ctx.lineTo(10, 145);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(178, 10);
    ctx.strokeStyle = " #BFC4DD";
    ctx.lineTo(178, 145);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(235, 10);
    ctx.strokeStyle = " #BFC4DD";
    ctx.lineTo(235, 145);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(290, 10);
    ctx.strokeStyle = " #BFC4DD";
    ctx.lineTo(290, 145);
    ctx.stroke();
    ctx.fillText("名录", 84, 22);
    ctx.fillText("岗位数", 190, 22);
    ctx.fillText("薪酬", 252, 22);
}
t1();

var shuju = [{
    '北京': 500
}, {
    '上海': 450
}, {
    '广州': 400
}, {
    '成都': 350
}, {
    '深圳': 300
}]
var colors = [" rad", "blue", " green", " grey", " pink"];
function t2_2(ctx) {
    let begin = 10;
    let zi = 12;
    ctx.font = "10px  Microsoft YaHei";
    for (let i = 0; i < shuju.length; i++) {
        ctx.beginPath()
        ctx.fillStyle = colors[i];
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.1;
        ctx.arc(240, begin, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fillText(Object.keys(shuju[i]), 260, zi)
        begin += 14
        zi += 14
        ctx.closePath()
    }
}

function data() {
    data1 = []
    var total = 0;
    for (var i = 0; i < shuju .length; i++) {
        total += parseInt(Object.values(shuju[i]));
    }
    for (var j = 0; j < shuju.length; j++) {
        var angle = parseInt(Object.values(shuju[j])) / total * Math.PI * 2;
        data1.push(angle);
    }
    return data1;
}
data()

function t2() {
    let canvas = document.getElementById('t2');
    let ctx = canvas.getContext("2d");
    canvas.style.border = "1px solid #ccc";
    ctx.lineWidth = 0.2;
    var radius = 30;
    var x2 = canvas.width / 7;
    var y2 = canvas.height / 4;
    var startAngle = 0;
    ctx.scale(2, 2)
    for (var i = 0; i < data1.length; i++) {
        var endAngle = startAngle + data1[i];
        ctx.beginPath();
        if (i == 4) {
            // 横纵坐标是相反的，横坐标向左为正方向，纵坐标向下为正方向
            ctx.moveTo(x2 + 4, y2 - 2);
            ctx.arc(x2 + 4, y2 - 2, radius, startAngle, endAngle);
            ctx.lineTo(x2 + 4, y2 - 2)
        } else if (i == 3) {
            ctx.moveTo(x2 + 2, y2 - 3);
            ctx.arc(x2 + 2, y2 - 3, radius, startAngle, endAngle);
            ctx.lineTo(x2 + 2, y2 - 3)
        }
        else {
            ctx.moveTo(x2, y2);
            ctx.arc(x2, y2, radius, startAngle, endAngle);
            ctx.lineTo(x2, y2)
        }
        ctx.fillStyle = colors[i];
        startAngle = endAngle;
        ctx.fill();
        ctx.stroke();
    }
    ctx.font = "12px serif  ";
    ctx.fillStyle = "black";
    ctx.fillText("TOP 5:", 77, 13);
    ctx.font = "7px Microsoft YaHei  ";
    ctx.fillText("北京     500", 100, 25);
    ctx.fillText("上海     450", 100, 35);
    ctx.fillText("广州     400", 100, 45);
    ctx.fillText("成都     350", 100, 55);
    ctx.fillText("深圳     300", 100, 65);
}
t2()

function t3() {
    let canvas = document.getElementById("t3");
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    canvas.style.border = "1px solid #ccc";
    ctx.lineWidth = 1;
    ctx.moveTo(15, 4);
    ctx.lineTo(15, 145);//绘制Y轴
    ctx.lineTo(275, 145);//绘制X轴
    ctx.stroke();
    ctx.moveTo(25, 4)
    let begin = 4;
    let zi = 12;
    ctx.font = "10px  Microsoft YaHei";
    for (let i = 0; i < shuju.length; i++) {
        let gao = parseInt(Object.values(shuju[i]));
        ctx.fillStyle = colors[i]
        ctx.fillRect(30 + i * 40, 144 - gao / 5, 20, gao / 5);
        ctx.fillStyle = colors[i];
        ctx.fillRect(220, begin, 35, 10)
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.1;
        ctx.strokeRect(220, begin, 35, 10);
        ctx.fillStyle = "black";
        ctx.fillText(Object.keys(shuju[i]), 260, zi)
        begin += 14
        zi += 14
    }
}
t3()

function t4() {
    let canvas = document.getElementById("t4");
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    canvas.style.border = "1px solid #ccc";
    ctx.moveTo(15, 4);
    ctx.lineTo(15, 145);//绘制Y轴
    ctx.lineTo(275, 145);//绘制X轴
    ctx.stroke();
    ctx.closePath()

    let heng = 40
    for (var i = 0; i < shuju.length; i++) {
        ctx.beginPath()
        var shu = parseInt(Object.values(shuju[i]))
        ctx.fillStyle = colors[i];
        ctx.arc(heng, shu / 4, 10, 0, Math.PI * 2);
        ctx.fill();
        if (i + 1 != 5) {
            var hou = parseInt(Object.values(shuju[i + 1]))
            let y = hou / 4;
            ctx.moveTo(50, y);
        }
        heng += 38
        ctx.closePath()
    }
    t2_2(ctx)
}
t4()

function t5() {
    let canvas = document.getElementById("t5");
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    canvas.style.border = "1px solid #ccc";
    ctx.moveTo(15, 14);
    ctx.lineTo(15, 145);//绘制Y轴
    ctx.lineTo(275, 145);//绘制X轴
    ctx.stroke();
    ctx.closePath()
    var X = 15;
    var y2 = 60;
    for (let i = 0; i < shuju.length; i++) {
        var X = X + 40;
        var Y = parseInt(Object.values(shuju[i])) / 10
        ctx.beginPath();
        ctx.moveTo(X, Y + y2);
        if (i + 1 != 5) {
            var nextY = parseInt(Object.values(shuju[i + 1])) / 10
            ctx.lineTo(X + 40, nextY + y2);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.fillStyle = colors[i];
        ctx.arc(X, Y + y2, 8, 0, Math.PI * 2)
        ctx.fill()
    };
    t2_2(ctx)
}
t5()

var a;
function xian(ths) {
    if (ths == 1) {
        a = document.getElementById('t1');
    } else if (ths == 2) {
        a = document.getElementById('t2');
    } else if (ths == 3) {
        a = document.getElementById('t3');
    } else if (ths == 4) {
        a = document.getElementById('t4');
    } else if (ths == 5) {
        a = document.getElementById('t5');
    }
    a.style.display = "block";
}
function yin() {
    a.style.display = "none";
}