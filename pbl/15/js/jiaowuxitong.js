var array = [
    { "zym": "计算机科学以技术", "fzr": "付浩然", "kcsl": "50", "xssl": "400", "ssb": "1:200", "cjppd": "85%" },
    { "zym": "软件工程", "fzr": "胥又文", "kcsl": "40", "xssl": "410", "ssb": "1:100", "cjppd": "86%" },
    { "zym": "网络工程", "fzr": "", "kcsl": "", "xssl": "", "ssb": "", "cjppd": "" },
    { "zym": "信息安全", "fzr": "", "kcsl": "", "xssl": "", "ssb": "", "cjppd": "" },
    { "zym": "物联网工程", "fzr": "", "kcsl": "", "xssl": "", "ssb": "", "cjppd": "" },
    { "zym": "电子与计算机工程", "fzr": "", "kcsl": "", "xssl": "", "ssb": "", "cjppd": "" },
    { "zym": "数据科学与大数据技术", "fzr": "", "kcsl": "", "xssl": "", "ssb": "", "cjppd": "" },
    { "zym": "网络空间安全", "fzr": "", "kcsl": "", "xssl": "", "ssb": "", "cjppd": "" }
];
var tbody = document.getElementById("tbxi")
for (var i = 0; i < array.length; i++) {
    var tr = document.createElement("tr")
    tbody.appendChild(tr)
    for (var j in array[i]) {
        var td = document.createElement("td")
        td.innerHTML = array[i][j]
        tr.appendChild(td)
    }
    var td = document.createElement("td")
    td.innerHTML = '<button class="ck">查看</button>'
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = '<button class="del">删除</button><button class="update">修改</button>'
    tr.appendChild(td)
}
// 增加操作
var btnadd = document.getElementById("btnAdd")
btnadd.onclick = function () {
    var xs = document.getElementById("zhezhao")
    var xsxi = document.getElementById("divaddjwxt")
    xsxi.className = "show"
    xs.className = "show"
    var btnadddata = document.getElementById("btnaddData")
    btnadddata.onclick = function () {
        var zym1 = document.getElementById("zym1").value;
        var fzr1 = document.getElementById("fzr1").value;
        var kcsl1 = document.getElementById("kcsl1").value;
        var xssl1 = document.getElementById("xssl1").value;
        var ssb1 = document.getElementById("ssb1").value;
        var cjppd1 = document.getElementById("cjppd1").value;
        var tr = document.createElement("tr")
        tr.innerHTML = "<td>" + zym1 + "</td>" + "<td>" + fzr1 + "</td>" + "<td>" + kcsl1 + "</td>" + "<td>" + xssl1 + "</td>" + "<td>" + ssb1 + "</td>" + "<td>" + cjppd1 + "</td>" + "<td>" + '<button class="del">删除</button><button class="update">修改</button>' + "</td>" + "<td>" + '<button class="ck">查看</button>' + "</td>"
        var tbody = document.getElementById("tbxi")
        tbody.appendChild(tr)
        alert("添加成功")
        xsxi.className = "hidden"
        xs.className = "hidden"
    }
    var cancel1 = document.getElementById("btnCancel1")
    cancel1.onclick = function () {
        xsxi.className = "hidden"
        xs.className = "hidden"
    }
}

// 全部删除
var delall = document.getElementById("delAll")
delall.onclick = function () {
    if (confirm("确定要全部删除吗?")) {
        var tbody = document.getElementById("tbxi")
        tbody.remove()
    }
}
// 删除操作
var del = document.getElementsByClassName("del")
for (var i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        var tr = this.parentNode.parentNode;
        // console.log(this.parentNode.parentNode.children[0].innerText)
        if (confirm("你确定要删除吗?")) {
            tr.parentNode.removeChild(tr);
            alert("删除成功")
        }
    }
}
// 修改操作
var update = document.getElementsByClassName("update")
for (var i = 0; i < update.length; i++) {
    update[i].onclick = function (e) {
        var xs = document.getElementById("zhezhao")
        var xsxi = document.getElementById("divxgjwxt")
        xsxi.className = "show"
        xs.className = "show"
        var xgjwxtForm = document.getElementById("xgjwxtForm")
        xgjwxtForm.children[0].children[0].value = e.target.parentElement.parentElement.children[0].innerText;
        xgjwxtForm.children[1].children[0].value = e.target.parentElement.parentElement.children[1].innerText;
        xgjwxtForm.children[2].children[0].value = e.target.parentElement.parentElement.children[2].innerText;
        xgjwxtForm.children[3].children[0].value = e.target.parentElement.parentElement.children[3].innerText;
        xgjwxtForm.children[4].children[0].value = e.target.parentElement.parentElement.children[4].innerText;
        xgjwxtForm.children[5].children[0].value = e.target.parentElement.parentElement.children[5].innerText;


        var btnadddata = document.getElementById("btnxgData")
        btnadddata.onclick = function () {
            var zym2 = document.getElementById("zym2").value;
            var fzr2 = document.getElementById("fzr2").value;
            var kcsl2 = document.getElementById("kcsl2").value;
            var xssl2 = document.getElementById("xssl2").value;
            var ssb2 = document.getElementById("ssb2").value;
            var cjppd2 = document.getElementById("cjppd2").value;
            e.target.parentElement.parentElement.children[0].innerText = zym2;
            e.target.parentElement.parentElement.children[1].innerText = fzr2;
            e.target.parentElement.parentElement.children[2].innerText = kcsl2;
            e.target.parentElement.parentElement.children[3].innerText = xssl2;
            e.target.parentElement.parentElement.children[4].innerText = ssb2;
            e.target.parentElement.parentElement.children[5].innerText = cjppd2;
            alert("修改成功")
            xsxi.className = "hidden"
            xs.className = "hidden"
        }
        var cancel2 = document.getElementById("btnCancel2")
        cancel2.onclick = function () {
            xsxi.className = "hidden"
            xs.className = "hidden"
        }
    }
}

// 查询操作
var ck = document.getElementsByClassName("ck")
for (var i = 0; i < ck.length; i++) {
    ck[i].onclick = function () {
        var xs = document.getElementById("zhezhao")
        var xsxi = document.getElementById("divcxjwxt")
        xsxi.className = "show"
        xs.className = "show"
        var cxjwxtForm = document.getElementById("cxjwxtForm")
        cxjwxtForm.children[0].children[0].value = this.parentNode.parentNode.children[0].innerText;
        cxjwxtForm.children[1].children[0].value = this.parentNode.parentNode.children[1].innerText;
        cxjwxtForm.children[2].children[0].value = this.parentNode.parentNode.children[2].innerText;
        cxjwxtForm.children[3].children[0].value = this.parentNode.parentNode.children[3].innerText;
        cxjwxtForm.children[4].children[0].value = this.parentNode.parentNode.children[4].innerText;
        cxjwxtForm.children[5].children[0].value = this.parentNode.parentNode.children[5].innerText;
        var btncxdata = document.getElementById("btncxData")
        btncxdata.onclick = function () {
            xsxi.className = "hidden"
            xs.className = "hidden"
        }
    }
}

