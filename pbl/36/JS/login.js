

// 首先弄个闭包，安全一点
function main() {
    // 输入框的值
    var input_data = {
        name: "",
        password: "",
        // 教师||学生身份 0||1
        identity: "0"
    }
    // 存储所有账号   一般使用这样的方式存储用户信息，用一个标志来表明身份
    const userList = [
        {
            name: "1",
            password: "2",
            identity: "0"
        },
        {
            name: "3",
            password: "4",
            identity: "1"
        }
    ]

    // 获取输入框节点
    const name = document.getElementsByClassName("input")[0]
    const password = document.getElementsByClassName("input")[1]

    // 从缓存获取用户信息，并且将用户信息绑定到页面
    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'))
        name.value = user.name
        password.value = user.password
        input_data = user
    }


    // 添加一个事件监听器，监听输入框改变事件，修改input_data的值
    name.addEventListener("input", () => {
        input_data.name = name.value
        if (input_data.name != "") {
            document.getElementsByClassName('erro-name')[0].remove()
        }
    })
    password.addEventListener("input", () => {
        input_data.password = password.value
        if (input_data.password != "") {
            document.getElementsByClassName('erro-password')[0].remove()
        }
    })

    // 切换身份
    const handIdentity = () => {
        input_data.identity = input_data.identity == "0" ? "1" : "0"
        updateIdentity()
    }



    // 获取 切换id按钮节点
    const btn_one = document.querySelector(".btn.one");
    btn_one.addEventListener("click", () => {
        handIdentity()
    })

    // 更新身份信息
    const updateIdentity = () => {
        // 0就是教师
        if (input_data.identity == "0") {
            name.placeholder = "工号"
            btn_one.value = "教师登录"
            return
        }

        btn_one.value = "学生登录"
        name.placeholder = "学号"
    }

    updateIdentity()

    // 比较两个用户对象是否相等
    const compare = (a, b) => {
        return a.name == b.name && a.password == b.password && a.identity == b.identity
    }


    // 登录按钮
    var btn_login = document.querySelector(".btn.two");
    btn_login.addEventListener("click", () => {
        // 这儿也可以改成创建节点
        if (input_data.name == '' && document.getElementsByClassName('erro-name').length == 0) {
            let error = document.createElement("div");
            error.classList.add('error');
            error.classList.add('erro-name');
            error.innerHTML = ` <img src="./icon/WarningCircle.png" class="error_img" style="width: 20px;height: 20px;">
        <a href="" style="color: red;">请输入你的${input_data.identity == "0" ? "工号" : "学号"}</a>`;
            document.querySelector("form").insertBefore(error, document.querySelector(".input-div.pass"))
        }
        if (input_data.password == '' && document.getElementsByClassName('erro-password').length == 0) {
            let error1 = document.createElement("div");
            error1.classList.add('error');
            error1.classList.add('erro-password');
            error1.innerHTML = ` <img src="./icon/WarningCircle.png" class="error_img" style="width: 20px;height: 20px;">
            <a href="" style="color: red;">请输入你的密码</a>`;
            document.querySelector("form").insertBefore(error1, document.querySelector(".btn.one"))
        }

        if (input_data.name == '' || input_data.password == "") { return }


        // if (input_data.name == "") {
        //     document.querySelector(".error.one").style.display = 'flex'
        //     return
        // } else {
        //     document.querySelector(".error.one").style.display = 'none'
        // }
        // if (input_data.password == "") {
        //     document.querySelector(".error.two").style.display = 'flex'
        //     return
        // } else {
        //     document.querySelector(".error.two").style.display = 'none'
        // }


        // 登录验证，通过遍历数组，然后去依次对比元素对象中的值，如果身份和账号密码都匹配，就成功
        const res = userList.find((e, i) => {
            if (compare(e, input_data)) { return e }
        })
        // 对返回的结果进行空判，如果不为空就登录成功
        if (res) {
            Login()
            // 将用户登录数据存缓存
            localStorage.setItem('user', JSON.stringify(input_data))
        } else {
            dialog()
        }
    })

    // 登录
    const Login = () => {
        window.location.href = './主页.html'
    }


    // 错误弹窗提示
    const dialog = () => {
        // 这儿其实可以改成现创建节点
        // 通过document.createElement('div')创建一个dom节点，然后将dom节点的class设置成弹窗的样式
        // 最后点击按钮的时候只需要将节点删除即可
        // 好处：让页面中的元素结构更加简洁，避免浏览器渲染多余的dom元素
        const error_background = document.createElement('div')
        const error_dialog_page = document.createElement('div')
        error_background.className = "error_background"
        error_dialog_page.className = "error_dialog_page"
        error_dialog_page.innerHTML = `
       <h3>登录失败</h3>
       <p>账号或密码错误，请重新输入</p>
       <button onclick="document.getElementsByClassName('error_dialog_page')[0].remove()
       document.getElementsByClassName('error_background')[0].remove()">确定</button>
       `
        document.querySelector('body').appendChild(error_background)
        document.querySelector('body').appendChild(error_dialog_page)
    }




    // var input_data = [{
    //     job_number: '工号',
    //     student_number: '学号'
    // }]
    // var input_value = document.getElementsByClassName("input");
    // var user = JSON.parse(localStorage.getItem('user') || '{"name":"","password":""}')
    // input_value[0].value = user.name
    // input_value[1].value = user.password
    // var student_account_password = [{ '2021402030202': 'boboSL888.', '2021402030204': 'zhouzhou666..', '2021402030201': 'baiyun..' }]
    // var teacher_forma = [{ '0123456': '123456', 'abc123': '123456', "1": "1" }];
    // var btn_one = document.querySelector(".btn.one");
    // btn_one.value = identity
    // const handId = () => {
    //     if (btn_one.value == "教师登录") {
    //         input_value[0].placeholder = input_data[0]['student_number'];
    //         btn_one.value = '学生登录'
    //         localStorage.setItem("identity", "学生登录")
    //     } else {
    //         input_value[0].placeholder = input_data[0]['job_number'];
    //         btn_one.value = '教师登录'
    //         localStorage.setItem("identity", "教师登录")
    //     }
    // }
    // input_value[0].placeholder = identity == "教师登录" ? input_data[0]['job_number'] : input_data[0]['student_number'];
    // btn_one.addEventListener('click', () => {
    //     handId()
    // })
    // var btn_two = document.querySelector(".btn.two");

    // var input_true = []
    // // 登录按钮点击
    // btn_two.addEventListener('click', () => {
    //     var error_background = document.querySelector('.error_background');
    //     var error_dialog_page = document.querySelector('.error_dialog_page');

    //     var errors = document.querySelectorAll(".error");
    //     // 这儿是查找节点
    //     var input_text = document.getElementsByClassName("input");
    //     for (var i = 0; i < input_value.length; i++) {
    //         if (input_value[i].value == '') {
    //             errors[i].style.display = 'flex';
    //             input_true.push(i)
    //         }
    //     }

    //     if (teacher_forma.indexOf(input_value[0].value)) {
    //         if (input_value[1].value == teacher_forma[0][input_value[0].value]) {
    //             alert('登录成功！');
    //             localStorage.setItem("user", JSON.stringify({ name: input_value[0].value, password: input_value[1].value }))
    //             localStorage.setItem("identity", btn_one.value)

    //             setTimeout(jumurl, 300);
    //         } else {
    //             error_background.style.display = 'block';
    //             error_dialog_page.style.display = 'grid';
    //         }
    //     }
    //     else {
    //         error_background.style.display = 'block';
    //         error_dialog_page.style.display = 'grid';
    //     }

    // })
    // function jumurl() {
    //     window.location.href = '主页.html';
    // }

    // var close_btn = document.querySelector('.close_btn');
    // close_btn.addEventListener('click', () => {
    //     var error_background = document.querySelector('.error_background');
    //     var error_dialog_page = document.querySelector('.error_dialog_page');
    //     error_background.style.display = 'none';
    //     error_dialog_page.style.display = 'none';
    // })

    // var input_value = document.querySelectorAll(".input");
    // input_value.forEach(element => {
    //     element.onfocus = function () {
    //         var errors = document.querySelectorAll(".error")
    //         for (var i = 0; i < input_true.length; i++) {
    //             errors[input_true[i]].style.display = 'none'

    //         }
    //     };
    // });


}

window.onload = main


// window.onload = function () {
//     // localStorage.getItem  从缓存中获取数据,需要传一个字符串，就是键名
//     // 如果获取不到就会返回 null 所以这儿用一个 ||
//     // null || ""   这个||如果前面为null就会返回为后面的值
//     var identity = localStorage.getItem("identity") || "教师登录"
//     var input_data = [{
//         job_number: '工号',
//         student_number: '学号'
//     }]
//     // 这儿是通过类名获取节点,返回一个数组，哪怕没获取到也是返回一个数组
//     var input_value = document.getElementsByClassName("input");
//     // JSON.parse  是将一个字符串转化为对象
//     // JSON.stringfy  是将一个对象转化为字符串
//     // 因为那个地方不能存对象，所以需要存进去的时候转化为字符串，取出来的时候转化为对象
//     var user = JSON.parse(localStorage.getItem('user') || '{"name":"","password":""}')
//     input_value[0].value = user.name
//     input_value[1].value = user.password
//     var student_account_password = [{ '2021402030202': 'boboSL888.', '2021402030204': 'zhouzhou666..', '2021402030201': 'baiyun..' }]
//     var teacher_forma = [{ '0123456': '123456', 'abc123': '123456', "1": "1" }];
//     var btn_one = document.querySelector(".btn.one");
//     btn_one.value = identity
//     const handId = () => {
//         if (btn_one.value == "教师登录") {
//             input_value[0].placeholder = input_data[0]['student_number'];
//             btn_one.value = '学生登录'
//             localStorage.setItem("identity", "学生登录")
//         } else {
//             input_value[0].placeholder = input_data[0]['job_number'];
//             btn_one.value = '教师登录'
//             localStorage.setItem("identity", "教师登录")
//         }
//     }
//     input_value[0].placeholder = identity == "教师登录" ? input_data[0]['job_number'] : input_data[0]['student_number'];
//     btn_one.addEventListener('click', () => {
//         handId()
//         // alert("密码错误")
//     })
//     // 点击第二个登录按钮，获取输入框中的值
//     var btn_two = document.querySelector(".btn.two");

//     var input_true = []
//     // 登录按钮点击
//     btn_two.addEventListener('click', () => {
//         var error_background = document.querySelector('.error_background');
//         var error_dialog_page = document.querySelector('.error_dialog_page');

//         var errors = document.querySelectorAll(".error");
//         // 这儿是查找节点
//         var input_text = document.getElementsByClassName("input");
//         for (var i = 0; i < input_value.length; i++) {
//             if (input_value[i].value == '') {
//                 errors[i].style.display = 'flex';
//                 input_true.push(i)
//             }
//         }
//         // if (input_text[0].placeholder == '学号') {
//         //     for (var key in student_account_password) {
//         //         console.log(input_text[0].placeholder);
//         //         if (student_account_password.indexOf(input_value[0].value)) {
//         //             if (input_value[1].value == student_account_password[0][input_value[0].value]) {
//         //                 alert('登录成功！');
//         //                 window.location.href = "主页.html";
//         //             } else {
//         //                 error_background.style.display = 'block';
//         //                 error_dialog_page.style.display = 'grid';
//         //             }
//         //
//         //         }
//         //         else {
//         //             error_background.style.display = 'block';
//         //             error_dialog_page.style.display = 'grid';
//         //         }
//         //     }
//         // } else {
//         if (teacher_forma.indexOf(input_value[0].value)) {
//             if (input_value[1].value == teacher_forma[0][input_value[0].value]) {
//                 alert('登录成功！');
//                 localStorage.setItem("user", JSON.stringify({ name: input_value[0].value, password: input_value[1].value }))
//                 localStorage.setItem("identity", btn_one.value)
//                 // window.location.href="主页.html";
//                 // jumurl()
//                 setTimeout(jumurl, 300);
//             } else {
//                 error_background.style.display = 'block';
//                 error_dialog_page.style.display = 'grid';
//             }
//         }
//         else {
//             error_background.style.display = 'block';
//             error_dialog_page.style.display = 'grid';
//         }
//         // }

//         // console.log(input_text.placeholder)

//     })
//     function jumurl() {
//         window.location.href = '主页.html';
//     }

//     var close_btn = document.querySelector('.close_btn');
//     close_btn.addEventListener('click', () => {
//         var error_background = document.querySelector('.error_background');
//         var error_dialog_page = document.querySelector('.error_dialog_page');
//         error_background.style.display = 'none';
//         error_dialog_page.style.display = 'none';
//     })

//     var input_value = document.querySelectorAll(".input");
//     input_value.forEach(element => {
//         element.onfocus = function () {
//             var errors = document.querySelectorAll(".error")
//             for (var i = 0; i < input_true.length; i++) {
//                 errors[input_true[i]].style.display = 'none'

//             }
//         };
//     });

// }
