
var bg = document.querySelector(".bg")


function nav(left, width) {
    bg.style.left = left + "px";
    bg.style.width = width + "px";
}


function navleave() {
    var index = document.querySelector(".page-index").value
    left = bg.parentNode.children[index].offsetLeft
    width = bg.parentNode.children[index].offsetWidth
    bg.style.left = left + "px";
    bg.style.width = width + "px";
}