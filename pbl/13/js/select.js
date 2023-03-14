/*基本思路：
        1、创建一个隐藏的option，添加到select的最后；
        2、每次选中的值都存入这个option，如果已经选中，当再次选择时，就会删掉；
        3、若已选择了值，就将隐藏的option的selected属性设置为true，以便获取多选内容
        */
let values = []; //存储选择的内容
let opts = []; //存储option标签
let select = document.getElementById("right_class");
for (let i = 0; i < select.length; i++) {
    opts.push(select.item(i));
}
//创建一个隐藏起来的option
let optionHide = document.createElement("option");
optionHide.hidden = true;
select.appendChild(optionHide);

select.addEventListener("input", function () {
    let value = this.options[this.selectedIndex].value; //获取当前选择的值
    this.options[this.selectedIndex].style = "background: pink"; //选中的option背景为粉色
    let index = values.indexOf(value); //判断是否被选择，返回-1说明没选择，否则已被选择
    if (index > -1) {
    //若已选择，就删除该选择，并且将option的背景恢复为未被选择的状态
    values.splice(index, 1);
    opts.filter(function (opt) {
        if (opt.value === value) {
        opt.style = "";
        }
    });
    } else {
    //没选择就将该值push到values中
    values.push(value);
    }
    this.options[this.length - 1].text = values.toString(); //将values数组中的数据转化成字符串的格式赋给隐藏的option

    if (values.length > 0) {
    //将隐藏的option的selected属性设置为true，这样select.value获取的值就是多选选中的值
    this.options[this.length - 1].selected = true;
    } else {
    this.options[0].selected = true;
    }
    console.log(select.value); // 打印多选的内容
});

