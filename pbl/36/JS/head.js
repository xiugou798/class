$(document).ready(function(){
    $(".button div").mouseover(function(){
            $(this).css("background-color","white")
    })
    $(".button div").mousedown(function(){
            $(this).css("transform","scale(.9)")
    })
    $(".button div").mouseup(function(){
            $(this).css("background","none").css("transform","scale(1)")
    })
    $(".button div").mouseout(function(){
            $(this).css("background","none").css("transform","scale(1)")
    })
    $(".button div").mouseleave(function(){
            $(this).css("background","none").css("transform","scale(1)")
    })
    $(".button div").click(function(){
        // console.log(this);
        // var name = "./" + this.className.replace("button","") + ".html"
        // console.log(name);
        var i = "#iframe" + this.className.replace("button","")
        $(".right iframe").css("display","none");
        $(i).css("display","block")
    })
        
})