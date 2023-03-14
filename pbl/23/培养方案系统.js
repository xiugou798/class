const needLocal = ["statusTable"];
var data = {
    categories: { "工学": ["计算机类", "力学", "机械工程", "自动化", "电气工程", "测绘科学与技术"], "理学": ["物理学", "数学", "化学", "天文学", "地理学", "海洋科学", "生态学"], "历史学": ["考古学", "中国史", "世界史", "博物馆"], "哲学": ["哲学", "应用伦理"] },
    address: ['成都', "广州", "深圳", "北京", "上海", "杭州"],
    'CLASS': ['concernTableTitle', 'statisticsTableTitle', 'statusTableTitle'],
    'concernTableTitle': ['门类', '专业类', '专业名称'],
    'statisticsTableTitle': ['专业名', '企业', '岗位', '技能', '任务', '最低薪资', '最高薪资'],
    'statusTableTitle': ['专业名', '负责人', '课程数量', '学生数量', '师生比', '产教匹配度'],
    'concernTable': [['工学', '计算机类', '计算机科学与技术'], ['工学', '计算机类', '计算机科学与技术'], ['工学', '计算机类', '计算机科学与技术'], ['历史学', '考古学', '考古学'], ['哲学', '哲学', '哲学'], ['哲学', '应用伦理', '应用伦理']],
    'statisticsTable': [['计算机科学与技术', { 北京: '3K', 上海: 450, 广州: 400, 成都: 350, 深圳: 300, }, ['3k', "8K", 42, 35, 21, 5], [100, 86, 42, 35, 21, 5], 4500, 2000, 12000], ['软件工程', { 北京: 300, 上海: 440, 广州: 4460, 成都: 3510, 深圳: 3100, }, [461, 456, 78, 31, 456, 5], [763, 786, "1W", "5K", 5, 786], 1345, 423, 4534], ['网络工程', { 北京: 500, 上海: 450, 广州: 400, 成都: 350, 深圳: 300, }, [100, 86, 42, 35, 21, 5], [100, 86, 42, 35, 21, 5], 1345, 423, 4534], ['信息安全', { 北京: 500, 上海: 450, 广州: 400, 成都: 350, 深圳: 300, }, [100, 86, 42, 35, 21, 5], [100, 86, 42, 35, 21, 5], 1345, 423, 4534], ['物联网工程', { 北京: 500, 上海: 450, 广州: 400, 成都: 350, 深圳: 300, }, [100, 86, 42, 35, 21, 5], [100, 86, 42, 35, 21, 5], 1345, 423, 4534], ['数字媒体技术', { 北京: 500, 上海: 450, 广州: 400, 成都: 350, 深圳: 300, }, [100, 86, 42, 35, 21, 5], [100, 86, 42, 35, 21, 5], 1345, 423, 4534], ['智能科学与技术', { 北京: 500, 上海: 450, 广州: 400, 成都: 350, 深圳: 300, }, [100, 86, 42, 35, 21, 5], [100, 86, 42, 35, 21, 5], 1345, 423, 4534], ['电子与计算机工程', { 北京: 500, 上海: 450, 广州: 400, 成都: 350, 深圳: 300, }, [100, 86, 42, 35, 21, 5], [100, 86, 42, 35, 21, 5], 1345, 423, 4534]],
    'statusTable': [['计算机科学与技术', 300, 5000, 400, 4500, 2000], ['计算机科学与技术', 123, 46123, 13456, 1345, 423], ['计算机科学与技术', 123, 46123, 13456, 1345, 423], ['计算机科学与技术', 123, 46123, 13456, 1345, 423], ['计算机科学与技术', 123, 46123, 13456, 1345, 423], ['计算机科学与技术', 123, 46123, 13456, 1345, 423], ['计算机科学与技术', 123, 46123, 13456, 1345, 423]],
};
var operates = {
    tables: document.getElementsByTagName('table'),
    selects: (function(){
        const selects = document.querySelectorAll("select");

        function revise(i, innerHTML){
            selects[i].innerHTML = innerHTML
        }

        function selectOnchange(e){
            // 下拉选择框
            let name = e.name;
            let grade = e.value;
            // 搜索更新表格
            operates['selects'][name](grade);
        }

        function categories(grade){
            // 更新二级标签
            let options = '';
            for (let i = 0; i < data["categories"][grade].length; i++) {
                options += `<option value="${data["categories"][grade][i]}">${data["categories"][grade][i]}</option>`
            }
            selects[1].innerHTML = options;
            let trs = `
            <tr>
                <th>门类</th>
                <th>专业类</th>
                <th class="concernName">专业名称</th>
            </tr>`;
            for (let i = 0; i < data["concernTable"].length; i++) {
                if (data["concernTable"][i][0] == grade && data["concernTable"][i][1] == data["categories"][grade][0]) {
                    trs += `<tr n-data="${i}">`;
                    for (let j = 0; j < data["concernTable"][i].length; j++) {
                        trs += `<td>${data["concernTable"][i][j]}</td>`;
                    }
                    trs += '</tr>';
                }
            }
            operates.tables[0].innerHTML = trs;
        }

        function conSpecialized(grade){
            let trs = `
            <tr>
                <th>门类</th>
                <th>专业类</th>
                <th class="concernName">专业名称</th>
            </tr>`;
            for (let i = 0; i < data["concernTable"].length; i++) {
                if (data["concernTable"][i][1] == grade) {
                    trs += `<tr n-data="${i}">`;
                    for (let j = 0; j < data["concernTable"][i].length; j++) {
                        trs += `<td>${data["concernTable"][i][j]}</td>`;
                    }
                    trs += '</tr>';
                }
            }
            operates.tables[0].innerHTML = trs;
        }

        function onAddress(grade){}

        return {
            "revise": revise,
            "selectOnchange": selectOnchange,
            "categories": categories,
            "conSpecialized": conSpecialized,
            "onAddress": onAddress,
        }
    }()),
    Pop_upsOp: (function () {
        const Pop_ups = {
            body: document.querySelector('.Pop-upsBody'),
            main: document.querySelector('.Pop-ups'),
        };
        let curTitle = '';

        // 窗口最大化
        function maxWin() {
            Pop_ups["body"].style.width = document.body.scrollWidth + 'px';
            Pop_ups["body"].style.height = document.body.scrollHeight + 'px';
        }

        // 关闭窗口
        function hidWin() {
            Pop_ups["body"].style.width = 0;
            Pop_ups["body"].style.height = 0;
        }

        // 弹出新增数据窗口
        function addData(e) {
            Pop_ups['main'].innerHTML = '';
            maxWin();
            curTitle = e.parentElement.parentElement.nextElementSibling.getAttribute('id') + 'Title';
            let divs = ''
            // 绘制表单
            for (let i = 0; i < data[curTitle].length; i++) {
                divs += `<div class="input">
                    <div class="inputTitle">${data[curTitle][i]}</div>
                    <input type="text">
                </div>`
            }
            // 绘制按钮
            divs += `
            <div class="bottom">
                <button onclick="operates.Pop_upsOp.confirm(this)">确认</button>
                <button onclick="operates.Pop_upsOp.hidWin(this.parentElement.parentElement.parentElement)">取消</button>
            </div>`
            Pop_ups['main'].innerHTML = divs;
        }

        // 弹出图形数据
        function showFig(e) {
            Pop_ups['main'].innerHTML = `
                                        <div>${e.children[0].innerHTML}</div>
                                        <canvas id="fanChart"></canvas>
                                        <canvas id="histogram"></canvas>
                                        <canvas id="scatterPlot"></canvas>
                                        <canvas id="lineChart"></canvas>
                                        <div class="bottom">
                                            <button onclick="operates.Pop_upsOp.hidWin(this.parentElement.parentElement.parentElement)">返回</button>
                                        </div>`
            let sp = document.getElementById('scatterPlot').getContext('2d');
            let hg = document.getElementById('histogram').getContext('2d');
            let lc = document.getElementById('lineChart').getContext('2d');
            let fc = document.getElementById('fanChart').getContext('2d');
            new operates.CanvasOp(sp).scatterPlot(data['statisticsTable'][e.getAttribute('n-data')][3]);
            new operates.CanvasOp(hg).histogram(data['statisticsTable'][e.getAttribute('n-data')][2]);
            new operates.CanvasOp(lc).lineChart(data['statisticsTable'][e.getAttribute('n-data')][3]);
            new operates.CanvasOp(fc).fanChart(data['statisticsTable'][e.getAttribute('n-data')][1]);
            maxWin();
        }

        // 弹出详细数据
        function showData(e) {
            let divs = '';
            // 绘制表单
            for (let i = 0; i < data["statusTableTitle"].length; i++) {
                divs += `<div class="input">
                <div class="inputTitle">${data["statusTableTitle"][i]}</div>
                <input type="text" value="${data["statusTable"][e.getAttribute("n-data")][i]}">
            </div>`
            }
            // 绘制按钮
            divs += `
                    <div class="bottom">
                        <button onclick="operates.Pop_upsOp.revise('statusTable',${e.getAttribute("n-data")})">确认</button>
                        <button onclick="operates.Pop_upsOp.hidWin(this.parentElement.parentElement.parentElement)">取消</button>
                        <button onclick="operates.Pop_upsOp.delData('statusTable',${e.getAttribute("n-data")})">删除</button>
                    </div>`
            Pop_ups['main'].innerHTML = divs;
            maxWin()
        }

        // 确认
        function confirm(e) {
            let inputs = document.querySelectorAll('.Pop-ups .input>input')
            let tr = document.createElement('tr')
            let idx = data[curTitle.slice(0, -5)].length;
            tr.setAttribute('n-data', idx);
            let temp = []
            for (let m = 0; m < inputs.length; m++) {
                let td = document.createElement('td')
                td.append(document.createTextNode(inputs[m].value || null))
                tr.append(td)
                temp.push(inputs[m].value || null)
            }
            operates.tables[data['CLASS'].indexOf(curTitle)].appendChild(tr)
            data[curTitle.slice(0, -5)].push(temp)
            // tr.addEventListener('click', () => {
            //     let divs = '';
            //     // 绘制表单
            //     for (let i = 0; i < data["statusTableTitle"].length; i++) {
            //         divs += `<div class="input">
            //             <div class="inputTitle">${data["statusTableTitle"][i]}</div>
            //             <input type="text" value="${data["statusTable"][idx][i]}">
            //         </div>`
            //     }
            //     // 绘制按钮
            //     divs += `
            //     <div class="bottom">
            //         <button onclick="operates.Pop_upsOp.revise('statusTable',${idx})">确认</button>
            //         <button onclick="operates.Pop_upsOp.hidWin(this.parentElement.parentElement.parentElement)">取消</button>
            //         <button onclick="operates.Pop_upsOp.delData('statusTable',${idx})">删除</button>
            //     </div>`
            //     Pop_ups['main'].innerHTML = divs;
            //     maxWin()
            // })
            hidWin(e.parentElement.parentElement.parentElement)
        }

        // 删除
        function delData(title, idx) {
            let e = document.querySelector(`table[id="${title}"] tr[n-data="${idx}"]`);
            try {
                delete data[title][idx];
            } catch {
                return 0;
            }
            e.remove();
            hidWin();
            return 1;
        }

        // 修改
        function revise(title, idx) {
            let inputs = document.querySelectorAll('.Pop-ups .input>input');
            let e = document.querySelector(`table[id="${title}"] tr[n-data="${idx}"]`);
            for (let m = 0; m < inputs.length; m++) {
                data[title][idx][m] = inputs[m].value || null;
                e.children[m].innerHTML = inputs[m].value || null;
            }
            hidWin();
        }

        // 窗口变化
        function winOnResize() {
            if (Pop_ups["body"].style.width != '' && (Pop_ups["body"].style.width != '0px' || Pop_ups["body"].style.height != '0px')) {
                Pop_ups["body"].style.width = document.body.scrollWidth + 'px';
                Pop_ups["body"].style.height = document.body.scrollHeight + 'px';
            }
        }

        return {
            "maxWin": maxWin,
            "hidWin": hidWin,
            "addData": addData,
            "showFig": showFig,
            "showData": showData,
            "confirm": confirm,
            "delData": delData,
            "revise": revise,
            "winOnResize": winOnResize,
        }
    }()),
    CanvasOp: function (ctx) {
        this.ctx = ctx;
        this.canvasClear = () => ctx.width = ctx.width;
        // 散点图
        this.scatterPlot = data => {
            let M = max(data);
            ctx.font = "18px serif";
            let x = 30, y = 120 - parseNum(data[0]) / M * 100;
            for (let i = 0; i < data.length; i++) {
                ctx.fillStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
                ctx.arc(x, y, 4, 0, Math.PI * 2, true);
                ctx.fill();
                if (i != data.length - 1) {
                    x += 30;
                    y = 120 - parseNum(data[i + 1]) / M * 100;
                }
                ctx.stroke();
                ctx.beginPath();
            }
            ctx.fillStyle = "#000"
            ctx.fillText("任务", 230, 148);
            ctx.moveTo(20, 130);
            ctx.lineTo(280, 130);
            ctx.moveTo(20, 130);
            ctx.lineTo(20, 10);
            ctx.stroke();
            ctx.rotate(90 * Math.PI / 180);
            ctx.fillText("词频", 20, 0);
        }

        // 柱状图
        this.histogram = data => {
            const M = max(data)
            ctx.font = "18px serif";
            ctx.moveTo(0, 0);
            for (let i = 0; i < data.length; i++) {
                ctx.fillRect(25 + i * 20, 130, 10, -(20 + parseNum(data[i]) / M * 90))
            }
            ctx.fillText("技能", 230, 148);
            ctx.moveTo(20, 130);
            ctx.lineTo(280, 130);
            ctx.moveTo(20, 130);
            ctx.lineTo(20, 10);
            ctx.stroke();
            ctx.rotate(90 * Math.PI / 180);
            ctx.fillText("词频", 20, 0);
        }

        // 折线图
        this.lineChart = data => {
            let M = max(data);
            ctx.font = "18px serif";
            let x = 30, y = 120 - parseNum(data[0]) / M * 100;
            ctx.moveTo(x, y);
            for (let i = 0; i < data.length; i++) {
                ctx.fillStyle = '#000';
                ctx.arc(x, y, 2, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.moveTo(x, y);
                if (i != data.length - 1) {
                    x += 30;
                    y = 120 - parseNum(data[i + 1]) / M * 100;
                    ctx.lineTo(x, y)
                }
                ctx.stroke();
                ctx.beginPath();
            }
            ctx.fillText("任务", 230, 148);
            ctx.moveTo(20, 130);
            ctx.lineTo(280, 130);
            ctx.moveTo(20, 130);
            ctx.lineTo(20, 10);
            ctx.stroke();
            ctx.rotate(90 * Math.PI / 180);
            ctx.fillText("词频", 20, 0);
        }

        // 扇形图
        this.fanChart = data => {
            let sums = sum(data);
            let len = data.length || Object.values(data).length
            // 画饼
            let beginAnge = 0;
            let endAnge = 0;
            let colors = [];
            for (let i = 0; i < len; i++) {
                endAnge = endAnge + parseNum(data[i] || Object.values(data)[i]) / sums;
                let x;
                let y;
                let ange = beginAnge + (endAnge - beginAnge) / 2;
                x = 80 + 5 * Math.cos(2*ange*Math.PI);
                y = 75 + 5 * Math.sin(2*ange*Math.PI);
                ctx.beginPath();
                let color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
                colors.push(color);
                ctx.fillStyle = color;
                ctx.moveTo(x, y);
                ctx.arc(x, y, 65, 2 * Math.PI * beginAnge, 2 * Math.PI * endAnge, false);
                ctx.fill();
                ctx.lineTo(x, y)
                ctx.strokeStyle = "black";
                ctx.stroke();
                beginAnge = endAnge;
            }
            // 写字
            len = len > 6 ? 6 : len;
            endAnge = 0;
            ctx.font = "18px serif";
            for (let i = 0; i < len; i++) {
                endAnge += 20
                ctx.fillStyle = colors[i];
                ctx.fillRect(180, endAnge - 2, 10, -10)
                ctx.fillStyle = 'black';
                ctx.fillText(data[i] || Object.keys(data)[i], 200, endAnge)
                ctx.fillText(data[i] || Object.values(data)[i], 250, endAnge)
            }
        }
    }
}

var parseNum = data => Number(data.toString().replace(/[kK]/, '000').replace(/[wW]/, "0000"));
var sum = data => {
    let ans = 0, len = (data || 0) && (data.length || Object.keys(data).length);
    for (let i = 0; i < len; i++) {
        let n = parseNum(data[i] || Object.values(data)[i]);
        ans += n;
    }
    return ans;
}
var max = data => {
    let len = data.length || Object.keys(data).length, M = parseNum(data[0] || Object.values(data)[0]);
    for (let i = 1; i < len; i++) {
        let n = parseNum(data[i] || Object.values(data)[i]);
        M = Math.max(M, n);
    }
    return M;
}

// 初始化
window.addEventListener("DOMContentLoaded", (function () {
    let len = needLocal.length;
    for (let i=0; i<len; i++){
        let local = window.localStorage.getItem(needLocal[i]);
        if(local != "undefined" && local != "null"){
            data[needLocal[i]] = JSON.parse(local);
        }
    }
    // 下拉选择框
    let options = '';
    for (let i = 0; i < Object.keys(data["categories"]).length; i++) {
        options += `<option value="${Object.keys(data["categories"])[i]}">${Object.keys(data["categories"])[i]}</option>`;
    }
    operates.selects.revise(0, options);
    options = '';
    for (let i = 0; i < data["categories"][Object.keys(data["categories"])[0]].length; i++) {
        options += `<option value="${data["categories"][Object.keys(data["categories"])[0]][i]}">${data["categories"][Object.keys(data["categories"])[0]][i]}</option>`;
    }
    operates.selects.revise(1, options);
    options = '';
    for (let i = 0; i < data["address"].length; i++) {
        options += `<option value="${data["address"][i]}">${data["address"][i]}</option>`;
    }
    operates.selects.revise(2, options);

    // 制表
    for (let i = 0; i < data["concernTable"].length; i++) {  // 第一个表
        if (data["concernTable"][i][0] == Object.keys(data["categories"])[0] && data["concernTable"][i][1] == data["categories"][Object.keys(data["categories"])[0]][0]) {
            let tr = document.createElement('tr');
            tr.setAttribute('n-data', `${i}`);
            // 各个信息
            for (let j = 0; j < data["concernTable"][i].length; j++) {
                let td = document.createElement('td')
                td.append(document.createTextNode(typeof (data["concernTable"][i][j]) == "object" ? sum(data["concernTable"][i][j]) : data["concernTable"][i][j]))
                tr.append(td)
            }
            operates.tables[0].appendChild(tr)
        }
    }
    for (let i = 1; i < operates.tables.length; i++) {
        // 各行
        for (let j = 0; j < data[operates.tables[i].getAttribute('id')].length; j++) {
            let tr = document.createElement('tr')
            tr.setAttribute('n-data', `${j}`)
            // 各个信息
            for (let m = 0; m < data[operates.tables[i].getAttribute('id')][j].length; m++) {
                let td = document.createElement('td')
                td.append(document.createTextNode(typeof (data[operates.tables[i].getAttribute('id')][j][m]) == "object" ? sum(data[operates.tables[i].getAttribute('id')][j][m]) : data[operates.tables[i].getAttribute('id')][j][m]))
                tr.append(td)
            }
            operates.tables[i].appendChild(tr)
        }
    }

    // 数据展示
    // 事件委托
    operates.tables[1].addEventListener("click", function(e){
        let event = e || window.event;
        let target = event.target || event.srcElement;
        let parentElement = target.parentElement;
        parentElement.getAttribute('n-data')!=null && operates.Pop_upsOp.showFig(parentElement);
    },false);
    // for (let i = 1; i < operates.tables[1].childElementCount; i++) operates.tables[1].children[i].addEventListener('click', () => operates.Pop_upsOp.showFig(operates.tables[1].children[i]));

    // 详细信息
    // 事件委托
    operates.tables[2].addEventListener("click", function(e){
        let event = e || window.event;
        let target = event.target || event.srcElement;
        let parentElement = target.parentElement;
        parentElement.getAttribute('n-data')!=null && operates.Pop_upsOp.showData(parentElement);
    },false);
    // for (let i = 1; i < operates.tables[2].childElementCount; i++) operates.tables[2].children[i].addEventListener('click', () => operates.Pop_upsOp.showData(operates.tables[2].children[i]));
}()));

var timerId = null;
window.onresize = function () {
    //窗口尺寸变动后，重新排列
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
        operates.Pop_upsOp.winOnResize();

    }, 300);
}

window.onbeforeunload = () => {
    let len = needLocal.length;
    for (let key in data) {
        for (let i = 0; i < data[key].length; i++)if (data[key][i] == undefined) data[key].splice(i, 1);
    }
    for (let i=0; i<len;i++){
        window.localStorage.setItem(needLocal[i],JSON.stringify(data[needLocal[i]])); 
    }
}