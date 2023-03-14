function Add_message() {
	let information = document.getElementById("boss");
	information.className = "BOSS";
}
var box = document.querySelector(".list");
var btn = document.querySelector(".btn");
var inp = document.querySelectorAll("#boss input");
var arr = [];
var obj = true;

//增加
btn.onclick = function() {
	if (!obj) {
		console.log("编辑");

		var str = {
			profession: inp[0].value,
			teacher: inp[1].value,
			subject: inp[2].value,
			student: inp[3].value,
			teacher_student: inp[4].value,
			teaching: inp[5].value,
		}
		//trim()去除首位空格
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].value.trim() == "" || inp[i].value.trim() == null || inp[i].value.trim() == undefined) {
				alert("信息不完整，请填写完整！");
				return false;
			}
		}

		for (var i = 0; i < arr.length; i++) {
			if (arr[i].id == str.id) {
				arr.splice(i, 1, str)
			}
		}
		var trs = document.querySelectorAll("tr")
		for (var i = 1; i < trs.length; i++) {
			if (str.id == trs[i].children[6].children[0].value) {
				trs[i].children[1].innerHTML = str.profession;
				trs[i].children[2].innerHTML = str.teacher;
				trs[i].children[3].innerHTML = str.subject;
				trs[i].children[4].innerHTML = str.student;
				trs[i].children[5].innerHTML = str.teacher_student;
				trs[i].children[6].innerHTML = str.teaching;
				var edits = trs[i].querySelector(".edits");
				var saves = trs[i].querySelector(".saves");
				saves.style.display = "none";
				edits.style.display = "block";
			}
		}
		delNull();
	} else {
		var str = {
			profession: inp[0].value,
			teacher: inp[1].value,
			subject: inp[2].value,
			student: inp[3].value,
			teacher_student: inp[4].value,
			teaching: inp[5].value,
		}
		//trim()去除首位空格
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].value.trim() == "" || inp[i].value.trim() == null || inp[i].value.trim() == undefined) {
				alert("信息不完整，请填写完整！");
				return false;
			}
		}
		if (arr.length > 0) {

			for (var i = 0; i < arr.length; i++) {

				if (arr[i].id == str.id) {

					alert("专业已存在，请重新输入！");

					return false;

				}

			}

			arr.push(str);

		} else {

			arr.push(str);

		}
		var trs = document.createElement("tr");

		box.appendChild(trs);

		var xh = document.createElement("td");

		xh.innerHTML = arr.length;

		trs.appendChild(xh);

		for (var i = 0; i < inp.length; i++) {

			var tds = document.createElement("td");

			trs.appendChild(tds);

			tds.innerHTML = inp[i].value;

		}
		var del = document.createElement("td");

		del.innerHTML = "<button οnclick='dels(this)'>删除</button>"

		trs.appendChild(del);

		var edit = document.createElement("td");

		edit.innerHTML =
			"<button class='edits' οnclick='edits(this)'>编辑</button><button class='saves' style='display: none;' οnclick='save(this)'>保存</button>"
		trs.appendChild(edit);
		delNull();
	}
};

//编辑
function edits(e) {

	var fuIndex = e.parentNode.parentNode;

	for (var i = 1; i < 7; i++) {

		var inps = document.createElement("input");

		inps.setAttribute("type", "text");

		if (i == 6) {

			inps.setAttribute("disabled", "true");

		}

		inps.style.width = "20%";

		inps.value = fuIndex.children[i].innerHTML;

		var tds = fuIndex.children[i];

		fuIndex.children[i].innerHTML = "";

		tds.appendChild(inps);

		var edits = fuIndex.querySelector(".edits");

		edits.style.display = "none";

		var saves = fuIndex.querySelector(".saves");

		saves.style.display = "block";

	}

	var inpus = document.querySelectorAll("#boss input");

	for (var i = 0; i < inpus.length; i++) {

		inpus[i].value = fuIndex.children[i + 1].children[0].value;

		inpus[5].setAttribute("disabled", "true");

	}

	obj = false;

}
//保存
function save(e) {

	var fuIndex = e.parentNode.parentNode;

	var input = fuIndex.querySelectorAll("input");

	for (var i = 1; i <= input.length; i++) {

		fuIndex.children[i].innerHTML = input[i - 1].value;

		input[i - 1].remove();

	}

	for (var i = 0; i < arr.length; i++) {

		if (arr[i].id == input[5].value) {
			arr[i].profession = input[0].value;
			arr[i].teacher = input[1].value;
			arr[i].subject = input[2].value;
			arr[i].student = input[3].value;
			arr[i].teacher_student = input[4].value;
			arr[i].teaching = input[5].value;

		}

	}

	console.log(arr);

	var edits = fuIndex.querySelector(".edits");

	edits.style.display = "none";

	var saves = fuIndex.querySelector(".saves");

	saves.style.display = "none";

	edits.style.display = "block";



	delNull();

}
//删除
function dels(e) {

	var fuIndex = e.parentNode.parentNode;

	console.log(fuIndex);

	fuIndex.remove();
	for (var i = 0; i < arr.length; i++) {

		if (arr[i].id == fuIndex.children[4].innerHTML) {

			arr.splice(i, 1);

		}

	}
	fh();

}
//序号
function fh() {

	var trs = document.querySelectorAll("tr");

	console.log(trs);

	for (var i = 1; i < trs.length; i++) {

		trs[i].children[0].innerHTML = i;

	}

}

//清空
function delNull() {

	var inpus = document.querySelectorAll("#boss input");

	for (var i = 0; i < inpus.length; i++) {

		inpus[i].value = "";

		inpus[i].removeAttribute("disabled");

	}

}
//取消
function cancel1() {
	document.getElementById("boss").style.display = "none";
}
