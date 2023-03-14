var data = "";
function v() {
	var t2 = document.getElementById('text2').value;
	var t1 = document.getElementById('text1').value;
	if (t2 != t1) {
		alert("两次输入不一致");
	}
	var yzm = document.getElementById('yzm').value;
	if (yzm != data) {
		alert("验证码输入错误");
	}else{
		window.location.href="dl.html";
	}
}
function getdata(n) {
	var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var yzm = "";
	for (var i = 0; i < n; i++) {
		var dl = Math.floor(Math.random() * 62);
		yzm = yzm + s.charAt(dl);
	}
	return yzm;
}


