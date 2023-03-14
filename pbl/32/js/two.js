function fund(a) {
    var b = document.getElementById("xianshi");
    b.value = b.value + a;
}
function houzhuijisuan() {
    //字符串转为字符数组
    // charAt(i) 取单个指
    // let 块级作用域 外面重新定义也可以
    let hou = document.getElementById("xianshi").value

    let num = [];
    let index = -1;

    let daan = 0;

    for (let i = 0; i < hou.length; i++) {
        if (hou.charAt(i) > '0') {
            num[++index] = hou.charAt(i);
        } else {
            //是符号
            let num1 = num[index--];
            let num2 = num[index--];

            if (hou.charAt(i) == "-") {
                daan = num2 - num1;
                num[++index] = daan;
            } else if (hou.charAt(i) == "+") {
                daan = parseInt(num2) + parseInt(num1);
                //强转int
                num[++index] = daan;
            } else if (hou.charAt(i) == "*") {
                daan = num2 * num1;
                num[++index] = daan;
            } else if (hou.charAt(i) == "/") {
                daan = num2 / num1;
                num[++index] = daan;
            }

        }
    }
    document.getElementById("xianshi").value = daan;
}

function houzhui() {
    let op = []
    let answer = []

}
