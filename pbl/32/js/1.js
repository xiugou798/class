var content = document.querySelector(".col").children[0].children[1]



// function copy1(copyContent) {
//     // 1. 创建并添加一个输入框元素(最后会销毁)
//     const textareaEle = document.createElement("textarea");
//     document.body.appendChild(textareaEle);
//     // 2. 将需要复制的文本传入输入框, 并调用 select 方法, 选中输入框中文本
//     textareaEle.value = copyContent;
//     textareaEle.select();
//     textareaEle.readOnly = 'readOnly';
//     // 3. 调用复制选中文本的方法
//     document.execCommand('copy');
//     // 4. 销毁输入框
//     document.body.removeChild(textareaEle);
// }


content.innerText = txt[0]


const txt = []