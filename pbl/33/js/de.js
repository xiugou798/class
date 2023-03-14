var mima;
var zhanghao;

function denglu(){
	zhanghao = document.getElementById("name1").value;
	mima = document.getElementById("pass1").value;
	console.log(zhanghao);
	console.log(mima);
	if (mima == "admin" && zhanghao=="123"){
		window.location.href = "index.html";
	}
	else{
		window.location = "登录页面.html"
		mima="";
		zhanghao="";
	}
}