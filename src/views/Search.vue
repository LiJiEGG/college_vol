<template>
  <div id="body_box">
    <div class="header">
      <div style="width: 175px;height: 70px;">
        <img style="margin-top: 3.5px;margin-left: 3px" src="../assets/logoimg/uugai.com_1630663616595.png" alt="">
      </div>
      <Mainnav>
        <Mainnavitem path="/home">首页</Mainnavitem>
        <Mainnavitem path="/search/college">查院校</Mainnavitem>
        <Mainnavitem path="/search/major">查专业</Mainnavitem>
        <Mainnavitem path="/search/selectcollege">模拟志愿填报</Mainnavitem>
        <Mainnavitem path="/counsellingroom">咨询室</Mainnavitem>
      </Mainnav>
    </div>
    <div class="main_box">
      <div class="left_box">
<!--        左侧-->
      </div>
      <div class="middle_box">
        <router-view></router-view>
      </div>
      <div class="right_box">
<!--        右侧-->
      </div>
    </div>
    <footer class="footer">
<!--      页脚-->
      <div class="foot_title_box">
        <h3>查询使用说明：</h3>
        <p>1、本系统的相关信息仅供考生作为参考使用，具体数据请以学校官网或考试院为准。</p>
        <p>2、本站数据未经授权严禁转载。</p>
        <p>3、本站首页视频和数据信息均转载于山东省教育考试院。</p>
        <p>4、如对本系统有任何疑问请发送邮件至: 1025891364@qq.com 或 致电：19860919135。</p>
      </div>

    </footer>
  </div>
</template>

<script>
  import Mainnav from "../components/Tabbar/Mainnav/Mainnav";
  import Mainnavitem from "../components/Tabbar/Mainnav/Mainnavitem";
  import Card from "../components/Tabbar/Card/Card";
  export default {
    name: "Search",
    data(){
      return{}
    },
    components:{
      Mainnav,
      Mainnavitem,
      Card
    }
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
    background-color: rgb(245,245,245);
  }
  .header{
    display: flex;
    background-color: white;
    height: 70px;
    border-bottom: 1px solid rgb(220,220,220);

  }
  .footer{
    background-color: rgb(245,245,245);
    /*border-top: 1px solid rgba(0,0,0,.3);*/
    height: 240px;
    padding: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .left_box{
    width: 15%;
  }
  .middle_box{
    display: flex;
    flex-direction: column;
    width: 70%;
    /*text-align: center;*/
    margin-bottom: 33px;
    height: 100%;
  }
  .right_box{
    width: 15%;
  }
  .foot_title_box{
    text-align: left;
    width: 800px;
  }
</style>