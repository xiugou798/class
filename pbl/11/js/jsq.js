var stack=[]

function popst(){
	return stack[index--]
}
function pushst(){
	return stack[++index]
}
function cau(){
	let vl="3251-*+"
	let num=[]
	let index = -1
	let ans = 0
	for(let i = 0;i<vl.length;i++){
		if("0"<=vl[i] && vl[i]<="9"){
			console.log(vl[i])
			num[++index]=vl[i]
			
		}
		else{
			let num1=num[index--]
			let num2=num[index--]
			if(vl[i]=="-"){
				ans=num2-num1
				console.log(ans)
				num[++index]=ans
			}
			else if(vl[i]=="+"){
				ans=parseInt(num2)+parseInt(num1)
				console.log(ans)
				num[++index]=ans
			}else if(vl[i]=="*"){
				ans=num2*num1
				console.log(ans)
				num[++index]=ans
			}else if(vl[i]=="/"){
				ans=num2/num1
				console.log(ans)
				num[++index]=ans
			}
		}
	}
	console.log(ans)
}
cau()