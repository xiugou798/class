//js操作标签
//增删改查

//查
var add = document.getElementById("add");

//点击按钮之后增加一排数据出来
//1 点击按钮事件
function adddata() {
	//1.1 创建标签
	let tr = document.createElement("tr");

	let fz = document.getElementsByClassName("fz")[0];

	let fu = fz.parentElement;

	//1.1 复制标签
	let newtr = fz.cloneNode(true);
	// console.log(newtr);

	//1.2 将标签挂载在页面上
	fu.append(newtr);
}
var zymdata = [{
	"id": 0,
	"zym": "计算机科学与技术",
	"fzr": "付浩然",
	"kcsl": 50,
	"xssl": 400,
	"ssb": "1:200",
	"cjppd": 86
}, {
	"id": 1,
	"zym": "软件工程",
	"fzr": "胥又文",
	"kcsl": 48,
	"xssl": 410,
	"ssb": "1:150",
	"cjppd": 86
}, {
	"id": 2,
	"zym": "网络工程",
	"fzr": "",
	"kcsl": "",
	"xssl": "",
	"ssb": "",
	"cjppd": ""
}, {
	"id": 3,
	"zym": "信息安全",
	"fzr": "",
	"kcsl": "",
	"xssl": "",
	"ssb": "",
	"cjppd": ""
}, {
	"id": 4,
	"zym": "物联网工程",
	"fzr": "",
	"kcsl": "",
	"xssl": "",
	"ssb": "",
	"cjppd": ""
}, {
	"id": 5,
	"zym": "电子与计算机工程",
	"fzr": "",
	"kcsl": "",
	"xssl": "",
	"ssb": "",
	"cjppd": ""
}, {
	"id": 6,
	"zym": "数据科学与大数据技术",
	"fzr": "",
	"kcsl": "",
	"xssl": "",
	"ssb": "",
	"cjppd": ""
}, {
	"id": 7,
	"zym": "网络空间安全",
	"fzr": "",
	"kcsl": "",
	"xssl": "",
	"ssb": "",
	"cjppd": ""
}, ];


//点击增加 出现一个弹窗  输入数据 回到页面 页面呈现新增数据
function adddata2() { //呈现弹窗
	let tc = document.getElementById("tc");
	tc.className = "tcxs";
}

//更新数据以及对应标签
function refrech() {
	let tbody = document.getElementById("two_one_one").children[0];
	//let oldtbody = tbody.cloneNode();//没有true不复制儿子
	//let oldbody = document.createElement("tbody");
	let trfzs = document.getElementsByClassName("fz");
	let oldtr = trfzs[0];
	//	tbody.remove(true);


	if (trfzs.length === zymdata.length) { //如果一样 就不执行新增标签的操作
		for (let i = 0; i < zymdata.length; i++) {
			trfzs[i].children[0].innerText = zymdata[i].zym;
			trfzs[i].children[1].innerText = zymdata[i].fzr;
			trfzs[i].children[2].innerText = zymdata[i].kcsl;
			trfzs[i].children[3].innerText = zymdata[i].xssl;
			trfzs[i].children[4].innerText = zymdata[i].ssb;
			trfzs[i].children[5].innerText = zymdata[i].cjppd;
			//innerText是起止位置到终止位置的除html标签的全部内容   innerHTML是起止位置到终止位置的全部内容
		}
	} else {
		//查询出所有标签 如果标签数量和zymdata长度不一致 需要执行新建标签的操作
		//标签3数量小于  0 1 2 
		// 数据5        0 1 2 3 4 
		for (let i = 0; i < trfzs.length; i++) {
			trfzs[i].children[0].innerText = zymdata[i].zym;
			trfzs[i].children[1].innerText = zymdata[i].fzr;
			trfzs[i].children[2].innerText = zymdata[i].kcsl;
			trfzs[i].children[3].innerText = zymdata[i].xssl;
			trfzs[i].children[4].innerText = zymdata[i].ssb;
			trfzs[i].children[5].innerText = zymdata[i].cjppd;

		}
		// console.log(tbody)
		for (let i = trfzs.length; i < zymdata.length; i++) {
			let newtr = oldtr.cloneNode(true);
			newtr.children[0].innerText = zymdata[i].zym;
			newtr.children[1].innerText = zymdata[i].fzr;
			newtr.children[2].innerText = zymdata[i].kcsl;
			newtr.children[3].innerText = zymdata[i].xssl;
			newtr.children[4].innerText = zymdata[i].ssb;
			newtr.children[5].innerText = zymdata[i].cjppd;
			// console.log(tbody)
			tbody.append(newtr);

		}
	}


	//	document.getElementById("two_one_td").append(oldtbody);

}



function qdan() {
	let newdata = {
		"id": 0,
		"zym": "",
		"fzr": "",
		"kcsl": "",
		"xssl": "",
		"ssb": "",
		"cjppd": "",
	}
	newdata.id = zymdata.length - 1;
	newdata.zym = document.getElementById("zym").value;
	newdata.fzr = document.getElementById("fzr1").value;
	newdata.kcsl = document.getElementById("kcsl").value;
	newdata.xssl = document.getElementById("xssl").value;
	newdata.ssb = document.getElementById("ssb").value;
	newdata.cjppd = document.getElementById("cjppd").value;
	zymdata.push(newdata);

	refrech()


	var tc = document.getElementById("tc");
	tc.className = "tcyc";
}

function delect(e) {
	e.parentElement.parentElement.remove();
	var p = e.parentElement.parentElement;
	var zym1 = p.children[0].innerText; //innerText表示获取该元素内部的文本内容
	var fzr2 = p.children[1].innerText; //children表示获取该元素下面子元素的集合
	console.log(zym1, fzr2)
	for (let i = 0; i < zymdata.length; i++) {
		if (zymdata[i].zym === zym1 || zymdata[i].fzr === fzr2) {
			zymdata.splice(i, 1);
		}
	}
	//只删除了标签 未删除数据
	//补全删除的代码
}
var gxid = 0;

function update(e) {
	let tr = e.parentElement.parentElement;
	let tc = document.getElementById("tc");
	console.log(tc)
	tc.className = "tcxs";
	let srk = document.getElementById("zym");
	srk.value = tr.children[0].innerText;
	//在原有data中 通过值找到数据 修改之后 更新整个数据
	for (let i = 0; i < zymdata.length; i++) {
		if (zymdata[i].zym === tr.children[0].innerText) {
			gxid = zymdata[i].id;
		}
	}
}


function qdxg(e) {

	let srk_zym = document.getElementById("zym").value;
	let srk_fzr = document.getElementById("fzr1").value;
	let srk_kcsl = document.getElementById("kcsl").value;
	let srk_xssl = document.getElementById("xssl").value;
	let srk_ssb = document.getElementById("ssb").value;
	let srk_cjppd = document.getElementById("cjppd").value;
	let trs = document.getElementsByClassName("fz");
	zymdata[gxid].zym = srk_zym
	zymdata[gxid].fzr = srk_fzr
	zymdata[gxid].kcsl = srk_kcsl
	zymdata[gxid].xssl = srk_xssl
	zymdata[gxid].ssb = srk_ssb
	zymdata[gxid].cjppd = srk_cjppd
	// trs[gxid].children[0].textContent = srk_zym;   //textContent表示该节点之后的所有文本内容
	// trs[gxid].children[1].textContent = srk_fzr;
	// trs[gxid].children[2].textContent = srk_kcsl;
	// trs[gxid].children[3].textContent = srk_xssl;
	// trs[gxid].children[4].textContent = srk_ssb;
	// trs[gxid].children[5].textContent = srk_cjppd;
	refrech()
	let tc = document.getElementById("tc");
	tc.className = "tcyc";

}

refrech()


function query() {
	//获取输入框的值
	let inputtada = document.getElementById("search")
	if (inputtada.value == "") {
		alert("请输入所查询专业名")
	} else {
		let sum = 0
		let inputtada = document.getElementById("search")
		console.log(inputtada)
		let data = document.getElementById("query_two");
		data.className = "query"
		console.log(data.children)
		let table = document.createElement("table")
		let tr1 = document.createElement("tr")
		let th1 = document.createElement("th")
		th1.innerText = "专业名";
		tr1.append(th1)
		let th2 = document.createElement("th")
		th2.innerText = "负责人"
		tr1.append(th2)
		let th3 = document.createElement("th")
		th3.innerText = "课程数量"
		tr1.append(th3)
		let th4 = document.createElement("th")
		th4.innerText = "学生数量"
		tr1.append(th4)
		let th5 = document.createElement("th")
		th5.innerText = "师生比"
		tr1.append(th5)
		let th6 = document.createElement("th")
		th6.innerText = "产教匹配度"
		tr1.append(th6)
		let th7 = document.createElement("th")
		th7.innerText = "操作按钮组合"
		tr1.append(th7)
		table.append(tr1)
		// 	// th1.innerHTML = '<input type="button" value="确定新增" id="tcqd" onclick="qdan()" />'+
		// 	// 	'<input type="button" value="确定修改" id="tcqd" onclick="qdxg(this)" />'
		let content = document.getElementById("two_one_one").children[0].children
		console.log(content[1].children[6].innerHTML)
		for (let i = 1; i < content.length; i++) {
			if (inputtada.value === content[i].children[0].innerText) {
				sum += 1
				let tr = document.createElement("tr");
				let td1 = document.createElement("td")
				td1.innerText = content[i].children[0].innerText
				
				tr.append(td1)
				let td2 = document.createElement("td")
				td2.innerText = content[i].children[1].innerText
				tr.append(td2)
				let td3 = document.createElement("td")
				td3.innerText = content[i].children[2].innerText
				tr.append(td3)
				let td4 = document.createElement("td")
				td4.innerText = content[i].children[3].innerText
				tr.append(td4)
				let td5 = document.createElement("td")
				td5.innerText = content[i].children[4].innerText
				tr.append(td5)
				let td6 = document.createElement("td")
				td6.innerText = content[i].children[5].innerText
				tr.append(td6)
				let td7 = document.createElement("td")
				td7.innerHTML = content[i].children[6].innerHTML
				// td7.innerHTML = '<input type="button" value="删除" onclick="delect(this)" />'+
				// 					'<input type="button" value="修改" onclick="update(this)" />'
				tr.append(td7)
				table.append(tr)
			}
		}
		data.append(table)
		alert("该数据当中有" + sum + "条该专业数据")
	}

}

function two_two_one(e) {
	let tc = document.getElementById("ziyuan");
	tc.className = "two_two_onexs";
	console.log(e)
	var wkszy = e.innerText;
	return wkszy
}

function xgcyxx() {
	let text = document.getElementById("xgcyxx_text")
	text.className = "tcxs"
}

function two_exit() {
	let text = document.getElementById("xgcyxx_text")
	text.className = "tcyc"
	let text1 = document.getElementById("ziyuan")
	text1.className = "tcyc"
}

function jybzl() {
	// // window.location.href="http://www.baidu.com"     //在本窗口打开该页面    
	// let wkszy = two_two_one()
	// let wy = "https://cn.bing.com/search?q="+wkszy
	// // window.open("https://cn.bing.com/search?q="+wkszy)
	// console.log(wy)
}
function shutdown(){
	let down = document.getElementById("query_two")
	down.className = "tcyc"
}