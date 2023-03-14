var footer = document.querySelector(".footer")

function randomColor() {

    return "rgb(" + (parseInt(Math.random() * 255)) + "," + (parseInt(Math.random() * 255)) + "," + (parseInt(Math
        .random() * 255)) + ")";

}


footer.onmousedown = function (event) {
    txt = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"]

    var tan = document.createElement("p")
    tan.innerHTML = txt[(~~(Math.random() * (txt.length)))]
    console.log()
    document.body.appendChild(tan)

    var fonts = 30,
        x = event.clientX,
        y = event.clientY,
        rgb = randomColor(),
        opacity = 1,
        s = 1.2,
        tim = 1

    var timer = setInterval(function () {
        tan.style.cssText = "font-size:" + fonts + ";cursor: default;position: fixed;color:" +
            rgb + ";left:" + x + "px;top:" + y + "px;opacity:" + opacity + ";transform:scale(" +
            s + ");";

        if (tim <= 0) {
            clearInterval(timer)
            document.body.removeChild(tan);
        } else {
            y--;
            tim -= 0.016;
            s += 0.002;
        }
    }, 15)


}

