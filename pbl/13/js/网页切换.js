var bigBox = document.getElementById('bigBox');
var span = bigBox.getElementsByTagName('span');
var con = bigBox.getElementsByClassName('con');

//默认显示第一个
con[0].style.display = "block";

var length = span.length; //获取标题长度
for (var i = 0; i < length; i++) {
    var a = span[i];
    a.index = i;  //每个标题对应的索引

    a.onclick = function () {   //点击清除标题样式
        for (var j = 0; j < length; j++) {
            span[j].className = '';
            con[j].style.display = 'none';  //隐藏所有内容

            this.className = 'cur'; //给当前标题添加cur样式
            i = this.index; //获取当前索引值
            con[i].style.display = 'block';  //设置样式
        }
    }
}

