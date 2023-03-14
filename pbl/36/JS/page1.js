// 表格数据
var dataList = [{
    category: '工学',
    name: '计算机类',
    address: '计算机科学与技术',
    //   tag: '家'
}, {
    category: '工学',
    name: '工商管理类',
    address: '软件工程',
    //   tag: '公司'
}, {
    category: '理学',
    name: '数学类',
    address: '数学',
    //   tag: '家'
}, {
    category: '文学',
    name: '天文学类',
    address: '卫星探测',
    //   tag: '公司'
}, {
    category: '工学',
    name: '电子信息类',
    address: '计算机科学与技术',
    //   tag: '家'
}, {
    category: '文学',
    name: '中国语言文学',
    address: '软件工程',
    //   tag: '公司'
}]
var dataListB = [{
    category: '工学',
    name: '计算机类',
    address: '计算机科学与技术',
    //   tag: '家'
}, {
    category: '工学',
    name: '工商管理类',
    address: '软件工程',
    //   tag: '公司'
}, {
    category: '理学',
    name: '数学类',
    address: '数学',
    //   tag: '家'
}, {
    category: '文学',
    name: '天文学类',
    address: '卫星探测',
    //   tag: '公司'
}, {
    category: '工学',
    name: '电子信息类',
    address: '计算机科学与技术',
    //   tag: '家'
}, {
    category: '文学',
    name: '中国语言文学',
    address: '软件工程',
    //   tag: '公司'
}]
var tbody = document.querySelector("tbody");
for (var i = 0; i < dataList.length; i++) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = i + 1;
    tr.appendChild(td)
    for (var key in dataList[i]) {
        td = document.createElement("td")
        td.innerHTML = dataList[i][key];
        tr.appendChild(td);
    }
    tbody.appendChild(tr)
}
// 按钮样式
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove()
        }, 1000)
    })
})
// 第一个下拉筛选框的
var search_tr = document.querySelectorAll("tbody tr");
var search_data = []
for (var i = 0; i < search_tr.length; i++) {
    if (search_data.indexOf(search_tr[i].children[1].innerHTML) == -1) {
        search_data.push(search_tr[i].children[1].innerHTML)
    }
}
const select = document.querySelector(".select")
const options_list = document.querySelector(".options-list")
for (var key in search_data) {
    const opt = document.createElement("div");
    opt.setAttribute("class", "option");

    opt.innerHTML = search_data[key];
    options_list.appendChild(opt)
}
const options = document.querySelectorAll(".option")
//切换语言菜单得显示和隐藏
select.addEventListener("click", () => {
    options_list.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up")
})
//切换语言
// 定义全局的变量，接收数据，以便第二个筛选框数据的使用
var newSearch_data = [];
options.forEach((option) => {
    option.addEventListener("click", () => {
        select.querySelector("a").innerHTML = option.innerHTML;
        newSearch_data = []
        this.dataList.filter((item) => {
            if (item.category.indexOf(option.innerHTML) !== -1) {
                newSearch_data.push(item)
            }
        })
        var new_tbody = document.querySelector("tbody");
        while (new_tbody.firstChild) {
            new_tbody.removeChild(new_tbody.firstChild)
        }
        for (var i = 0; i < newSearch_data.length; i++) {
            var new_tr = document.createElement("tr");
            var new_td = document.createElement("td");
            new_td.innerHTML = i + 1;
            new_tr.appendChild(new_td)
            for (var key in newSearch_data[i]) {
                new_td = document.createElement("td")
                new_td.innerHTML = newSearch_data[i][key];
                new_tr.appendChild(new_td);
            }
            new_tbody.appendChild(new_tr)
        }
        options.forEach((option) => { option.classList.remove("selected") });
        options_list.classList.toggle("active")
        select.querySelector(".fa-angle-up").classList.toggle("fa-angle-up")
        // 点进来之后的第二个下拉选择框
        var options_list2 = document.querySelector(".options-list2");
        options_list2.innerHTML = "";
        for (var i = 0; i < newSearch_data.length; i++) {
            var option2 = document.createElement("div");
            option2.setAttribute("class", "option2");
            option2.innerHTML = newSearch_data[i].name;
            options_list2.appendChild(option2);
        }
        const options2 = document.querySelectorAll(".option2")
        options2.forEach((option) => {
            option.addEventListener("click", () => {
                options2.forEach((option) => { option.classList.remove("selected") });
                select2.querySelector("a").innerHTML = option.innerHTML;
                option.classList.add("selected");
                options_list2.classList.toggle("active");
                select2.querySelector(".fa-angle-up").classList.toggle("fa-angle-up");
                var new_tbody2 = document.querySelector("tbody");
                new_tbody2.innerHTML = "";
                var search_data2 = [];
                this.newSearch_data.filter((o) => {
                    if (o.name.indexOf(option.innerHTML) !== -1) {
                        search_data2.push(o)
                    }
                })
                for (var i = 0; i < search_data2.length; i++) {
                    var new_tr2 = document.createElement("tr");
                    var new_td2 = document.createElement("td");
                    new_td2.innerHTML = i + 1;
                    new_tr2.appendChild(new_td2);
                    for (var key in search_data2[i]) {
                        new_td2 = document.createElement("td");
                        new_td2.innerHTML = search_data2[i][key];
                        new_tr2.appendChild(new_td2);
                    }
                    new_tbody2.appendChild(new_tr2);
                }
            })
        })
    })
})
const select2 = document.querySelector(".select2")
const options_list2 = document.querySelector(".options-list2")
const options2 = document.querySelectorAll(".option2")
//切换语言菜单得显示和隐藏
select2.addEventListener("click", () => {

    if (options_list2.childElementCount != 0) {
        options_list2.classList.toggle("active");
        select2.querySelector(".fa-angle-down").classList.toggle("fa-angle-up")
    }
})
//切换语言
options2.forEach((option) => {
    option.addEventListener("click", () => {
        options2.forEach((option) => { option.classList.remove("selected") });
        select2.querySelector("a").innerHTML = option.innerHTML;
        option.classList.add("selected");
        options_list2.classList.toggle("active")
        select2.querySelector(".fa-angle-up").classList.toggle("fa-angle-up")
    })
})
var clear_option = document.querySelector(".clear_option");
clear_option.addEventListener('click', () => {
    // 清除表格中的数据，将其置为空，再重新遍历datalist数组，向tbody中添加子节点
    var clear_tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i < dataList.length; i++) {
        var clear_tr = document.createElement("tr");
        var clear_td = document.createElement("td");
        clear_td.innerHTML = i + 1;
        clear_tr.appendChild(clear_td)
        for (var key in dataList[i]) {
            clear_td = document.createElement("td")
            clear_td.innerHTML = dataList[i][key];
            clear_tr.appendChild(clear_td);
        }
        clear_tbody.appendChild(clear_tr)
    }
    // 清除筛选框option_list2中的值和select a中的值
    var select_a = document.querySelector('.select a');
    select_a.innerHTML = '门类';
    var select2_a = document.querySelector('.select2 a');
    select2_a.innerHTML = '专业类';
    for (var i = options_list2.childNodes.length - 1; i >= 0; i--) {
        var childNode = options_list2.childNodes[i];
        options_list2.removeChild(childNode)
    }
    console.log(options_list2.childNodes.length)
})