const uls = document.querySelector('.left-box ul'),
      current_tag = document.querySelector('.current-tag'),
      handler = document.querySelector('.handler'),
      left_box = document.querySelector('.left-box'),
      right_main = document.getElementById('right-main');
    
const srcs = {
    "个人介绍": ``,
    "算法难题": function(){
        let tables = document.createElement("table");
        tables.innerHTML = `<tr>
                                <th>题号</th>
                                <th>题目名</th>
                            </tr>`;
        
        let keys = Object.keys(difficultTitle).sort();
        for(let i=0;i<keys.length;i++){
            let tr = document.createElement('tr');

            let td = document.createElement('td');
            td.innerHTML = keys[i];
            tr.append(td);

            td = document.createElement('td');
            let a = document.createElement('a');
            a.href = difficultTitle[keys[i]]['url'];
            a.innerHTML = difficultTitle[keys[i]]['name'];
            td.append(a);
            tr.append(td);

            tables.appendChild(tr);
        }
        right_main.append(tables);
    },
    "计算器": `<iframe src="./计算器/计算器.html" marginwidth=0 marginheight=0 width=100% height=100% frameborder="0"></iframe>
                <div style="width: 30px; height: 100%; position: absolute; right: -13px; background: #0f0f11;"></div>`,
    "小黄人": `<iframe src="./小黄人页面.html" marginwidth=0 marginheight=0 width=95% height=100% frameborder="0"></iframe>
                <div style="width: 30px; height: 100%;margin-right: 2.5%; position: absolute; top: 0; right: -13px; background: #0f0f11;"></div>`,
    "火狐主页": `<iframe src="./火狐/火狐.html" marginwidth=0 marginheight=0 width=95% height=100% frameborder="0"></iframe>
    <div style="width: 30px; height: 100%; position: absolute; top: 0;margin-right: 2%; right: -3px; background: #0f0f11;"></div>`,
    "培养方案系统": `<iframe src="./培养方案系统.html" marginwidth=0 marginheight=0 width=95% height=100% frameborder="0"></iframe>
    <div style="width: 30px; height: 100%; position: absolute; top: 0;margin-right: 2%; right: -9px; background: #0f0f11;"></div>`,
}

const difficultTitle = {
    864: {
        "name": "获取所有钥匙的最短路径",
        "url": "https://leetcode.cn/problems/shortest-path-to-get-all-keys/",
    },
    764: {
        "name": "最大加号标志",
        "url": "https://leetcode.cn/problems/largest-plus-sign/"
    },
    805: {
        "name": "数组的均值分割",
        "url": "https://leetcode.cn/problems/split-array-with-same-average/"
    },
    816: {
        "name": "模糊坐标",
        "url": "https://leetcode.cn/problems/ambiguous-coordinates/"
    },
    754: {
        "name": "到达终点数字",
        "url": "https://leetcode.cn/problems/reach-a-number/"
    },
    854: {
        "name": "相似度为 K 的字符串",
        "url": "https://leetcode.cn/problems/k-similar-strings/"
    },
    698: {
        "name": "划分为k个相等的子集",
        "url": "https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/"
    },
    862: {
        "name": "和至少为 K 的最短子数组",
        "url": "https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/"
    },
    934: {
        "name": "最短的桥",
        "url": "https://leetcode.cn/problems/shortest-bridge/"
    },
    779: {
        "name": "第K个语法符号",
        "url": "https://leetcode.cn/problems/k-th-symbol-in-grammar/"
    },
    801: {
        "name": "使序列递增的最小交换次数",
        "url": "https://leetcode.cn/problems/minimum-swaps-to-make-sequences-increasing/"
    },
    788: {
        "name": "旋转数字",
        "url": "https://leetcode.cn/problems/rotated-digits/"
    },
    1620: {
        "name": "网络信号最好的坐标",
        "url": "https://leetcode.cn/problems/coordinate-with-maximum-network-quality/"
    },
}

// 初始化
let left_title = ``
for (var k in srcs){
    left_title += `<li class="item">${k}</li>`;
}
uls.innerHTML = left_title;
var items = document.querySelectorAll('.item');
items[0].classList.add('left-box-active')

current_tag.innerHTML = items[0].innerHTML;


// 设置选中项的样式
// 每一个li设置点击事件
items.forEach((item)=>{
    item.addEventListener('click',function(){
        if (this.classList[1] == 'left-box-active') return;
        items.forEach((item)=>{
            item.classList.remove('left-box-active');
        })
        this.classList.add('left-box-active');
        let name = this.innerHTML;
        current_tag.innerHTML = name;
        right_main.innerHTML = ''
        if (typeof(srcs[name]) == "string") right_main.innerHTML = srcs[name];
        else if (typeof(srcs[name]) == "function"){
            srcs[name]();
        }
    });
})

handler.addEventListener('click',function(){
    if(!this.classList.contains('close')){
        left_box.style.width = 0;
        this.classList.add('close');
    }else{
        left_box.style.width = '250px';
        this.classList.remove('close');
    }
})
srcs['个人介绍'] = right_main.innerHTML;


var doms = {
    carouselList:document.querySelector('.carousel-list'),
    arrowLeft:document.querySelector('.arrow-left'),
    arrowRight:document.querySelector('.arrow-right'),
    indicators:document.querySelectorAll('.indicator span')
};

// 移动轮播图到第几个板块
var curIndex = 0;  // 记录目前是第几张
function moveTo(index){
    doms.carouselList.style.transform = 'translateX(-'+index+'00%)';
    doms.carouselList.style.transition = '.5s';
    // 去掉指示器的选中效果
    var active = document.querySelector('.indicator span.active');
    active.classList.remove('active');
    // 添加选中的指示器
    doms.indicators[index].classList.add('active');
    curIndex = index;
}

// doms.indicators.forEach(function(item,i){
//     item.onclick = function(){
//         moveTo(i);
//     };
// })

// 初始化
function init(){
    // 复制第一张图
    var first = doms.carouselList.firstElementChild.cloneNode(true);
    // 复制最后一张图
    var last =  doms.carouselList.lastElementChild.cloneNode(true);
    // 将第一张图放到末尾
    doms.carouselList.appendChild(first);
    // 将最后一张图放到第一张
    doms.carouselList.insertBefore(last,doms.carouselList.firstChild);
    // 设置最后一张复制图为绝对定位
    last.style.position = 'absolute';
    last.style.transform = 'translateX(-100%)';
}
init();

var count = doms.indicators.length; // 指示器的长度
// 左边翻转函数
function leftNext(){
    if(curIndex === 0){
        doms.carouselList.style.transform = 'translateX('+count+'00%)';
        doms.carouselList.style.transition = 'none';
        doms.carouselList.clientHeight; // 强制渲染
        moveTo(count - 1);
    }else{
        moveTo(curIndex - 1)
    }
}

// 右边翻转函数
function rightNext(){
    if(curIndex === count - 1){
        doms.carouselList.style.transform = 'translateX(100%)';
        doms.carouselList.style.transition = 'none';
        doms.carouselList.clientHeight; // 强制渲染
        moveTo(0);
    }else{
        moveTo(curIndex + 1)
    }
}
