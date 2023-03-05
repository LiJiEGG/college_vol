<template>
  <div>
    <div class="search_find"></div>
    <div class="content_card">
      <div class="schoolview">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svgtop">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
        <div class="schoolviewcard">
          <div class="left">
            <div class="schoolimg">
<!--              <p v-if="this.schoolinfo.logo != '1'">暂无图片</p>-->
              <img :src="'http://47.94.8.95:8181/' + this.schoolinfo.img" alt="" class="imgsc">
            </div>
          </div>
          <div class="right">
            <div class="line1">
              <h1>{{this.schoolinfo.name}}</h1>
            </div>
            <div class="line2">
              <i class="address-icon"></i>
              <p style="font-size: smaller;" class="viewp" >{{this.schoolinfo.address}}</p>
            </div>
            <div class="line2">
              <i class="type-icon"></i>
              <p class="viewp">
                <span class="type-sty">{{this.schoolinfo.levelName}}</span>
                <span class="type-sty">{{this.schoolinfo.typeName}}</span>
                <span class="type-sty">{{this.schoolinfo.schoolNatureName}}</span>
                <span class="type-sty" v-if="this.schoolinfo.f211==1">211工程</span>
                <span class="type-sty" v-if="this.schoolinfo.f985==1">985工程</span>
                <span class="type-sty" v-if="this.schoolinfo.dualClassName != null">{{this.schoolinfo.dualClassName}}</span>
              </p>
            </div>
            <div class="line2">
              <i class="web-icon"></i>
              <p class="viewp">
                官方网址：
                <a :href="this.schoolinfo.schoolSite" style="text-decoration: none; color: #333333" target="_blank">
                  {{this.schoolinfo.schoolSite}}
                </a>
              </p>
            </div>
            <div class="line2">
              <i class="phone-icon"></i>
              电话号码：
              <p class="viewp">{{this.schoolinfo.phone}}</p>
            </div>
            <div class="line2">
              <i class="email-icon"></i>
              电子邮箱：
              <p class="viewp">{{this.schoolinfo.email}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="schoolinfo">
        <div class="introducebox">
          <div class="introduceleft">
<!--            <Card-->
<!--                height="310px"-->
<!--                width="310px"-->
<!--                style="display: flex; flex-wrap: wrap;">-->
              <div class="box1">
                <p>一级博士点：<span class="fontone">{{this.schoolinfo.numDoctor}}</span>个</p>
                <p>二级博士点：<span class="fontone">{{this.schoolinfo.numDoctor2}}</span>个</p>
                <span class="box1icon box1icon1"></span>
              </div>
              <div class="box1">
                <p>一级硕士点：<span class="fontone">{{this.schoolinfo.numMaster}}</span>个</p>
                <p>二级硕士点：<span class="fontone">{{this.schoolinfo.numMaster2}}</span>个</p>
                <i class="box1icon box1icon2"></i>
              </div>
              <div class="box1">
                <p>国家重点学科：<span class="fontone">{{this.schoolinfo.numSubject}}</span>个</p>
                <i class="box1icon box1icon3"></i>
              </div>
              <div class="box1">
                <p>重点实验室：<span class="fontone">{{this.schoolinfo.numLab}}</span>个</p>
                <i class="box1icon box1icon4"></i>
              </div>
<!--            </Card>-->
          </div>
          <div class="introduceright">
            <Card height="350px" width="99%" class="introcard">
              <div class="introducetop">
                <div class="box2red">
                  <p>学习指数:</p>
                  <span class="fonttwo">{{this.env}}</span>
                </div>
                <div class="box2blue">
                  <p>生活指数:</p>
                  <span class="fonttwo">{{this.life}}</span>
                </div>
                <div class="box2yellow">
                  <p>就业指数:</p>
                  <span class="fonttwo">{{this.work}}</span>
                </div>
                <div class="box2green">
                  <p>综合评分:</p>
                  <span class="fonttwo">{{totalrank}}</span>
                </div>
              </div>
              <div class="introducebottom">
                <span style="font-size: 23px; font-weight: bold">学校简介：</span>
                <div style="overflow: hidden; height: 60%">
                  <p style="margin-top: 4px; margin-bottom: 0px">
                    {{this.schoolinfo.content}}
                  </p>
                </div>
                  <a href="#scintroduce">更多</a>
              </div>
            </Card>
          </div>
        </div>
        <div class="schoolbox">
          <br>
          <h2 style="border-bottom:2px solid #9999ff">开设专业：</h2>
          <div class="scmajor">
            <table>
              <tbody>
                <tr>
                  <th>专业名称</th>
                  <th>办学层次</th>
                  <th>修学年限</th>
                  <th>专业类别代码</th>
                </tr>
              <tr v-for="item in this.schoolspecial">
                <td @click="tomajor(item.specialId)" class="scmajorname">{{item.specialName}}</td>
                <td>{{item.typeName}}</td>
                <td>{{item.limitYear}}</td>
                <td>{{item.code}}</td>
              </tr>
                <tr v-if="this.schoolspecial.length == 0">
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>
          <br>
          <h2 style="border-bottom:2px solid #9999ff">学校分数线：</h2>
          <div class="scminscore">
            <table>
              <tbody>
              <tr>
                <th>年份</th>
                <th>录取批次</th>
                <th>招生类型</th>
                <th>最低分/最低位次</th>
                <th>省控线</th>
              </tr>
              <tr>
                <td>2020</td>
                <td v-if="this.schoolinfo.levelName == '普通本科'">普通类一段</td>
                <td v-else>普通类二段</td>
                <td>普通类</td>
                <td v-if="sc2020lowrank == '0'">{{this.schoolinfo.scoreMin2020}}/--</td>
                <td v-else>{{this.schoolinfo.scoreMin2020}}/{{this.sc2020lowrank}}</td>
                <td v-if="this.schoolinfo.levelName == '普通本科'">449</td>
                <td v-else>150</td>
              </tr>

              <tr>
                <td>2021</td>
                <td v-if="this.schoolinfo.levelName == '普通本科'">普通类一段</td>
                <td v-else>普通类二段</td>
                <td>普通类</td>
                <td v-if="sc2021lowrank == '0'">--/--</td>
                <td v-else>--/{{this.sc2021lowrank}}</td>
                <td v-if="this.schoolinfo.levelName == '普通本科'">444</td>
                <td v-else>150</td>
              </tr>
              </tbody>
            </table>
            <p style="color: red">*以上数据仅供山东地区参考</p>
          </div>
          <br>
          <br>
          <a name="scintroduce">
            <h2 style="border-bottom:2px solid #9999ff">学校介绍：
            </h2>
          </a>
          <div class="scintroduce">
            <p v-if="this.schoolcontent == ''">
              暂无数据
            </p>
            <p v-else>
              &nbsp;&nbsp;
              {{this.schoolcontent}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import
  {
    getschoolbyid,
    getschoolcontentbyid,
    getschoolspecial,
    getsclowrank2020,
    getscsatbyname,
    getsclowrank2021
  } from "../network/api";
  import router from "../router";
  import Card from "../components/Tabbar/Card/Card";
  import {Base_url} from "../network/request";

  export default {
    name: "School",
    data(){
      return{
        baseurl: Base_url,
        schoolid : this.$route.params.id,
        schoolinfo: {},
        schoolcontent: '',
        schoolspecial: [],
        sc2020lowrank: '',
        life: '--',
        env: '--',
        work: '--',
        sc2021lowrank: ''
      }
    },
    components:{
      Card,

    },
    created() {
      getschoolbyid({
        schoolId: this.schoolid
      }).then(res => {
        this.schoolinfo = res;
        // console.log(this.schoolinfo)
        getscsatbyname({
          schoolName: res.name,
        }).then(res => {
          this.life = res.lifeRank;
          this.work = res.environmeentalRank;
          this.env = res.comprehensiveRank;
        })

        getsclowrank2021({
          schoolName: res.name,
        }).then(res => {
          this.sc2021lowrank = res;
        })

      });

      getschoolcontentbyid({
        schoolId: this.schoolid
      }).then(res => {
        this.schoolcontent = res.content;
      });

      getschoolspecial({
        schoolId: this.schoolid
      }).then(res => {
        // console.log(res);
        this.schoolspecial = res;
      });

      getsclowrank2020({
        schoolId: this.schoolid
      }).then(res => {
        this.sc2020lowrank = res;
      })
    },
    computed:{
      totalrank(){
        let ave = (parseFloat(this.life) + parseFloat(this.env) + parseFloat(this.work))/3;
        return ave.toFixed(1);
      }
    },
    methods:{
      tomajor(id){
        let route_url = this.$router.resolve({path: '/search/major/' + id })
        window.open(route_url.href,'_blank');
        // this.$router.replace('/search/major/' +id);
      }
    }
  }
</script>

<style scoped>
  .search_find{
    height :80px
  }
  .content_card{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    /*height: 1600px;*/
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    border-radius: 16px;
    /*box-shadow: 5px 5px 6px #888888;*/
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    /*border-radius: 16px;*/
    /*background: #dcd9e7;*/
    /*box-shadow:  20px 20px 60px #bbb8c4,*/
    /*-20px -20px 60px #fdfaff;*/
  }
  .schoolview{
    background-image: -moz-linear-gradient(90deg, rgb(186, 173, 255), rgb(173, 255, 191));
    background-image: -webkit-linear-gradient(90deg, rgb(186, 173, 255), rgb(173, 255, 191));
    background-image: linear-gradient(90deg, rgb(186, 173, 255), rgb(173, 255, 191));
    border-radius: inherit;
    height: 450px;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }
  .schoolinfo{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .svgtop{
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 93px;
    transform: rotateY(180deg);
  }
  .schoolview .shape-fill {
    fill: #FFFFFF;
  }
  .schoolviewcard{
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    padding: 16px;
    /*transform: rotateY(180deg);*/
    transform: rotate(180deg);
  }
  .left{
    display: flex;
    /*position: relative;*/
    width: 28%;
    text-align: center;
  }
  .right{
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top:20px;
    flex-grow: 1;
    float: left;
    height: auto;
  }
  .schoolimg{
    display: flex;
    margin: auto;
    background-color: #FFFFFF;
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 210px;
    height: 210px;
    border-radius: 20px;
  }
  .imgsc{
    margin: auto;
    width: 180px;
  }
  .line1{
    width: 50%;
  }
  .line2{
    height: 100%;
    width: 100%;
    margin-top: 12px;
    overflow: hidden;
  }
  .address-icon{
    display: inline-block;
    height: 16px;
    width: 16px;
    background: url("../assets/School/infoui/position.svg") center center no-repeat;
    margin-right: 6px;
    position: relative;
    top: 2.5px;
  }
  .type-icon{
    display: inline-block;
    height: 16px;
    width: 16px;
    background: url("../assets/School/infoui/type.svg") center center no-repeat;
    margin-right: 6px;
    position: relative;
    top: 2.5px;
  }
  .web-icon{
    display: inline-block;
    height: 16px;
    width: 16px;
    background: url("../assets/School/infoui/web.svg") center center no-repeat;
    margin-right: 6px;
    position: relative;
    top: 2.5px;
  }
  .phone-icon{
    display: inline-block;
    height: 16px;
    width: 16px;
    background: url("../assets/School/infoui/phone.svg") center center no-repeat;
    margin-right: 6px;
    position: relative;
    top: 2.5px;
  }
  .email-icon{
    display: inline-block;
    height: 16px;
    width: 16px;
    background: url("../assets/School/infoui/email.svg") center center no-repeat;
    margin-right: 6px;
    position: relative;
    top: 2.5px;
  }
  .viewp{
    display: inline-block;
  }
  .type-sty{
    margin-left: 20px;
    border-radius: 6px;
    border: 1px solid deepskyblue;
  }
  .introducebox{
    display: flex;
    flex-direction: row;
    height: 350px;
  }
  .introduceleft{
    display: flex;
    flex-wrap: wrap;
    height: 350px;
    width: 350px;

  }
  .introduceright{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
  }
  .introcard{
    position: relative;
    padding: 5px;
    /*overflow: hidden;*/
    width: inherit;

  }
  .box1{
    margin: auto;
    width: 140px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center;*/
    font-size: 10px;
    border-radius: 34px;
    border: 1px solid #EBEEF5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    text-align: center;
  }
  .fontone{
    font-size: 25px;
  }
  .box1icon{
    margin-left: 38%;
    display: inline-block;
    height: 32px;
    width: 32px;
  }
  .box1icon1{
    background-image: url("../assets/School/infoui/doctor.svg");
  }
  .box1icon2{
    background-image: url("../assets/School/infoui/doctor.svg");
  }
  .box1icon3{
    background-image: url("../assets/School/infoui/book.svg");
  }
  .box1icon4{
    background-image: url("../assets/School/infoui/test.svg");
  }
  .introducetop{
    padding: 15px;
    height: 50%;
    display: flex;
    justify-content: space-between;
  }
  .introducebottom{
    height: 40%;
    /*overflow: hidden;*/
    position: absolute;
    width: inherit;
    word-break: break-word;
  }
  .box2red{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: small;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 8px solid #ff5c33;
  }
  .box2blue{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: small;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 8px solid deepskyblue;
  }
  .box2yellow{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: small;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 8px solid  #f0cc00;
  }
  .box2green{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: small;
    width: 130px;
    height: 130px;
    height: 130px;
    border-radius: 50%;
    border: 8px solid #00cc00;
  }
  .introducetop .fonttwo{
    font-size: 20px;
  }
  .schoolbox{
    flex-grow: 1;
    padding: 10px;
  }
  .scmajor{
    display: flex;
    /*justify-content: center;*/
    padding: 10px;
  }
  table{
    border-radius: 6px;
    border: 1px solid #EBEEF5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-spacing: 0;
  }
  th{
    padding: 20px;
    text-align: center;
  }
  td{
    padding: 18px;
    text-align: center;
  }
  .thright{
    width: 770px;
  }
  td{
    border-top: 1.5px solid #d9d9d9;
    border-spacing: 0;
  }
  .scminscore{
    justify-content: center;
    padding: 10px;
  }
  .scintroduce{
    width: auto;
    padding: 15px;
    padding-bottom: 88px;
    word-wrap:break-word;
  }
  .scmajorname{
    cursor: pointer;
    transition: .5s;
  }
  .scmajorname:hover{
    color: #01affd;
  }
</style>