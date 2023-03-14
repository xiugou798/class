window.onload=function(){
    var click_event=document.getElementsByClassName("click_event");
        for(var i in click_event){
            click_event[i].onmouseover=redback;
            click_event[i].onmouseout=noredback;
            // console.log(click_event[i])
        }
        function redback()
        {
            this.style.display="none";

        }
        function noredback(clear)
        {

            this.style.display="block";
            // clear.style.backgroundColor="white"

        }
        //获取相关信息
        //先建立数据
        var dataList=[{
            enterprise:200,
            position:120,
            skills:201,
            tasks:10,
            min_money:3000,
            max_money:6000
        },{
            enterprise:20,
            position:10,
            skills:1,
            tasks:1,
            min_money:3500,
            max_money:7800
        },{
            enterprise:210,
            position:112,
            skills:211,
            tasks:18,
            min_money:6700,
            max_money:12300
        },{
            enterprise:20,
            position:11,
            skills:21,
            tasks:18,
            min_money:9500,
            max_money:21300
        }]

        //
        // 获取button元素
        var button_1=document.getElementsByClassName("Button");
        // var button_2=document.getElementsByTagName("button")
        // console.log(button_2)
        
    
        // for (var  i = 0; i < button_1.length; i++) {
        //     button_1[i].addEventListener("click",dialog_button)
        //     // console.log(button_1[i])
            
        // }


        for (let i = 0; i < button_1.length; i++) {
            button_1[i].onclick=function(){
                var dialog_page=document.querySelector(".dialog_page")
                var close_bg=document.querySelector(".close_bg");
                dialog_page.style.display="block";
                close_bg.style.display="block";

                var tbody=document.querySelector("tbody");
                var tr=document.createElement("tr");
                var td=document.createElement("td");
                td.innerHTML=1;
                tr.appendChild(td);
                for (var key in dataList[i]) {
                    td=document.createElement("td")
                    td.innerHTML=dataList[i][key];
                    tr.appendChild(td)
                }
                tbody.appendChild(tr)

                // 关闭按钮
                var close_btn=document.querySelector(".close_btn");
                close_btn.addEventListener('click',function(){
                    dialog_page.style.display="none";
                    close_bg.style.display="none";
                    td.parentElement.remove()
                })
            }
            
        }
   }
        