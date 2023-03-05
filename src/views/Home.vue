<template>
  <div id="mainbox">
    <div id="video_mainbox" :class="{video_display: videoDisplay}">
      <div class="video_title">
        <img src="../assets/Home/img/close.svg" alt="关闭" class="closeicon" @click="oandcvideo" >
      </div>
      <div class="video_bodybox">
        <div class="video">
          <video
              src="../assets/Home/video/2021introduce.mp4"
              controls
              width="770"
              id="video"
          >
          </video>
        </div>
      </div>
    </div>
    <div id="login_mainbox" :class="{login_display: loginDisplay}">
      <div  class="login_title">
        <img src="../assets/Home/img/close.svg" @click="oandclogin" alt="" class="closeicon">
      </div>
      <div class="user_box">
        <div class="login_box">
          <div :class="{login:login_input}">
            <h1>登录</h1>
            <div class="inputBox">
              <div class="inputText">
                <span class="icon-User"></span>
                <input type="text" placeholder="用户名" v-model="loginForm.username">
              </div>
              <div class="inputText">
                <span class="icon-Password"></span>
                <input type="password" placeholder="密码" v-model="loginForm.password">
              </div>

              <input type="button" class="submit_button" value="登录" @click="tologin">
              <input type="button" class="reg_button" value="注册" @click="openreg()">
              <p style="margin-top: 50px">
                用户名:admin
              </p>
              <p>
                密码:123
              </p>
            </div>
          </div>

          <div :class=" {reg:reg_input}">
            <h1>注册</h1>
            <div class="inputBox">
              <div class="inputText">
                <span class="icon-User"></span>
                <input type="text" placeholder="用户名" v-model="regForm.username">
              </div>
              <div class="inputText">
                <span class="icon-Password"></span>
                <input type="password" placeholder="密码" v-model="regForm.password">
              </div>
              <div class="inputText">
                <span class="icon-email"></span>
                <input type="text" placeholder="邮箱" v-model="regForm.email">
              </div>
              <div class="inputText">
                <span class="icon-phone"></span>
                <input type="text" placeholder="电话号码" v-model="regForm.phone">
              </div>

              <input type="button" class="submit_button" value="注册" @click="register">
              <input type="button" class="reg_button" value="返回登录" @click="openreg()">
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="nav">
      <Homenav>
        <Homenavitem path="/">首页</Homenavitem>
        <Homenavitem path="/search/college">查院校</Homenavitem>
        <Homenavitem path="/search/major">查专业</Homenavitem>
        <Homenavitem path="/search/selectcollege">模拟填报志愿</Homenavitem>
        <Homenavitem path="/counsellingroom">咨询室</Homenavitem>
<!--        <Homenavitem></Homenavitem>-->
      </Homenav>
    </div>
    <div class="mainbody">
      <div class="bodyshow">
<!--        <span>{{this.$store.state.login_code}}</span>-->
        <h1>山东省"3+3"新高考最新政策:</h1>
        <input type="button" class="inputButton1" value="▶   视频介绍" @click="oandcvideo" />
        <input type="button" class="inputButton2" value="模拟填报志愿登录" @click="oandclogin" />
        <p>高校暑期高考“3+3”模式，包括高考语文、数学、外语（含笔试、听力）等三个部分，以及思想政治教育、历史、地理、物理、化学、，其他部分选自生物系。
          总分为750分，3门高考的原题满分为150分；考生选择的三科等级考试的原题满分为100分，折算成分数计入总分，每科满分为100
          从2020年起，山东省按暑期高考、艺术类、三项体育类分批录取学生。其中，不再指定普通类本科、专业分数线。
          与改革前相比，《实施方案》的改革与改革主要包括四个方面。包括考试科目和时间、年级构成和分数转换、评分和录取方法、志愿设置和填报。
        </p>
      </div>
    </div>
    <div class="footer">
<!--      <Swiper></Swiper>-->
    </div>
  </div>
</template>

<script>
  import Homenav from "../components/Tabbar/Homenav/Homenav";
  import Homenavitem from "../components/Tabbar/Homenav/Homenavitem";
  import Swiper from "../components/Tabbar/Homefooter/tabbar";
  import {getlogin,postreg} from "../network/api";

  export default {
    name: "Home",
    data(){
      return{
        videoDisplay: true,
        loginDisplay: true,
        login_input: false,
        reg_input: true,
        loginForm: {
          username: '',
          password: ''
        },
        regForm: {
          username: '',
          password: '',
          phone: '',
          email: ''
        },
        // reg_username: '',
        // reg_password: '',
        // reg_phone: '',
        // reg_email: ''
      }
    },
    components:{
      Homenav,
      Homenavitem,
      Swiper
    },
    methods:{
      oandcvideo(){
        // console.log('111');
        var video = document.getElementById('video');
        if(video.play) {
          video.pause();
        }
        else video.play();
        this.videoDisplay = !this.videoDisplay;
      },
      oandclogin(){
        this.loginDisplay = !this.loginDisplay;
        this.login_input = false;
        this.reg_input = true;
      },
      openreg(){
        this.login_input = !this.login_input;
        this.reg_input = !this.reg_input;
      },
      tologin(){
        if (this.loginForm.username == '' || this.loginForm.password == ''){
          alert('用户名和密码不能为空');
        }
        else {
          getlogin({
            username: this.loginForm.username,
            password: this.loginForm.password
          }).then(res => {
            if (res.code == 200) {
              alert('登录成功！');
              this.$store.commit('getlogin');
              let getname = this.loginForm.username;
              this.$store.commit('getusername',getname);
              this.$router.replace('/search/selectcollege');
            }
            else if (res.code == 2003 || res.code == 2007){
              alert('账号不存在或密码错误')
            }
          })
        }
      },
      register(){
        const regemail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        const regphone = /^1(3|4|5|7|8)\d{9}$/;
        let isemail = !regemail.test(this.regForm.email);
        let isphone = !regphone.test(this.regForm.phone);
        // console.log(regemail.test(this.regForm.email));
        // console.log(regphone.test(this.regForm.phone));

        if (this.regForm.username == '' || this.regForm.password == ''){
          alert('用户名和密码不能为空');
        }
        else if (isemail){
          alert('请输入正确的邮箱号')
        }
        else if (isphone){
          alert('请输入正确的手机号')
        }
        else{
          postreg({
            username: this.regForm.username,
            password: this.regForm.password,
            phone: this.regForm.phone,
            email: this.regForm.email
          }).then(res => {
            if (res.code == 200){
              alert('注册成功请返回登录')
            }
            else{
              alert('已有用户名请重新注册')
            }
          })
        }
      },

    }
  }
</script>

<style>
  /*body{*/
  /*  margin: 0 auto;*/
  /*  padding: 0;*/
  /*  height: 100%;*/
  /*}*/
  #mainbox{
    display: flex;
    flex-direction: column;
    height: 100vh;
    /*background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);*/
    background: url("../assets/Home/img/homebkg.jpg") ;
    background-size: 100%;
  }
  #mainbox .nav{
    margin: 0;
    padding: 0;
    height: 70px;
    width: 100%;
    background-image: linear-gradient(rgba(0,0,0,.4) 12%,rgba(50, 50, 50,.2) ,rgba(160, 160, 160,.0) ,rgba(240, 240, 240,.0) );
    color: white;
  }
  #mainbox .mainbody{
    margin: 0 ;
    padding: 0;
    display: flex;
    height: 100vh;
  }
  #mainbox .footer{
    position: fixed;
    bottom: 0;
    margin: 0;
    padding: 0;
    height: 165px;
    width: 100%;
  }
  .bodyshow{
    padding: 7px;
    margin-top: 140px;
    margin-left: 25px;
    width: 525px;
    height: 345px;
    color: white;
    background-color: rgba(0,0,0,.0);
    border-radius: 5px;
  }
  .bodyshow h1{
    margin: 0;
    margin-left: 12px;
  }
  .inputButton1{
    margin-top: 25px;
    margin-left: 12px;
    border: 0;
    width: 168px;
    height: 44px;
    color: white;
    border-radius: 7px;
    background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
    /*background-color: #eb5b14;*/
    cursor: pointer;
    font-weight: bold;
  }
  .inputButton2{
    margin-top: 25px;
    margin-left: 12px;
    border: 0;
    width: 168px;
    height: 44px;
    color: white;
    border-radius: 7px;
    background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);
    cursor: pointer;
    font-weight: bold;
  }
  .bodyshow p{
    margin-left: 12px;
  }
  #video_mainbox{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    z-index: 999;
    text-align: center;
    background-color: rgba(0,0,0,.5);
  }
  #video_mainbox .video_bodybox{
    /*margin-top: 250px;*/
    padding: 0;
    height: 500px;

  }
  #video_mainbox .video{
    margin-top: 10%;
  }
  .closeicon{
    position: absolute;
    right: 0;
    width: 39px;
    cursor: pointer;
  }
  .video_display{
    display: none;
  }
  #login_mainbox{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    z-index: 9999;
    text-align: center;
    background-color: rgba(0,0,0,.4);
  }
  .login_display{
    display: none;
  }
  .user_box{
    margin-top: 10%;
    height: 500px;
    display: flex;
    justify-content: center;
  }
  .login_box{
    width: 400px;
    background-color: rgba(0,0,0,.8);
    border-radius: 15px;
    text-align: center;
    color: white;
  }
  .inputBox{
    margin-top: 50px;
  }
  .inputText{
    margin-top: 30px;
  }
  .inputText input{
    border: 0;
    outline: none;
    padding: 10px 10px;
    border-bottom: 1px solid white;
    color: white;
    background-color: #00000000;
  }
  .submit_button{
    margin-top: 70px;
    border: 0;
    width: 70px;
    height: 35px;
    cursor: pointer;
    color: white;
    background-color: #00cc00;
  }
  .reg_button{
    margin-top: 70px;
    border: 0;
    margin-left: 20px;
    width: 70px;
    height: 35px;
    cursor: pointer;
    background-color: rgb(255,255,255);
  }
  .icon-User{
    vertical-align: middle;
    display: inline-block;
    height: 32px;
    width: 32px;
    background-image: url("../assets/Home/img/user.png");
    background-repeat: no-repeat;
  }
  .icon-Password{
    vertical-align: middle;
    display: inline-block;
    height: 32px;
    width: 32px;
    background-image: url("../assets/Home/img/password.png");
    background-repeat: no-repeat;
  }
  .login{
    display: none;
  }
  .reg{
    display: none;
  }
  video{
    border-radius: 7px;
  }
  .icon-email{
    vertical-align: middle;
    display: inline-block;
    height: 32px;
    width: 32px;
    background-image: url("../assets/Home/img/emali.svg");
    background-repeat: no-repeat;
  }
  .icon-phone{
    vertical-align: middle;
    display: inline-block;
    height: 32px;
    width: 32px;
    background-image: url("../assets/Home/img/phone.svg");
    background-repeat: no-repeat;
  }
</style>