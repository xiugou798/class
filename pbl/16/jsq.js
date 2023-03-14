//div块元素
var result;
//是否进行了运算
var equal = false;
window.onload = function(){
	result  = document.getElementById("result");
	result.innerHTML = "";
}
//如果进行了运算，下次输入数前进行清零
function isEqual(){
	if (equal){
		c();
		equal = false;
	}
}
 
function pn(n){
	isEqual();
	result.innerHTML += n;
}
 
function po(o){
	result.innerHTML += o;
	equal = false;
}
 
function leftBracket(){
	isEqual();
	var r = result.innerHTML;
	var c = r.charAt(r.length - 1);
	if ("0" <= c && c <= "9" || c == "%"){
		po("×");
	}
	result.innerHTML += "(";
}
 
function rightBracket(){
	isEqual();
	result.innerHTML += ")"
}
 
function ppow(){
	isEqual();
	result.innerHTML += "^"
}
 
function psqrt(){
	isEqual();
	var r = result.innerHTML;
	var c = r.charAt(r.length - 1);
	if ("0" <= c && c <= "9" || c == "%"){
		po("×");
	}
	result.innerHTML += "√";
}
 
function c(){
	result.innerHTML = "";
}
 
function backspace(){
	var r = result.innerHTML;
	result.innerHTML = r.substr(0,r.length - 1);
	isEqual();
}
 
function equals1(){
	equal = true;
	var r = result.innerHTML;
	//将特殊字符进行替换
	r = r.replace(/×/g,"*");
	r = r.replace(/÷/g,"/");
	r = r.replace(/%/g,"*0.01");
	try{
        r = pow(r);
	    r = sqrt(r);
		result.innerHTML=eval(r);
	}catch(e){
		result.innerHTML="表达式不正确";
	}
}
 
function pow(r){
	var arr = r.split("^");
	if (arr.length == 1){
		return r;
	}
	var leftstr = leftOperation(arr[0]);
	var rightstr = rightOperation(arr[1]);
	var num =  "Math.pow(" + leftstr + "," + rightstr + ")";
	var leftr = arr[0].substring(0,arr[0].length - leftstr.length);
	var rightr = arr[1].substring(rightstr.length,arr[1].length);
	var r = leftr + num + rightr;
	return pow(r);
}
 
function sqrt(r){
	if (r.indexOf("√") == -1){
		return r;
	}
	var arr = r.split("√");
	var rightstr = rightOperation(arr[1]);
	var num = "Math.sqrt(" + rightstr + ")";
	var leftr = arr[0];
	var rightr = arr[1].substring(rightstr.length,arr[1].length);
	var r =leftr + num + rightr;
	return sqrt(r);
}
 
function leftOperation(r){
	var leftBracket = 0;
	var rightBracket = 0;
	var i;
	for (i = r.length - 1; i >=0; i--){
		var c = r.charAt(i);
		if (c == ")"){
			rightBracket++;
		} else if (leftBracket == rightBracket && c >="0" && c <= "9"){
			break;
		} else if (c == "("){
			leftBracket++;
		}
	}
	return r.substring(i);
}
 
function rightOperation(r){
	var leftBracket = 0;
	var rightBracket = 0;
	var i;
	for (i = 0; i <  r.length; i++){
		var c = r.charAt(i);
		if (c == "("){
			leftBracket++;
		} else if (leftBracket == rightBracket && c >="0" && c <= "9"){
			break;
		} else if (c == ")"){
			rightBracket++;
		}
	}
	return r.substring(0,i+1);
}





 function houjisuan{
	 let huo=[]
 }