const vm = new Vue({
    // 配置选项(option)
    // element: 指定用vue来管理页面中的哪个标签区域
    el: '#app',
    data: {
        formInline: {
            user: '',
            region: ''
        },
        total:16,//总共多少条数据
        value:'',
        leaderNum: 0,
        isCollapse: true,
        dialogVisible: false,
        dialog_value: true,
        modIndex: 0,
        inputData: {
            major: "",
            leader: "",
            courses_number: "",
            student_number: 0,
            Teacher_student_ratio: 0,
            fit_ratio: "0.80",
        },
        dataList: [{
            major: "计算机科学与技术",
            leader: "付浩然",
            courses_number: 50,
            student_number: 400,
            Teacher_student_ratio: 1/200,
            fit_ratio: 0.85
        }, {
            major: "软件工程",
            leader: "胥又文",
            courses_number:48 ,
            student_number: 410,
            Teacher_student_ratio: 1/10,
            fit_ratio: 0.75
        }, {
            major: "网络工程",
            leader: "王以荣",
            courses_number: 45,
            student_number: 124,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        }, {
            major: "信息安全",
            leader: "罗凯",
            courses_number: 78,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        },{
            major: "物联网工程",
            leader: "王旭",
            courses_number: 43,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        },{
            major: "电子与计算机工程",
            leader: "李海",
            courses_number: 50,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        },{
            major: "数据科学与大数据处理",
            leader: "周文武",
            courses_number: 43,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        },{
            major: "网络空间安全",
            leader: "陈红利",
            courses_number: 36,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        }],

        //表格B用原表格的数据
        dataListB: [{
            major: "计算机科学与技术",
            leader: "付浩然",
            courses_number: 50,
            student_number: 400,
            Teacher_student_ratio: 1/200,
            fit_ratio: 0.85
        }, {
            major: "软件工程",
            leader: "胥又文",
            courses_number:48 ,
            student_number: 410,
            Teacher_student_ratio: 1/10,
            fit_ratio: 0.75
        }, {
            major: "网络工程",
            leader: "王以荣",
            courses_number: 45,
            student_number: 124,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        }, {
            major: "信息安全",
            leader: "罗凯",
            courses_number: 78,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        },{
            major: "物联网工程",
            leader: "王旭",
            courses_number: 43,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        },{
            major: "电子与计算机工程",
            leader: "李海",
            courses_number: 50,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        },{
            major: "数据科学与大数据处理",
            leader: "周文武",
            courses_number: 43,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        },{
            major: "网络空间安全",
            leader: "陈红利",
            courses_number: 36,
            student_number: 20,
            Teacher_student_ratio: 123,
            fit_ratio: 0.78
        }]
    },
    methods: {
        del(i) {
            console.log(i);
            this.$confirm('确认删除？')
            .then(_ => {
                // done();
                this.dataList.splice(i, 1)
            })
            .catch(_ => {});
            // spilce 删除从i开始是删除1个元素
            

        },
        add() {
            if (!this.dialog_value) {
                this.dataList[this.modIndex] = {
                    major: this.inputData.major,
                    leader: this.inputData.leader,
                    courses_number: this.inputData.courses_number,
                    student_number: this.inputData.student_number,
                    Teacher_student_ratio: this.inputData.student_number / 1,
                    fit_ratio: this.inputData.fit_ratio,
                }
                this.dialogVisible = false
                return
            }
            // 添加数据
            this.dataList.push({
                major: this.inputData.major,
                leader: this.inputData.leader,
                courses_number: this.inputData.courses_number,
                student_number: this.inputData.student_number,
                Teacher_student_ratio: this.inputData.student_number / 1,
                fit_ratio: this.inputData.fit_ratio,
            })
            // 输入框清除
            this.inputData = {
                major: "",
                leader: "",
                courses_number: "",
                student_number: 0,
                fit_ratio: 0.8
            }
            // 关闭弹窗
            this.dialogVisible = false
        },
        mod(i) {
            // 记录修改的项
            this.modIndex = i
            // 记录这是修改
            this.dialog_value = false
            // 显示弹窗
            this.dialogVisible = true
            // 赋值输入框
            this.inputData = this.dataList[i]
        },
        handleClose() {
            this.dialogVisible = false
            this.dialog_value = true
            this.inputData = {
                major: "",
                leader: "",
                courses_number: "",
                student_number: 0,
                fit_ratio: 0.8
            }
        },
        onSubmit() {
            console.log('submit!');
        },
        //点击搜索按钮，启动模糊查询
        // /获取到筛选的值，并使用tolowercase():把字符串转换成小写，让模糊查询更加清晰
        search(){
            //表格用原表格的数据，即用于模糊查询的数据
            this.dataList=this.dataListB;
            
            let _search=this.value.toLowerCase();
            let newListData=[];//用于装入搜索出来数据的新数组
            if (_search) {
                //用filter来过滤数组
                this.dataList.filter((item) =>{
                    if (item.major.indexOf(_search)!==-1||item.leader.indexOf(_search)!==-1) {
                        newListData.push(item)
                    }
                    // console.log(item.leader.INDE)
                });
            }
            this.dataList=newListData;

        },
        reset(){
            this.dataList=this.dataListB;
        }


    },
});