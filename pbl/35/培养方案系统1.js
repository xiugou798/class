// 点击增加显示增加框
function zengj() {
	let tc = document.getElementById("tc");
	tc.className = "xsk";
	let mc = document.getElementsByClassName("zym");
}
// 创建数据库
var xdata = [{
	"id": 0,
	"ml": "工学",
	"zyl": "计算机类",
	"zymc": "计算机科学与技术"
}, {
	"id": 1,
	"ml": "工学",
	"zyl": "计算机类",
	"zymc": "软件工程"
}, {
	"id": 2,
	"ml": "工学",
	"zyl": "计算机类",
	"zymc": "网络工程"
}, {
	"id": 3,
	"ml": "工学",
	"zyl": "计算机类",
	"zymc": "信息安全"
}, {
	"id": 4,
	"ml": "工学",
	"zyl": "计算机类",
	"zymc": "物联网工程"
}, {
	"id": 5,
	"ml": "工学",
	"zyl": "计算机类",
	"zymc": "数字媒体技术"
}, {
	"id": 6,
	"ml": "工学",
	"zyl": "计算机类",
	"zymc": "智能科学与技术"
}, {
	"id": 7,
	"ml": "工学",
	"zyl": "计算机类",
	"zymc": "空间信息与数字技术"
}, {
	"id": 8,
	"ml": "工学",
	"zyl": "计算机类",
	"zymc": "电子与计算机工程"
}, {
	"id": 9,
	"ml": "文学",
	"zyl": "中国语言文学类",
	"zymc": "汉语言文学"
}, {
	"id": 10,
	"ml": "理学",
	"zyl": "数学类",
	"zymc": "数学与应用数学"
}, {
	"id": 11,
	"ml": "理学",
	"zyl": "化学类",
	"zymc": "应用化学"
}, {
	"id": 12,
	"ml": "理学",
	"zyl": "物理学类",
	"zymc": "物理学"
}, {
	"id": 13,
	"ml": "文学",
	"zyl": "外国语言文学类",
	"zymc": "英语"
}, {
	"id": 14,
	"ml": "教育学",
	"zyl": "教育学类",
	"zymc": "武术与民族传统体育"
}, {
	"id": 15,
	"ml": "教育学",
	"zyl": "教育学类",
	"zymc": "人文教育"
}, {
	"id": 16,
	"ml": "教育学",
	"zyl": "教育学类",
	"zymc": "科学教育"
}, {
	"id": 17,
	"ml": "文学",
	"zyl": "新闻传播学类",
	"zymc": "新闻学"
}, {
	"id": 18,
	"ml": "法学",
	"zyl": "法学类",
	"zymc": "知识产权"
}, {
	"id": 19,
	"ml": "法学",
	"zyl": "政治学类",
	"zymc": "国际政治"
}, {
	"id": 20,
	"ml": "法学",
	"zyl": "社会学类",
	"zymc": "人类学"
}, {
	"id": 21,
	"ml": "工学",
	"zyl": "电子信息类",
	"zymc": "工程力学"
}, {
	"id": 22,
	"ml": "工学",
	"zyl": "材料类",
	"zymc": "材料物理"
},{
	"id": 23,
	"ml": "工学",
	"zyl": "工商管理类",
	"zymc": "会计学"
},{
	"id": 24,
	"ml": "工学",
	"zyl": "电子商务类",
	"zymc": "电子商务"
}];
// 点击确定新增,添加数据
function qdan() {
	let newdata = {
		"id": 0,
		"ml": "工学",
		"zyl": "计算机类",
		"zymc": "电子与计算机工程"
	}
	newdata.id = xdata.length;
	newdata.ml = document.getElementById("ml").value;
	newdata.zyl = document.getElementById("zyl").value;
	newdata.zymc = document.getElementById("zymc").value;
	xdata.push(newdata);
	let tc = document.getElementById("tc");
	tc.className = "yck";
	refrech();
	refrech();
}
// 更新数据及对于标签
function refrech() {
	let tbody = document.getElementById("nnz_tb");
	let st = document.getElementById("st");
	let zyms = document.getElementsByClassName("zym");
	let oldzym = zyms[0]; //保存zym的第一个样式
	if (zyms.length == xdata.length) { //zym标签的个数和数据库的个数就行比较，一样就更新数据
		for (let i = 0; i < xdata.length; i++) {
			zyms[i].children[0].textContent = xdata[i].ml;
			zyms[i].children[1].textContent = xdata[i].zyl;
			zyms[i].children[2].children[1].textContent = xdata[i].zymc;
		}
	} else { //如果不一样更新zyms已经有的标签
		for (let i = 0; i < zyms.length; i++) {
			zyms[i].children[0].textContent = xdata[i].ml;
			zyms[i].children[1].textContent = xdata[i].zyl;
			zyms[i].children[2].children[1].textContent = xdata[i].zymc;
		}
		for (let i = zyms.length; i < xdata.length; i++) { //新增标签操作
			let newzym = oldzym.cloneNode(true);
			newzym.children[0].textContent = xdata[i].ml;
			newzym.children[1].textContent = xdata[i].zyl;
			newzym.children[2].children[1].textContent = xdata[i].zymc;
			tbody.append(newzym);
		}
	}
	console.log(xdata);
}
// 删除标签和数据库的数据
function delect(e) {
	let sc = e.parentElement.parentElement;
	let ml = sc.children[0].textContent;
	let zyl = sc.children[1].textContent;
	let zymc = sc.children[2].children[1].textContent;
	for (let i = 0; i < xdata.length; i++) {
		if (ml == xdata[i].ml && zyl == xdata[i].zyl && zymc == xdata[i].zymc) {
			xdata.pop(i)
		}
	}
	sc.remove();
}
var gid = 0
//修改指令
function update(e) {
	let sc = e.parentElement.parentElement;
	let tc = document.getElementById("tc");
	tc.className = "xsk";
	let ml = document.getElementById("ml");
	let zyl = document.getElementById("zyl");
	let zymc = document.getElementById("zymc");
	ml.value = sc.children[0].textContent;
	zyl.value = sc.children[1].textContent;
	console.log(sc.children[1].textContent);
	zymc.value = sc.children[2].children[1].textContent;
	for (let i = 0; i < xdata.length; i++) {
		if (ml.value == xdata[i].ml && zyl.value == xdata[i].zyl && zymc.value == xdata[i].zymc) {
			gid = xdata[i].id;
		}
	}
}
//修改指令
function qdxg(e) {
	refrech();
	let ml = document.getElementById("ml").value;
	let zyl = document.getElementById("zyl").value;
	let zymc = document.getElementById("zymc").value;
	let trs = document.getElementsByClassName("zym");
	trs[gid].children[0].textContent = ml;
	trs[gid].children[1].textContent = zyl;
	trs[gid].children[2].children[1].textContent = zymc;
	xdata[gid].ml = ml;
	xdata[gid].zyl = zyl;
	xdata[gid].zymc = zymc;
	refrech();
	let tc = document.getElementById("tc");
	tc.className = "yck";
}
var count = 0
//门类查找
function mlcz() {
	refrech();
	let y12 = document.getElementById("y12");
	let zhi = y12.value;
	let newdata = {
		"id": 0,
		"ml": "工学",
		"zyl": "计算机类",
		"zymc": "电子与计算机工程"
	};
	for (let i = 0; i < xdata.length; i++) {
		if (zhi == xdata[i].ml) {
			newdata.ml = xdata[count].ml;
			newdata.zyl = xdata[count].zyl;
			newdata.zymc = xdata[count].zymc;
			xdata[count].ml = xdata[i].ml;
			xdata[count].zyl = xdata[i].zyl;
			xdata[count].zymc = xdata[i].zymc;
			xdata[i].ml = newdata.ml;
			xdata[i].zyl = newdata.zyl;
			xdata[i].zymc = newdata.zymc;
			count = count + 1;
		}
	}
	count = 0;
	refrech();
}
// 专业类查找
var counts=0
function zylcz() {
	refrech();
	let y13 = document.getElementById("zy");
	let zhi = y13.value;
	let newdata = {
		"id": 0,
		"ml": "工学",
		"zyl": "计算机类",
		"zymc": "电子与计算机工程"
	};
	for (let i = 0; i < xdata.length; i++) {
		if (zhi == xdata[i].zyl) {
			newdata.ml = xdata[counts].ml;
			newdata.zyl = xdata[counts].zyl;
			newdata.zymc = xdata[counts].zymc;
			xdata[counts].ml = xdata[i].ml;
			xdata[counts].zyl = xdata[i].zyl;
			xdata[counts].zymc = xdata[i].zymc;
			xdata[i].ml = newdata.ml;
			xdata[i].zyl = newdata.zyl;
			xdata[i].zymc = newdata.zymc;
			counts = counts + 1;
		}
	}
	counts = 0;
	refrech();
}
function xs(e){
	let xsk=document.getElementById("y23");
	xsk.className="y23";
}
function gw(e){
	let xsk=document.getElementById("y24");
	xsk.className="y24";
}
function jn(e){
	let xsk=document.getElementById("y25");
	xsk.className="y25";
}
function rw(e){
	let xsk=document.getElementById("y26");
	xsk.className="y26";
}
function dyzz(e){
	let xsk=document.getElementById("y43");
	xsk.className="y43";
}
function xgcyxx(e){
	let xsk=document.getElementById("y44");
	xsk.className="y44";
}
