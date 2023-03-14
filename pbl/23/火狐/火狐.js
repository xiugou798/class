const Input = document.querySelectorAll('input'),
      search = document.querySelector('.search'),
      searchMoreButton = document.querySelector('#searchMore'),
      searchMore = document.querySelector('.searchFrame'),
      ad = document.querySelectorAll('#ad'),
      concern_right = document.querySelector(".concern-right");

const adv = ["苹果新品发布会","苏宁易购时尚百货"];

var advIdx = 0;

function isInViewPortOfOne (el) {
    const offsetTop = el.offsetTop
    const scrollTop = document.documentElement.scrollTop
    const top = offsetTop - scrollTop
    return top >= 0
}

searchMoreButton.addEventListener('click',function(){
    searchMore.style.height = searchMore.style.height == '46px'?'362px':'46px';
})
Input[0].addEventListener('click',function(){
    if (searchMore.style.height == '46px')searchMore.style.height = '362px';
})


function init(){
    searchMore.style.height = '46px';
}

// 点击空白处触发
window.onclick = function(e){
    if (!e.path.some(item => item == searchMore) && searchMore.style.height != '46px')searchMore.style.height = '46px';
}

window.addEventListener('scroll',function(){
    let scrollTop = document.documentElement.scrollTop;
    let offsetTop = concern_right.offsetTop;
    if (search.style.position != 'fixed' && !isInViewPortOfOne(search)){
        search.style.position = 'fixed';
    }else if(search.style.position == 'fixed' && isInViewPortOfOne(search)){
        search.style.position = 'static';
    }
    // if (concern_right.style.position != 'fixed' && isInViewPortOfOne(concern_right)){
    //     concern_right.style.position = 'fixed';
    //     concern_right.style.top = '0';
    // }else if(concern_right.style.position == 'fixed' && isInViewPortOfOne(concern_right)){
    //     concern_right.style.position = 'absolute';
    //     concern_right.style.top = '187px';
    // }
    // 方案一
    if (scrollTop - offsetTop>0 || offsetTop>269){
        concern_right.style.top = scrollTop>269?scrollTop+'px':'269px';
    }
})
// 定时器
adInterval = setInterval(() => {
    ad[0].innerHTML = adv[(advIdx++)%adv.length];
},5000);

init();