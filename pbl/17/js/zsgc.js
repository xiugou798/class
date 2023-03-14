
    // 添加
    window.onload = function () {
        document.getElementById('bchgx').onclick = function () {
            // 将要输入的内容存储到zhuanyeming和fuzeren两个变量名中
            var zhuanyeming1 = document.getElementsByName('zhuanyeming')[0];
            // var zhuanyeming1 = document.getElementById('zhuanyeming');
            var zhuanyeming = zhuanyeming1.value;
            var fuzeren1 = document.getElementsByName('fuzeren')[0];
            var fuzeren = fuzeren1.value;
			var kcsl1 = document.getElementsByName('kcsl')[0];
			var kcsl = kcsl1.value;
			var xssl1 = document.getElementsByName('xssl')[0];
			var xssl = xssl1.value;
			var ssb1 = document.getElementsByName('ssb')[0];
			var ssb = ssb1.value;
			var jc1 = document.getElementsByName('jc')[0];
			var jc = jc1.value;
            // 选择往哪个table中tbody中添加tr
            var table = document.getElementsByTagName('table')[3];
            var tbody = document.getElementsByTagName('tbody')[3];
            // 创建一个tr
            var tr = document.createElement('tr');//相当于<tr></tr>
            // 在创建一个td
            var td1 = document.createElement('td');
            // 在td中添加<input type="checkbox" name="dxk">
            var input = document.createElement('input');
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "dxk");
            // 将input追加到td中
            td1.appendChild(input);
            // 将td1追加到tr中
            tr.appendChild(td1);
            // 创建td2
            var td2 = document.createElement('td');
            // 定义table中的所有tr：alltrsOftable
            var alltrsOftable = table.getElementsByTagName('tr');
            // 获取表格中最后一个序号
            // alltrsOftable[alltrsOftable.length-1].children[1].innerHTML:表示的是所有tr中，表格的行数-1.索引值为1的那一列子节点开始中的内容
            var lastXH = parseInt(alltrsOftable[alltrsOftable.length - 1].children[1].innerHTML);//转换成数字类型，或者使用Number
            // td2的值
            td2.innerHTML = lastXH + 1;
            // 将td2添加到tr中
            tr.appendChild(td2);
            // 创建第三列
            var td3 = document.createElement('td');
            // 将之前存储的zhuanyeming添加到td3
            td3.innerHTML = zhuanyeming;
            // 将td3添加到tr中
            tr.appendChild(td3);
            // 创建第四列
            var td4 = document.createElement('td');
            // 将之前存储的fuzeren添加到td4
            td4.innerHTML = fuzeren;
            // 将td4添加到tr中
            tr.appendChild(td4);
            // 创建第五列
			var td5 = document.createElement('td');
			td5.innerHTML = fuzeren;
			tr.appendChild(td5);
			var td6 = document.createElement('td');
			td6.innerHTML = fuzeren;
			tr.appendChild(td6);
			var td7 = document.createElement('td');
			td7.innerHTML = fuzeren;
			tr.appendChild(td7);
			var td8 = document.createElement('td');
			td8.innerHTML = fuzeren;
			tr.appendChild(td8);
            var td9 = document.createElement('td');
            td9.innerHTML = "<input type=\"button\" value=\"删除\" οnclick=\"del(this)\">&nbsp<input type=\"button\" value=\"更新\" class=\"update\">";
            tr.appendChild(td9);
            // 将tr添加到table中
            tbody.appendChild(tr);
            // console.log(zhuanyeming);
            // console.log(fuzeren);

        }
    }

    // 搜索
    document.getElementById('search').onclick = function () {
        var searchKey = document.getElementById('searchKey').value;
        var trs = document.getElementsByTagName('table')[3].getElementsByTagName('tr');
        // trs.length-1表示的是trs中tr除去第一行，防止越界将第一行去除掉
        for (var i = trs.length - 1; i > 0; i--) {
            // console.log(111);
            // console.log( trs[i].children[2].innerHTML + " " + searchKey + " "+ (trs[i].children[2].innerHTML.indexOf(searchKey) == -1));
            if (trs[i].children[2].innerHTML.indexOf(searchKey) == -1) {

                trs[i].parentNode.removeChild(trs[i]);

            }

        }
    }


    // 删除
    // 不能使用this，this是关键字，不能用来声明参数，经常使用obj来声明参数
    // 直接通过行内设置onclick，传入this参数，在js中直接调用onclick调用的函数
    function del(obj) {
        var table = obj.parentNode.parentNode.parentNode;
        // var tr = obj.parentNode.parentNode;
        table.removeChild(obj.parentNode.parentNode);
    }

    // 更新
    // 选中的是一组数组，要想被选中，就要进行遍历
    var updatestr = document.getElementsByClassName('update');
    for (var i = 0; i < updatestr.length; i++) {
        var update1 = updatestr[i];
        update1.onclick = enterupdate;
    }
    // 进入更新页面
    // 定义一个全局变量
    var yuanxuhao = -1;
    function enterupdate() {
        console.log(this);
        // yuanxuhao是个全局变量
        yuanxuhao = this.parentNode.parentNode.children[1].innerHTML;
        var zhuanyeming = this.parentNode.parentNode.children[2].innerHTML;
        var fuzeren = this.parentNode.parentNode.children[3].innerHTML;
        document.getElementsByName("zhuanyeming")[0].value = zhuanyeming;
        document.getElementsByName("fuzeren")[0].value = fuzeren;
		document.getElementsByName("kcsl")[0].value = kcsl;
		document.getElementsByName("xxsl")[0].value = xxsl;
		document.getElementsByName("ssb")[0].value = ssb;
		document.getElementsByName("jc")[0].value = jc;
        document.getElementById("bchgx").value = "更新";
        document.getElementById('bchgx').onclick = update;
    }
    function update() {
        var zhuanyeming1 = document.getElementsByName('zhuanyeming')[0];
        var zhuanyeming = zhuanyeming1.value;
        var fuzeren1 = document.getElementsByName('fuzeren')[0];
        var fuzeren = fuzeren1.value;
		var kcsl1 = document.getElementsByName('kcsl')[0];
		var kcsl = kcsl1.value;
		var xxsl1 = document.getElementsByName('xxsl')[0];
		var xxsl = xxsl1.value;
		var ssb1 = document.getElementsByName('ssb')[0];
		var ssb = ssb1.value;
		var jc1 = document.getElementsByName('jc')[0];
		var jc = jc1.value;

        // 找到更新的父节点的父节点,即所有的tr
        var trs = document.getElementsByTagName('table')[3].getElementsByTagName('tbody')[0].getElementsByTagName('tr');

        for (var i = 0; i < trs.length; i++) {
            // 找到序号那一列
            var count = trs[i].children[1].innerHTML;
            if (count == yuanxuhao) {
                trs[i].children[2].innerHTML = zhuanyeming;
                trs[i].children[3].innerHTML = fuzeren;
				trs[i].children[4].innerHTML = kcsl;
				trs[i].children[5].innerHTML = xxsl;
				trs[i].children[6].innerHTML = ssb;
				trs[i].children[7].innerHTML = jc;
                break;//用于结束循环
            }

        }
    }
    
    document.getElementsByName('zhuanyeming')[0].value = "";
    document.getElementsByName('fuzeren')[0].value = "";
	document.getElementsByName('kcsl')[0].value = "";
	document.getElementsByName('xxsl')[0].value = "";
	document.getElementsByName('ssb')[0].value = "";
	document.getElementsByName('jc')[0].value = "";
    document.getElementById('bchgx').value = "保存";
    document.getElementById('bchgx').onclick = bchgx;
	
	




















function zhuxing(a, b, c, zht) {
    x = event.clientX - 150
    y = event.clientY + 10

    let cnv = document.createElement("canvas")
    cnv.id = "canvas"
    cnv.style.cssText = "position: absolute; width:300px;border-radius:10px;box-shadow: 0 0 3px gray; height:200px; background-color:white; top:" + y + "px;left: " + x + "px"
    document.body.appendChild(cnv)

    cnv.height = 200
    cnv.weight = 300
    let cxt = cnv.getContext("2d");


    line(10, 180, 280, 180, "#7ea0f8", cxt)
    line(20, 190, 20, 20, '#7ea0f8', cxt)
    sanjiao(280, 180, 10, 2.5, '#7ea0f8', cxt)
    cxt.moveTo(17.5, 20)
    cxt.lineTo(20, 10)
    cxt.lineTo(22.5, 20)
    cxt.fillStyle = "#7ea0f8"
    cxt.fill()



    cxt.fillText(a, 270, 190)
    cxt.fillText(b, 5, 20)
    cxt.fillText(c, 5, 30)


    for (let i = 0; i < zht.length; i++) {
        cxt.fillStyle = "#a1d9f5"
        cxt.fillRect((i * (cnv.width / zht.length) + (cnv.width / zht.length) / 4) * 0.8 + 20, (cnv.height - zht[i]) - 20, ((cnv.width / zht.length) / 2), zht[i])
    }

}

function line(x1, y1, x2, y2, color, cxt) {
    cxt.moveTo(x1, y1)
    cxt.lineTo(x2, y2)
    cxt.strokeStyle = color
    cxt.stroke()
}

function sanjiao(x, y, weight, height, color, cxt) {
    cxt.moveTo(x, y)
    cxt.lineTo(x, y - height)
    cxt.lineTo(x + weight, y)
    cxt.lineTo(x, y + height)
    cxt.fillStyle = color
    cxt.fill()

}

function removecav() {
    document.body.removeChild(canvas)
}

function shanxing(zht, test) {
    x = event.clientX - 150
    y = event.clientY + 10
    let cnv = document.createElement("canvas")
    cnv.id = "canvas"
    cnv.style.cssText = "position: absolute; border-radius:10px;box-shadow: 0 0 10px gray;width:300px; height:200px; background-color:white; top:" + y + "px;left: " + x + "px"
    document.body.appendChild(cnv)

    cnv.height = 200
    cnv.weight = 300
    let cxt = cnv.getContext("2d");

    let he = sum(zht)
    let start = 0
    let end = 0


    cxt.fillText("Top5:", 180, 30)

    for (let i = 0; i < test.length; i++) {
        cxt.fillText(test[i], 200, 60 + i * 20)
    }

    for (let i = 0; i < zht.length; i++) {
        start = end + zht[i] / he;
        cxt.beginPath();

        if (i == 0) {
            yuan(cnv.height / 2 + 2, cnv.height / 2 + 2, 65, end, start, "#8484ff", cxt)

        } else if (i == zht.length - 1) {
            yuan(cnv.height / 2 + 2, cnv.height / 2 - 2, 65, end, start, "#8484ff", cxt)

        } else {
            yuan(cnv.height / 2, cnv.height / 2, 65, end, start, "#8484ff", cxt)
        }

        end = start;
    }
}

function yuan(x, y, r, end, start, color, cxt) {
    cxt.moveTo(x, y);
    cxt.arc(x, y, r, 2 * Math.PI * end, 2 * Math.PI * start, false);
    cxt.fillStyle = color
    cxt.fill();
    cxt.lineTo(150, 75)
}

function sum(a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    return sum
}

function range1() {
    return Math.random() * 150
}
function range2() {
    return Math.random() * 4
}






