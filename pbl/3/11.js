$(function() {
	
	//删除功能
		var del = []
		$(document).on("click", ".table td input:checkbox", function() {
			del = []
			if (confirm("确定删除吗？")) {
				$(this).parents("tr").fadeOut(0)
			}
		})
	
	
	//增加功能
	var arrAdd = []
	$(document).on("click", ".addButton", function() {
		$(".addfade").fadeIn(0)
	})
	//addArray
	$(document).on("click", ".addButton_ok", function() {
		$(".addfade").fadeOut(0)
		arrAdd = []
		$('#addmodal').find("input").each(function() {
			arrAdd.push($(this).val())
		});
		var str = '<tr>' +
			'<td><input type="checkbox"></td>' +
			'<td class="stuScale">' + arrAdd[0] + '</td>' +
			'<td class="stuNums">' + arrAdd[1] + '</td>' +
			'<td class="stuName">' + arrAdd[2] + '</td>' +
			'<td class="stuAcademy">' + arrAdd[3] + '</td>' +
			'<td class="stuDu">' + arrAdd[4] + '</td>' +
			'<td class="stuNum">' + arrAdd[5] + '</td>' +
			'<td>' + '<a class="viewInf ">查看</a> <a class="updateInf ">修改</a></td>'+
			'</tr>'
		$("tbody:last").append(str)
		$("tr:odd").css("background-color", "#fff");
		$("tr:even").css("background-color", "#eef1f8");
		//end
		

		$('#addmodal').find("input").val('')
	})

	$(document).on("click", ".addButton_no", function() {
		$(".addfade").fadeOut(0)
	})

	$(document).on("click", ".modal-header i", function() {
		$(".addfade").fadeOut(0)
	})





	//修改
	var arrMove = [];
	var _this = null;
	$(document).on("click", ".xiugai", function() {
		arrMove = []
		_this = $(this).parents("tr")
		$(".movefade").fadeIn(0)
		$(this).parent().siblings().each(function() {
			arrMove.push($(this).next().text())
		})

		$(this).parents().find('.movemodal input').each(function(i) {
			$(this).val(arrMove[i])
		})


	})




	//修改保存
	$(document).on("click", ".updatabtn_ok", function() {
		arrMove = []
		$(this).parent().siblings().find('input').each(function() {
			arrMove.push($(this).val())
			console.log($(this))
		})
		console.log(arrMove)
		$(this).parents().find('.movemodal input').each(function(i) {
			$(this).val(arrMove[i + 1])
		})
		_this.find("td").next().each(function(i) {
			$(this).text(arrMove[i])
		})

		$(".movefade").fadeOut(0)
	})
	
	
	//修改取消
	$(document).on("click", ".updatabtn_no", function() {
		$(".movefade").fadeOut(0)
	})

	$(document).on("click", ".modal-header i", function() {
		$(".movefade").fadeOut(0)
	})


	//查看
	var arrView = [];
	var _thisView = null;
	$(document).on("click", ".viewInf", function() {

		arrMove = []
		_thisView = $(this).parents("tr")
		$(".viewfade").fadeIn(0)
		$(this).parent().siblings().each(function() {
			arrView.push($(this).next().text())
		})
		$(this).parents().find('#viewmodal input').each(function(i) {
			$(this).val(arrView[i]).attr("disabled", "disabled");
		})

	})

	//查看取消
	$(document).on("click", ".addButton_no", function() {
		$(".viewfade").fadeOut(0)
	})

	$(document).on("click", ".modal-header i", function() {
		$(".viewfade").fadeOut(0)
	})
})

//单数行和多数行背景色设置
$(document).ready(function() {
	$("tr:odd").css("background-color", "#fff");
	$("tr:even").css("background-color", "#eef1f8");
});

	
	const b8 = document.querySelector('.b8')
	const item1 = document.querySelector('.b8-item-1')
	const close = document.querySelector('.btn')
	item1.onclick = function(){
		b8.classList.remove('b8-h-50')
		b8.classList.add('b8-h-300')
	}
	close.onclick = function(){
		b8.classList.remove('b8-h-300')
		b8.classList.add('b8-h-50')
	}
	
	// 数据缓存
	window.sessionStorage.setItem('root',111)
	
	// 获取数据
	window.sessionStorage.getItem('root')
	