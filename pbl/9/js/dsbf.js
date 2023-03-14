var ds = document.getElementsByClassName("dsbf")
for(var i=0;i<ds.length;i++){
    ds[i].onclick = function(){
        var xs = document.getElementById("ds_xs")
        xs.className = "show"
        var a2 = document.getElementById("xgcy")
        a2.onclick = function(){
            var xs2 = document.getElementById("ds_xs2")
            xs2.className = "show"
            return false
        }
    }
}


