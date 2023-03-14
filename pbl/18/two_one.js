//js操作标签
//增删改查

//查
var add =document.getElementById("add");

//点击按钮之后增加一排数据出来
//1 点击按钮事件
function adddata(){
	//1.1 创建标签
	let tr =  document.createElement("tr");
	
	let fz = document.getElementsByClassName("fz")[0];
	
	let fu = fz.parentElement;
	
	//1.1 复制标签
	let newtr = fz.cloneNode(true);
	console.log(newtr);
	
	//1.2 将标签挂载在页面上
	fu.append(newtr);
}
var zymdata = [{
// 	"id":0,
// 	 "zym":""
// },{
	"id":1,
	 "zym":"第一条"}];
		

//点击增加 出现一个弹窗  输入数据 回到页面 页面呈现新增数据
function adddata2(){//呈现弹窗
	let tc =document.getElementById("tc");
	tc.className="tcxs";
}

//更新数据以及对应标签
function refrech(){
	let tbody = document.querySelector("tbody");
	//let oldtbody = tbody.cloneNode();//没有true不复制儿子
	//let oldbody = document.createElement("tbody");
	let trfzs = document.getElementsByClassName("fz");
	let oldtr = trfzs[0];
	
//	tbody.remove(true);

	
	
	
	
	if(trfzs.length === zymdata.length){//如果一样 就不执行新增标签的操作
		for(let i=0;i<zymdata.length;i++){
			trfzs[i].children[0].innerText = zymdata[i].zym;
		}
	}else{
		//查询出所有标签 如果标签数量和zymdata长度不一致 需要执行新建标签的操作
		//标签3数量小于  0 1 2 
		// 数据5        0 1 2 3 4 
		for(let i=0;i<trfzs.length;i++){
			trfzs[i].children[0].innerText = zymdata[i].zym;
		}
		
		for(let i=trfzs.length;i<zymdata.length;i++){
			let newtr = oldtr.cloneNode(true);
			newtr.children[0].innerText = zymdata[i].zym;
			tbody.append(newtr);
		}	
	}
	
	
//	document.getElementById("two_one_td").append(oldtbody);
	
}


//点击增加 出现一个弹窗  输入数据 回到页面 页面呈现新增数据
//作业1 新增需要在尾部增加
//作业2 补全删除的代码，需要考虑数据与标签的对应关系
//作业3 查询功能
//1 document.getElementById("zym")
//2 document.cloneNode(true);
//3 document.createElement("tr");
//4 fu.append(newtr);
//5 document.querySelector("tbody");//页面中第一个tbody标签
function qdan(){
	let newdata = {
		"id":0,
		
		"zym":""
	}
	newdata.id = zymdata.length-1;
	newdata.zym = document.getElementById("zym").value;
	
	zymdata.push(newdata);
	
	console.log(zymdata);
	refrech()
	
		
	var tc =document.getElementById("tc");
	tc.className="tcyc";
}

function delect(e){
	console.log(e)
	
	e.parentElement.parentElement.remove();
	//只删除了标签 未删除数据
	//补全删除的代码
}
var gxid = 0;
function update(e){
	let tr = e.parentElement.parentElement;
	let tc =document.getElementById("tc");
	tc.className="tcxs";
	let srk =  document.getElementById("zym");
	srk.value=tr.children[0].innerText;
	
	//在原有data中 通过值找到数据 修改之后 更新整个数据
	for(let i=0;i<zymdata.length;i++){
		if(zymdata[i].zym ===tr.children[0].innerText){
			gxid = zymdata[i].id;
		}
	}
}


function qdxg(e){

	let srk_value =  document.getElementById("zym").value;
	let trs = document.getElementsByClassName("fz");
	trs[gxid].children[0].textContent = srk_value;
	
	let tc =document.getElementById("tc");
	tc.className="tcyc";
	
}

refrech()


function searchdata(){
	//获取输入框的值
	//遍历数据源zymdata
	
	// 有
	// 创建标签
	// 删除已有数据
	
	// append你的新标签
}