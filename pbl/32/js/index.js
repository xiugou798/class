
var str = "我是一个Cool boy希望和屏幕前各位做朋友!"

var word = document.querySelector(".word")

setTimeout(function () {
    for (let i = 0; i <= str.length; i++) {
        setTimeout(function () {
            word.innerHTML = str.substring(0, i)
        }, (i - 1) * 150);
    }
}, 4000)
// 第一版





// var start = dan.offsetWidth;
// a = 1


// function tiao(a) {

//     if (start < -dan.children[a].offsetWidth) {
//         start = dan.offsetWidth
//         dan.children[a].style.top = Math.random().toFixed(1) * dan.offsetHeight - dan.children[a].offsetHeight + "px";
//     } else {
//         start -= 5;
//     }
//     dan.children[a].style.left = start + "px";

// }
// 第一版 弹幕 不能做到弹幕分开

var dan = document.querySelector(".bg-white")
const txtdan = [{
    id: "",
    content: "不管结果怎么样 过程开心不就好了吗",

}, {
    id: "",
    content: "你看，这就是阳光下生命绽放的样子",

}, {
    id: "",
    content: "爱意随风起 风止意难平",
}, {
    id: "",
    content: "莫听穿林打叶声，何妨吟啸且徐行",
}, {
    id: "",
    content: "我们有选择拥有走向不凡的权利",
}, {
    id: "",
    content: "且将新火试新茶，诗酒趁年华",
}]

for (let i = 0; i < txtdan.length - 1; i++) {
    dan.appendChild(dan.children[0].cloneNode(true))

}

for (let i = 0; i < txtdan.length; i++) {
    dan.children[i].innerHTML = txtdan[i].content;
    dan.children[i].style.transform = "translateX(" + dan.offsetWidth + "px)"
    dan.children[i].style.top = Math.random().toFixed(1) * dan.offsetHeight - dan.children[i].offsetHeight + "px";
}


function tiao(i) {
    dan.children[i].style.transition = "10s"
    dan.children[i].style.transform = "translateX(" + -dan.children[0].offsetWidth + "px)"
}


var timer = setInterval(function () {
    tiao(parseInt(Math.random() * (txtdan.length + 1)))
}, 1000)



