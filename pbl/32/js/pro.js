
var video1 = document.querySelector(".mp4").children[0]

window.addEventListener("scroll", function () {
    var top = window.scrollY

    if (top >= 690) {
        video1.pause()
        video1.loop = false

    } else {
        video1.play()
        video1.loop = true
    }
})






const txt = [{
    id: "page1",
    page: "“超文本”（hypertext）是指连接单个网站内或多个网站间的网页的链接。链接是网络的一个基本方面。只要将内容上传到互联网，并将其与他人创建的页面相链接，你就成为了万维网的积极参与者。",
    add: "只要将内容上传到互联网，并将其与他人创建的页面相链接，你就成为了万维网的积极参与者。"
},
{
    id: "page2",
    page: "文本”（hypertext）是指连接单个网站内或多个网站间的网页的链接。链接是网络的一个基本方面。只要将内容上传到互联网，并将其与他人创建的页面相链接，你就成为了万维网的积极参与者。",
    add: "要将内容上传到互联网，并将其与他人创建的页面相链接，你就成为了万维网的积极参与者。"
},
{
    id: "page3",
    page: "是指连接单个网站内或多个网站间的网页的链接。链接是网络的一个基本方面。只要将内容上传到互联网，并将其与他人创建的页面相链接，你就成为了万维网的积极参与者。",
    add: "并将其与他人创建的页面相链接，你就成为了万维网的积极参与者。"
}]

var main = document.querySelector(".main-pro-text")
var main1 = document.querySelector(".main-pro")


for (let i = 0; i < txt.length - 1; i++) {
    one = main.cloneNode(true)
    main.parentNode.appendChild(one)
}

for (let i = 0; i < txt.length; i++) {
    main1.children[i].children[0].innerHTML = txt[i].id
    main1.children[i].children[1].innerHTML = txt[i].page
    main1.children[i].children[2].innerHTML = txt[i].add
}




