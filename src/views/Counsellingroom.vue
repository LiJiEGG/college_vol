<template>
    <div id="body_box">
        <header class="header"> <img src="../assets/Counsellingroom/img/5.jpg" class="img1"></header>
        <div class="main_box">
            <div class="left_box"></div>
            <div class="middle_box">
                <div class="content_card">
                    <div class="content_card_title"><h1>2022报考咨询</h1></div>
                    <Counsellingroomitem>
                        <div slot="slot_img" class="content_card_img">
                                <img src="../assets/Counsellingroom/img/1.png" class="img_1" @click="Jump()">
                            </div>
                        <div slot="slot_text" class="content_card_text">
                            <p>
                                山东省教育厅对于在报考时常遇到的百种问题给出了合理的建议，有助于清楚地了解报考时的注意事项，输入关键字进行搜索。
                            </p>
                        </div>
                    </Counsellingroomitem>
                    <Counsellingroomitem>
                        <div slot="slot_img" class="content_card_img" @click="click_a()">
                            <img src="../assets/Counsellingroom/img/2.png" class="img_1">
                        </div>
                        <div slot="slot_text" class="content_card_text">
                            <p>
                                对于自己的成绩是否达到目标大学理想专业的录取分数线以及按照"冲、稳、保"策略对应的主打学校，为自身定制完备的报考计划。
                            </p>
                        </div>
                    </Counsellingroomitem>
                    <Counsellingroomitem>
                        <div slot="slot_img" class="content_card_img">
                            <img src="../assets/Counsellingroom/img/3.png" class="img_1" @click="Jump1()">
                        </div>
                        <div slot="slot_text" class="content_card_text">
                            <p>
                                在经过筛选对自己的报考方案确诊无误后，按照自己的意愿模拟填报志愿，以防临时修改。
                            </p>
                        </div>
                    </Counsellingroomitem>
                </div>
            </div>
            <div class="right_box"></div>
        </div>
        <footer class="footer">
            <h5>遇到其他问题可通过'*******'进行电话咨询</h5>
        </footer>
    </div>
</template>

<script>
    import Counsellingroomitem from "../components/Tabbar/Counsellingroom/Counsellingroomitem";
    export default {
        name: "Counsellingroom",
        data(){
            return {

            }
        },
        components:{
            Counsellingroomitem
        },
        methods:{
            click_a(){
                alert('加入名师交流群(***********)对报考方案进行量身打造');
            },
            Jump(){
                this.$router.push({path: '/counselling' })

            },
            Jump1(){

                this.$router.replace('/search/selectcollege' );

            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }
    .block{
        padding-top: 50px ;
    }
    .item {
        margin-bottom: 18px;
    }
    .demo-basic--circle{
        width: 20%;
        margin: 0px;
    }
    .margin-top{
        width: 80%;
        float: right;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .box-card {
        width: 700px;
        margin-top: 30px;
        margin-left: 30px ;
        height: 350px;
    }
    #body_box{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .main_box{
        display: flex;
        flex-direction: row;
        background-color: rgb(245,245,245);
    }
    .header{
        height: 370px;
    }
    .footer{
        background-color: rgb(245,245,245);
        /*border-top: 1px solid rgba(0,0,0,.3);*/
        height: 70px;
        background-color: #5500FF ;
    }
    .left_box{
        width: 15%;
        background-color:#5500FF ;
    }
    .middle_box{
        display: flex;
        width: 65%;
        flex-direction: column;
        flex-grow: 1;
        text-align: center;
        background-color: #5500FF;
    }
    .right_box{
        width: 15%;
        background-color: #5500FF ;
    }
    .content_card{
        flex-grow: 1;
        height: 1800px;
        border: 1px solid #EBEEF5;
        background-color: #FFF;
        border-radius: 20px;
        box-shadow: 5px 5px 6px #888888;
    }
    .img1{
        width: 100%;
        height: 100%;
        position: relative;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    .content_card_title{
        height: 150px;
        text-align: center;
        color:red;
        width: 100%;
        padding-top:50px ;
    }
    .content_card_img{
        height: 50%;
        width: 45%;
        float: left;
        padding-left: 2vw;
        padding-top: 8vh;
        cursor: pointer;
    }
    .content_card_text{
        height: 50%;
        width: 40%;
        float:right;
        margin-right: 30px;
        margin-top: 80px;
        padding-top: 7vh;
        padding-right: 10px;
        color:blueviolet;
        font-size: larger;
    }
    p{
        text-indent:2em;
        text-decoration: underline;
    }
    h5{
        padding-top:15px ;
        text-align: center;
        color: white;
        font-family: "Microsoft Yahei";

    }
</style>