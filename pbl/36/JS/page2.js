function chart(data, id) {
    var canvas = document.getElementById(id)
    var ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,canvas.width,canvas.height)
    const bl = 2
    const fontSize = 16 * bl
    const lineHeight = fontSize * 1.5
    canvas.height = 400 * bl
    canvas.width = 600 * bl
    canvas.style.height = `${canvas.height / bl}px`
    canvas.style.width = `${canvas.width / bl}px`
    ctx.textAlign = 'end'
    ctx.textBaseline = 'middle'
    ctx.font = fontSize + 'px 微软雅黑'

    // 圆心
    var centerX = canvas.width * 2 / 3 / 2
    var centerY = canvas.width * 2 / 3 / 2
    // 半径
    var radius = canvas.width * 2 / 3 / 2 * 4 / 5
    var rates = 0

    var textTop = canvas.height - lineHeight

    data.forEach((e) => {
        rates += e.rate
        e.textP = textTop
        textTop -= lineHeight
    })
    data.forEach((e) => {
        e.runRate = 0
        e.angle = e.rate / rates
    })
    const drawRect = (x, y, w, h, r, color) => {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
        ctx.fillStyle = color
        ctx.fill()
    }
    const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        var current = 0
        data.forEach((e, i) => {
            ctx.beginPath()
            ctx.fillStyle = e.color
            ctx.moveTo(centerX, centerY)
            ctx.arc(centerX, centerY, radius, current * 2 * Math.PI, (current + e.runRate) * 2 * Math.PI)
            ctx.closePath()
            ctx.lineWidth = 0
            ctx.fill()
            drawRect(canvas.width * 2 / 3, e.textP - lineHeight / 3, canvas.width * 1 / 15,
                lineHeight * 2 / 3, 5, e.color)
            ctx.fillText(`${e.text} ${e.rate}`, canvas.width * 14 / 15, e.textP, canvas.width * 2 / 3 *
                2 / 3)
            current += e.angle
            if (e.runRate > e.angle) {
                e.runRate = e.angle
            } else if (e.runRate < e.angle) {
                e.runRate += e.angle / 100
            }
        })
        if (!data.every(e => e.runRate === e.angle)) {
            requestAnimationFrame(render)
        }
    }
    render()
}

function barChart(dataArr, id, titleX, titleY) {
    // 声明所需变量
    var canvas, ctx;
    // 图表属性
    var cWidth, cHeight, cMargin, cSpace;
    var originX, originY;
    // 柱状图属性
    var bMargin, tobalBars, bWidth, maxValue;
    var totalYNomber;
    var gradient;

    // 运动相关变量
    var ctr, numctr, speed;
    //鼠标移动
    var mousePosition = {};

    // 获得canvas上下文
    canvas = document.getElementById(id);
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
    }
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    initChart(); // 图表初始化
    drawLineLabelMarkers(); // 绘制图表轴、标签和标记
    drawBarAnimate(); // 绘制柱状图的动画
    //检测鼠标移动
    var mouseTimer = null;
    // 图表初始化
    function initChart() {
        // 图表信息
        cMargin = 30;
        cSpace = 60;
        cHeight = canvas.height - cMargin * 2 - cSpace;
        cWidth = canvas.width - cMargin * 2 - cSpace;
        originX = cMargin + cSpace;
        originY = cMargin + cHeight;

        // 柱状图信息
        bMargin = 15;
        tobalBars = dataArr.length;
        bWidth = parseInt(cWidth / tobalBars - bMargin);
        maxValue = 0;
        for (var i = 0; i < dataArr.length; i++) {
            var barVal = parseInt(dataArr[i][1]);
            if (barVal > maxValue) {
                maxValue = barVal;
            }
        }
        maxValue += 50;
        totalYNomber = 10;
        ctr = 1;
        numctr = 1;
        speed = 0.00001;

        //柱状图渐变色
        gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, '#4facfe');
        gradient.addColorStop(1, '#00f2fe');
        // background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    }

    // 绘制图表轴、标签和标记
    function drawLineLabelMarkers() {
        ctx.translate(0.5, 0.5); 
        ctx.font = "15px Arial";
        ctx.lineWidth = 1;
        ctx.fillStyle = "#606266";
        ctx.strokeStyle = "#000";
        // y轴
        drawLine(originX, originY, originX, cMargin);
        // x轴
        drawLine(originX, originY, originX + cWidth, originY);

        // 绘制标记
        drawMarkers();
        ctx.translate(-0.5, -0.5); // 还原位置
    }

    // 画线的方法
    function drawLine(x, y, X, Y) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(X, Y);
        ctx.stroke();
        ctx.closePath();
    }

    // 绘制标记
    function drawMarkers() {
        ctx.strokeStyle = "#E0E0E0";
        // 绘制 y
        var oneVal = parseInt(maxValue / totalYNomber);
        ctx.textAlign = "right";
        for (var i = 0; i <= totalYNomber; i++) {
            var markerVal = i * oneVal;
            var xMarker = originX - 5;
            var yMarker = parseInt(cHeight * (1 - markerVal / maxValue)) + cMargin;
            ctx.fillText(markerVal, xMarker, yMarker + 3, cSpace); // 文字
            if (i > 0) {
                drawLine(originX, yMarker, originX + cWidth, yMarker);
            }
        }
        // 绘制 x
        ctx.textAlign = "center";
        for (var i = 0; i < tobalBars; i++) {
            var markerVal = dataArr[i][0];
            var xMarker = parseInt(originX + cWidth * (i / tobalBars) + bMargin + bWidth / 2);
            var yMarker = originY + 15;
            ctx.fillText(markerVal, xMarker, yMarker, cSpace); // 文字
        }
        // 绘制标题 y
        ctx.save();
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(titleX, -canvas.height / 2, cSpace - 10);
        ctx.restore();
        // 绘制标题 x
        ctx.fillText(titleY, originX + cWidth / 2, originY + cSpace / 2 + 10);
    };

    //绘制柱形图
    function drawBarAnimate(mouseMove) {
        for (var i = 0; i < tobalBars; i++) {
            var oneVal = parseInt(maxValue / totalYNomber);
            var barVal = dataArr[i][1];
            var barH = parseInt(cHeight * barVal / maxValue * ctr / numctr);
            var y = originY - barH;
            var x = originX + (bWidth + bMargin) * i + bMargin;
            drawRect(x, y, bWidth, barH, mouseMove); //高度减一避免盖住x轴
            ctx.fillText(parseInt(barVal * ctr / numctr), x + 15, y - 8); // 文字
        }
        if (ctr < numctr) {
            ctr++;
            setTimeout(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawLineLabelMarkers();
                drawBarAnimate();
            }, speed);
        }
    }

    //绘制方块
    function drawRect(x, y, X, Y, mouseMove) {

        ctx.beginPath();
        ctx.rect(x, y, X, Y);
        if (mouseMove && ctx.isPointInPath(mousePosition.x, mousePosition.y)) { //如果是鼠标移动的到柱状图上，重新绘制图表
            ctx.fillStyle = "green";
        } else {
            ctx.fillStyle = gradient;
            ctx.strokeStyle = gradient;
        }
        ctx.fill();
        ctx.closePath();

    }

}

var dataList = [{
    major: '计算机科学与技术',
    enterprise: 5,
    post: 5000,
    skill: 400,
    task: 4500,
    minimum_salary: 2000,
    maximum_salary: 12000
}, {
    major: '软件工程',
    enterprise: 20,
    post: 500,
    skill: 310,
    task: 4500,
    minimum_salary: 2000,
    maximum_salary: 12000
}, {
    major: '网络工程',
    enterprise: 15,
    post: 500,
    skill: 310,
    task: 4500,
    minimum_salary: 2000,
    maximum_salary: 12000
}, {
    major: '电子与计算机工程',
    enterprise: 13,
    post: 500,
    skill: 310,
    task: 4500,
    minimum_salary: 2000,
    maximum_salary: 12000
}, {
    major: '数据科学与大数据技术',
    enterprise: 21,
    post: 500,
    skill: 310,
    task: 4500,
    minimum_salary: 2000,
    maximum_salary: 12000
}, {
    major: '智能科学与技术',
    enterprise: 11,
    post: 500,
    skill: 310,
    task: 4500,
    minimum_salary: 2000,
    maximum_salary: 12000
},
{
    major: '空间信息与技术',
    enterprise: 22,
    post: 500,
    skill: 310,
    task: 4500,
    minimum_salary: 2000,
    maximum_salary: 12000
}];
var datalist_2 = [{
    name: "华为",
    position_number: 121,
    money_number: 5143,
}, {
    name: "比亚迪汽车工业",
    position_number: 12,
    money_number: 8000,
}, {
    name: "海底捞火锅",
    position_number: 11,
    money_number: 3600,
}, {
    name: "鸿联95",
    position_number: 121,
    money_number: 13000,
}, {
    name: "京东集团",
    position_number: 121,
    money_number: 5500,
}, {
    name: "腾讯",
    position_number: 121,
    money_number: 4000,
}, {
    name: "华为",
    position_number: 121,
    money_number: 5143,
}, {
    name: "比亚迪汽车工业",
    position_number: 12,
    money_number: 8000,
}, {
    name: "海底捞火锅",
    position_number: 11,
    money_number: 3600,
}, {
    name: "鸿联95",
    position_number: 121,
    money_number: 13000,
}, {
    name: "京东集团",
    position_number: 121,
    money_number: 5500,
}, {
    name: "腾讯",
    position_number: 121,
    money_number: 4000,
}, {
    name: "华为",
    position_number: 121,
    money_number: 5143,
}, {
    name: "比亚迪汽车工业",
    position_number: 12,
    money_number: 8000,
}, {
    name: "海底捞火锅",
    position_number: 11,
    money_number: 3600,
}, {
    name: "鸿联95",
    position_number: 121,
    money_number: 13000,
}, {
    name: "京东集团",
    position_number: 121,
    money_number: 5500,
}, {
    name: "腾讯",
    position_number: 121,
    money_number: 4000,
}, {
    name: "华为",
    position_number: 121,
    money_number: 5143,
}, {
    name: "比亚迪汽车工业",
    position_number: 12,
    money_number: 8000,
}, {
    name: "海底捞火锅",
    position_number: 11,
    money_number: 3600,
}, {
    name: "鸿联95",
    position_number: 121,
    money_number: 13000,
}, {
    name: "京东集团",
    position_number: 121,
    money_number: 5500,
}, {
    name: "腾讯",
    position_number: 121,
    money_number: 4000,
},]


// 给总表格动态添加数据
var tbody = document.querySelector("tbody");
var html = "";
for (var i = 0; i < dataList.length; i++) {
    html += "<tr>" + "<td>" + dataList[i].major + "</td>" + "<td>" + dataList[i].enterprise + "</td>" + "<td>" + dataList[i].post +
        "</td>" + "<td>" + dataList[i].skill + "</td>" + "<td>" + dataList[i].task + "</td>" +
        "<td>" + dataList[i].minimum_salary + "</td>" + "<td>" + dataList[i].maximum_salary + "</td>" + "</tr>"
}
document.querySelector("tbody").innerHTML = html



// 1.获取元素
var enterprise_canvas = document.querySelector("#enterprise_canvas");
var dialog_post = document.querySelector("#dialog-post");
var mask = document.querySelector('.login-bg');
var link = document.querySelectorAll(".enterprise_td");
var dialog_postList = document.querySelectorAll(".dialog_post");

var closeBtn = document.querySelector("#closeBtn");


// 给td添加属性
var td_hover = document.querySelector("tbody").querySelectorAll("tr");
for (var i = 0; i < td_hover.length; i++) {
    console.log(td_hover[i])
    td_hover[i].cells[1].addEventListener('click', function () {
        // 背景和表格框显示出来
        mask.style.display = 'block';
        enterprise_canvas.style.display = 'block';
        // console.log(i)
       
        // 添加小表格头顶的企业数据
        var val = this.innerHTML;
        document.querySelector("#enterprise_all").innerHTML = val;
        if (val > datalist_2.length) {
            val = 0;
        }
        // 添加小表格的数据
        var tbody_2 = document.querySelector(".tbody");
        var html_2 = "";
        for (var i = 0; i < val; i++) {
            html_2 += "<tr>" + "<td>" + (i + 1) + "</td>" + "<td>" + datalist_2[i].name + "</td>" + "<td>" + datalist_2[i].position_number + "</td>" + "<td>" + datalist_2[i].money_number +
                "</td>" + "</tr>";
        }

        document.querySelector(".tbody").innerHTML = html_2;

        var select_td = document.querySelector(".tbody").querySelectorAll("tr");
        var select_data = [];
        for (var i = 0; i < select_td.length; i++) {
            select_data.push(select_td[i].cells[1].innerText);

        }
        if (select_data.length != 0) {
            // 添加筛选下拉框的的数据
            var select_left = document.querySelector("#select_left");
            // console.log(select_left)
            for (var i = 0; i < select_data.length; i++) {
                var select_option = document.createElement("option");
                select_option.setAttribute("class", "del_option")
                select_option.innerHTML = select_data[i];
                select_left.appendChild(select_option)

            }
        }
        // console.log(this)
        // var del_option=document.querySelectorAll(".del_option")
        // console.log(del_option)
    })
    td_hover[i].cells[2].addEventListener('click', () => {
        dialog_post.style.display = 'block'
        mask.style.display = 'block';
        chart([{
            text: '北京',
            rate: 90,
            color: '#2d8cf0'
        },
        {
            text: '上海',
            color: '#f0e62d',
            rate: 50
        },
        {
            text: '成都',
            color: '#caf7cb',
            rate: 80
        },
        
        {
            text: '广东',
            color: '#a3b2f2',
            rate: 50
        },{
            text: '深圳',
            color: '#f81234',
            rate: 30
        }
        ], "Chart")
    })
    td_hover[i].cells[3].addEventListener('click', () => {
        dialog_post.style.display = 'block'
        mask.style.display = 'block';
        barChart(
            [
                ["Java", 500],
                ["RT-Thread", 400],
                ["Spring", 652],
                ["Mysql", 394],
                ["oracle", 405],
                ["Mybatis", 103],
                ["多线程 IO", 230],
            ], "Chart", "程度", "技能")
    })
    td_hover[i].cells[4].addEventListener('click', () => {
        dialog_post.style.display = 'block'
        mask.style.display = 'block';
        barChart(
            [
            ["Java", 60],
                ["Python", 40],
                ["Php", 52],
                ["Mysql", 34],
                ["springBoot", 45],
                ["Vue", 13],
                ["多线程设计", 23],
            ], "Chart", "任务", "所有")
    })
}


// console.log(document.querySelector("tbody").querySelector(".enterprise_td"))
//2.点击弹出层这个按钮link,让mask和enterprise_canvas显示出来
document.getElementsByClassName('close')[0].addEventListener('click', () => {
    dialog_post.style.display = 'none'
        mask.style.display = 'none';
})
document.getElementsByClassName('close-login')[0].addEventListener('click', () => {
    enterprise_canvas.style.display = 'none'
        mask.style.display = 'none';
})




for (var i = 0; i < link.length; i++) {
    link[i]

    // console.log(del_option)
    // 3.点击closeBtn就隐藏mask和login
    closeBtn.addEventListener('click', function () {
        mask.style.display = 'none';
        enterprise_canvas.style.display = 'none';
        var del_option = document.querySelectorAll(".del_option")
        for (var i = 0; i < del_option.length; i++) {
            del_option[i].remove()

        }
    })



}
