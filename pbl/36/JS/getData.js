var table_All = document.getElementById("table_All")
var pid = document.getElementById("pid");//拿到select对象
var pid1 = document.getElementById("pid1");//拿到select对象
l = [
    {
        "门类": "理学",
        "专业类": "计算机类",
        "专业名称": "专业名称11",
    },
    {
        "门类": "工学",
        "专业类": "材料类",
        "专业名称": "专业名称22",
    },
    {
        "门类": "工学",
        "专业类": "计算机类",
        "专业名称": "专业名称22",
    },
    {
        "门类": "文学",
        "专业类": "专业类33",
        "专业名称": "专业名称33",
    },
]
function getData(number) {
    table_All.innerHTML = `<tr style="color: rgb(105, 105, 105);">
        <th>门类</th>
        <th>专业类</th>
        <th>专业名称</th>
    </tr>`
    if (number == "") {
        for (let i = 0; i < l.length; i++) {
            table_All.innerHTML += `<tr">
                    <th>${l[i].门类}</th>
                    <th>${l[i].专业类}</th>
                    <th>${l[i].专业名称}</th>
                    </tr>`
        }
    } else {
        for (let i = 0; i < l.length; i++) {
            if (l[i].门类 == number) {
                table_All.innerHTML += `<tr">
                <th>${l[i].门类}</th>
                <th>${l[i].专业类}</th>
                <th>${l[i].专业名称}</th>
                </tr>`
            }
        }
    }

}
function getData1(number, number1) {
    table_All.innerHTML = `<tr style="color: rgb(105, 105, 105);">
        <th>门类</th>
        <th>专业类</th>
        <th>专业名称</th>
    </tr>`
    for (let i = 0; i < l.length; i++) {
        if (l[i].门类 == number && l[i].专业类 == number1) {
            table_All.innerHTML += `<tr">
                <th>${l[i].门类}</th>
                <th>${l[i].专业类}</th>
                <th>${l[i].专业名称}</th>
                </tr>`
        }
    }
}
pid.onchange = function () {
    var number = pid.options[pid.selectedIndex].text;//pid.selectedIndex ①拿到选中项的索引,标签没有value的情况下，直接打印text文本内容
    // change(number);
    getData(number)
    console.log(number);
    // alert(number)
    // data()
}
pid1.onchange = function () {
    var number = pid.options[pid.selectedIndex].text;//pid.selectedIndex ①拿到选中项的索引,标签没有value的情况下，直接打印text文本内容
    var number1 = pid1.options[pid1.selectedIndex].text;//pid.selectedIndex ①拿到选中项的索引,标签没有value的情况下，直接打印text文本内容
    // change(number);
    getData1(number, number1)
    console.log(number);
    // alert(number)
    // data()
}

getData("")
