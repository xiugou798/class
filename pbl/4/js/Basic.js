var stack = ""
var index = -1

function pops(){
	//顶部删除
	stack[index--];
}
function pushs(){
	return stack[++index];
}
