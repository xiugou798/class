window.onload = () => {
    const cz = [{
        id: 0,
        name: "唐银",
        introduction: "晓看天色暮看云，行也思君坐也思君",
    },
    {
        id: 1,
        name: "王钞",
        introduction: "一个全能的小伙子",
    },
    {
        id: 2,
        name: "谢林峰",
        introduction: "向钱看齐",
    },
    {
        id: 3,
        name: "赵露茜",
        introduction: "伟大的事业不是靠力气、速度和身体的敏捷完成的，而是靠性格、意志和知识的力量完成的。",
    },
    {
        id: 4,
        name: "杨寒波",
        introduction: "低头赶路，敬事如仪",
    },
    {
        id: 5,
        name: "扶庆明",
        introduction: "坐看风云起，笑映晚霞归",
    },
    {
        id: 6,
        name: "晋行飞",
        introduction: "智者一切求自己，愚者一切求他人。",
    },
    {
        id: 7,
        name: "张奕璇",
        introduction: "忍别人所不能忍的痛，吃别人所别人所不能吃的苦，是为了收获得不到的收获。",
    },
    {
        id: 8,
        name: "唐伟智",
        introduction: "环境不会改变，解决之道在于改变自己。",
    },
    {
        id: 9,
        name: "张超",
        introduction: "悟已往之不谏,知来者之可追",
    },
    {
        id: 10,
        name: "卓晋婷",
        introduction: "God helps those who helps themselves.",
    },
    {
        id: 11,
        name: "王骊弘",
        introduction: "车到山前必有路 船到桥头自然直",
    },
    {
        id: 12,
        name: "周宇琴",
        introduction: "先知三日，富贵十年。",
    },
    {
        id: 13,
        name: "白云",
        introduction: "两粒种子，一片森林。",
    },
    {
        id: 14,
        name: "徐浩然",
        introduction: "万事皆可期，欢愉且圣意",
    },
    {
        id: 15,
        name: "郑涵月",
        introduction: "与其临渊羡鱼，不如退而结网。",
    },
    {
        id: 16,
        name: "陈鹏",
        introduction: "一个人最大的破产是绝望，最大的资产是希望。",
    },
    {
        id: 17,
        name: "王加豪",
        introduction: "世上没有绝望的处境，只有对处境绝望的人。",
    },
    {
        id: 18,
        name: "杨森权",
        introduction: "靠山山会倒，靠水水会流，靠自己永远不倒。",
    },
    {
        id: 19,
        name: "秦菲",
        introduction: "满怀希望就会所向披靡",
    },
    {
        id: 20,
        name: "蔡旭",
        introduction: "生命之灯因热情而点燃，生命之舟因拼搏而前行。",
    },
    {
        id: 21,
        name: "成浩宇",
        introduction: "凡是过往，皆为序章",
    },
    {
        id: 22,
        name: "于竹潇",
        introduction: "无畏及时行乐，无悔所作所为",
    },
    {
        id: 23,
        name: "常育豪",
        introduction: "柳暗花明又一村",
    },
    {
        id: 24,
        name: "宋丹",
        introduction: "活在当下，及时行乐",
    },
    {
        id: 25,
        name: "赵文李",
        introduction: "得之我幸，失之我命",
    },
    {
        id: 26,
        name: "谷怡良",
        introduction: "积极者相信只有推动自己才能推动世界，只要推动自己就能推动世界。",
    },
    {
        id: 27,
        name: "张必江",
        introduction: "做那个挑战风车的傻子，鲁莽也比怯懦更接近勇敢",
    },
    {
        id: 28,
        name: "种德宝",
        introduction: "Never give up",
    },
    {
        id: 29,
        name: "蔡志鹏",
        introduction: "须知少年凌云志，曾许人间第一流",
    },
    {
        id: 30,
        name: "陈浩",
        introduction: "On this night,look at the stars",
    },
    {
        id: 31,
        name: "黎芸彰",
        introduction: "追风赶月莫停留，平芜尽处是青山",
    },
    {
        id: 32,
        name: "刘航",
        introduction: "实迷途而未远，觉今是而昨非",
    },
    {
        id: 33,
        name: "刘江萍",
        introduction: "吾将上下而求索",
    },
    {
        id: 34,
        name: "马超",
        introduction: "何必拘泥于人生种种",
    },
    {
        id: 35,
        name: "聂海川",
        introduction: "怠惰是贫穷的制造厂。",
    },
    {
        id: 36,
        name: "万阳春",
        introduction: "绊脚石乃是进身之阶。",
    },
    {
        id: 37,
        name: "殷其正",
        introduction: "人之所以能，是相信能。",
    },
    {
        id: 38,
        name: "张景渝",
        introduction: "不要只听有力量的话，要去做有力量的事",
    },
    {
        id: 39,
        name: "张雨星",
        introduction: "有志者，事竟成",
    },
    {
        id: 40,
        name: "阮巧",
        introduction: "干饭人，干饭魂",
    }]
    const classnum = cz.length;
    let idx = 0;
    let el = document.getElementsByClassName('mask')[0];
    let left = document.getElementById('left');
    let switchover = (function() {
        const card = document.getElementsByClassName("card");
        const p=document.getElementById('name');
        return () => {
            p.setAttribute("data-after",idx);//初始值
            card[0].children[0].src = `./img/head/${idx}.png`;
            card[0].children[1].textContent = cz[idx].name;
            card[0].children[2].textContent = cz[idx].introduction;
            card[1].children[1].children[0].children[1].textContent = parseInt(Math.random()*(10-1+1)+1,10);
            card[1].children[1].children[1].children[1].textContent = parseInt(Math.random()*(100-80+1)+80,10);
        }
    }());
    (function () {
        let cards = document.getElementsByClassName("cards")[0];
        let works = document.getElementsByClassName("works")[0];
        const frag = document.createDocumentFragment(); // 文档片段
        for (let i = 0; i < classnum; i++) {
            var div = document.createElement("div"),
                img = document.createElement("img");
            img.src = `./img/head/${i}.png`;
            img.classList.add(`${i}`);
            div.classList.add("card");
            div.appendChild(img);
            frag.appendChild(div);
        }
        cards.appendChild(frag);
        switchover();
        works.addEventListener("click", function (e) {
            let event = e || window.event;
            let target = event.target || event.srcElement;
            window.open(`./pbl/${idx}/${target.children[1].textContent}.html`);
        }, false);
        cards.addEventListener("click", function (e) {
            let event = e || window.event;
            let target = event.target || event.srcElement;
            idx = target.classList[0];
            switchover();
        }, false);
    }());
    // 箭头事件
    left.addEventListener("click", () => {
        el.scrollLeft -= 500
    })
    let right = document.getElementById('right');
    right.addEventListener("click", () => {
        el.scrollLeft += 500
    })
    // 底部卡片拖动
    el.onmousedown = () => {
        let gapX = event.clientX;
        let startX = el.scrollLeft;
        document.onmousemove = (e) => {
            let x = e.clientX - gapX;
            el.scrollLeft = startX - x;
            return false;
        };
        document.onmouseup = () => {
            console.log("松手");
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    el.addEventListener('mousewheel', (event) => {
        const detail = event.wheelDelta || event.detail;
        let step = 0;
        step = detail < 0 ? 100 : -100
        el.scrollLeft += step;
    }, false);

    function isFile(filespec){
        var fso=new ActiveXObject("Scripting.FileSystemObject");
        console.log(fso)
        return fso.FileExists(filespec);
    }
}