// var slider = document.getElementById("slider-ul")
// var left = 0
// var slider_left = document.getElementsByClassName("slider-left")[0]
// var slider_right = document.getElementsByClassName("slider-right")[0]
// var timers

// function run() {
//     if (left <= -2400) {
//         left = 0;
//     }
//     slider.style.marginLeft = left + "px";
//     var n = (left % 600 == 0) ? n = 4000 : n = 10;
//     left -= 10;
//     timers = setTimeout(run, n);

// }
// run()
// function imgchange(n) {
//     let lt = -(n * 600);
//     slider.style.marginLeft = lt + "px"
//     left = lt;
// }

// slider_left.onclick = function () {
//     let leftgo = Math.floor(-left / 600) - 1
//     if (leftgo == -1) {
//         leftgo = 3
//     }
//     imgchange(leftgo)
// }
// slider_right.onclick = function () {
//     let rightgo = Math.floor(-left / 600) + 1
//     if (rightgo == 4) {
//         rightgo = 0
//     }
//     imgchange(rightgo)
// }
// 第一版
// 这一版有点复杂计算 


var slider = document.getElementsByClassName("main-slider-img-ul")[0];
var slider_left = document.getElementsByClassName("main-slider-left")[0]
var slider_right = document.getElementsByClassName("main-slider-right")[0]
var index = 0

function positon() {
    slider.style.marginLeft = (index * -100) + "%"
}

function next() {
    if (index >= 3) {
        index = 0
    } else {
        index++
    }
}
function desc() {
    if (index < 0) {
        index = 2
    } else {
        index--
    }
}

function timer() {
    time = setInterval(function () {
        index++
        desc()
        next()
        positon()
    }, 3000)
}

slider_left.addEventListener('click', function () {
    desc()
    positon()
    clearInterval(time)
    timer()
})
slider_right.addEventListener('click', function () {
    next()
    positon()
    clearInterval(time)
    timer()
})

timer()











