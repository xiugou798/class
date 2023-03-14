// 栈的实现
class Stack{
    // 初始化
    constructor(){               
        this.dataStore = [];
        this.count = 0;
    }
    // 进栈
    push(element) {
        this.dataStore[this.count] = element;
        this.count++;
    }
    // 出栈
    pop(){
        this.count--;
        let element = this.dataStore[this.count];
        delete this.dataStore[this.count];
        return element;
    }
    //判断栈为空
    isempty(){
        if (this.count==0){
            return true
        }
        else{
            return false
        }
    }
    //栈顶
    top(){
        return this.dataStore[this.count-1]
    }  
    //遍历栈
    show(x){
        return this.dataStore[x];
    }
    length(){
        return this.count;
    }             
}
//判断优先级
function priority(z){
        if (z=='*'||z=='/'){
            return 2
        }
        if (z=='+'||z=='-'){
            return 1
        }
    }            

// 设置内容显示
var content = ' ';//显示框里的内容
var hou = new Stack()//后缀表达式栈


//输入函数
function getmun(){
    // var n =event.currentTarget;
    // console.log(event.target.innerHTML);
    content=content+event.target.innerHTML;
    document.getElementById('show').innerHTML=content;
}

//计算函数
function getanswer(){
    let x = answer()
    content = x.show(0);
    document.getElementById('show').innerText=content;
}

//得到后缀表达式
function getSuffix(){
    let notation = new Stack();//后缀表达式符号栈
    var n =document.getElementById('show').innerHTML;
    for(var i=0;i<n.length;i++){
        item = n[i];
        //当前元素是数字
        if (0<=item<10){
            hou.push(item)
        }
        //右括号时判断
        else if (notation.top()==')'){
                while(notation.top()!='('){
                    m = notation.pop()
                    hou.push(item)
                }
                notation.pop()
            }
        //非数字时判断
        else{
            //为空时或为“（”直接进
            if (notation.isempty||notation.top()=='('||priority(item)>priority(notation.top())){
                notation.push(item)
            } 
            else{
                while(priority(item)<=priority(notation.top())){
                    hou.push(notation.pop())
                }
                notation.push(item)
            }
        }
    }
    while (notation.isempty==false){
        hou.push(notation.pop())
    }
    return hou
}


// 计算后缀表达式
function answer(){
    var ans = getSuffix();
    for (let i=0;i<hou.length;i++){
        x = hou.show(i)
        if (0<=x<10){
            ans.push(x)
        }
        else{
            let num2 = parseInt(ans.pop())
            let num1 = parseInt(ans.pop())
            console.log(num1,num2)
            if (x=='+'){
                ans.push(num1+num2); 
            }
            else if (x=='-'){
                ans.push(num1-num2); 
            }
            else if (x=='*'){
                ans.push(num1*num2); 
            }
            else if (x=='/'){
                ans.push(num1/num2); 
            }
        }                
    }
    return ans;
}