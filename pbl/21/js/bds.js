function hzbdsjs(val){
    var val=val
    var da=[]
    var x=""
    var y=""
    for (let i=0;i<val.length;i++){
        if("0"<val[i]){
            da.push(val[i])
        }
        else if(val[i]=="+"){
            x=da.pop()
            y=da.pop()
            var a=(y*10+x*10)/10
            da.push(a)
        }
        else if(val[i]=="-"){
            x=da.pop()
            y=da.pop()
            var b=(y-x)
            da.push(b)
        }
        else if(val[i]=="*"){
            x=da.pop()
            y=da.pop()
            var c=y*x
            da.push(c)
        }
        else if(val[i]=="/"){
            x=da.pop()
            y=da.pop()
            da.push(y/x)
        }
    }
    return da[0]
}