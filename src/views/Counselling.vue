<template>
    <div id="body_box">
        <header class="header">
            <img src="../assets/Counsellingroom/img/24.png" class="img1">
        </header>
        <div class="main_box">
            <div class="left_box"></div>
            <div class="middle_box">
                <div class="content_card">
                    <div class="bar7">
                        <form>
                            <input v-model="keyWord"><button @click="search()" type="button">查询</button>
                        </form>
                    </div>
<!--                  问题列表-->
                    <div class="Counsellingitem" v-for="item in problemlist">
                        <div class="problem" @click="clickBtn(item.answer)">
                            <slot name="problem" >{{item.question}}</slot>
                        </div>
<!--                        答案弹框-->
                        <Dialog  v-if="isMask" v-bind:propsItem="propsItem"
                                 >
                        </Dialog>
<!--                        分割线-->
                        <hr style="FILTER: progid:DXImageTransform.Microsoft.Shadow(color:#987cb9,direction:145,strength:15)" width="100%" color=#987cb9 SIZE=1>
                    </div>
                </div>
            </div>
            <div class="right_box"></div>
        </div>
    </div>
</template>

<script>
    // import Counsellingitem from "../components/Tabbar/Counsellingroom/Counsellingitem";
    import {getprobleminfo} from "../network/api";
    //引入弹框组件
    import Dialog from "../components/Tabbar/Dialog/Dialog";

    export default {
        name: "Counselling",
         components:{
             Dialog,
        },
        data(){
            return{
                isMask:false,
                propsItem:{
                    isMask:true,
                },
                keyWord:'',
                problemlist:[],
            }
        },
        methods:{
            //点击事件 点击弹出答案弹框
            clickBtn(contents){
                this.propsItem.contents=contents;
                this.propsItem.isMask = this.isMask = true
            },
            //查询答案函数
            search(){
                if(typeof this.keyWord=="undefined"||this.keyWord==null||this.keyWord=="")
                {
                    alert("输入错误，请重新输入！")
                }else{
                    getprobleminfo({
                        keyWord:this.keyWord,
                    }).then(res => {
                        if(res.length)
                        {
                            this.problemlist = res;
                            console.log(this.problemlist)
                        }else {
                            alert("暂无相关问题回答")
                        }
                    });
                }

            },
        },
        mounted() {
        },
    }
</script>

<style scoped>
    #body_box{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .main_box{
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        background-color: rgb(245,245,245);
    }
    .header{
        background-color: white;
        height: 10vh;
        border-bottom: 1px solid rgb(220,220,220);

    }
    .Counsellingitem{
        width: 85%;
        margin-top: 20px;
        margin-left: 80px;
    }
    .problem{
        margin-top: 5px;
        margin-left: 5px;
    }
    .problem:hover{
        cursor:pointer;
    }
    .answer{
        text-align: center;
        height:80%;
        width: 80%;
        border: 1px solid red;
        margin-top: 5px;
        margin-right: 3px;
        float: right;
    }
    /*.footer{*/
    /*  background-color: hotpink;*/
    /*  border-top: 1px solid rgba(0,0,0,.3);*/
    /*  height: 70px;*/
    /*}*/
    .left_box{
        width: 15%;
        background: -webkit-linear-gradient( #ffa6a6, #5b277d);
        background: -o-linear-gradient( #ffa6a6, #5b277d);
        background: -moz-linear-gradient(  #ffa6a6, #5b277d);
        background: linear-gradient(  #ffa6a6, #5b277d);
    }
    .middle_box{
        flex-grow: 1;

    }
    .right_box{
        width: 15%;
        background: -webkit-linear-gradient( #ffa6a6, #5b277d);
        background: -o-linear-gradient( #ffa6a6, #5b277d);
        background: -moz-linear-gradient(  #ffa6a6, #5b277d);
        background: linear-gradient(  #ffa6a6, #5b277d);
    }
    .content_card{
        border: 1px solid #EBEEF5;
        background-color: #FFF;
        border-radius: 4px;
        box-shadow: 5px 5px 6px #888888;
        height: 100vh;
    }
    .img1{
        width: 100%;
        height: 100%;
        position: relative;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    .bar7 {
        background: -webkit-linear-gradient( #ffa6a6, #6b5e9b);
        background: -o-linear-gradient( #ffa6a6, #6b5e9b);
        background: -moz-linear-gradient( #ffa6a6, #6b5e9b);
        background: linear-gradient( #ffa6a6, #6b5e9b);
        border-radius: 10px;
        margin-left: 5px;
        margin-right: 5px;
    }
    .bar7 form {
        height: 100px;
    }
    .bar7 input {
        height: 20px;
        outline: none;
        width: 250px;
        position: relative;
        left: 50%;
        top: 41%;
        /* 设置元素的相对于自身的偏移度为负50%(也就是元素自身尺寸的一半)*/
        transform: translate(-50%, -50%);
        text-align: center;
        border-radius: 42px;
        border: 2px solid #324B4E;
        background: #F9F0DA;
        transition: .3s linear;
        border: none;
    }
    .bar7 input:focus {
        width: 300px;
    }
    .bar7 button{
        width: 60px;
        height: 30px;
        border: 0.2px solid #000000;
        position: relative;
        left: 42%;
        top: 46%;
        /* 设置元素的相对于自身的偏移度为负50%(也就是元素自身尺寸的一半)*/
        transform: translate(-50%, -50%);
        background: #cccccc;
        border-radius: 3px;
        right: 0;
        color: black;
        cursor: pointer;
    }
    /*.bar7 button:before{*/
    /*    content: "\f002";*/
    /*    font-family: FontAwesome;*/
    /*    color: #324b4e;*/
    /*}*/
    #tk{
        display: none;
        position: absolute;
        top: 35%;
        left: 20%;
        width: 58%;
        border: 5px solid lightblue;
        background-color: white;
        z-index: 1000;
        overflow: auto;
    }
</style>