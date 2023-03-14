
function f1(){
    var x=3
    var y=2
    var z=1
    switch(x,y,z){
        case x==y==z:
        case x>y>z:alert(x,y,z);
        break;
        case x>z>y:alert(x,z,y);
        break
        case y>x>z:alert(y,x,z);
        break;
        case y>z>x:alert(y,z,x);
        break
        case z>x>y:alert(z,x,y);
        break;
        case z>y>x:alert(z,y,x);
        break
    }
}
