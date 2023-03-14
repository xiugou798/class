var array = [
    {"ml":"工学","zyl":"计算机类","zymc":"计算机科学与技术"},
    {"ml":"工学","zyl":"计算机类","zymc":"软件工程"},
    {"ml":"工学","zyl":"计算机类","zymc":"网络工程"},
    {"ml":"工学","zyl":"计算机类","zymc":"信息安全"},
    {"ml":"工学","zyl":"计算机类","zymc":"物联网工程"},
    {"ml":"工学","zyl":"计算机类","zymc":"电子与计算机工程"},
    {"ml":"工学","zyl":"计算机类","zymc":"数据科学与大数据技术"},
    {"ml":"工学","zyl":"计算机类","zymc":"网络空间安全"}
];
var tbody = document.getElementById("mlxi")
for (var i = 0; i < array.length; i++) {
    var tr = document.createElement("tr")
    tbody.appendChild(tr)
    for (var j in array[i]) {
        var td = document.createElement("td")
        td.innerHTML = array[i][j]
        tr.appendChild(td)
    }
}