window.onscroll = function () {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var a = document.getElementsByClassName('dh')[0];
    if (scrollTop <= 242) {
        //可看到首页封面时
        a.style.position = "absolute";
        a.style.top = "245px";
    } else {
        a.style.position = "fixed";
        a.style.top = "0px";
    }
}

var lbxz = [{
    id: 1,
    fu: "工学",
    child: ["力学类", "机械类", "电子信息类", "计算机类", "自动化类"]
}, {
    id: 2,
    fu: "理学",
    child: ["化学类", "数学类", "物理学类", "统计学类"]
}]

var lbsj1 = [{
    id: 1,
    ml: "工学",
    zyl: [{
        "力学类": ["理论与应用力学", "工程力学"]
    }, {
        "机械类": ["机械工程", "机械设计制造及其自动化", "材料成型及控制工程", "机械电子工程", "工业设计", "过程装备与控制工程", "微机电系统工程"]
    }, {
        "电子信息类": ["电子信息工程", "电子科学与技术", "微电子科学与工程", "集成电路设计与集成系统", "电子信息科学与技术"]
    }, {
        "计算机类": ["计算机科学与技术", "软件工程", "网络工程", "信息安全", "数据科学与大数据技术", "智能科学与技术"]
    }, {
        "自动化类": ["机器人工程", "核电技术与控制工程", "工业智能", "自动化"]
    }],
}, {
    id: 2,
    ml: "理学",
    zyl: [{
        "化学类": ["应用化学", "化学生物学", "分子科学与工程", "能源化学", "化学测量学与技术"]
    }, {
        "数学类": ["数学与应用数学", "信息与计算科学", "数理基础科学", "数据计算及应用"]
    }, {
        "物理学类": ["应用物理学", "核物理", "声学", "量子信息科学", "系统科学与工程"]
    }, {
        "统计学类": ["统计", "应用统计学"]
    }]
}]

function Chang_select() {
    //根据第一个下拉框更新第二个下拉框
    var tj1 = document.querySelector('select').value;
    var tj2 = document.getElementById('qy');
    while (tj2.options.length) {
        tj2.remove(0);
    }
    for (var j = 0; j < lbxz.length; j++) {
        var wf = lbxz[j].fu
        if (wf == tj1) {
            var wait = lbxz[j].child;
        }
    }
    if (wait) {
        for (var i = 0; i < wait.length; i++) {
            var item = document.createElement('option');
            item.textContent = wait[i];
            tj2.append(item);
        }
    }
}

function zailb() {
    //加载列表，便于之后的筛选
    var tb1 = document.getElementById('lb1');
    for (var k = 0; k < lbsj1.length; k++) {
        for (var m = 0; m < lbsj1[k].zyl.length; m++) {
            var list = Object.values(lbsj1[k].zyl[m]);
            for (var n = 0; n < list[0].length; n++) {
                var tr = document.createElement('tr');
                var ml = document.createElement('td');
                var zyl = document.createElement('td');
                var zym = document.createElement('td');
                ml.innerHTML = lbsj1[k].ml;
                zyl.innerHTML = Object.keys(lbsj1[k].zyl[m]);
                zym.innerHTML = list[0][n];
                tr.appendChild(ml);
                tr.appendChild(zyl);
                tr.appendChild(zym);
                tb1.appendChild(tr);
            }

        }
    }
}
zailb();

function change_lb() {
    var tbody = document.getElementById('lb1');
    //清空tbody
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.lastChild);
    }
    zailb()
    var shai1 = document.querySelector('select').value;
    if (shai1 == '门类') { zailb(); return; }
    var shai2 = document.getElementById('qy').value;
    var biao1 = document.getElementById('lb1');
    //表格列数
    //var CELL = TAB.rows.item(0).cells.length ;
    for (var i = 0; i < biao1.rows.length; i++) {
        // 获取每一行的第一列的值
        var tou = biao1.rows[i].cells[0].innerHTML;
        var wei = biao1.rows[i].cells[1].innerHTML;
        if (tou != shai1) {
            biao1.rows[i].remove();
            i--;
        } else if (wei != shai2) {
            biao1.rows[i].remove();
            i--;
        }
    }
}

function zaib2() {
    var t = document.getElementById('t');
    var s1 = lbsj1[0].zyl[3].计算机类
    var s2 = lbsj1[0].zyl[4].自动化类
    var s3 = lbsj1[0].zyl[2].电子信息类
    var li = []
    li.push(s1)
    li.push(s2)
    li.push(s3)
    for (var a = 0; a < li.length; a++) {
        for (b = 0; b < li[a].length; b++) {
            var trf = document.createElement('tr');
            var tdf = document.createElement('td');
            tdf.innerHTML = li[a][b];
            trf.appendChild(tdf);
            for (var i = 0; i < 6; i++) {
                var td = document.createElement('td');
                trf.appendChild(td);
            }
            t.appendChild(trf);
        }
    }
}
zaib2()

function cbiao() {
    let canvas = document.getElementById('cbiao');
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
cbiao();

var sdxy = [{
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
var colors = [" rgb(182, 182, 125)", " #FFC7A1", " rgb(243, 236, 221)", " #BFC4DD", " rgb(186, 210, 246)"];
function tuli(ctx) {
    let begin = 10;
    let zi = 12;
    ctx.font = "10px  Microsoft YaHei";
    for (let i = 0; i < sdxy.length; i++) {
        ctx.beginPath()
        ctx.fillStyle = colors[i];
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.1;
        ctx.arc(240, begin, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fillText(Object.keys(sdxy[i]), 260, zi)
        begin += 14
        zi += 14
        ctx.closePath()
    }
}

function datachu() {
    data = []
    var total = 0;
    for (var i = 0; i < sdxy.length; i++) {
        total += parseInt(Object.values(sdxy[i]));
    }
    for (var j = 0; j < sdxy.length; j++) {
        var angle = parseInt(Object.values(sdxy[j])) / total * Math.PI * 2;
        data.push(angle);
    }
    return data;
}
datachu()

function cbing() {
    let canvas = document.getElementById('cbing');
    let ctx = canvas.getContext("2d");
    canvas.style.border = "1px solid #ccc";
    ctx.lineWidth = 0.2;
    var radius = 30;
    var x0 = canvas.width / 7;
    var y0 = canvas.height / 4;
    var startAngle = 0;
    ctx.scale(2, 2)
    for (var i = 0; i < data.length; i++) {
        var endAngle = startAngle + data[i];
        ctx.beginPath();
        if (i == 4) {
            // 横纵坐标是相反的，横坐标向左为正方向，纵坐标向下为正方向
            ctx.moveTo(x0 + 4, y0 - 2);
            ctx.arc(x0 + 4, y0 - 2, radius, startAngle, endAngle);
            ctx.lineTo(x0 + 4, y0 - 2)
        } else if (i == 3) {
            ctx.moveTo(x0 + 2, y0 - 3);
            ctx.arc(x0 + 2, y0 - 3, radius, startAngle, endAngle);
            ctx.lineTo(x0 + 2, y0 - 3)
        }
        else {
            ctx.moveTo(x0, y0);
            ctx.arc(x0, y0, radius, startAngle, endAngle);
            ctx.lineTo(x0, y0)
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
cbing()

function ctiao() {
    let canvas = document.getElementById("ctiao");
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
    for (let i = 0; i < sdxy.length; i++) {
        let gao = parseInt(Object.values(sdxy[i]));
        ctx.fillStyle = colors[i]
        ctx.fillRect(30 + i * 40, 144 - gao / 5, 20, gao / 5);
        ctx.fillStyle = colors[i];
        ctx.fillRect(220, begin, 35, 10)
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.1;
        ctx.strokeRect(220, begin, 35, 10);
        ctx.fillStyle = "black";
        ctx.fillText(Object.keys(sdxy[i]), 260, zi)
        begin += 14
        zi += 14
    }
}
ctiao()

function csan() {
    let canvas = document.getElementById("csan");
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    canvas.style.border = "1px solid #ccc";
    ctx.moveTo(15, 4);
    ctx.lineTo(15, 145);//绘制Y轴
    ctx.lineTo(275, 145);//绘制X轴
    ctx.stroke();
    ctx.closePath()

    let heng = 40
    for (var i = 0; i < sdxy.length; i++) {
        ctx.beginPath()
        var shu = parseInt(Object.values(sdxy[i]))
        ctx.fillStyle = colors[i];
        ctx.arc(heng, shu / 4, 10, 0, Math.PI * 2);
        ctx.fill();
        if (i + 1 != 5) {
            var hou = parseInt(Object.values(sdxy[i + 1]))
            let y = hou / 4;
            ctx.moveTo(50, y);
        }
        heng += 38
        ctx.closePath()
    }
    tuli(ctx)
}
csan()

function czhe() {
    let canvas = document.getElementById("czhe");
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    canvas.style.border = "1px solid #ccc";
    ctx.moveTo(15, 4);
    ctx.lineTo(15, 145);//绘制Y轴
    ctx.lineTo(275, 145);//绘制X轴
    ctx.stroke();
    ctx.closePath()
    var X = 15;
    var y0 = 60;
    for (let i = 0; i < sdxy.length; i++) {
        var X = X + 40;
        var Y = parseInt(Object.values(sdxy[i])) / 10
        ctx.beginPath();
        ctx.moveTo(X, Y + y0);
        if (i + 1 != 5) {
            var nextY = parseInt(Object.values(sdxy[i + 1])) / 10
            ctx.lineTo(X + 40, nextY + y0);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.fillStyle = colors[i];
        ctx.arc(X, Y + y0, 8, 0, Math.PI * 2)
        ctx.fill()
    };
    tuli(ctx)
}
czhe()

var dui;
function xian(ths) {
    if (ths == 1) {
        dui = document.getElementById('cbiao');
    } else if (ths == 2) {
        dui = document.getElementById('cbing');
    } else if (ths == 3) {
        dui = document.getElementById('ctiao');
    } else if (ths == 4) {
        dui = document.getElementById('csan');
    } else if (ths == 5) {
        dui = document.getElementById('czhe');
    }
    dui.style.display = "block";
}
function yin() {
    dui.style.display = "none";
}

var zymdata = [{
    "id": 0,
    "zym": "计算机科学与技术",
    "fzr": "付浩然",
    "lsnum": 2,
    "xsnum": 400
}, {
    "id": 1,
    "zym": "软件工程",
    "fzr": "胥又文",
    "lsnum": 3,
    "xsnum": 410
}];

function guazai(i) {
    var tbody = document.getElementById('tbody');
    for (i; i < zymdata.length; i++) {
        var tr = document.createElement('tr');
        var td0 = document.createElement('td');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        td0.innerHTML = "<input type='checkbox' name='checkbox'>"
        td1.innerHTML = zymdata[i].zym
        td2.innerHTML = zymdata[i].fzr
        td3.innerHTML = zymdata[i].lsnum
        td4.innerHTML = zymdata[i].xsnum
        var list = yuefen(zymdata[i].lsnum, zymdata[i].xsnum)
        let ssb = list[0] + "/" + list[1]
        let bfb = (zymdata[i].lsnum / zymdata[i].xsnum * 100).toFixed(2) + "%"
        td5.innerHTML = ssb
        td6.innerHTML = bfb
        tr.appendChild(td0)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tbody.appendChild(tr)
    }
}
guazai(0)

function yuefen(m, n) {
    var lie = []
    var a = m;
    var b = n;
    (a >= b) ? (a = m, b = n) : (a = n, b = m);
    if (m != 1 && n != 1) {
        for (var i = b; i >= 2; i--) {
            if (m % i == 0 && n % i == 0) {
                m = m / i;
                n = n / i;
            }
        }
    }
    lie[0] = m
    lie[1] = n
    return lie
}
function gu() { setTimeout(function () { document.getElementsByClassName('guan')[0].style.display = "none" }, 100); }
function guan() { document.getElementsByClassName('guan')[0].style.display = "block" }//class类不能简单直接拿来判断，因为有多个class,加上数组才能判断
function clear1() {
    document.getElementById("input").value = "";
    var tbody = document.getElementById('tbody')
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.lastChild); //Node.lastChild返回当前节点的最后一个子节点
    }
    guazai(0)
}

function sou() {
    var input = document.querySelector('input').value
    if (input == "") { alert("专业名不能为空，请重新输入！"); return }
    var tbody = document.getElementById('tbody')
    clear1() //如果显示一次搜索结果，进行二次搜索时重载数据
    document.querySelector('input').value = input//保留用户输入的值显示在输入框
    var flag = false
    for (var i = 0; i < tbody.rows.length; i++) {
        var zy = tbody.rows[i].cells[1].innerHTML
        if (zy != input) {
            if (i == tbody.rows.length - 1 && flag == false) {
                alert("专业名输入有误，请重新输入！")
                clear1()
                break;
            }
            tbody.rows[i].remove()
            i--
        } else {
            flag = true
        }
    }
}

function zeng() {
    document.getElementsByClassName('jia')[0].style.display = 'block'
    document.getElementById('che').style.display = 'block'
    var tbody = document.getElementById('tbody')
    var tr = document.createElement('tr')
    var td0 = document.createElement('td')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    var td6 = document.createElement('td')
    td0.innerHTML = "<input type='checkbox' name='checkbox'>"
    td1.appendChild(document.createElement('input'))
    td2.appendChild(document.createElement('input'))
    td3.appendChild(document.createElement('input'))
    td4.appendChild(document.createElement('input'))
    td5.innerHTML = ""
    td6.innerHTML = ""
    tr.appendChild(td0)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tbody.appendChild(tr)
}

function jia() {
    var tbody = document.getElementById('tbody')
    var row = tbody.rows.length
    var yyou = zymdata.length
    for (var i = yyou; i < row; i++) {
        var dataz = {};
        dataz["id"] = i - 1;
        dataz["zym"] = tbody.rows[i].cells[1].childNodes[0].value;
        dataz["fzr"] = tbody.rows[i].cells[2].childNodes[0].value;
        dataz["lsnum"] = parseInt(tbody.rows[i].cells[3].childNodes[0].value);
        dataz["xsnum"] = parseInt(tbody.rows[i].cells[4].childNodes[0].value);
        zymdata[i] = dataz
    }
    cx()
}

function opcheckboxed(objName, type) {
    var objNameList = document.getElementsByName(objName);
    if (null != objNameList) {
        for (var i = 0; i < objNameList.length; i++) {
            if (objNameList[i].checked == true) {
                if (type != 'checkall') {  // 非全选
                    objNameList[i].checked = false;
                }
            } else {
                if (type != 'uncheckall') {  // 非取消全选
                    objNameList[i].checked = true;
                }
            }
        }
    }
}

var tb = document.getElementById('tbody')
tb.onclick = function (ev) {
    //获取事件对象，利用事件对象获取target(具体触发事件的元素)
    var ta = ev.target.parentElement
    if (ta.cells[0] != null) {
        if (ta.cells[0].childNodes[0].checked == true) {
            ta.cells[0].childNodes[0].checked = false
        } else {
            ta.cells[0].childNodes[0].checked = true
        }
    }

}

function shan() {
    document.getElementsByClassName('del')[0].style.display = "block";
}
function fou() {
    document.getElementsByClassName('del')[0].style.display = "none";
}

function chu() {
    for (var s = 0; s < tb.rows.length; s++) {
        if (tb.rows[s].cells[0].childNodes[0].checked == true) {
            tb.rows[s].remove()
            zymdata.splice(s, 1);
            s--
        }
    }
    var d = 0
    for (var k = 0; k < zymdata.length; k++) {//重新更新id 确保表格视图id和数据列表id一样
        zymdata[k].id = d
        d += 0
    }
    fou()
    document.getElementsByClassName('chu')[0].style.display = "block";
    setTimeout(function () { document.getElementsByClassName('chu')[0].style.display = "none"; }, 1000);
}

function xiu() {
    document.getElementsByClassName('xg')[0].style.display = "block";
    document.getElementsByClassName('che')[0].style.display = "block";
    for (var a = 0; a < tb.rows.length; a++) {
        if (tb.rows[a].cells[0].childNodes[0].checked == true && tb.rows[a].cells[1].childNodes[0].nodeName == '#text') {//确保选中的对象被第一次选择
            for (var b = 1; b < 5; b++) {
                var zhi = tb.rows[a].cells[b].innerHTML
                tb.rows[a].cells[b].innerHTML = ""
                var input = document.createElement('input')
                input.value = zhi
                tb.rows[a].cells[b].appendChild(input)
            }
        }
    }
}

function gai() {
    for (var a = 0; a < tb.rows.length; a++) {
        if (tb.rows[a].cells[0].childNodes[0].checked == true) {
            zymdata[a].zym = tb.rows[a].cells[1].childNodes[0].value
            zymdata[a].fzr = tb.rows[a].cells[2].childNodes[0].value
            zymdata[a].lsnum = tb.rows[a].cells[3].childNodes[0].value
            zymdata[a].xsnum = tb.rows[a].cells[4].childNodes[0].value
        }
    }
    cx()
    document.getElementsByClassName('gai')[0].style.display = "block";
    setTimeout(function () { document.getElementsByClassName('gai')[0].style.display = "none"; }, 1000);
}

function cx() {
    clear1()
    document.getElementById("che").style.display = "none"
    document.getElementsByClassName("jia")[0].style.display = "none"
    document.getElementsByClassName("che")[0].style.display = "none"
    document.getElementsByClassName("xg")[0].style.display = "none"
}

var dong = document.getElementById('wks')
wks.addEventListener('click', function() {
  document.getElementsByClassName("zi")[0].setAttribute('id', 'zi1')
  document.getElementsByClassName("zi")[1].setAttribute('id', 'zi2')
  document.getElementsByClassName("zi")[2].setAttribute('id', 'zi3')
  document.getElementsByClassName("zi")[3].setAttribute('id', 'zi4')
  document.getElementsByClassName("zi")[4].setAttribute('id', 'zi5')
});
