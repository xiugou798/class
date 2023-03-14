$(function () {

    //删除功能
    var del = []
    $(document).on("click", ".delete", function () {
        del = []
        if (confirm("确定删除吗？")) {
            $(this).parents("tr").fadeOut(0)
        }
    })


    //增加功能
    var arrAdd = []
    $(document).on("click", ".addButton", function () {
        $(".addfade").fadeIn(0)
    })
    //addArray
    $(document).on("click", ".addButton_ok", function () {
        $(".addfade").fadeOut(0)
        arrAdd = []
        $('#addmodal').find("input").each(function () {
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
            '<td>' + '<button class="changeInfo">修改</button> <button class="delete">删除</button></td>' +
            '</tr>'
        $("tbody:last").append(str)
        $("tr:odd").css("background-color", "#fff");
        $("tr:even").css("background-color", "#eef1f8");
        //end


        $('#addmodal').find("input").val('')
    })

    $(document).on("click", ".addButton_no", function () {
        $(".addfade").fadeOut(0)
    })

    $(document).on("click", ".modal-header i", function () {
        $(".addfade").fadeOut(0)
    })





    //修改
    var arrMove = [];
    var _this = null;
    $(document).on("click", ".changeInfo", function () {
        arrMove = []
        _this = $(this).parents("tr")
        $(".movefade").fadeIn(0)
        $(this).parent().siblings().each(function () {
            arrMove.push($(this).next().text())
        })

        $(this).parents().find('.movemodal input').each(function (i) {
            $(this).val(arrMove[i])
        })


    })




    //修改保存
    $(document).on("click", ".updatabtn_ok", function () {
        arrMove = []
        $(this).parent().siblings().find('input').each(function () {
            arrMove.push($(this).val())
            console.log($(this))
        })
        console.log(arrMove)
        $(this).parents().find('.movemodal input').each(function (i) {
            $(this).val(arrMove[i + 1])
        })
        _this.find("td").next().each(function (i) {
            $(this).text(arrMove[i])
        })

        $(".movefade").fadeOut(0)
    })


    //修改取消
    $(document).on("click", ".updatabtn_no", function () {
        $(".movefade").fadeOut(0)
    })

    $(document).on("click", ".modal-header i", function () {
        $(".movefade").fadeOut(0)
    })

    // 点击按钮跳转页面
    $(document).on("click", ".canvas1", function () {
        window.location.href = "./canvas.html";
    })

    $(document).on("click", ".canvas2", function () {
        window.location.href = "./canvas2.html";
    })

    var obj = { name: 'Jim' };

    var str = JSON.stringify(obj);

    //存入

    sessionStorage.obj = str;

    //读取

    str = sessionStorage.obj;

    //重新转换为对象

    obj = JSON.parse(str);

})