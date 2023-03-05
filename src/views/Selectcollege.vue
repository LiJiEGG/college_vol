<template>
  <div id="big_box">
    <div class="search_find">
      <div class="userbox">
        <p style="font-size: large">&nbsp;
          <span>{{this.$store.state.username}}</span> ,您好；您的高考总分为：<span>{{totalscore}}</span> ,排位区间在：<span>--</span>
        </p>
      </div>
      <div class="inputbox">
        <div class="riskbox">
            <span>报考风险选择：</span>
            <div class="radio-group">
              <label class="radio-group-item">
                <input type="radio" name="choose" value="风险高" v-model="risk">
                <span class="radio-text">冲</span>
              </label>
              <label class="radio-group-item">
                <input type="radio" name="choose" value="风险中" v-model="risk">
                <span class="radio-text">稳</span>
              </label>
              <label class="radio-group-item">
                <input type="radio" name="choose" value="风险低" v-model="risk">
                <span class="radio-text">保</span>
              </label>
            </div>
          </div>
        <div class="scorebox">
            总分数:
            <div class="inputtext">
              <input type="text" v-model="totalscore" >
            </div>
            <button class="searchbtn" @click="submit">智能匹配院校</button>

          </div>
        <div class="typebox">
          </div>
      </div>
      <div class="tips_box">
        <span>*以下推荐的院校专业及相关数据仅供山东地区考生作参考</span>
      </div>
    </div>
    <div class="content_card">
      <div class="showbox">
        <Recommendcard v-for="(item,index) in this.search.list" :key="index">
          <h2 slot="sc_name" class="sc_name" @click="toschool(item.schoolName)">{{item.schoolName}}</h2>
          <span slot="sc_code">院校代码：{{item.schoolCode}}</span>
          <h3 slot="major_name">{{item.specialCodeName}}</h3>
<!--          <span slot="major_code">专业代码：010101</span>-->
          <span slot="low_rank">推荐专业在2021的最低录取排位：{{item.lowerRank}}</span>
          <span slot="plan_num">招生计划数：{{item.planNumber}}</span>
        </Recommendcard>

        <div v-if="!this.$store.state.login_code" class="none_box">
          <span  class="none_icon"></span>
          <h1>请登录后使用该功能</h1>
        </div>
        <div v-else-if="this.search.list.length == 0" class="none_box">
          <span  class="none_icon"></span>
          <h1>请输入分数进行查询</h1>
        </div>

        <div class="paging">
          <Paging
              :total-page="this.search.totalPage"
              :currpage="this.search.currpage"
              @vchangepage="vchangepage"
          >
          </Paging>
        </div>
      </div>
      <div class="rightbox">

      </div>
    </div>
  </div>
</template>

<script>
  import {getschoolbyscore,getscbyname} from "../network/api";
  import Paging from "../components/Tabbar/Pagingbar/Paging";
  import Schoolcard from "../components/Tabbar/Searchcollege/Schoolcard/Schoolcard";
  import Recommendcard from "../components/Tabbar/Recommendcard/Recommendcard";

  export default {
    name: "Selectcollege",
    data(){
      return{
        risk: '风险高',
        totalscore: null,
        search:{
          list:[],
          totalPage: 61,
          currpage: 1
        },
        islogin: this.$store.state.login_code
      }
    },
    components:{
      Schoolcard,
      Paging,
      Recommendcard
    },
    methods:{
      vchangepage(params){
        this.search.currpage = params;
        getschoolbyscore({
          score: this.totalscore,
          risk: this.risk,
          startPage: params,
          pageSize: 7
        }).then(res => {
          this.search.list = res.records;
          this.search.currpage = res.current;
          this.search.totalPage = res.pages;
          // console.log(res);
        })


      },
      submit(){

        if (this.islogin){
          getschoolbyscore({
            score: this.totalscore,
            risk: this.risk,
            startPage: 1,
            pageSize: 7
          }).then(res => {
            this.search.list = res.records;
            this.search.currpage = res.current;
            this.search.totalPage = res.pages;
            // console.log(res);
          })
        }
        else{
          alert('请返回首页登录后使用该功能')
        }

      },
      toschool(name){
        getscbyname({
          schoolName: name
        }).then(res => {
          // this.$router.replace('/search/college/' + res.schoolId)
          let route_url = this.$router.resolve({path: '/search/college/' + res.schoolId });
          window.open(route_url.href,'_blank');
        })
      }
    },



  }
</script>

<style scoped>
  #big_box{

  }
  .search_find{
    height :180px
  }
  .content_card{
    display: flex;
    width: inherit;
    height: 1300px;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    border-radius: 4px;
    box-shadow: 5px 5px 6px #888888;
  }
  .userbox{
    padding: 10px;
    height: 35%;
  }
  .inputbox{
    height: 45%;
    display: flex;
    flex-direction: row;
  }
  .radio-group{
    display: inline-block;
    display: flex;
  }
  .radio-group .radio-group-item{
    user-select: none;
    cursor: pointer;
  }
  .radio-group .radio-group-item input{
    display: none;
  }
  .radio-group .radio-group-item .radio-text{
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #01affd;
    color: #01affd;
  }
  .radio-group .radio-group-item + .radio-group-item .radio-text{
    border-left: 0;
  }
  .radio-group .radio-group-item:first-child .radio-text{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .radio-group .radio-group-item:last-child .radio-text{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .radio-group .radio-group-item input:checked ~ .radio-text{
    background-color: #01affd;
    color: #FFFFFF;
  }
  .riskbox{
    display: flex;
    padding: 5px;
    height: 40px;
    align-items: center;
  }
  .scorebox{
    margin-left: 15px;
    display: flex;
    padding: 5px;
    height: 40px;
    align-items: center;
  }
  .inputtext{
    padding: 5px 5px 1px 2px;
    display: flex;
    margin-left: 8px;
    height: 50%;
    align-items: center;
    border-bottom: 0.5px solid #cccccc;

  }
  .inputtext input{
    text-align: center;
    font-size: large;
    height: 30px;
    width: 90px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,.0);
  }
  .searchbtn{
    margin-left: 18px;
    height: 34px;
    width: 140px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 14px;
    background-image: -moz-linear-gradient(45deg, rgb(63, 248, 100), rgb(151, 100, 247));

    background-image: -webkit-linear-gradient(45deg, rgb(63, 248, 100), rgb(151, 100, 247));

    background-image: linear-gradient(45deg, rgb(63, 248, 100), rgb(151, 100, 247));
  }
  .showbox{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 75%;
  }
  .rightbox{
    flex: 1;
  }
  .paging{
    position: absolute;
    left: 25%;
    bottom: 5px;
  }
  .tips_box{
    height: 10%;
    position: relative;
    flex-grow: 1;
    color: #eb1518;
    font-size: 10px;
  }
  .tips_box span{
    position: absolute;
    bottom: 5px;
    right: 6px;
  }
  .none_box{
    padding: 70px;
    display: flex;
    justify-content: center;
  }
  .none_box h1{
    display: inline-block;
    margin: 0;
  }
  .none_icon{
    display: inline-block;
    width: 48px;
    height: 48px;
    margin-right: 13px;
    background-image: url("../assets/others/alert.svg") ;
    background-repeat: no-repeat;
  }
  .sc_name{
    cursor: pointer;
  }
  .sc_name:hover{
    color: #6f69eb;
  }
</style>