var table1 = document.getElementsByTagName("table")[1]
var table3 = document.getElementsByTagName("table")[3]
var table5 = document.getElementsByTagName("table")[5]
var main = document.getElementsByClassName('main')[0]
var threone = document.getElementsByClassName('threone')[0]
var add = document.getElementsByClassName('add')[0]
var zhao = document.getElementsByClassName('zhao')[0]
var conthree = document.getElementsByClassName('conthree')[0]
var seletwo = document.getElementById('seletwo')
// for (let i = 0; i < table0.children[0].children[0].childElementCount; i++) {
//     let j = table0.children[0].children[0].children[i].offsetWidth;
//     table1.children[0].children[0].children[i].width = j
// }

// for (let i = 0; i < table2.children[0].children[0].childElementCount; i++) {
//     let j = table2.children[0].children[0].children[i].offsetWidth;
//     table3.children[0].children[0].children[i].width = j
// }

// for (let i = 0; i < table4.children[0].children[0].childElementCount; i++) {
//     let j = table4.children[0].children[0].children[i].offsetWidth;
//     table5.children[0].children[0].children[i].width = j
// }
// 第一版 没有简化


function yang() {


    for (let a = 0; a < 5;) {
        for (let i = 0; i < document.getElementsByTagName("table")[a].children[0].children[0].childElementCount; i++) {
            let j = document.getElementsByTagName("table")[a].children[0].children[0].children[i].offsetWidth;
            document.getElementsByTagName("table")[a + 1].children[0].children[0].children[i].width = j
        }
        a += 2
    }
    // 表单格式
}
//样式


function tableone() {

    for (let i = 0; i < txtone.length - 1; i++) {
        var clo = table1.children[0].children[0].cloneNode(true)
        table1.children[0].appendChild(clo)
    }
    for (let i = 0; i < txtone.length; i++) {
        for (let j = 0; j < 3; j++) {
            table1.children[0].children[i].children[0].innerHTML = txtone[i].category
            table1.children[0].children[i].children[1].innerHTML = txtone[i].Professional
            table1.children[0].children[i].children[2].innerHTML = txtone[i].name
        }
    }

    for (let i = 0; i < txttwo.length - 1; i++) {
        var clo = table5.children[0].children[0].cloneNode(true)
        table5.children[0].appendChild(clo)
    }
    for (let i = 0; i < txttwo.length; i++) {
        for (let j = 0; j < 6; j++) {
            table5.children[0].children[i].children[0].innerHTML = txttwo[i].name
            table5.children[0].children[i].children[1].innerHTML = txttwo[i].people
            table5.children[0].children[i].children[2].innerHTML = txttwo[i].num
            table5.children[0].children[i].children[3].innerHTML = txttwo[i].hnum
            table5.children[0].children[i].children[4].innerHTML = txttwo[i].snum
            table5.children[0].children[i].children[5].innerHTML = txttwo[i].pi

        }
    }

    for (let i = 0; i < txtthree.length - 1; i++) {
        var clo = table3.children[0].children[0].cloneNode(true)
        table3.children[0].appendChild(clo)
    }
    for (let i = 0; i < txtthree.length; i++) {
        for (let j = 0; j < 6; j++) {
            table3.children[0].children[i].children[0].innerHTML = txtthree[i].name
            table3.children[0].children[i].children[1].innerHTML = txtthree[i].qi
            table3.children[0].children[i].children[2].innerHTML = txtthree[i].gang
            table3.children[0].children[i].children[3].innerHTML = txtthree[i].ji
            table3.children[0].children[i].children[4].innerHTML = txtthree[i].re
            table3.children[0].children[i].children[5].innerHTML = txtthree[i].min
            table3.children[0].children[i].children[6].innerHTML = txtthree[i].max
        }
    }

}
// 表格内容




function seleone() {
    var cate = ["哲学", "经济学", "法学", "教育学", "文学", "历史学", "理学", "工学", "农学", "医学", "管理学", "艺术学"]

    for (let i = 0; i < cate.length; i++) {
        let clo = document.getElementById("seleone").children[0].cloneNode(true)
        clo.innerHTML = cate[i]
        clo.value = cate[i]
        document.getElementById("seleone").appendChild(clo)
    }



}
// 选择



function sele1(a) {


    if (document.getElementById('seleone').value == 0) {
        return
    }
    table1.children[0].remove()
    let tbody = document.createElement("tbody")
    for (let i = 0; i < txtone.length; i++) {

        if (document.getElementById('seleone').value == txtone[i].category) {

            let tr = document.createElement("tr")

            let td1 = document.createElement("td")
            td1.innerHTML = txtone[i].category
            tr.appendChild(td1)

            let td2 = document.createElement("td")
            td2.innerHTML = txtone[i].Professional
            tr.appendChild(td2)

            let td3 = document.createElement("td")
            td3.innerHTML = txtone[i].name
            tr.appendChild(td3)

            tbody.appendChild(tr)
        }

    }
    table1.appendChild(tbody)

    let s = document.getElementById("seletwo-option")
    s.remove()
    let b = document.createElement('div')
    b.id = "seletwo-option"
    seletwo.appendChild(b)
    for (let i = 0; i < txt.length; i++) {
        if (document.getElementById('seleone').value == txt[i].name1) {
            for (let j = 0; j < txt[i].name.length; j++) {
                a = document.createElement("div")
                a.innerHTML = '<input type="checkbox" value="' + txt[i].name[j].name2 + '" onmouseleave="seletwo3(this)">' + txt[i].name[j].name2 + ''
                b.appendChild(a)
            }
        }
    }
    
    yang()
}
//  更新table1

function removeone(s) {

    // s.parentNode.children[1].innerHTML = "取消"
    // s.style.background = 'red'
    // s.style.color = 'white'

    // s.onmousedown = function () {
    //     s.parentNode.parentNode.remove()
    //     yang()
    // }
    // s.parentNode.children[1].onmousedown = function () {
    //     s.parentNode.children[1].innerHTML = "修改"
    //     s.style.background = 'none'
    //     s.style.color = 'black'
    // }
    s.parentNode.parentNode.remove()
    yang()
}
// 删除


function adddate() {
    add.style.transform = "rotateX(0deg)"
    main.style.filter = "blur(2px)"
    add.children[6].children[0].onmousedown = function () {
        add.style.transform = "rotateX(90deg)"
        main.style.filter = "blur(0px)"
        let one = document.createElement("tr")

        for (let i = 0; i < 6; i++) {
            let two = document.createElement("td")
            two.innerHTML = " ";
            one.appendChild(two)
        }

        for (let i = 0; i < 6; i++) {
            one.children[i].innerHTML = add.children[i].children[0].value;
        }

        let two = document.createElement("td")
        two.className = 'conthree'
        two.innerHTML = ' <a href="#" onmousedown="removeone(this)">删除</a>' + '<a href="#" onmousedown="revise(this)">修改</a>';
        one.appendChild(two)


        table5.children[0].appendChild(one);
        for (let i = 0; i < 6; i++) {
            add.children[i].children[0].value = "";
        }
        yang()
    }
    add.children[6].children[1].onmousedown = function () {
        add.style.transform = "rotateX(90deg)"
        main.style.filter = "blur(0px)"
    }
}
// 添加


function revise(s) {

    add.style.transform = "rotateX(0deg)"
    main.style.filter = "blur(2px)"



    add.children[6].children[1].onmousedown = function () {
        add.style.transform = "rotateX(90deg)"
        main.style.filter = "blur(0px)"
    }
    add.children[6].children[0].onmousedown = function () {
        add.style.transform = "rotateX(90deg)"
        main.style.filter = "blur(0px)"
        for (let j = 0; j < 6; j++) {
            s.parentNode.parentNode.children[j].innerHTML = add.children[j].children[0].value
            console.log(3)
        }
        for (let j = 0; j < 6; j++) {
            add.children[j].children[0].value = ""
            console.log(3)
        }

    }

}
// 修改

function zhao1() {
    console.log(3)
    zhao.style.transform = "rotateX(0deg)"
    main.style.filter = "blur(2px)"

    zhao.children[2].children[1].onmousedown = function () {
        zhao.style.transform = "rotateX(90deg)"
        main.style.filter = "blur(0px)"
    }
    zhao.children[2].children[0].onmousedown = function () {
        table5.children[0].remove()
        tbody = document.createElement('tbody')
        table5.appendChild(tbody)
        for (let i = 0; i < txtthree.length; i++) {
            if (zhao.children[0].children[0].value == txttwo[i].name) {
                tr = document.createElement('tr')
                tr.innerHTML = '<td>' + txttwo[i].name + '</td>' +
                    '<td>' + txttwo[i].people + '</td>' +
                    '<td>' + txttwo[i].num + '</td>' +
                    '<td>' + txttwo[i].hnum + '</td>' +
                    '<td>' + txttwo[i].snum + '</td>' +
                    '<td>' + txttwo[i].pi + '</td>' +
                    '<td class="conthree">' +
                    '<a href="#" onmousedown="removeone(this)">删除</a>' +
                    '<a href="#" onmousedown="revise(this)">修改</a>' +
                    '</td >'
                tbody.appendChild(tr)

            } else if (zhao.children[1].children[0].value == txttwo[i].people) {
                tr = document.createElement('tr')
                tr.innerHTML = '<td>' + txttwo[i].name + '</td>' +
                    '<td>' + txttwo[i].people + '</td>' +
                    '<td>' + txttwo[i].num + '</td>' +
                    '<td>' + txttwo[i].hnum + '</td>' +
                    '<td>' + txttwo[i].snum + '</td>' +
                    '<td>' + txttwo[i].pi + '</td>' +
                    '<td class="conthree">' +
                    '<a href="#" onmousedown="removeone(this)">删除</a>' +
                    '<a href="#" onmousedown="revise(this)">修改</a>' +
                    '</td >'
                tbody.appendChild(tr)
            }

        }
        zhao.style.transform = "rotateX(90deg)"
        main.style.filter = "blur(0px)"
        yang()


    }

}
// 查找

function seletwo1() {
    seletwo.children[1].style.transform = "rotateX(0deg)"
    document.getElementsByClassName("one")[0].children[0].style.filter = "blur(2px)"
}


function seletwo2() {
    let s = document.getElementById("seletwo-option")
    seletwo.children[1].style.transform = "rotateX(90deg)"
    document.getElementsByClassName("one")[0].children[0].style.filter = "blur(0px)"

    table1.children[0].remove()
    let tbody = document.createElement("tbody")

    for (let i = 0; i < s.children.length; i++) {
        if (s.children[i].children[0].checked) {
            for (let j = 0; j < txtone.length; j++) {
                if (s.children[i].children[0].value == txtone[j].Professional) {
                    let tr = document.createElement("tr")
                    tr.innerHTML = '<td>' + txtone[j].category +
                        '</td><td>' + txtone[j].Professional + '</td>' +
                        '<td> ' + txtone[j].name + '</td>'
                    tbody.appendChild(tr)

                }
            }
        }

    }
    table1.appendChild(tbody)
    yang()
}


function seletwo3(a) {
    if (a.checked) {
        let span = document.createElement("span")
        span.innerHTML = a.value
        span.style.cssText = "margin: 1px 3px;"
        seletwo.children[0].appendChild(span)
        return
    } else {

        for (let i = 0; i < a.parentNode.parentNode.children[0].children.length; i++) {
            if (a.value == seletwo.children[0].children[i].innerHTML) {
                seletwo.children[0].children[i].remove()
            }
        }
    }

}


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
    // cxt.fillText(b, 5, 20)
    // cxt.fillText(c, 5, 30)

    // yuan(cnv.width / 2 + 10, cnv.height / 2 + 10, 70, 0, 90, "#8484ff", cxt)
    // yuan(cnv.width / 2, cnv.height / 2, 70, 90, 180, "#8484ff", cxt)
    // yuan(cnv.width / 2, cnv.height / 2, 70, 180, 270, "#8484ff", cxt)
    // yuan(cnv.width / 2 + 10, cnv.height / 2 - 10, 70, 270, 360, "#8484ff", cxt)
    // yuan(cnv.width / 2, cnv.height / 2, 70, 100 * 360, 200 * 360, "#8484ff", cxt)

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



const txtone = [
    { category: "哲学", Professional: "哲学类", name: '<input type="radio"> 	哲学	 ' },
    { category: "哲学", Professional: "哲学类", name: '<input type="radio"> 	逻辑学	 ' },
    { category: "哲学", Professional: "哲学类", name: '<input type="radio"> 	宗教学	 ' },
    { category: "哲学", Professional: "哲学类", name: '<input type="radio"> 	伦理学	 ' },
    { category: "经济学", Professional: "经济学类", name: '<input type="radio"> 	经济学	 ' },
    { category: "经济学", Professional: "经济学类", name: '<input type="radio"> 	经济统计学	 ' },
    { category: "经济学", Professional: "经济学类", name: '<input type="radio"> 	国民经济管理	 ' },
    { category: "经济学", Professional: "经济学类", name: '<input type="radio"> 	资源与环境经济学	 ' },
    { category: "经济学", Professional: "经济学类", name: '<input type="radio"> 	商务经济学	 ' },
    { category: "经济学", Professional: "经济学类", name: '<input type="radio"> 	能源经济	 ' },
    { category: "经济学", Professional: "经济学类", name: '<input type="radio"> 	劳动经济学	 ' },
    { category: "经济学", Professional: "经济学类", name: '<input type="radio"> 	经济工程	 ' },
    { category: "经济学", Professional: "经济学类", name: '<input type="radio"> 	数字经济	 ' },
    { category: "经济学", Professional: "财政学类", name: '<input type="radio"> 	财政学	 ' },
    { category: "经济学", Professional: "财政学类", name: '<input type="radio"> 	税收学	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	金融学	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	金融工程	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	保险学	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	投资学	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	金融数学	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	信用管理	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	经济与金融	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	精算学	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	互联网金融	 ' },
    { category: "经济学", Professional: "金融学类", name: '<input type="radio"> 	金融科技	 ' },
    { category: "经济学", Professional: "经济与贸易类", name: '<input type="radio"> 	国际经济与贸易	 ' },
    { category: "经济学", Professional: "经济与贸易类", name: '<input type="radio"> 	贸易经济	 ' },
    { category: "法学", Professional: "法学类", name: '<input type="radio"> 	法学	 ' },
    { category: "法学", Professional: "法学类", name: '<input type="radio"> 	知识产权	 ' },
    { category: "法学", Professional: "法学类", name: '<input type="radio"> 	监狱学	 ' },
    { category: "法学", Professional: "法学类", name: '<input type="radio"> 	信用风险管理与法律防控	 ' },
    { category: "法学", Professional: "法学类", name: '<input type="radio"> 	国际经贸规则	 ' },
    { category: "法学", Professional: "法学类", name: '<input type="radio"> 	司法警察学	 ' },
    { category: "法学", Professional: "法学类", name: '<input type="radio"> 	社区矫正	 ' },
    { category: "法学", Professional: "政治学类", name: '<input type="radio"> 	政治学与行政学	 ' },
    { category: "法学", Professional: "政治学类", name: '<input type="radio"> 	国际政治	 ' },
    { category: "法学", Professional: "政治学类", name: '<input type="radio"> 	外交学	 ' },
    { category: "法学", Professional: "政治学类", name: '<input type="radio"> 	国际事务与国际关系	 ' },
    { category: "法学", Professional: "政治学类", name: '<input type="radio"> 	政治学、经济学与哲学	 ' },
    { category: "法学", Professional: "政治学类", name: '<input type="radio"> 	国际组织与全球治理	 ' },
    { category: "法学", Professional: "社会学类", name: '<input type="radio"> 	社会学	 ' },
    { category: "法学", Professional: "社会学类", name: '<input type="radio"> 	社会工作	 ' },
    { category: "法学", Professional: "社会学类", name: '<input type="radio"> 	人类学	 ' },
    { category: "法学", Professional: "社会学类", name: '<input type="radio"> 	女性学	 ' },
    { category: "法学", Professional: "社会学类", name: '<input type="radio"> 	家政学	 ' },
    { category: "法学", Professional: "社会学类", name: '<input type="radio"> 	老年学	 ' },
    { category: "法学", Professional: "社会学类", name: '<input type="radio"> 	社会政策	 ' },
    { category: "法学", Professional: "民族学类", name: '<input type="radio"> 	民族学	 ' },
    { category: "法学", Professional: "马克思主义理论类", name: '<input type="radio"> 	科学社会主义	 ' },
    { category: "法学", Professional: "马克思主义理论类", name: '<input type="radio"> 	中国共产党历史	 ' },
    { category: "法学", Professional: "马克思主义理论类", name: '<input type="radio"> 	思想政治教育	 ' },
    { category: "法学", Professional: "马克思主义理论类", name: '<input type="radio"> 	马克思主义理论	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	治安学	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	侦查学	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	边防管理	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	禁毒学	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	警犬技术	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	经济犯罪侦查	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	边防指挥	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	消防指挥	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	警卫学	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	公安情报学	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	犯罪学	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	公安管理学	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	涉外警务	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	国内安全保卫	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	警务指挥与战术	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	技术侦查学	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	海警执法	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	公安政治工作	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	移民管理	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	出入境管理	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	反恐警务	 ' },
    { category: "法学", Professional: "公安学类", name: '<input type="radio"> 	消防政治工作	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	教育学	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	科学教育	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	人文教育	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	教育技术学	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	艺术教育	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	学前教育	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	小学教育	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	特殊教育	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	华文教育	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	教育康复学	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	卫生教育	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	认知科学与技术	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	体育教育	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	运动训练	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	社会体育指导与管理	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	武术与民族传统体育	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	运动人体科学	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	运动康复	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	休闲体育	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	体能训练	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	冰雪运动	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	电子竞技运动与管理	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	智能体育工程	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	体育旅游	 ' },
    { category: "教育学", Professional: "体育学类", name: '<input type="radio"> 	运动能力开发	 ' },
    { category: "教育学", Professional: "教育学类", name: '<input type="radio"> 	融合教育	 ' },
    { category: "文学", Professional: "	中国语言文学类", name: '<input type="radio"> 	汉语言文学	 ' },
    { category: "文学", Professional: "	中国语言文学类", name: '<input type="radio"> 	汉语言	 ' },
    { category: "文学", Professional: "	中国语言文学类", name: '<input type="radio"> 	汉语国际教育	 ' },
    { category: "文学", Professional: "	中国语言文学类", name: '<input type="radio"> 	中国少数民族语言文学	 ' },
    { category: "文学", Professional: "	中国语言文学类", name: '<input type="radio"> 	古典文献学	 ' },
    { category: "文学", Professional: "	中国语言文学类", name: '<input type="radio"> 	应用语言学	 ' },
    { category: "文学", Professional: "	中国语言文学类", name: '<input type="radio"> 	秘书学	 ' },
    { category: "文学", Professional: "	中国语言文学类", name: '<input type="radio"> 	中国语言与文化	 ' },
    { category: "文学", Professional: "	中国语言文学类", name: '<input type="radio"> 	手语翻译	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	桑戈语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	英语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	俄语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	德语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	法语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	西班牙语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	阿拉伯语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	日语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	波斯语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	朝鲜语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	菲律宾语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	梵语巴利语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	印度尼西亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	印地语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	柬埔寨语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	老挝语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	缅甸语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	马来语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	蒙古语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	僧伽罗语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	泰语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	乌尔都语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	希伯来语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	越南语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	豪萨语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	斯瓦希里语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	阿尔巴尼亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	保加利亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	波兰语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	捷克语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	斯洛伐克语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	罗马尼亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	葡萄牙语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	瑞典语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	塞尔维亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	土耳其语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	希腊语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	匈牙利语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	意大利语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	泰米尔语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	普什图语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	世界语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	孟加拉语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	尼泊尔语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	克罗地亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	荷兰语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	芬兰语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	乌克兰语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	挪威语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	丹麦语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	冰岛语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	爱尔兰语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	拉脱维亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	立陶宛语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	斯洛文尼亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	爱沙尼亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	马耳他语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	哈萨克语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	乌兹别克语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	祖鲁语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	拉丁语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	翻译	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	商务英语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	阿姆哈拉语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	吉尔吉斯语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	索马里语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	土库曼语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	加泰罗尼亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	约鲁巴语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	亚美尼亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	马达加斯加语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	格鲁吉亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	阿塞拜疆语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	阿非利卡语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	马其顿语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	塔吉克语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	茨瓦纳语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	恩德贝莱语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	科摩罗语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	克里奥尔语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	绍纳语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	提格雷尼亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	白俄罗斯语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	毛利语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	汤加语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	萨摩亚语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	库尔德语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	比斯拉马语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	达里语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	德顿语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	迪维希语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	斐济语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	库克群岛毛利语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	隆迪语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	卢森堡语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	卢旺达语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	纽埃语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	皮金语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	切瓦语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	塞苏陀语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	语言学	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	塔玛齐格特语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	爪哇语	 ' },
    { category: "文学", Professional: "	外国语言文学类", name: '<input type="radio"> 	旁遮普语	 ' },
    { category: "文学", Professional: "	新闻传播学类", name: '<input type="radio"> 	新闻学	 ' },
    { category: "文学", Professional: "	新闻传播学类", name: '<input type="radio"> 	广播电视学	 ' },
    { category: "文学", Professional: "	新闻传播学类", name: '<input type="radio"> 	广告学	 ' },
    { category: "文学", Professional: "	新闻传播学类", name: '<input type="radio"> 	传播学	 ' },
    { category: "文学", Professional: "	新闻传播学类", name: '<input type="radio"> 	编辑出版学	 ' },
    { category: "文学", Professional: "	新闻传播学类", name: '<input type="radio"> 	网络与新媒体	 ' },
    { category: "文学", Professional: "	新闻传播学类", name: '<input type="radio"> 	数字出版	 ' },
    { category: "文学", Professional: "	新闻传播学类", name: '<input type="radio"> 	时尚传播	 ' },
    { category: "文学", Professional: "	新闻传播学类", name: '<input type="radio"> 	国际新闻与传播	 ' },
    { category: "文学", Professional: "	新闻传播学类（交叉专业）	", name: '<input type="radio"> 	会展	 ' },
    { category: "历史学", Professional: "历史学类", name: '<input type="radio"> 	历史学	 ' },
    { category: "历史学", Professional: "历史学类", name: '<input type="radio"> 	世界史	 ' },
    { category: "历史学", Professional: "历史学类", name: '<input type="radio"> 	考古学	 ' },
    { category: "历史学", Professional: "历史学类", name: '<input type="radio"> 	文物与博物馆学	 ' },
    { category: "历史学", Professional: "历史学类", name: '<input type="radio"> 	文物保护技术	 ' },
    { category: "历史学", Professional: "历史学类", name: '<input type="radio"> 	外国语言与外国历史	 ' },
    { category: "历史学", Professional: "历史学类", name: '<input type="radio"> 	文化遗产	 ' },
    { category: "历史学", Professional: "历史学类", name: '<input type="radio"> 	古文字学	 ' },
    { category: "理学", Professional: "数学类", name: '<input type="radio"> 	数学与应用数学	 ' },
    { category: "理学", Professional: "数学类", name: '<input type="radio"> 	信息与计算科学	 ' },
    { category: "理学", Professional: "数学类", name: '<input type="radio"> 	数理基础科学	 ' },
    { category: "理学", Professional: "数学类", name: '<input type="radio"> 	数据计算及应用	 ' },
    { category: "理学", Professional: "物理学类", name: '<input type="radio"> 	物理学	 ' },
    { category: "理学", Professional: "物理学类", name: '<input type="radio"> 	应用物理学	 ' },
    { category: "理学", Professional: "物理学类", name: '<input type="radio"> 	核物理	 ' },
    { category: "理学", Professional: "物理学类", name: '<input type="radio"> 	声学	 ' },
    { category: "理学", Professional: "物理学类", name: '<input type="radio"> 	量子信息科学	 ' },
    { category: "理学", Professional: "物理学类", name: '<input type="radio"> 	系统科学与工程	 ' },
    { category: "理学", Professional: "化学类", name: '<input type="radio"> 	化学	 ' },
    { category: "理学", Professional: "化学类", name: '<input type="radio"> 	应用化学	 ' },
    { category: "理学", Professional: "化学类", name: '<input type="radio"> 	化学生物学	 ' },
    { category: "理学", Professional: "化学类", name: '<input type="radio"> 	分子科学与工程	 ' },
    { category: "理学", Professional: "化学类", name: '<input type="radio"> 	能源化学	 ' },
    { category: "理学", Professional: "化学类", name: '<input type="radio"> 	化学测量学与技术	 ' },
    { category: "理学", Professional: "天文学类", name: '<input type="radio"> 	天文学	 ' },
    { category: "理学", Professional: "地理科学类", name: '<input type="radio"> 	地理科学	 ' },
    { category: "理学", Professional: "地理科学类", name: '<input type="radio"> 	自然地理与资源环境	 ' },
    { category: "理学", Professional: "地理科学类", name: '<input type="radio"> 	人文地理与城乡规划	 ' },
    { category: "理学", Professional: "地理科学类", name: '<input type="radio"> 	地理信息科学	 ' },
    { category: "理学", Professional: "大气科学类", name: '<input type="radio"> 	大气科学	 ' },
    { category: "理学", Professional: "大气科学类", name: '<input type="radio"> 	应用气象学	 ' },
    { category: "理学", Professional: "大气科学类", name: '<input type="radio"> 	气象技术与工程	 ' },
    { category: "理学", Professional: "海洋科学类", name: '<input type="radio"> 	海洋科学	 ' },
    { category: "理学", Professional: "海洋科学类", name: '<input type="radio"> 	海洋技术	 ' },
    { category: "理学", Professional: "海洋科学类", name: '<input type="radio"> 	海洋资源与环境	 ' },
    { category: "理学", Professional: "海洋科学类", name: '<input type="radio"> 	军事海洋学	 ' },
    { category: "理学", Professional: "地球物理学类", name: '<input type="radio"> 	地球物理学	 ' },
    { category: "理学", Professional: "地球物理学类", name: '<input type="radio"> 	空间科学与技术	 ' },
    { category: "理学", Professional: "地球物理学类", name: '<input type="radio"> 	防灾减灾科学与工程	 ' },
    { category: "理学", Professional: "地质学类", name: '<input type="radio"> 	地质学	 ' },
    { category: "理学", Professional: "地质学类", name: '<input type="radio"> 	地球化学	 ' },
    { category: "理学", Professional: "地质学类", name: '<input type="radio"> 	地球信息科学与技术	 ' },
    { category: "理学", Professional: "地质学类", name: '<input type="radio"> 	古生物学	 ' },
    { category: "理学", Professional: "生物科学类", name: '<input type="radio"> 	生物科学	 ' },
    { category: "理学", Professional: "生物科学类", name: '<input type="radio"> 	生物技术	 ' },
    { category: "理学", Professional: "生物科学类", name: '<input type="radio"> 	生物信息学	 ' },
    { category: "理学", Professional: "生物科学类", name: '<input type="radio"> 	生态学	 ' },
    { category: "理学", Professional: "生物科学类", name: '<input type="radio"> 	整合科学	 ' },
    { category: "理学", Professional: "生物科学类", name: '<input type="radio"> 	神经科学	 ' },
    { category: "理学", Professional: "心理学类", name: '<input type="radio"> 	心理学	 ' },
    { category: "理学", Professional: "心理学类", name: '<input type="radio"> 	应用心理学	 ' },
    { category: "理学", Professional: "统计学类", name: '<input type="radio"> 	统计	 ' },
    { category: "理学", Professional: "统计学类", name: '<input type="radio"> 	应用统计学	 ' },
    { category: "工学", Professional: "力学类", name: '<input type="radio"> 	理论与应用力学	 ' },
    { category: "工学", Professional: "力学类", name: '<input type="radio"> 	工程力学	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	机械工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	机械设计制造及其自动化	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	材料成型及控制工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	机械电子工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	工业设计	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	过程装备与控制工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	车辆工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	汽车服务工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	机械工艺技术	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	微机电系统工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	机电技术教育	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	汽车维修工程教育	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	智能制造工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	智能车辆工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	仿生科学与工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	新能源汽车工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	增材制造工程	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	智能交互设计	 ' },
    { category: "工学", Professional: "机械类", name: '<input type="radio"> 	应急装备技术与工程	 ' },
    { category: "工学", Professional: "仪器类", name: '<input type="radio"> 	测控技术与仪器	 ' },
    { category: "工学", Professional: "仪器类", name: '<input type="radio"> 	精密仪器	 ' },
    { category: "工学", Professional: "仪器类", name: '<input type="radio"> 	智能感知工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	材料科学与工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	材料物理	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	材料化学	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	冶金工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	金属材料工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	无机非金属材料工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	高分子材料与工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	复合材料与工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	粉体材料科学与工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	宝石及材料工艺学	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	焊接技术与工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	功能材料	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	纳米材料与技术	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	新能源材料与器件	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	材料设计科学与工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	复合材料成型工程	 ' },
    { category: "工学", Professional: "材料类", name: '<input type="radio"> 	智能材料与结构	 ' },
    { category: "工学", Professional: "能源动力类", name: '<input type="radio"> 	能源与动力工程	 ' },
    { category: "工学", Professional: "能源动力类", name: '<input type="radio"> 	能源与环境系统工程	 ' },
    { category: "工学", Professional: "能源动力类", name: '<input type="radio"> 	新能源科学与工程	 ' },
    { category: "工学", Professional: "能源动力类", name: '<input type="radio"> 	储能科学与工程	 ' },
    { category: "工学", Professional: "能源动力类", name: '<input type="radio"> 	能源服务工程	 ' },
    { category: "工学", Professional: "电气类", name: '<input type="radio"> 	电气工程及其自动化	 ' },
    { category: "工学", Professional: "电气类", name: '<input type="radio"> 	智能电网信息工程	 ' },
    { category: "工学", Professional: "电气类", name: '<input type="radio"> 	光源与照明	 ' },
    { category: "工学", Professional: "电气类", name: '<input type="radio"> 	电气工程与智能控制	 ' },
    { category: "工学", Professional: "电气类", name: '<input type="radio"> 	电机电器智能化	 ' },
    { category: "工学", Professional: "电气类", name: '<input type="radio"> 	电缆工程	 ' },
    { category: "工学", Professional: "电气类", name: '<input type="radio"> 	能源互联网工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	电子信息工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	电子科学与技术	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	通信工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	微电子科学与工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	光电信息科学与工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	信息工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	广播电视工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	水声工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	电子封装技术	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	集成电路设计与集成系统	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	医学信息工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	电磁场与无线技术	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	电波传播与天线	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	电子信息科学与技术	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	电信工程及管理	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	应用电子技术教育	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	人工智能	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	海洋信息工程	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	柔性电子学	 ' },
    { category: "工学", Professional: "电子信息类", name: '<input type="radio"> 	智能测控工程	 ' },
    { category: "工学", Professional: "自动化类", name: '<input type="radio"> 	自动化	 ' },
    { category: "工学", Professional: "自动化类", name: '<input type="radio"> 	轨道交通信号与控制	 ' },
    { category: "工学", Professional: "自动化类", name: '<input type="radio"> 	机器人工程	 ' },
    { category: "工学", Professional: "自动化类", name: '<input type="radio"> 	邮政工程	 ' },
    { category: "工学", Professional: "自动化类", name: '<input type="radio"> 	核电技术与控制工程	 ' },
    { category: "工学", Professional: "自动化类", name: '<input type="radio"> 	智能装备与系统	 ' },
    { category: "工学", Professional: "自动化类", name: '<input type="radio"> 	工业智能	 ' },
    { category: "工学", Professional: "自动化类", name: '<input type="radio"> 	智能工程与创意设计	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	计算机科学与技术	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	软件工程	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	网络工程	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	信息安全	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	物联网工程	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	数字媒体技术	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	智能科学与技术	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	空间信息与数字技术	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	电子与计算机工程	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	数据科学与大数据技术	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	网络空间安全	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	新媒体技术	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	电影制作	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	保密技术	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	服务科学与工程	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	虚拟现实技术	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	区块链工程	 ' },
    { category: "工学", Professional: "计算机类", name: '<input type="radio"> 	密码科学与技术	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	土木工程	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	建筑环境与能源应用工程	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	给排水科学与工程	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	建筑电气与智能化	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	城市地下空间工程	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	道路桥梁与渡河工程	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	铁道工程	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	智能建造	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	土木、水利与海洋工程	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	土木、水利与交通工程	 ' },
    { category: "工学", Professional: "土木类", name: '<input type="radio"> 	城市水系统工程	 ' },
    { category: "工学", Professional: "水利类", name: '<input type="radio"> 	水利水电工程	 ' },
    { category: "工学", Professional: "水利类", name: '<input type="radio"> 	水文与水资源工程	 ' },
    { category: "工学", Professional: "水利类", name: '<input type="radio"> 	港口航道与海岸工程	 ' },
    { category: "工学", Professional: "水利类", name: '<input type="radio"> 	水务工程	 ' },
    { category: "工学", Professional: "水利类", name: '<input type="radio"> 	水利科学与工程	 ' },
    { category: "工学", Professional: "测绘类", name: '<input type="radio"> 	测绘工程	 ' },
    { category: "工学", Professional: "测绘类", name: '<input type="radio"> 	遥感科学与技术	 ' },
    { category: "工学", Professional: "测绘类", name: '<input type="radio"> 	导航工程	 ' },
    { category: "工学", Professional: "测绘类", name: '<input type="radio"> 	地理国情监测	 ' },
    { category: "工学", Professional: "测绘类", name: '<input type="radio"> 	地理空间信息工程	 ' },
    { category: "工学", Professional: "化工与制药类", name: '<input type="radio"> 	化学工程与工艺	 ' },
    { category: "工学", Professional: "化工与制药类", name: '<input type="radio"> 	制药工程	 ' },
    { category: "工学", Professional: "化工与制药类", name: '<input type="radio"> 	资源循环科学与工程	 ' },
    { category: "工学", Professional: "化工与制药类", name: '<input type="radio"> 	能源化学工程	 ' },
    { category: "工学", Professional: "化工与制药类", name: '<input type="radio"> 	化学工程与工业生物工程	 ' },
    { category: "工学", Professional: "化工与制药类", name: '<input type="radio"> 	化工安全工程	 ' },
    { category: "工学", Professional: "化工与制药类", name: '<input type="radio"> 	涂料工程	 ' },
    { category: "工学", Professional: "化工与制药类", name: '<input type="radio"> 	精细化工	 ' },
    { category: "工学", Professional: "地质类", name: '<input type="radio"> 	地质工程	 ' },
    { category: "工学", Professional: "地质类", name: '<input type="radio"> 	勘查技术与工程	 ' },
    { category: "工学", Professional: "地质类", name: '<input type="radio"> 	资源勘查工程	 ' },
    { category: "工学", Professional: "地质类", name: '<input type="radio"> 	地下水科学与工程	 ' },
    { category: "工学", Professional: "地质类", name: '<input type="radio"> 	旅游地学与规划工程	 ' },
    { category: "工学", Professional: "矿业类", name: '<input type="radio"> 	采矿工程	 ' },
    { category: "工学", Professional: "矿业类", name: '<input type="radio"> 	石油工程	 ' },
    { category: "工学", Professional: "矿业类", name: '<input type="radio"> 	矿物加工工程	 ' },
    { category: "工学", Professional: "矿业类", name: '<input type="radio"> 	油气储运工程	 ' },
    { category: "工学", Professional: "矿业类", name: '<input type="radio"> 	矿物资源工程	 ' },
    { category: "工学", Professional: "矿业类", name: '<input type="radio"> 	海洋油气工程	 ' },
    { category: "工学", Professional: "矿业类", name: '<input type="radio"> 	智能采矿工程	 ' },
    { category: "工学", Professional: "纺织类", name: '<input type="radio"> 	纺织工程	 ' },
    { category: "工学", Professional: "纺织类", name: '<input type="radio"> 	服装设计与工程	 ' },
    { category: "工学", Professional: "纺织类", name: '<input type="radio"> 	非织造材料与工程	 ' },
    { category: "工学", Professional: "纺织类", name: '<input type="radio"> 	服装设计与工艺教育	 ' },
    { category: "工学", Professional: "纺织类", name: '<input type="radio"> 	丝绸设计与工程	 ' },
    { category: "工学", Professional: "轻工类", name: '<input type="radio"> 	轻化工程	 ' },
    { category: "工学", Professional: "轻工类", name: '<input type="radio"> 	包装工程	 ' },
    { category: "工学", Professional: "轻工类", name: '<input type="radio"> 	印刷工程	 ' },
    { category: "工学", Professional: "轻工类", name: '<input type="radio"> 	香料香精技术与工程	 ' },
    { category: "工学", Professional: "轻工类", name: '<input type="radio"> 	化妆品技术与工程	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	交通运输	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	交通工程	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	航海技术	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	轮机工程	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	飞行技术	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	交通设备与控制工程	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	救助与打捞工程	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	船舶电子电气工程	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	轨道交通电气与控制	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	邮轮工程与管理	 ' },
    { category: "工学", Professional: "交通运输类", name: '<input type="radio"> 	智慧交通	 ' },
    { category: "工学", Professional: "海洋工程类", name: '<input type="radio"> 	船舶与海洋工程	 ' },
    { category: "工学", Professional: "海洋工程类", name: '<input type="radio"> 	海洋工程与技术	 ' },
    { category: "工学", Professional: "海洋工程类", name: '<input type="radio"> 	海洋资源开发技术	 ' },
    { category: "工学", Professional: "海洋工程类", name: '<input type="radio"> 	海洋机器人	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	航空航天工程	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	飞行器设计与工程	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	飞行器制造工程	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	飞行器动力工程	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	飞行器环境与生命保障工程	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	飞行器质量与可靠性	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	飞行器适航技术	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	飞行器控制与信息工程	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	无人驾驶航空器系统工程	 ' },
    { category: "工学", Professional: "航空航天类", name: '<input type="radio"> 	智能飞行器技术	 ' },
    { category: "工学", Professional: "兵器类", name: '<input type="radio"> 	武器系统与工程	 ' },
    { category: "工学", Professional: "兵器类", name: '<input type="radio"> 	武器发射工程	 ' },
    { category: "工学", Professional: "兵器类", name: '<input type="radio"> 	探测制导与控制技术	 ' },
    { category: "工学", Professional: "兵器类", name: '<input type="radio"> 	弹药工程与爆炸技术	 ' },
    { category: "工学", Professional: "兵器类", name: '<input type="radio"> 	特种能源技术与工程	 ' },
    { category: "工学", Professional: "兵器类", name: '<input type="radio"> 	装甲车辆工程	 ' },
    { category: "工学", Professional: "兵器类", name: '<input type="radio"> 	信息对抗技术	 ' },
    { category: "工学", Professional: "兵器类", name: '<input type="radio"> 	智能无人系统技术	 ' },
    { category: "工学", Professional: "核工程类", name: '<input type="radio"> 	核工程与核技术	 ' },
    { category: "工学", Professional: "核工程类", name: '<input type="radio"> 	辐射防护与核安全	 ' },
    { category: "工学", Professional: "核工程类", name: '<input type="radio"> 	工程物理	 ' },
    { category: "工学", Professional: "核工程类", name: '<input type="radio"> 	核化工与核燃料工程	 ' },
    { category: "工学", Professional: "农业工程类", name: '<input type="radio"> 	农业工程	 ' },
    { category: "工学", Professional: "农业工程类", name: '<input type="radio"> 	农业机械化及其自动化	 ' },
    { category: "工学", Professional: "农业工程类", name: '<input type="radio"> 	农业电气化	 ' },
    { category: "工学", Professional: "农业工程类", name: '<input type="radio"> 	农业建筑环境与能源工程	 ' },
    { category: "工学", Professional: "农业工程类", name: '<input type="radio"> 	农业水利工程	 ' },
    { category: "工学", Professional: "农业工程类", name: '<input type="radio"> 	土地整治工程	 ' },
    { category: "工学", Professional: "农业工程类", name: '<input type="radio"> 	农业智能装备工程	 ' },
    { category: "工学", Professional: "林业工程类", name: '<input type="radio"> 	森林工程	 ' },
    { category: "工学", Professional: "林业工程类", name: '<input type="radio"> 	木材科学与工程	 ' },
    { category: "工学", Professional: "林业工程类", name: '<input type="radio"> 	林产化工	 ' },
    { category: "工学", Professional: "林业工程类", name: '<input type="radio"> 	家具设计与工程	 ' },
    { category: "工学", Professional: "环境科学与工程类", name: '<input type="radio"> 	环境科学与工程	 ' },
    { category: "工学", Professional: "环境科学与工程类", name: '<input type="radio"> 	环境工程	 ' },
    { category: "工学", Professional: "环境科学与工程类", name: '<input type="radio"> 	环境科学	 ' },
    { category: "工学", Professional: "环境科学与工程类", name: '<input type="radio"> 	环境生态工程	 ' },
    { category: "工学", Professional: "环境科学与工程类", name: '<input type="radio"> 	环保设备工程	 ' },
    { category: "工学", Professional: "环境科学与工程类", name: '<input type="radio"> 	资源环境科学	 ' },
    { category: "工学", Professional: "环境科学与工程类", name: '<input type="radio"> 	水质科学与技术	 ' },
    { category: "工学", Professional: "生物医学工程类", name: '<input type="radio"> 	生物医学工程	 ' },
    { category: "工学", Professional: "生物医学工程类", name: '<input type="radio"> 	假肢矫形工程	 ' },
    { category: "工学", Professional: "生物医学工程类", name: '<input type="radio"> 	临床工程技术	 ' },
    { category: "工学", Professional: "生物医学工程类", name: '<input type="radio"> 	康复工程	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	食品科学与工程	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	食品质量与安全	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	粮食工程	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	乳品工程	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	酿酒工程	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	葡萄与葡萄酒工程	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	食品营养与检验教育	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	烹饪与营养教育	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	食品安全与检测	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	食品营养与健康	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	食用菌科学与工程	 ' },
    { category: "工学", Professional: "食品科学与工程类", name: '<input type="radio"> 	白酒酿造工程	 ' },
    { category: "工学", Professional: "建筑类", name: '<input type="radio"> 	建筑学	 ' },
    { category: "工学", Professional: "建筑类", name: '<input type="radio"> 	城乡规划	 ' },
    { category: "工学", Professional: "建筑类", name: '<input type="radio"> 	风景园林	 ' },
    { category: "工学", Professional: "建筑类", name: '<input type="radio"> 	历史建筑保护工程	 ' },
    { category: "工学", Professional: "建筑类", name: '<input type="radio"> 	人居环境科学与技术	 ' },
    { category: "工学", Professional: "建筑类", name: '<input type="radio"> 	城市设计	 ' },
    { category: "工学", Professional: "建筑类", name: '<input type="radio"> 	智慧建筑与建造	 ' },
    { category: "工学", Professional: "安全科学与工程类", name: '<input type="radio"> 	安全工程	 ' },
    { category: "工学", Professional: "安全科学与工程类", name: '<input type="radio"> 	应急技术与管理	 ' },
    { category: "工学", Professional: "安全科学与工程类", name: '<input type="radio"> 	职业卫生工程	 ' },
    { category: "工学", Professional: "生物工程类", name: '<input type="radio"> 	生物工程	 ' },
    { category: "工学", Professional: "生物工程类", name: '<input type="radio"> 	生物制药	 ' },
    { category: "工学", Professional: "生物工程类", name: '<input type="radio"> 	合成生物学	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	刑事科学技术	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	消防工程	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	交通管理工程	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	安全防范工程	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	公安视听技术	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	抢险救援指挥与技术	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	火灾勘查	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	网络安全与执法	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	核生化消防	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	海警舰艇指挥与技术	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	数据警务技术	 ' },
    { category: "工学", Professional: "公安技术类", name: '<input type="radio"> 	食品药品环境犯罪侦查技术	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	农学	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	园艺	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	植物保护	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	植物科学与技术	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	种子科学与工程	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	设施农业科学与工程	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	茶学	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	烟草	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	应用生物科学	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	农艺教育	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	园艺教育	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	智慧农业	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	菌物科学与工程	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	农药化肥	 ' },
    { category: "农学", Professional: "植物生产类", name: '<input type="radio"> 	生物农药科学与工程	 ' },
    { category: "农学", Professional: "自然保护与环境生态类", name: '<input type="radio"> 	农业资源与环境	 ' },
    { category: "农学", Professional: "自然保护与环境生态类", name: '<input type="radio"> 	野生动物与自然保护区管理	 ' },
    { category: "农学", Professional: "自然保护与环境生态类", name: '<input type="radio"> 	水土保持与荒漠化防治	 ' },
    { category: "农学", Professional: "自然保护与环境生态类", name: '<input type="radio"> 	生物质科学与工程	 ' },
    { category: "农学", Professional: "自然保护与环境生态类", name: '<input type="radio"> 	土地科学与技术	 ' },
    { category: "农学", Professional: "动物生产类", name: '<input type="radio"> 	动物科学	 ' },
    { category: "农学", Professional: "动物生产类", name: '<input type="radio"> 	蚕学	 ' },
    { category: "农学", Professional: "动物生产类", name: '<input type="radio"> 	蜂学	 ' },
    { category: "农学", Professional: "动物生产类", name: '<input type="radio"> 	经济动物学	 ' },
    { category: "农学", Professional: "动物生产类", name: '<input type="radio"> 	马业科学	 ' },
    { category: "农学", Professional: "动物生产类", name: '<input type="radio"> 	饲料工程	 ' },
    { category: "农学", Professional: "动物生产类", name: '<input type="radio"> 	智慧牧业科学与工程	 ' },
    { category: "农学", Professional: "动物医学类", name: '<input type="radio"> 	动物医学	 ' },
    { category: "农学", Professional: "动物医学类", name: '<input type="radio"> 	动物药学	 ' },
    { category: "农学", Professional: "动物医学类", name: '<input type="radio"> 	动植物检疫	 ' },
    { category: "农学", Professional: "动物医学类", name: '<input type="radio"> 	实验动物学	 ' },
    { category: "农学", Professional: "动物医学类", name: '<input type="radio"> 	中兽医学	 ' },
    { category: "农学", Professional: "动物医学类", name: '<input type="radio"> 	兽医公共卫生	 ' },
    { category: "农学", Professional: "林学类", name: '<input type="radio"> 	林学	 ' },
    { category: "农学", Professional: "林学类", name: '<input type="radio"> 	园林	 ' },
    { category: "农学", Professional: "林学类", name: '<input type="radio"> 	森林保护	 ' },
    { category: "农学", Professional: "林学类", name: '<input type="radio"> 	经济林	 ' },
    { category: "农学", Professional: "水产类", name: '<input type="radio"> 	水产养殖学	 ' },
    { category: "农学", Professional: "水产类", name: '<input type="radio"> 	海洋渔业科学与技术	 ' },
    { category: "农学", Professional: "水产类", name: '<input type="radio"> 	水族科学与技术	 ' },
    { category: "农学", Professional: "水产类", name: '<input type="radio"> 	水生动物医学	 ' },
    { category: "农学", Professional: "草学类", name: '<input type="radio"> 	草业科学	 ' },
    { category: "农学", Professional: "草学类", name: '<input type="radio"> 	草坪科学与工程	 ' },
    { category: "医学", Professional: "基础医学类", name: '<input type="radio"> 	基础医学	 ' },
    { category: "医学", Professional: "基础医学类", name: '<input type="radio"> 	生物医学	 ' },
    { category: "医学", Professional: "基础医学类", name: '<input type="radio"> 	生物医学科学	 ' },
    { category: "医学", Professional: "临床医学类", name: '<input type="radio"> 	临床医学	 ' },
    { category: "医学", Professional: "临床医学类", name: '<input type="radio"> 	麻醉学	 ' },
    { category: "医学", Professional: "临床医学类", name: '<input type="radio"> 	医学影像学	 ' },
    { category: "医学", Professional: "临床医学类", name: '<input type="radio"> 	眼视光医学	 ' },
    { category: "医学", Professional: "临床医学类", name: '<input type="radio"> 	精神医学	 ' },
    { category: "医学", Professional: "临床医学类", name: '<input type="radio"> 	放射医学	 ' },
    { category: "医学", Professional: "临床医学类", name: '<input type="radio"> 	儿科学	 ' },
    { category: "医学", Professional: "口腔医学类", name: '<input type="radio"> 	口腔医学	 ' },
    { category: "医学", Professional: "公共卫生与预防医学类", name: '<input type="radio"> 	预防医学	 ' },
    { category: "医学", Professional: "公共卫生与预防医学类", name: '<input type="radio"> 	食品卫生与营养学	 ' },
    { category: "医学", Professional: "公共卫生与预防医学类", name: '<input type="radio"> 	妇幼保健医学	 ' },
    { category: "医学", Professional: "公共卫生与预防医学类", name: '<input type="radio"> 	卫生监督	 ' },
    { category: "医学", Professional: "公共卫生与预防医学类", name: '<input type="radio"> 	全球健康学	 ' },
    { category: "医学", Professional: "公共卫生与预防医学类", name: '<input type="radio"> 	运动与公共健康	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	中医学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	针灸推拿学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	藏医学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	蒙医学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	维医学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	壮医学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	哈医学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	傣医学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	回医学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	中医康复学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	中医养生学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	中医儿科学	 ' },
    { category: "医学", Professional: "中医学类", name: '<input type="radio"> 	中医骨伤科学	 ' },
    { category: "医学", Professional: "中西医结合类", name: '<input type="radio"> 	中西医临床医学	 ' },
    { category: "医学", Professional: "药学类", name: '<input type="radio"> 	药学	 ' },
    { category: "医学", Professional: "药学类", name: '<input type="radio"> 	药物制剂	 ' },
    { category: "医学", Professional: "药学类", name: '<input type="radio"> 	临床药学	 ' },
    { category: "医学", Professional: "药学类", name: '<input type="radio"> 	药事管理	 ' },
    { category: "医学", Professional: "药学类", name: '<input type="radio"> 	药物分析	 ' },
    { category: "医学", Professional: "药学类", name: '<input type="radio"> 	药物化学	 ' },
    { category: "医学", Professional: "药学类", name: '<input type="radio"> 	海洋药学	 ' },
    { category: "医学", Professional: "药学类", name: '<input type="radio"> 	化妆品科学与技术	 ' },
    { category: "医学", Professional: "中药学类", name: '<input type="radio"> 	中药学	 ' },
    { category: "医学", Professional: "中药学类", name: '<input type="radio"> 	中药资源与开发	 ' },
    { category: "医学", Professional: "中药学类", name: '<input type="radio"> 	藏药学	 ' },
    { category: "医学", Professional: "中药学类", name: '<input type="radio"> 	蒙药学	 ' },
    { category: "医学", Professional: "中药学类", name: '<input type="radio"> 	中药制药	 ' },
    { category: "医学", Professional: "中药学类", name: '<input type="radio"> 	中草药栽培与鉴定	 ' },
    { category: "医学", Professional: "法医学类", name: '<input type="radio"> 	法医学	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	医学检验技术	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	医学实验技术	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	医学影像技术	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	眼视光学	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	康复治疗学	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	口腔医学技术	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	卫生检验与检疫	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	听力与言语康复学	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	康复物理治疗	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	康复作业治疗	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	智能医学工程	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	生物医药数据科学	 ' },
    { category: "医学", Professional: "医学技术类", name: '<input type="radio"> 	智能影像工程	 ' },
    { category: "医学", Professional: "护理学类", name: '<input type="radio"> 	护理学	 ' },
    { category: "医学", Professional: "护理学类", name: '<input type="radio"> 	助产学	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	管理科学	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	信息管理与信息系统	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	工程管理	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	房地产开发与管理	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	工程造价	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	保密管理	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	邮政管理	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	大数据管理与应用	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	工程审计	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	计算金融	 ' },
    { category: "管理学", Professional: "管理科学与工程类", name: '<input type="radio"> 	应急管理	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	工商管理	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	市场营销	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	会计学	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	财务管理	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	国际商务	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	人力资源管理	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	审计学	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	资产评估	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	物业管理	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	文化产业管理	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	劳动关系	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	体育经济与管理	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	财务会计教育	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	市场营销教育	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	零售业管理	 ' },
    { category: "管理学", Professional: "工商管理类", name: '<input type="radio"> 	创业管理	 ' },
    { category: "管理学", Professional: "农业经济管理类", name: '<input type="radio"> 	农林经济管理	 ' },
    { category: "管理学", Professional: "农业经济管理类", name: '<input type="radio"> 	农村区域发展	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	公共事业管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	行政管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	劳动与社会保障	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	土地资源管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	城市管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	海关管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	交通管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	海事管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	公共关系学	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	健康服务与管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	海警后勤管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	医疗产品管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	医疗保险	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	养老服务管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	海关检验检疫安全	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	海外安全管理	 ' },
    { category: "管理学", Professional: "公共管理类", name: '<input type="radio"> 	自然资源登记与管理	 ' },
    { category: "管理学", Professional: "图书情报与档案管理类", name: '<input type="radio"> 	图书馆学	 ' },
    { category: "管理学", Professional: "图书情报与档案管理类", name: '<input type="radio"> 	档案学	 ' },
    { category: "管理学", Professional: "图书情报与档案管理类", name: '<input type="radio"> 	信息资源管理	 ' },
    { category: "管理学", Professional: "物流管理与工程类", name: '<input type="radio"> 	物流管理	 ' },
    { category: "管理学", Professional: "物流管理与工程类", name: '<input type="radio"> 	物流工程	 ' },
    { category: "管理学", Professional: "物流管理与工程类", name: '<input type="radio"> 	采购管理	 ' },
    { category: "管理学", Professional: "物流管理与工程类", name: '<input type="radio"> 	供应链管理	 ' },
    { category: "管理学", Professional: "工业工程类", name: '<input type="radio"> 	工业工程	 ' },
    { category: "管理学", Professional: "工业工程类", name: '<input type="radio"> 	标准化工程	 ' },
    { category: "管理学", Professional: "工业工程类", name: '<input type="radio"> 	质量管理工程	 ' },
    { category: "管理学", Professional: "电子商务类", name: '<input type="radio"> 	电子商务	 ' },
    { category: "管理学", Professional: "电子商务类", name: '<input type="radio"> 	电子商务及法律	 ' },
    { category: "管理学", Professional: "电子商务类", name: '<input type="radio"> 	跨境电子商务	 ' },
    { category: "管理学", Professional: "旅游管理类", name: '<input type="radio"> 	旅游管理	 ' },
    { category: "管理学", Professional: "旅游管理类", name: '<input type="radio"> 	酒店管理	 ' },
    { category: "管理学", Professional: "旅游管理类", name: '<input type="radio"> 	会展经济与管理	 ' },
    { category: "管理学", Professional: "旅游管理类", name: '<input type="radio"> 	旅游管理与服务教育	 ' },
    { category: "艺术学", Professional: "艺术学理论类", name: '<input type="radio"> 	艺术史论	 ' },
    { category: "艺术学", Professional: "艺术学理论类", name: '<input type="radio"> 	艺术管理	 ' },
    { category: "艺术学", Professional: "艺术学理论类", name: '<input type="radio"> 	非物质文化遗产保护	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	音乐表演	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	音乐学	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	作曲与作曲技术理论	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	舞蹈表演	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	舞蹈学	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	舞蹈编导	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	舞蹈教育	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	航空服务艺术与管理	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	流行音乐	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	音乐治疗	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	流行舞蹈	 ' },
    { category: "艺术学", Professional: "音乐与舞蹈学类", name: '<input type="radio"> 	音乐教育	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	表演	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	戏剧学	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	电影学	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	戏剧影视文学	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	广播电视编导	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	戏剧影视导演	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	戏剧影视美术设计	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	录音艺术	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	播音与主持艺术	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	动画	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	影视摄影与制作	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	影视技术	 ' },
    { category: "艺术学", Professional: "戏剧与影视学类", name: '<input type="radio"> 	戏剧教育	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	美术学	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	绘画	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	雕塑	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	摄影	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	书法学	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	中国画	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	实验艺术	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	跨媒体艺术	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	文物保护与修复	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	漫画	 ' },
    { category: "艺术学", Professional: "美术学类", name: '<input type="radio"> 	纤维艺术	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	艺术设计学	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	视觉传达设计	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	环境设计	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	产品设计	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	服装与服饰设计	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	公共艺术	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	工艺美术	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	数字媒体艺术	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	艺术与科技	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	陶瓷艺术设计	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	新媒体艺术	 ' },
    { category: "艺术学", Professional: "设计学类", name: '<input type="radio"> 	包装设计	 ' },]

const txttwo = [{
    name: "计算机科学与技术",
    people: "付文浩",
    num: "50",
    hnum: "400",
    snum: "1:200",
    pi: "85%",
}, {
    name: "软件工程",
    people: "胥有文",
    num: "48",
    hnum: "410",
    snum: "1:150",
    pi: "86%",
}, {
    name: "网络工程",
    people: "",
    num: "",
    hnum: "",
    snum: "",
    pi: "",
}, {
    name: "信息安全",
    people: "",
    num: "",
    hnum: "",
    snum: "",
    pi: "",
}, {
    name: "物联网工程",
    people: "",
    num: "",
    hnum: "",
    snum: "",
    pi: "",
}, {
    name: "电子计算机",
    people: "",
    num: "",
    hnum: "",
    snum: "",
    pi: "",
}, {
    name: "数据科学与大数据技术",
    people: "",
    num: "",
    hnum: "",
    snum: "",
    pi: "",
}, {
    name: "网络空间安全",
    people: "",
    num: "",
    hnum: "",
    snum: "",
    pi: "",
}]

const txtthree = [{
    name: "计算机科学与技术",
    qi: "300",
    gang: "5000",
    ji: "400",
    re: "4500",
    min: "2k",
    max: "22k",

}, {
    name: "软件工程",
    qi: "",
    gang: "",
    ji: "",
    re: "",
    min: "",
    max: "",
}, {
    name: "网络工程",
    qi: "",
    gang: "",
    ji: "",
    re: "",
    min: "",
    max: "",
}, {
    name: "信息安全",
    qi: "",
    gang: "",
    ji: "",
    re: "",
    min: "",
    max: "",
}, {
    name: "物联网工程",
    qi: "",
    gang: "",
    ji: "",
    re: "",
    min: "",
    max: "",
}, {
    name: "电子计算机",
    qi: "",
    gang: "",
    ji: "",
    re: "",
    min: "",
    max: "",
}, {
    name: "数据科学与大数据技术",
    qi: "",
    gang: "",
    ji: "",
    re: "",
    min: "",
    max: "",
}, {
    name: "网络空间安全",
    qi: "",
    gang: "",
    ji: "",
    re: "",
    min: "",
    max: "",
}]

const txt = [
    {
        name1: '哲学',
        name: [{
            name2: "哲学类",
            name3: ['<input type="radio"> 	哲学	 ',
                '<input type="radio"> 	逻辑学	 ',
                '<input type="radio"> 	宗教学	 ',
                '<input type="radio"> 	伦理学	 ',]
        }]
    }, {
        name1: '经济学',
        name: [{
            name2: "经济学类",
            name3: ['<input type="radio"> 	经济学	 ',
                '<input type="radio"> 	经济统计学	 ',
                '<input type="radio"> 	国民经济管理	 ',
                '<input type="radio"> 	资源与环境经济学	 ',
                '<input type="radio"> 	商务经济学	 ',
                '<input type="radio"> 	能源经济	 ',
                '<input type="radio"> 	劳动经济学	 ',
                '<input type="radio"> 	经济工程	 ',
                '<input type="radio"> 	数字经济	 ',
            ]
        }, {
            name2: "财政学类",
            name3: ['<input type="radio"> 	财政学	 ',
                '<input type="radio"> 	税收学	 ',]
        }, {
            name2: "金融学类",
            name3: ['<input type="radio"> 	金融学	 ',
                '<input type="radio"> 	金融工程	 ',
                '<input type="radio"> 	保险学	 ',
                '<input type="radio"> 	投资学	 ',
                '<input type="radio"> 	金融数学	 ',
                '<input type="radio"> 	信用管理	 ',
                '<input type="radio"> 	经济与金融	 ',
                '<input type="radio"> 	精算学	 ',
                '<input type="radio"> 	互联网金融	 ',
                '<input type="radio"> 	金融科技	 ',]
        }, {
            name2: "经济与贸易类",
            name3: ['<input type="radio"> 	国际经济与贸易	 ',
                '<input type="radio"> 	贸易经济	 ',]
        },]
    }, {
        name1: "法学",
        name: [{
            name2: "法学类",
            name3: ['<input type="radio"> 	法学	 ',
                '<input type="radio"> 	知识产权	 ',
                '<input type="radio"> 	监狱学	 ',
                '<input type="radio"> 	信用风险管理与法律防控	 ',
                '<input type="radio"> 	国际经贸规则	 ',
                '<input type="radio"> 	司法警察学	 ',
                '<input type="radio"> 	社区矫正	 ',]
        }, {
            name2: "政治学类",
            name3: ['<input type="radio"> 	政治学与行政学	 ',
                '<input type="radio"> 	国际政治	 ',
                '<input type="radio"> 	外交学	 ',
                '<input type="radio"> 	国际事务与国际关系	 ',
                '<input type="radio"> 	政治学、经济学与哲学	 ',
                '<input type="radio"> 	国际组织与全球治理	 ',]
        }, {
            name2: "社会学类",
            name3: ['<input type="radio"> 	社会学	 ',
                '<input type="radio"> 	社会工作	 ',
                '<input type="radio"> 	人类学	 ',
                '<input type="radio"> 	女性学	 ',
                '<input type="radio"> 	家政学	 ',
                '<input type="radio"> 	老年学	 ',
                '<input type="radio"> 	社会政策	 ',]
        }, {
            name2: "民族学类",
            name3: ['<input type="radio"> 	民族学	 ']
        }, {
            name2: "马克思主义理论类",
            name3: ['<input type="radio"> 	科学社会主义	 ',
                '<input type="radio"> 	中国共产党历史	 ',
                '<input type="radio"> 	思想政治教育	 ',
                '<input type="radio"> 	马克思主义理论	 ',]
        }, {
            name2: "公安学类",
            name3: ['<input type="radio"> 	治安学	 ',
                '<input type="radio"> 	侦查学	 ',
                '<input type="radio"> 	边防管理	 ',
                '<input type="radio"> 	禁毒学	 ',
                '<input type="radio"> 	警犬技术	 ',
                '<input type="radio"> 	经济犯罪侦查	 ',
                '<input type="radio"> 	边防指挥	 ',
                '<input type="radio"> 	消防指挥	 ',
                '<input type="radio"> 	警卫学	 ',
                '<input type="radio"> 	公安情报学	 ',
                '<input type="radio"> 	犯罪学	 ',
                '<input type="radio"> 	公安管理学	 ',
                '<input type="radio"> 	涉外警务	 ',
                '<input type="radio"> 	国内安全保卫	 ',
                '<input type="radio"> 	警务指挥与战术	 ',
                '<input type="radio"> 	技术侦查学	 ',
                '<input type="radio"> 	海警执法	 ',
                '<input type="radio"> 	公安政治工作	 ',
                '<input type="radio"> 	移民管理	 ',
                '<input type="radio"> 	出入境管理	 ',
                '<input type="radio"> 	反恐警务	 ',
                '<input type="radio"> 	消防政治工作	 ',]
        }, {
            name2: "马克思主义理论类",
            name3: ['<input type="radio"> 	科学社会主义	 ',
                '<input type="radio"> 	中国共产党历史	 ',
                '<input type="radio"> 	思想政治教育	 ',
                '<input type="radio"> 	马克思主义理论	 ',]
        }]

    }, {
        name1: '教育学',
        name: [{
            name2: "教育学类",
            name3: ['<input type="radio"> 	教育学	 ',
                '<input type="radio"> 	科学教育	 ',
                '<input type="radio"> 	人文教育	 ',
                '<input type="radio"> 	教育技术学	 ',
                '<input type="radio"> 	艺术教育	 ',
                '<input type="radio"> 	学前教育	 ',
                '<input type="radio"> 	小学教育	 ',
                '<input type="radio"> 	特殊教育	 ',
                '<input type="radio"> 	华文教育	 ',
                '<input type="radio"> 	教育康复学	 ',
                '<input type="radio"> 	卫生教育	 ',
                '<input type="radio"> 	认知科学与技术	 ',]
        }, {
            name2: "体育学类",
            name3: ['<input type="radio"> 	体育教育	 ',
                '<input type="radio"> 	运动训练	 ',
                '<input type="radio"> 	社会体育指导与管理	 ',
                '<input type="radio"> 	武术与民族传统体育	 ',
                '<input type="radio"> 	运动人体科学	 ',
                '<input type="radio"> 	运动康复	 ',
                '<input type="radio"> 	休闲体育	 ',
                '<input type="radio"> 	体能训练	 ',
                '<input type="radio"> 	冰雪运动	 ',
                '<input type="radio"> 	电子竞技运动与管理	 ',
                '<input type="radio"> 	智能体育工程	 ',
                '<input type="radio"> 	体育旅游	 ',
                '<input type="radio"> 	运动能力开发	 ',]
        }, {
            name2: "教育学类",
            name3: ['<input type="radio"> 	融合教育	 ']
        }, {
            name2: "教育学类",
            name3: ['<input type="radio"> 	融合教育	 ']
        }]
    }, {
        name1: '文学',
        name: [{
            name2: "中国语言文学类",
            name3: ['<input type="radio"> 	汉语言文学	 ',
                '<input type="radio"> 	汉语言	 ',
                '<input type="radio"> 	汉语国际教育	 ',
                '<input type="radio"> 	中国少数民族语言文学	 ',
                '<input type="radio"> 	古典文献学	 ',
                '<input type="radio"> 	应用语言学	 ',
                '<input type="radio"> 	秘书学	 ',
                '<input type="radio"> 	中国语言与文化	 ',
                '<input type="radio"> 	手语翻译	 ',]
        }, {
            name2: "外国语言文学类",
            name3: ['<input type="radio"> 	桑戈语	 ',
                '<input type="radio"> 	英语	 ',
                '<input type="radio"> 	俄语	 ',
                '<input type="radio"> 	德语	 ',
                '<input type="radio"> 	法语	 ',
                '<input type="radio"> 	西班牙语	 ',
                '<input type="radio"> 	阿拉伯语	 ',
                '<input type="radio"> 	日语	 ',
                '<input type="radio"> 	波斯语	 ',
                '<input type="radio"> 	朝鲜语	 ',
                '<input type="radio"> 	菲律宾语	 ',
                '<input type="radio"> 	梵语巴利语	 ',
                '<input type="radio"> 	印度尼西亚语	 ',
                '<input type="radio"> 	印地语	 ',
                '<input type="radio"> 	柬埔寨语	 ',
                '<input type="radio"> 	老挝语	 ',
                '<input type="radio"> 	缅甸语	 ',
                '<input type="radio"> 	马来语	 ',
                '<input type="radio"> 	蒙古语	 ',
                '<input type="radio"> 	僧伽罗语	 ',
                '<input type="radio"> 	泰语	 ',
                '<input type="radio"> 	乌尔都语	 ',
                '<input type="radio"> 	希伯来语	 ',
                '<input type="radio"> 	越南语	 ',
                '<input type="radio"> 	豪萨语	 ',
                '<input type="radio"> 	斯瓦希里语	 ',
                '<input type="radio"> 	阿尔巴尼亚语	 ',
                '<input type="radio"> 	保加利亚语	 ',
                '<input type="radio"> 	波兰语	 ',
                '<input type="radio"> 	捷克语	 ',
                '<input type="radio"> 	斯洛伐克语	 ',
                '<input type="radio"> 	罗马尼亚语	 ',
                '<input type="radio"> 	葡萄牙语	 ',
                '<input type="radio"> 	瑞典语	 ',
                '<input type="radio"> 	塞尔维亚语	 ',
                '<input type="radio"> 	土耳其语	 ',
                '<input type="radio"> 	希腊语	 ',
                '<input type="radio"> 	匈牙利语	 ',
                '<input type="radio"> 	意大利语	 ',
                '<input type="radio"> 	泰米尔语	 ',
                '<input type="radio"> 	普什图语	 ',
                '<input type="radio"> 	世界语	 ',
                '<input type="radio"> 	孟加拉语	 ',
                '<input type="radio"> 	尼泊尔语	 ',
                '<input type="radio"> 	克罗地亚语	 ',
                '<input type="radio"> 	荷兰语	 ',
                '<input type="radio"> 	芬兰语	 ',
                '<input type="radio"> 	乌克兰语	 ',
                '<input type="radio"> 	挪威语	 ',
                '<input type="radio"> 	丹麦语	 ',
                '<input type="radio"> 	冰岛语	 ',
                '<input type="radio"> 	爱尔兰语	 ',
                '<input type="radio"> 	拉脱维亚语	 ',
                '<input type="radio"> 	立陶宛语	 ',
                '<input type="radio"> 	斯洛文尼亚语 ',
                '<input type="radio"> 	爱沙尼亚语	 ',
                '<input type="radio"> 	马耳他语	 ',
                '<input type="radio"> 	哈萨克语	 ',
                '<input type="radio"> 	乌兹别克语	 ',
                '<input type="radio"> 	祖鲁语	 ',
                '<input type="radio"> 	拉丁语	 ',
                '<input type="radio"> 	翻译	 ',
                '<input type="radio"> 	商务英语	 ',
                '<input type="radio"> 	阿姆哈拉语	 ',
                '<input type="radio"> 	吉尔吉斯语	 ',
                '<input type="radio"> 	索马里语	 ',
                '<input type="radio"> 	土库曼语	 ',
                '<input type="radio"> 	加泰罗尼亚语	 ',
                '<input type="radio"> 	约鲁巴语	 ',
                '<input type="radio"> 	亚美尼亚语	 ',
                '<input type="radio"> 	马达加斯加语	 ',
                '<input type="radio"> 	格鲁吉亚语	 ',
                '<input type="radio"> 	阿塞拜疆语	 ',
                '<input type="radio"> 	阿非利卡语	 ',
                '<input type="radio"> 	马其顿语	 ',
                '<input type="radio"> 	塔吉克语	 ',
                '<input type="radio"> 	茨瓦纳语	 ',
                '<input type="radio"> 	恩德贝莱语	 ',
                '<input type="radio"> 	科摩罗语	 ',
                '<input type="radio"> 	克里奥尔语	 ',
                '<input type="radio"> 	绍纳语	 ',
                '<input type="radio"> 	提格雷尼亚语	 ',
                '<input type="radio"> 	白俄罗斯语	 ',
                '<input type="radio"> 	毛利语	 ',
                '<input type="radio"> 	汤加语	 ',
                '<input type="radio"> 	萨摩亚语	 ',
                '<input type="radio"> 	库尔德语	 ',
                '<input type="radio"> 	比斯拉马语	 ',
                '<input type="radio"> 	达里语	 ',
                '<input type="radio"> 	德顿语	 ',
                '<input type="radio"> 	迪维希语	 ',
                '<input type="radio"> 	斐济语	 ',
                '<input type="radio"> 	库克群岛毛利语	 ',
                '<input type="radio"> 	隆迪语	 ',
                '<input type="radio"> 	卢森堡语	 ',
                '<input type="radio"> 	卢旺达语	 ',
                '<input type="radio"> 	纽埃语	 ',
                '<input type="radio"> 	皮金语	 ',
                '<input type="radio"> 	切瓦语	 ',
                '<input type="radio"> 	塞苏陀语	 ',
                '<input type="radio"> 	语言学	 ',
                '<input type="radio"> 	塔玛齐格特语	 ',
                '<input type="radio"> 	爪哇语	 ',
                '<input type="radio"> 	旁遮普语	 ',]
        }, {
            name2: "新闻传播学类",
            name3: ['<input type="radio"> 	新闻学	 ',
                '<input type="radio"> 	广播电视学	 ',
                '<input type="radio"> 	广告学	 ',
                '<input type="radio"> 	传播学	 ',
                '<input type="radio"> 	编辑出版学	 ',
                '<input type="radio"> 	网络与新媒体	 ',
                '<input type="radio"> 	数字出版	 ',
                '<input type="radio"> 	时尚传播	 ',
                '<input type="radio"> 	国际新闻与传播	 ',
                '<input type="radio"> 	会展	 ']
        }, {
            name2: "教育学类",
            name3: ['<input type="radio"> 	融合教育	 ']
        }]
    }, {
        name1: '历史学',
        name: [{
            name2: '历史学类',
            name3: ['<input type="radio"> 	历史学	 ',
                '<input type="radio"> 	世界史	 ',
                '<input type="radio"> 	考古学	 ',
                '<input type="radio"> 	文物与博物馆学	 ',
                '<input type="radio"> 	文物保护技术	 ',
                '<input type="radio"> 	外国语言与外国历史	 ',
                '<input type="radio"> 	文化遗产	 ',
                '<input type="radio"> 	古文字学	 ',]
        }]
    }, {
        name1: '理学',
        name: [{
            name2: '数学类	',
            name3: ['<input type="radio"> 	数学与应用数学	 ',
                '<input type="radio"> 	信息与计算科学	 ',
                '<input type="radio"> 	数理基础科学	 ',
                '<input type="radio"> 	数据计算及应用	 ',]
        }, {
            name2: '物理学类	',
            name3: ['<input type="radio"> 	物理学	 ',
                '<input type="radio"> 	应用物理学	 ',
                '<input type="radio"> 	核物理	 ',
                '<input type="radio"> 	声学	 ',
                '<input type="radio"> 	量子信息科学	 ',
                '<input type="radio"> 	系统科学与工程	 ',]
        }, {
            name2: '化学类',
            name3: ['<input type="radio"> 	化学	 ',
                '<input type="radio"> 	应用化学	 ',
                '<input type="radio"> 	化学生物学	 ',
                '<input type="radio"> 	分子科学与工程	 ',
                '<input type="radio"> 	能源化学	 ',
                '<input type="radio"> 	化学测量学与技术	 ',]
        }, {
            name2: '天文学类',
            name3: ['<input type="radio"> 	天文学	 ']
        }, {
            name2: '地理科学类	',
            name3: ["	地球物理学	",
                "	    空间科学与技术	",
                "	    防灾减灾科学与工程	",]
        }, {
            name2: '大气科学类	',
            name3: ['<input type="radio">	大气科学	 ',
                '<input type="radio">	应用气象学	 ',
                '<input type="radio">	气象技术与工程	 ',]
        }, {
            name2: '海洋科学类',
            name3: ['<input type="radio">	海洋科学	 ',
                '<input type="radio">	海洋技术	 ',
                '<input type="radio">	海洋资源与环境	 ',
                '<input type="radio">	军事海洋学	 ',]
        }, {
            name2: '地球物理学类',
            name3: ['<input type="radio">	地球物理学	 ',
                '<input type="radio">	空间科学与技术	 ',
                '<input type="radio">	防灾减灾科学与工程	 ',]
        }, {
            name2: '地质学类',
            name3: ['<input type="radio">	地质学	 ',
                '<input type="radio">	地球化学	 ',
                '<input type="radio">	地球信息科学与技术	 ',
                '<input type="radio">	古生物学	 ',]
        }, {
            name2: '生物科学类',
            name3: ['<input type="radio">	生物科学	 ',
                '<input type="radio">	生物技术	 ',
                '<input type="radio">	生物信息学	 ',
                '<input type="radio">	生态学	 ',
                '<input type="radio">	整合科学	 ',
                '<input type="radio">	神经科学	 ',]
        }, {
            name2: '心理学类',
            name3: ['<input type="radio">	心理学	 ',
                '<input type="radio">	应用心理学	 ',]
        }, {
            name2: '统计学类',
            name3: ['<input type="radio">	统计	 ',
                '<input type="radio">	应用统计学	 ',]
        }]
    }, {
        name1: "工学",
        name: [{
            name2: "力学类",
            name3: ['<input type="radio">	理论与应用力学	 ',
                '<input type="radio">	工程力学	 ',]
        }, {
            name2: "机械类",
            name3: ['<input type="radio">	机械工程	 ',
                '<input type="radio">	机械设计制造及其自动化	 ',
                '<input type="radio">	材料成型及控制工程	 ',
                '<input type="radio">	机械电子工程	 ',
                '<input type="radio">	工业设计	 ',
                '<input type="radio">	过程装备与控制工程	 ',
                '<input type="radio">	车辆工程	 ',
                '<input type="radio">	汽车服务工程	 ',
                '<input type="radio">	机械工艺技术	 ',
                '<input type="radio">	微机电系统工程	 ',
                '<input type="radio">	机电技术教育	 ',
                '<input type="radio">	汽车维修工程教育	 ',
                '<input type="radio">	智能制造工程	 ',
                '<input type="radio">	智能车辆工程	 ',
                '<input type="radio">	仿生科学与工程	 ',
                '<input type="radio">	新能源汽车工程	 ',
                '<input type="radio">	增材制造工程	 ',
                '<input type="radio">	智能交互设计	 ',
                '<input type="radio">	应急装备技术与工程	 ',]
        }, {
            name2: "仪器类",
            name3: ['<input type="radio">	测控技术与仪器	 ',
                '<input type="radio">	精密仪器	 ',
                '<input type="radio">	智能感知工程	 ',]
        }, {
            name2: "材料类",
            name3: ['<input type="radio">	材料科学与工程	 ',
                '<input type="radio">	材料物理	 ',
                '<input type="radio">	材料化学	 ',
                '<input type="radio">	冶金工程	 ',
                '<input type="radio">	金属材料工程	 ',
                '<input type="radio">	无机非金属材料工程	 ',
                '<input type="radio">	高分子材料与工程	 ',
                '<input type="radio">	复合材料与工程	 ',
                '<input type="radio">	粉体材料科学与工程	 ',
                '<input type="radio">	宝石及材料工艺学	 ',
                '<input type="radio">	焊接技术与工程	 ',
                '<input type="radio">	功能材料	 ',
                '<input type="radio">	纳米材料与技术	 ',
                '<input type="radio">	新能源材料与器件	 ',
                '<input type="radio">	材料设计科学与工程	 ',
                '<input type="radio">	复合材料成型工程	 ',
                '<input type="radio">	智能材料与结构	 ',]
        }, {
            name2: "能源动力类",
            name3: ['<input type="radio">	能源与动力工程	 ',
                '<input type="radio">	能源与环境系统工程	 ',
                '<input type="radio">	新能源科学与工程	 ',
                '<input type="radio">	储能科学与工程	 ',
                '<input type="radio">	能源服务工程	 ',]
        }, {
            name2: "电气类",
            name3: ['<input type="radio">	电气工程及其自动化	 ',
                '<input type="radio">	智能电网信息工程	 ',
                '<input type="radio">	光源与照明	 ',
                '<input type="radio">	电气工程与智能控制	 ',
                '<input type="radio">	电机电器智能化	 ',
                '<input type="radio">	电缆工程	 ',
                '<input type="radio">	能源互联网工程	 ',]
        }, {
            name2: "电子信息类",
            name3: ['<input type="radio">	电子信息工程	 ',
                '<input type="radio">	电子科学与技术	 ',
                '<input type="radio">	通信工程	 ',
                '<input type="radio">	微电子科学与工程	 ',
                '<input type="radio">	光电信息科学与工程	 ',
                '<input type="radio">	信息工程	 ',
                '<input type="radio">	广播电视工程	 ',
                '<input type="radio">	水声工程	 ',
                '<input type="radio">	电子封装技术	 ',
                '<input type="radio">	集成电路设计与集成系统	 ',
                '<input type="radio">	医学信息工程	 ',
                '<input type="radio">	电磁场与无线技术	 ',
                '<input type="radio">	电波传播与天线	 ',
                '<input type="radio">	电子信息科学与技术	 ',
                '<input type="radio">	电信工程及管理	 ',
                '<input type="radio">	应用电子技术教育	 ',
                '<input type="radio">	人工智能	 ',
                '<input type="radio">	海洋信息工程	 ',
                '<input type="radio">	柔性电子学	 ',
                '<input type="radio">	智能测控工程	 ',]
        }, {
            name2: "自动化类",
            name3: ['<input type="radio">	自动化	 ',
                '<input type="radio">	轨道交通信号与控制	 ',
                '<input type="radio">	机器人工程	 ',
                '<input type="radio">	邮政工程	 ',
                '<input type="radio">	核电技术与控制工程	 ',
                '<input type="radio">	智能装备与系统	 ',
                '<input type="radio">	工业智能	 ',
                '<input type="radio">	智能工程与创意设计	 ',]
        }, {
            name2: "计算机类",
            name3: ['<input type="radio">	计算机科学与技术	 ',
                '<input type="radio">	软件工程	 ',
                '<input type="radio">	网络工程	 ',
                '<input type="radio">	信息安全	 ',
                '<input type="radio">	物联网工程	 ',
                '<input type="radio">	数字媒体技术	 ',
                '<input type="radio">	智能科学与技术	 ',
                '<input type="radio">	空间信息与数字技术	 ',
                '<input type="radio">	电子与计算机工程	 ',
                '<input type="radio">	数据科学与大数据技术	 ',
                '<input type="radio">	网络空间安全	 ',
                '<input type="radio">	新媒体技术	 ',
                '<input type="radio">	电影制作	 ',
                '<input type="radio">	保密技术	 ',
                '<input type="radio">	服务科学与工程	 ',
                '<input type="radio">	虚拟现实技术	 ',
                '<input type="radio">	区块链工程	 ',
                '<input type="radio">	密码科学与技术	 ',]
        }, {
            name2: "土木类",
            name3: ['<input type="radio">	土木工程	 ',
                '<input type="radio">	建筑环境与能源应用工程	 ',
                '<input type="radio">	给排水科学与工程	 ',
                '<input type="radio">	建筑电气与智能化	 ',
                '<input type="radio">	城市地下空间工程	 ',
                '<input type="radio">	道路桥梁与渡河工程	 ',
                '<input type="radio">	铁道工程	 ',
                '<input type="radio">	智能建造	 ',
                '<input type="radio">	土木、水利与海洋工程	 ',
                '<input type="radio">	土木、水利与交通工程	 ',
                '<input type="radio">	城市水系统工程	 ',]
        }, {
            name2: "水利类",
            name3: ['<input type="radio">	水利水电工程	 ',
                '<input type="radio">	水文与水资源工程	 ',
                '<input type="radio">	港口航道与海岸工程	 ',
                '<input type="radio">	水务工程	 ',
                '<input type="radio">	水利科学与工程	 ',]
        }, {
            name2: "测绘类",
            name3: ['<input type="radio">	测绘工程	 ',
                '<input type="radio">	遥感科学与技术	 ',
                '<input type="radio">	导航工程	 ',
                '<input type="radio">	地理国情监测	 ',
                '<input type="radio">	地理空间信息工程	 ',]
        }, {
            name2: "化工与制药类",
            name3: ['<input type="radio">	化学工程与工艺	 ',
                '<input type="radio">	制药工程	 ',
                '<input type="radio">	资源循环科学与工程	 ',
                '<input type="radio">	能源化学工程	 ',
                '<input type="radio">	化学工程与工业生物工程	 ',
                '<input type="radio">	化工安全工程	 ',
                '<input type="radio">	涂料工程	 ',
                '<input type="radio">	精细化工	 ',]
        }, {
            name2: "地质类",
            name3: ['<input type="radio">	地质工程	 ',
                '<input type="radio">	勘查技术与工程	 ',
                '<input type="radio">	资源勘查工程	 ',
                '<input type="radio">	地下水科学与工程	 ',
                '<input type="radio">	旅游地学与规划工程	 ',]
        }, {
            name2: "矿业类",
            name3: ['<input type="radio">	采矿工程	 ',
                '<input type="radio">	石油工程	 ',
                '<input type="radio">	矿物加工工程	 ',
                '<input type="radio">	油气储运工程	 ',
                '<input type="radio">	矿物资源工程	 ',
                '<input type="radio">	海洋油气工程	 ',
                '<input type="radio">	智能采矿工程	 ',]
        }, {
            name2: "纺织类",
            name3: ['<input type="radio">	纺织工程	 ',
                '<input type="radio">	服装设计与工程	 ',
                '<input type="radio">	非织造材料与工程	 ',
                '<input type="radio">	服装设计与工艺教育	 ',
                '<input type="radio">	丝绸设计与工程	 ',]
        }, {
            name2: "轻工类",
            name3: ['<input type="radio">	轻化工程	 ',
                '<input type="radio">	包装工程	 ',
                '<input type="radio">	印刷工程	 ',
                '<input type="radio">	香料香精技术与工程	 ',
                '<input type="radio">	化妆品技术与工程	 ',]
        }, {
            name2: "交通运输类",
            name3: ['<input type="radio">	交通运输	 ',
                '<input type="radio">	交通工程	 ',
                '<input type="radio">	航海技术	 ',
                '<input type="radio">	轮机工程	 ',
                '<input type="radio">	飞行技术	 ',
                '<input type="radio">	交通设备与控制工程	 ',
                '<input type="radio">	救助与打捞工程	 ',
                '<input type="radio">	船舶电子电气工程	 ',
                '<input type="radio">	轨道交通电气与控制	 ',
                '<input type="radio">	邮轮工程与管理	 ',
                '<input type="radio">	智慧交通	 ',]
        }, {
            name2: "海洋工程类",
            name3: ['<input type="radio">	船舶与海洋工程	 ',
                '<input type="radio">	海洋工程与技术	 ',
                '<input type="radio">	海洋资源开发技术	 ',
                '<input type="radio">	海洋机器人	 ',]
        }, {
            name2: "航空航天类",
            name3: ['<input type="radio">	航空航天工程	 ',
                '<input type="radio">	飞行器设计与工程	 ',
                '<input type="radio">	飞行器制造工程	 ',
                '<input type="radio">	飞行器动力工程	 ',
                '<input type="radio">	飞行器环境与生命保障工程	 ',
                '<input type="radio">	飞行器质量与可靠性	 ',
                '<input type="radio">	飞行器适航技术	 ',
                '<input type="radio">	飞行器控制与信息工程	 ',
                '<input type="radio">	无人驾驶航空器系统工程	 ',
                '<input type="radio">	智能飞行器技术	 ',]
        }, {
            name2: "兵器类",
            name3: ['<input type="radio">	武器系统与工程	 ',
                '<input type="radio">	武器发射工程	 ',
                '<input type="radio">	探测制导与控制技术	 ',
                '<input type="radio">	弹药工程与爆炸技术	 ',
                '<input type="radio">	特种能源技术与工程	 ',
                '<input type="radio">	装甲车辆工程	 ',
                '<input type="radio">	信息对抗技术	 ',
                '<input type="radio">	智能无人系统技术	 ',]
        }, {
            name2: "核工程类",
            name3: ['<input type="radio">	核工程与核技术	 ',
                '<input type="radio">	辐射防护与核安全	 ',
                '<input type="radio">	工程物理	 ',
                '<input type="radio">	核化工与核燃料工程	 ',]
        }, {
            name2: "农业工程类",
            name3: ['<input type="radio">	农业工程	 ',
                '<input type="radio">	农业机械化及其自动化	 ',
                '<input type="radio">	农业电气化	 ',
                '<input type="radio">	农业建筑环境与能源工程	 ',
                '<input type="radio">	农业水利工程	 ',
                '<input type="radio">	土地整治工程	 ',
                '<input type="radio">	农业智能装备工程	 ',]
        }, {
            name2: "林业工程类",
            name3: ['<input type="radio">	森林工程	 ',
                '<input type="radio">	木材科学与工程	 ',
                '<input type="radio">	林产化工	 ',
                '<input type="radio">	家具设计与工程	 ',]
        }, {
            name2: "环境科学与工程类",
            name3: ['<input type="radio">	环境科学与工程	 ',
                '<input type="radio">	环境工程	 ',
                '<input type="radio">	环境科学	 ',
                '<input type="radio">	环境生态工程	 ',
                '<input type="radio">	环保设备工程	 ',
                '<input type="radio">	资源环境科学	 ',
                '<input type="radio">	水质科学与技术	 ',]
        }, {
            name2: "生物医学工程类",
            name3: ['<input type="radio">	生物医学工程	 ',
                '<input type="radio">	假肢矫形工程	 ',
                '<input type="radio">	临床工程技术	 ',
                '<input type="radio">	康复工程	 ',]
        }, {
            name2: "食品科学与工程类",
            name3: ['<input type="radio">	食品科学与工程	 ',
                '<input type="radio">	食品质量与安全	 ',
                '<input type="radio">	粮食工程	 ',
                '<input type="radio">	乳品工程	 ',
                '<input type="radio">	酿酒工程	 ',
                '<input type="radio">	葡萄与葡萄酒工程	 ',
                '<input type="radio">	食品营养与检验教育	 ',
                '<input type="radio">	烹饪与营养教育	 ',
                '<input type="radio">	食品安全与检测	 ',
                '<input type="radio">	食品营养与健康	 ',
                '<input type="radio">	食用菌科学与工程	 ',
                '<input type="radio">	白酒酿造工程	 ',]
        }, {
            name2: "建筑类",
            name3: ['<input type="radio">	建筑学	 ',
                '<input type="radio">	城乡规划	 ',
                '<input type="radio">	风景园林	 ',
                '<input type="radio">	历史建筑保护工程	 ',
                '<input type="radio">	人居环境科学与技术	 ',
                '<input type="radio">	城市设计	 ',
                '<input type="radio">	智慧建筑与建造	 ',]
        }, {
            name2: "安全科学与工程类",
            name3: ['<input type="radio">	安全工程	 ',
                '<input type="radio">	应急技术与管理	 ',
                '<input type="radio">	职业卫生工程	 ',]
        }, {
            name2: "生物工程类",
            name3: ['<input type="radio">	生物工程	 ',
                '<input type="radio">	生物制药	 ',
                '<input type="radio">	合成生物学	 ',]
        }, {
            name2: "公安技术类",
            name3: ['<input type="radio">	刑事科学技术	 ',
                '<input type="radio">	消防工程	 ',
                '<input type="radio">	交通管理工程	 ',
                '<input type="radio">	安全防范工程	 ',
                '<input type="radio">	公安视听技术	 ',
                '<input type="radio">	抢险救援指挥与技术	 ',
                '<input type="radio">	火灾勘查	 ',
                '<input type="radio">	网络安全与执法	 ',
                '<input type="radio">	核生化消防	 ',
                '<input type="radio">	海警舰艇指挥与技术	 ',
                '<input type="radio">	数据警务技术	 ',
                '<input type="radio">	食品药品环境犯罪侦查技术	 ',]
        },]
    }, {
        name1: "农学",
        name: [{
            name2: "植物生产类",
            name3: ['<input type="radio">	农学	 ',
                '<input type="radio">	园艺	 ',
                '<input type="radio">	植物保护	 ',
                '<input type="radio">	植物科学与技术	 ',
                '<input type="radio">	种子科学与工程	 ',
                '<input type="radio">	设施农业科学与工程	 ',
                '<input type="radio">	茶学	 ',
                '<input type="radio">	烟草	 ',
                '<input type="radio">	应用生物科学	 ',
                '<input type="radio">	农艺教育	 ',
                '<input type="radio">	园艺教育	 ',
                '<input type="radio">	智慧农业	 ',
                '<input type="radio">	菌物科学与工程	 ',
                '<input type="radio">	农药化肥	 ',
                '<input type="radio">	生物农药科学与工程	 ',]
        }, {
            name2: '自然保护与环境生态类',
            name3: ['<input type="radio">	农业资源与环境	 ',
                '<input type="radio">	野生动物与自然保护区管理	 ',
                '<input type="radio">	水土保持与荒漠化防治	 ',
                '<input type="radio">	生物质科学与工程	 ',
                '<input type="radio">	土地科学与技术	 ',]
        }, {
            name2: '动物生产类',
            name3: ['<input type="radio">	动物科学	 ',
                '<input type="radio">	蚕学	 ',
                '<input type="radio">	蜂学	 ',
                '<input type="radio">	经济动物学	 ',
                '<input type="radio">	马业科学	 ',
                '<input type="radio">	饲料工程	 ',
                '<input type="radio">	智慧牧业科学与工程	 ',]
        }, {
            name2: '动物医学类',
            name3: ['<input type="radio">	动物医学	 ',
                '<input type="radio">	动物药学	 ',
                '<input type="radio">	动植物检疫	 ',
                '<input type="radio">	实验动物学	 ',
                '<input type="radio">	中兽医学	 ',
                '<input type="radio">	兽医公共卫生	 ',]
        }, {
            name2: '林学类',
            name3: ['<input type="radio">	林学	 ',
                '<input type="radio">	园林	 ',
                '<input type="radio">	森林保护	 ',
                '<input type="radio">	经济林	 ',]
        }, {
            name2: '水产类',
            name3: ['<input type="radio">	水产养殖学	 ',
                '<input type="radio">	海洋渔业科学与技术	 ',
                '<input type="radio">	水族科学与技术	 ',
                '<input type="radio">	水生动物医学	 ',]
        }, {
            name2: '草学类',
            name3: ['<input type="radio">	草业科学	 ',
                '<input type="radio">	草坪科学与工程	 ',]
        }]
    }, {
        name1: '医学',
        name: [{
            name2: "基础医学类",
            name3: ['<input type="radio">	基础医学	 ',
                '<input type="radio">	生物医学	 ',
                '<input type="radio">	生物医学科学	 ',]
        }, {
            name2: "临床医学类",
            name3: ['<input type="radio">	临床医学	 ',
                '<input type="radio">	麻醉学	 ',
                '<input type="radio">	医学影像学	 ',
                '<input type="radio">	眼视光医学	 ',
                '<input type="radio">	精神医学	 ',
                '<input type="radio">	放射医学	 ',
                '<input type="radio">	儿科学	 ',]
        }, {
            name2: "口腔医学类",
            name3: ['<input type="radio">	口腔医学	 ',]
        }, {
            name2: "公共卫生与预防医学类",
            name3: ['<input type="radio">	预防医学	 ',
                '<input type="radio">	食品卫生与营养学	 ',
                '<input type="radio">	妇幼保健医学	 ',
                '<input type="radio">	卫生监督	 ',
                '<input type="radio">	全球健康学	 ',]
        }, {
            name2: "公共卫生与预防医学类",
            name3: ['<input type="radio">	运动与公共健康	 ', ,]
        }, {
            name2: "中医学类",
            name3: ['<input type="radio">	中医学	 ',
                '<input type="radio">	针灸推拿学	 ',
                '<input type="radio">	藏医学	 ',
                '<input type="radio">	蒙医学	 ',
                '<input type="radio">	维医学	 ',
                '<input type="radio">	壮医学	 ',
                '<input type="radio">	哈医学	 ',
                '<input type="radio">	傣医学	 ',
                '<input type="radio">	回医学	 ',
                '<input type="radio">	中医康复学	 ',
                '<input type="radio">	中医养生学	 ',
                '<input type="radio">	中医儿科学	 ',
                '<input type="radio">	中医骨伤科学	 ', ,]
        }, {
            name2: "中西医结合类",
            name3: ['<input type="radio">	中西医临床医学	 ',]
        }, {
            name2: "药学类",
            name3: ['<input type="radio">	药学	 ',
                '<input type="radio">	药物制剂	 ',
                '<input type="radio">	临床药学	 ',
                '<input type="radio">	药事管理	 ',
                '<input type="radio">	药物分析	 ',
                '<input type="radio">	药物化学	 ',
                '<input type="radio">	海洋药学	 ',
                '<input type="radio">	化妆品科学与技术	 ',]
        }, {
            name2: "中药学类",
            name3: ['<input type="radio">	中药学	 ',
                '<input type="radio">	中药资源与开发	 ',
                '<input type="radio">	藏药学	 ',
                '<input type="radio">	蒙药学	 ',
                '<input type="radio">	中药制药	 ',
                '<input type="radio">	中草药栽培与鉴定	 ',]
        }, {
            name2: "法医学类",
            name3: ['<input type="radio">	法医学	 ',]
        }, {
            name2: "医学技术类",
            name3: ['<input type="radio">	医学检验技术	 ',
                '<input type="radio">	医学实验技术	 ',
                '<input type="radio">	医学影像技术	 ',
                '<input type="radio">	眼视光学	 ',
                '<input type="radio">	康复治疗学	 ',
                '<input type="radio">	口腔医学技术	 ',
                '<input type="radio">	卫生检验与检疫	 ',
                '<input type="radio">	听力与言语康复学	 ',
                '<input type="radio">	康复物理治疗	 ',
                '<input type="radio">	康复作业治疗	 ',
                '<input type="radio">	智能医学工程	 ',
                '<input type="radio">	生物医药数据科学	 ',
                '<input type="radio">	智能影像工程	 ',]
        }, {
            name2: "护理学类",
            name3: ['<input type="radio">	护理学	 ',
                '<input type="radio">	助产学	 ',]
        }]
    }, {
        name1: '管理学',
        name: [{
            name2: '管理科学与工程类',
            name3: ['<input type="radio">	管理科学	 ',
                '<input type="radio">	信息管理与信息系统	 ',
                '<input type="radio">	工程管理	 ',
                '<input type="radio">	房地产开发与管理	 ',
                '<input type="radio">	工程造价	 ',
                '<input type="radio">	保密管理	 ',
                '<input type="radio">	邮政管理	 ',
                '<input type="radio">	大数据管理与应用	 ',
                '<input type="radio">	工程审计	 ',
                '<input type="radio">	计算金融	 ',
                '<input type="radio">	应急管理	 ',]
        }, {
            name2: '工商管理类',
            name3: ['<input type="radio">	工商管理	 ',
                '<input type="radio">	市场营销	 ',
                '<input type="radio">	会计学	 ',
                '<input type="radio">	财务管理	 ',
                '<input type="radio">	国际商务	 ',
                '<input type="radio">	人力资源管理	 ',
                '<input type="radio">	审计学	 ',
                '<input type="radio">	资产评估	 ',
                '<input type="radio">	物业管理	 ',
                '<input type="radio">	文化产业管理	 ',
                '<input type="radio">	劳动关系	 ',
                '<input type="radio">	体育经济与管理	 ',
                '<input type="radio">	财务会计教育	 ',
                '<input type="radio">	市场营销教育	 ',
                '<input type="radio">	零售业管理	 ',
                '<input type="radio">	创业管理	 ',]
        }, {
            name2: '农业经济管理类',
            name3: ['<input type="radio">	农林经济管理	 ',
                '<input type="radio">	农村区域发展	 ',]
        }, {
            name2: '公共管理类',
            name3: ['<input type="radio">	公共事业管理	 ',
                '<input type="radio">	行政管理	 ',
                '<input type="radio">	劳动与社会保障	 ',
                '<input type="radio">	土地资源管理	 ',
                '<input type="radio">	城市管理	 ',
                '<input type="radio">	海关管理	 ',
                '<input type="radio">	交通管理	 ',
                '<input type="radio">	海事管理	 ',
                '<input type="radio">	公共关系学	 ',
                '<input type="radio">	健康服务与管理	 ',
                '<input type="radio">	海警后勤管理	 ',
                '<input type="radio">	医疗产品管理	 ',
                '<input type="radio">	医疗保险	 ',
                '<input type="radio">	养老服务管理	 ',
                '<input type="radio">	海关检验检疫安全	 ',
                '<input type="radio">	海外安全管理	 ',
                '<input type="radio">	自然资源登记与管理	 ',]
        }, {
            name2: '图书情报与档案管理类',
            name3: ['<input type="radio">	图书馆学	 ',
                '<input type="radio">	档案学	 ',
                '<input type="radio">	信息资源管理	 ',]
        }, {
            name2: '物流管理与工程类',
            name3: ['<input type="radio">	物流管理	 ',
                '<input type="radio">	物流工程	 ',
                '<input type="radio">	采购管理	 ',
                '<input type="radio">	供应链管理	 ',]
        }, {
            name2: '工业工程类',
            name3: ['<input type="radio">	工业工程	 ',
                '<input type="radio">	标准化工程	 ',
                '<input type="radio">	质量管理工程	 ',]
        }, {
            name2: '电子商务类',
            name3: ['<input type="radio">	电子商务	 ',
                '<input type="radio">	电子商务及法律	 ',
                '<input type="radio">	跨境电子商务	 ',]
        }, {
            name2: '旅游管理类',
            name3: ['<input type="radio">	旅游管理	 ',
                '<input type="radio">	酒店管理	 ',
                '<input type="radio">	会展经济与管理	 ',
                '<input type="radio">	旅游管理与服务教育	 ',]
        }]
    }, {
        name1: '艺术学',
        name: [{
            name2: '艺术学理论类',
            name3: ['<input type="radio">	艺术史论	 ',
                '<input type="radio">	艺术管理	 ',
                '<input type="radio">	非物质文化遗产保护	 ',]
        }, {
            name2: '音乐与舞蹈学类',
            name3: ['<input type="radio">	表演	 ',
                '<input type="radio">	戏剧学	 ',
                '<input type="radio">	电影学	 ',
                '<input type="radio">	戏剧影视文学	 ',
                '<input type="radio">	广播电视编导	 ',
                '<input type="radio">	戏剧影视导演	 ',
                '<input type="radio">	戏剧影视美术设计	 ',
                '<input type="radio">	录音艺术	 ',
                '<input type="radio">	播音与主持艺术	 ',
                '<input type="radio">	动画	 ',
                '<input type="radio">	影视摄影与制作	 ',
                '<input type="radio">	影视技术	 ',
                '<input type="radio">	戏剧教育	 ',]
        }, {
            name2: '戏剧与影视学类',
            name3: [' < input type = "radio" > 表演	 ',
                '<input type="radio">	戏剧学	 ',
                '<input type="radio">	电影学	 ',
                '<input type="radio">	戏剧影视文学	 ',
                '<input type="radio">	广播电视编导	 ',
                '<input type="radio">	戏剧影视导演	 ',
                '<input type="radio">	戏剧影视美术设计	 ',
                '<input type="radio">	录音艺术	 ',
                '<input type="radio">	播音与主持艺术	 ',
                '<input type="radio">	动画	 ',
                '<input type="radio">	影视摄影与制作	 ',
                '<input type="radio">	影视技术	 ',
                '<input type="radio">	戏剧教育	 ',]
        }, {
            name2: '美术学类',
            name3: ['<input type="radio">	美术学	 ',
                '<input type="radio">	绘画	 ',
                '<input type="radio">	雕塑	 ',
                '<input type="radio">	摄影	 ',
                '<input type="radio">	书法学	 ',
                '<input type="radio">	中国画	 ',
                '<input type="radio">	实验艺术	 ',
                '<input type="radio">	跨媒体艺术	 ',
                '<input type="radio">	文物保护与修复	 ',
                '<input type="radio">	漫画	 ',
                '<input type="radio">	纤维艺术	 ',]
        }, {
            name2: '设计学类',
            name3: ['<input type="radio">	艺术设计学	 ',
                '<input type="radio">	视觉传达设计	 ',
                '<input type="radio">	环境设计	 ',
                '<input type="radio">	产品设计	 ',
                '<input type="radio">	服装与服饰设计	 ',
                '<input type="radio">	公共艺术	 ',
                '<input type="radio">	工艺美术	 ',
                '<input type="radio">	数字媒体艺术	 ',
                '<input type="radio">	艺术与科技	 ',
                '<input type="radio">	陶瓷艺术设计	 ',
                '<input type="radio">	新媒体艺术	 ',
                '<input type="radio">	包装设计	 ',]
        }]
    }]



seleone()
tableone()
yang()
