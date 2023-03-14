console.log()

var lbsj = [{
	id: 1,
	fu: "工学",
	children: ["工1", "工2", "工3"]
}, {
	id: 2,
	fu: "理学",
	children: ["理1", "理2", "理3"]
}]
//接着细化下拉选择框的数据绑定及更新

var lbsj2 = [{
	id: 1,
	ml: "工学",
	zyl: [{
		"工1": ["工1-1", "工1-2", "工1-3"]
	}, {
		"工2": ["工2-1", "工2-2","工2-3"]
	}, {
		"工3": ["工3-1", "工3-2", "工3-3"]
	}]
}, {
	id: 2,
	ml: "理学",
	zyl: [{
		"理学专业1": ["理学1-1", "理学1-2", "理学1-3"]
	},{
		"理学专业2": ["理学2-1", "理学2-2", "理学2-3"]
	},{
		"理学专业3": ["理学3-1", "理学3-2", "理学3-3"]
	}]
}, ]


function zxzy(){
	let e = document.getElementById('qy').value
	for(let i=0;i<lbsj2.length;i++){
		
		if(e=="工1"){
			
			for(let j = 0;j<3;j++){
				var ul = document.getElementById("ul1");
				var li = document.createElement("li")
				var text = document.createTextNode(lbsj2[0].zyl[0]["工1"][j]);
				li.appendChild(text);
				ul.appendChild(li);
				// document.createElement("div").textContent = lbsj2[0].zyl[0]["工1"][j];
				// console.log(lbsj2[0].zyl[0]["工1"][j])
			}
			break;	
			
			
		}
		
	}
	
}

function selectonclick() {
	let fuvalue = document.querySelector("select").value;


	if (fuvalue == "工学") {
		let fu = lbsj[0].children;
		let fubq = document.getElementById("qy");
		for (let j = 0; j < fu.length; j++) {
			let opc = document.createElement("option");
			opc.textContent = fu[j];


			fubq.append(opc);
		}

	} else {
		let fu = lbsj[1].children;
		let fubq = document.getElementById("qy");



		//清空原本的option
		//	fubq.removeChild();
		for (var opj = 0; opj < fubq.children.length; opj++) {
			fubq.children[opj].textContent = fu[opj];
		}


		for (let j = opj; j < fu.length; j++) {
			let opc = document.createElement("option");
			opc.textContent = fu[j];
			console.log(fu[j]);
			fubq.append(opc);
		}
	}
}


function zz(){
	let canvas = document.querySelector('#zz')
	canvas.width= 300
    canvas.height= 150
	let ctx = canvas.getContext('2d')
	ctx.beginPath()
	ctx.moveTo(30,20)
	ctx.lineTo(30,120)
    ctx.lineTo(280,120)
    ctx.stroke()
	var dis=30;
	for(var i=0;i<4;i++){
		ctx.beginPath();
		var color = '#' + Math.random().toString(16).substr(2, 6).toUpperCase();//随机颜色
		ctx.fillStyle=color;
		
		var height = Math.round(Math.random()*80+20);//在一定范围内随机高度
	  ctx.fillRect(50+dis*i,115, 20, -height);//绘制一个柱状
	}
	//执行绘画
	ctx.stroke();
}

function sx(){
	let canvas = document.querySelector('#sx')
	canvas.width= 300
    canvas.height= 150
	let ctx = canvas.getContext('2d')
	ctx.lineWidth=2
	ctx.strokeStyle="red"
	ctx.fillStyle="blue"
	var arr = [{
		name: "理1",
		money: 8000
	}, {
		name: "理1",
		money: 2000
	}, {
		name: "理1",
		money: 7000
	}, {
		name: "理1",
		money: 1000
	},{
		name: "理1",
		money: 5000
	},{
		name: "理1",
money: 5400
	}]
	arr.total=0;    //算出总共的money数
	for(var i=0;i<arr.length;i++){
		arr.total+=arr[i].money;
	}
	var deg=Math.PI/180
	var start=45
	arr.forEach((el)=>{
		ctx.beginPath();
                    var r=parseInt(Math.random()*255)
                    var g=parseInt(Math.random()*255)
                    var b=parseInt(Math.random()*255)
                    ctx.fillStyle=`rgb(${r},${g},${b})`
                    n=(el.money/arr.total)*360
                    ctx.arc(80,80,70,start*deg,(start+n)*deg)//以45度开始
                    ctx.lineTo(80,80)
                    start+=n
                    ctx.fill()
                    ctx.stroke()
                })
}
function zx(){
	let canvas = document.querySelector('#zx')
	canvas.width= 300
    canvas.height= 150
	let ctx = canvas.getContext('2d')
	ctx.beginPath()
	ctx.moveTo(30,20)
	ctx.lineTo(30,120)
    ctx.lineTo(280,120)
    ctx.stroke()
	var gridSize = 10;
    var canvasHeight = ctx.canvas.height;
    var canvasWidth = ctx.canvas.width;
	var xLineTotal = Math.floor(canvasHeight / gridSize);
    for (var i = 0; i <= xLineTotal; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize - 0.5 );
        ctx.lineTo(canvasWidth, i * gridSize - 0.5);
        ctx.strokeStyle = '#eee';
        ctx.stroke();
    }
    /*4.画多少条Y轴方向的线*/
    var yLineTotal = Math.floor(canvasWidth / gridSize);
    for (var i = 0; i <= yLineTotal; i++) {
        ctx.beginPath();
        ctx.moveTo(i*gridSize - 0.5 ,0);
        ctx.lineTo(i*gridSize - 0.5 ,canvasHeight);
        ctx.strokeStyle = '#eee';
        ctx.stroke();
	}}