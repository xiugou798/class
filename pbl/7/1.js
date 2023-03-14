console.log()

var lbsj = [{
	id: 1,
	fu: "工学",
	children: ["工1", "工2", "工3"]
}, {
	id: 2,
	fu: "理学",
	children: ["理1", "理2", "理3", "理4"]
}]
//接着细化下拉选择框的数据绑定及更新

var lbsj2 = [{
	id: 1,
	ml: "工学",
	zyl: [{
		"工1": ["工1-1", "工1-2", "工1-3"]
	}, {
		"工2": ["工2-1", "工2-2"]
	}, {
		"工3": ["工3-1", "工3-2", "工3-3", "工3-4"]
	}]
}, {
	id: 2,
	ml: "理学",
	zyl: [{
		"理学专业1": ["理学1-1", "理学1-2", "理学1-3"]
	}]
}, ]


function zxzy(e){
	
	console.log(e);
	for(let i=0;i<lbsj2.length;i++){
		
		if(e=="工1"){
			
			for(let j = 0;j<3;j++){
				
				document.createElement("div").textContent = lbsj2[0].zyl[0]["工1"][j];
			}
			
			
			
		}
		
	}
	
}

function selectonclick() {
	let fuvalue = document.querySelector("select").value;
	console.log(fuvalue);


	if (fuvalue == "工学") {
		let fu = lbsj[0].children;
		let fubq = document.getElementById("qy");
		for (let j = 0; j < fu.length; j++) {
			let opc = document.createElement("option");
			console.log(fu);
			opc.textContent = fu[j];


			fubq.append(opc);
		}

	} else {
		let fu = lbsj[1].children;
		console.log(fu);
		let fubq = document.getElementById("qy");



		//清空原本的option
		console.log(fubq);
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
