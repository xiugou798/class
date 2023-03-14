// var bg = document.getElementsByClassName("bg")[0];


// function line(left, width) {
//     console.log(left,width)
//     bg.style.left = left + "px";
//     bg.style.width = width + "px";

// }
// 第一版 nav 导航栏 代码 没考虑到 回到原来位置

window.addEventListener("scroll", function () {
    var top = window.scrollY
    console.log(top)
    if (top >= 327) {
        document.getElementsByClassName("main-introduction-skill")[0].style.transform = "translateY(0px)"
    } else {
        document.getElementsByClassName("main-introduction-skill")[0].style.transform = "translateY(400px)"
    }
    if (top >= 1885) {
        document.getElementsByClassName("main-music-box")[0].style.transform = "translateY(0px)"
    } else {
        document.getElementsByClassName("main-music-box")[0].style.transform = "translateY(400px)"
    }
})

var index = 0;
var yeshu = 0;
var huan = true;
var word = document.getElementsByClassName("main-text-two")[0];
var txt = ["A Student?", "A Daydream?", "Who am I Liuuhanng"]
var r = setInterval(function () {


    if (huan) {
        word.innerHTML = txt[yeshu].slice(0, ++index);

    }
    else {
        word.innerHTML = txt[yeshu].slice(0, index--);

    }

    if (index == txt[yeshu].length + 3) {
        huan = false;
    }
    else if (index < 0) {
        index = 0;
        huan = true;
        yeshu++;
        if (yeshu >= txt.length) {
            clearInterval(r)
        }
    }


}, 200)


var muiscimg = document.querySelector('.main-music-one-img').children[0]
var musicname = document.querySelector(".main-music-two").children[0]
var musicwoker = document.querySelector(".main-music-two").children[1]
var musicword = document.querySelector(".main-music-two-word").children[0]
var musicpre = document.querySelector(".icon1")
var musicstr = document.querySelector(".icon2")
var musicnext = document.querySelector(".icon3")
var musicslider = document.querySelector(".musicslider")
var timers

var muiscs = [{
    id: "哈尔的移动城堡",
    imgpath: "./image/haerde.png",
    work: "久石让",
    path: "./music/人生旋转的木马.flac",
    word: "个人很喜欢的歌，舒缓"
}, {
    id: "你的名字 三叶(主题曲)",
    imgpath: "./image/你的名字.jpg",
    work: "野田洋次郎",
    path: "./music/三叶.mp3",
    word: "有些时候一个人听还是很不错"
}, {
    id: "Beyond The Memory",
    imgpath: "./image/name1.png",
    work: "July",
    path: "./music/Beyond The Memory - July.flac",
    word: "前奏就很难抵抗了"
},
]

var audio = document.querySelector(".audio")
var index1 = 0;

function slider() {
    musicslider.value = audio.currentTime * (100 / audio.duration);
}
function changeslider() {
    audio.currentTime = audio.duration * (musicslider.value / 100);

    if (audio.ended) {

    }
}

audio.addEventListener('ended', function () {
    musicstr.children[0].src = "./image/bofang.png";
    musicslider.value = 0;
})

setInterval(slider, 1000)

function reset_slider() {
    musicslider.value = 0;
}
function icon2() {
    if (audio.paused) {
        audio.play();//audio.play();// 这个就是播放  
        musicstr.children[0].src = "./image/zanting.png"
    } else {
        audio.pause();// 这个就是暂停
        musicstr.children[0].src = "./image/bofang.png"
    }
}

function icon3() {
    if (index1 >= muiscs.length - 1) {
        index1 = 0
    } else {
        index1++
    }
    reset_slider()
    musicstr.children[0].src = "./image/bofang.png"
    musicword.innerHTML = muiscs[index1].word;
    audio.src = muiscs[index1].path;
    muiscimg.src = muiscs[index1].imgpath;
    musicname.innerHTML = muiscs[index1].id;
    musicwoker.innerHTML = muiscs[index1].work;
}

function icon1() {
    if (index1 <= 0) {
        index1 = muiscs.length - 1
    } else {
        index1--
    }
    reset_slider()
    musicstr.children[0].src = "./image/bofang.png"
    musicword.innerHTML = muiscs[index1].word;
    audio.src = muiscs[index1].path;
    muiscimg.src = muiscs[index1].imgpath;
    musicname.innerHTML = muiscs[index1].id;
    musicwoker.innerHTML = muiscs[index1].work;
}


var game = document.querySelector(".main-game-two")
game.addEventListener('scroll', function () {
    var gametop = game.scrollTop
    console.log(gametop)

    if (gametop > 33) {
        game.children[0].children[0].style.transform = 'skew(-30deg)'
        game.children[0].children[1].style.transform = 'scale(1.1)'
        document.querySelector(".main-game-one").children[1].style = "font-size:20px"
        document.querySelector(".main-game-one").children[1].style.color = "black"
        game.children[0].children[2].style.transform = "rotateX(0deg)"
    } else {
        game.children[0].children[0].style.transform = 'skew(0)'
        game.children[0].children[1].style.transform = 'scale(1)'
        document.querySelector(".main-game-one").children[1].style = "font-size:30px"
        document.querySelector(".main-game-one").children[1].style.color = "#5F5C6D"
        game.children[0].children[2].style.transform = "rotateX(90deg)"
    }


    if (gametop > 355) {
        if (533 > gametop) {
            document.querySelector(".main-game-one").children[2].style = "font-size:30px"
            document.querySelector(".main-game-one").children[2].style.color = "#5F5C6D"
            game.children[1].children[2].style.transform = "rotateX(90deg)"
        } else {
            document.querySelector(".main-game-one").children[2].style = "font-size:20px"
            document.querySelector(".main-game-one").children[2].style.color = "black"
            game.children[1].children[2].style.transform = "rotateX(0deg)"
        }
    } else {
        document.querySelector(".main-game-one").children[2].style = "font-size:20px"
        document.querySelector(".main-game-one").children[2].style.color = "black"
        game.children[1].children[2].style.transform = "rotateX(90deg)"
    }


    if (gametop > 533) {
        document.querySelector(".main-game-one").children[3].style = "font-size:30px"
        game.children[1].children[0].style.transform = 'rotateX(-40deg) scale(0.5)'
        game.children[1].children[1].style.transform = 'scale(1.1)'
        document.querySelector(".main-game-one").children[3].style.color = "#5F5C6D"
    } else {
        game.children[1].children[0].style.transform = 'rotateX(0deg)'
        game.children[1].children[1].style.transform = 'scale(1)'
        document.querySelector(".main-game-one").children[3].style = "font-size:20px"
        document.querySelector(".main-game-one").children[3].style.color = "black"
    }
})


document.querySelector(".main-game-one").children[1].onmousedown = function () {
    game.scrollTo(0, 0)
}

document.querySelector(".main-game-one").children[2].onmousedown = function () {
    game.scrollTo(0, 550)
}

document.querySelector(".main-game-one").children[3].onmousedown = function () {
    game.scrollTo(0, 1000)
}







