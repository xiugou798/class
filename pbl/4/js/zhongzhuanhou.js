var stack = ""
var index = -1

function pops(){
	//顶部删除
	stack[index--];
}
function pushs(){
	return stack[++index];
}

function caluate(){
	let hou = [3,2,5,1,'-','*','+'];
	let index = -1;
	let num = [];
	let answer = 0;
	for (let i=0; i<hou.length; i++){
		if (hou.charAt(i)>'0'){
			num[++index] = hou.charAt(i);//数字进栈
		}else{
			//是符号
			let num1 = num[index--];
			let num2 = num[index--];
			
			if(hou.[i]=="-"){
				answer = parseInt(num2) - parseInt(num1);
				num[++index] = answer;
			}else if(hou.[i]=="+"){
				answer = parseInt(num2) + parseInt(num1);
				num[++index] = answer;
			}else if(hou.[i]=="*"){
				answer = parseInt(num2) * parseInt(num1);
				num[++index] = answer;
			}else{
				answer = parseInt(num2) / parseInt(num1);
				num[++index]=answer;
			}
		}
	}
	console.log(num)
} 