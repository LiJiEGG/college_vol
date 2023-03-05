<template>
  <div id="big_box">
        <div class="search_find">
          <div class="selectbox">
            <Searchfind>
              <Searchfinditem :list="this.belonglist" @changetype="belongchange">院校所属</Searchfinditem>
              <Searchfinditem :list="this.collegetypelist" @changetype="collegetypechange">院校类型</Searchfinditem>
              <Searchfinditem :list="this.collegelevellist" @changetype="collegelevelchange">办学类型</Searchfinditem>
              <Searchfinditem :list="this.collegenarlist" @changetype="collegenarchange">院校类型</Searchfinditem>
            </Searchfind>
          </div>
          <div class="searchtext">
            <Search @inputmessage="searchscbyname" :searchmessage="'请输入院校名称查询'"></Search>
          </div>

        </div>
        <div class="content_card">
          <div class="showbox">
            <Schoolcard v-for="item in this.search.schoollist" :key="item.schoolId">
              <img :src="'http://47.94.8.95:8181/' + item.img" alt="" slot="img">
              <h2 slot="name" @click="toSchool(item.schoolId)">{{item.name}}</h2>
              <p slot="address">{{item.provinceName + item.cityName}}</p>
              <ul slot="ul">
                <li>{{item.levelName}}</li>
                <li>{{item.typeName}}</li>
                <li>{{item.schoolNatureName}}</li>
                <li v-if="item.f985 == 1">985</li>
                <li v-if="item.f211 == 1">211</li>
                <li>{{item.dualClassName}}</li>
              </ul>
            </Schoolcard>

            <div v-if="this.search.schoollist.length == 0" class="none_box">
              <span  class="none_icon"></span>
              <h1>暂无此项数据</h1>
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
            <div class="rank_box">
              <div class="rank_title_box">
                <span class="rank_icon"></span>
                <h2>推荐院校</h2>
              </div>
              <div class="rank_content">
                <Ranking></Ranking>
              </div>
            </div>

          </div>
<!--          <div @click="counter">{{currpage}}</div>-->
        </div>
    </div>
</template>

<script>
  import {getschoolinfo,selectschool,getscbyname} from "../network/api";
  import Paging from "../components/Tabbar/Pagingbar/Paging";
  import Schoolcard from "../components/Tabbar/Searchcollege/Schoolcard/Schoolcard";
  import Searchfind from "../components/Tabbar/Searchfind/Searchfind";
  import Searchfinditem from "../components/Tabbar/Searchfind/Searchfinditem";
  import Search from "../components/Tabbar/Searchinput/Search";
  import Ranking from "../components/Tabbar/Ranking/Ranking";

  export default {
    name: "Searchcollege",
    data(){
      return{
        search:{
          schoollist:[],
          totalPage: 61,
          currpage: 1
        },
        belonglist:
          ['全部','北京','天津','河北','山西','内蒙古','辽宁',
            '吉林','黑龙江','上海','江苏','浙江','安徽','福建',
            '江西','山东','河南','湖北','湖南','广东','广西','海南',
            '重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆'],
        bybelong: '全部',
        collegetypelist: ['全部','综合','理工','农林','医药','师范','语言','财经','政法','体育','艺术','民族','军事'],
        bycollegetype: '全部',
        collegelevellist:['全部','普通本科','专科（高职）','中外合作办学','独立学院','公办','民办'],
        bycollegelevel: '全部',
        collegenarlist: ['全部','985','211','双一流'],
        bycollegenar: '全部',
        searchmessage: '',

      };
    },
    created() {
      getschoolinfo({
          startPage: 1,
          pageSize: 13
        }
      ).then(res => {
        this.search.schoollist = res.records;
        this.search.currpage = res.current;
        this.search.totalPage = res.pages;
        // console.log(res.records);
      })
    },
    components:{
      Paging,
      Schoolcard,
      Searchfind,
      Searchfinditem,
      Search,
      Ranking
    },
    methods:{
      //更改页数
      vchangepage(parms){
        // getschoolinfo({
        //     startPage: parms,
        //     pageSize: 13
        //   }
        // ).then(res => {
        //   this.search.schoollist = res.records;
        //   this.search.currpage = res.current;
        //   this.search.totalPage = res.pages;
        //   console.log(res.records);
        // })
        let belong = null;
        let typeName = null;
        let is211 = null;
        let is985 = null;
        let isFirstClass = null;
        let levelName = null;
        let schoolNatureName = null;
        if (this.bybelong == '全部'){ belong = null; }
        else { belong = this.bybelong; }

        if (this.bycollegetype == '全部'){ typeName = null; }
        else { typeName = this.bycollegetype + '类'; }

        if (this.bycollegelevel == '全部'){ levelName = null; schoolNatureName = null; }
        else {
          if(this.bycollegelevel == '公办' || this.bycollegelevel == '民办') {
            schoolNatureName = this.bycollegelevel;
          }
          if(this.bycollegelevel == '普通本科' || this.bycollegelevel == '专科（高职）'){
            levelName = this.bycollegelevel;
          }
        }

        if (this.bycollegenar == '全部'){ is211 = null; is985 = null; isFirstClass = null; }
        else {
          if (this.bycollegenar == '985'){
            is985 = '1'
          }
          if (this.bycollegenar == '211'){
            is211 = '1'
          }
          if (this.bycollegenar == '双一流'){
            isFirstClass = this.bycollegenar
          }

        }
        //筛选学校的get请求
        selectschool({
          //院校所属
          provinceName: belong,
          //院校类型
          typeName: typeName,
          is211: is211,
          is985: is985,
          isFirstClass: isFirstClass,
          //普通本科和专科（高职）
          levelName: levelName,
          //公办/民办
          schoolNatureName: schoolNatureName,
          startPage: parms,
          pageSize: 13,
        }).then(res => {
          this.search.schoollist = res.records;
          this.search.currpage = res.current;
          this.search.totalPage = res.pages;
        })

        this.search.currpage = parms;
      },
      // counter(){
      //   this.currpage++;
      // }
      belongchange(item){
        this.bybelong = item;
        // this.search.currpage = 1;
        // let belong = null;
        // let typeName = null;
        // let is211 = null;
        // let is985 = null;
        // let isFirstClass = null;
        // let levelName = null;
        // let schoolNatureName = null;
        // if (this.bybelong == '全部'){ belong = null; }
        // else { belong = this.bybelong; }
        //
        // if (this.bycollegetype == '全部'){ typeName = null; }
        // else { typeName = this.bycollegetype + '类'; }
        //
        // if (this.bycollegelevel == '全部'){ levelName = null; schoolNatureName = null; }
        // else {
        //   if(this.bycollegelevel == '公办' || this.bycollegelevel == '民办') {
        //     schoolNatureName = this.bycollegelevel;
        //   }
        //   if(this.bycollegelevel == '普通本科' || this.bycollegelevel == '专科（高职）'){
        //     levelName = this.bycollegelevel;
        //   }
        // }
        //
        // if (this.bycollegenar == '全部'){ is211 = null; is985 = null; isFirstClass = null; }
        // else {
        //   if (this.bycollegenar == '985'){
        //     is985 = '1'
        //   }
        //   if (this.bycollegenar == '211'){
        //     is211 = '1'
        //   }
        //   if (this.bycollegenar == '双一流'){
        //     isFirstClass = this.bycollegenar
        //   }
        //
        // }
        //
        // selectschool({
        //   //院校所属
        //   provinceName: belong,
        //   //院校类型
        //   typeName: typeName,
        //   is211: is211,
        //   is985: is985,
        //   isFirstClass: isFirstClass,
        //   //普通本科和专科（高职）
        //   levelName: levelName,
        //   //公办/民办
        //   schoolNatureName: schoolNatureName,
        //   startPage: this.search.currpage,
        //   pageSize: 13,
        // }).then(res => {
        //   this.search.schoollist = res.records;
        //   this.search.currpage = res.current;
        //   this.search.totalPage = res.pages;
        // })

      },
      collegetypechange(item){
        this.bycollegetype = item;
      },
      collegelevelchange(item){
        this.bycollegelevel = item;
      },
      collegenarchange(item){
        this.bycollegenar = item;
      },
      toSchool(id){
        // this.$router.replace('/search/college/' + id);
        this.$router.push('college/' + id);
      },
      searchscbyname(message){
        this.searchmessage = message;

        getscbyname({
          schoolName: message
        }).then(res => {
          if (res == null){
            alert('未查询到相关院校，请输入其他关键字进行查询')
          }
          else{
            var temp = new Array();
            temp = this.search.schoollist;
            this.search.schoollist = [];
            temp[0] = res;
            this.search.schoollist = temp;
            // console.log(res);
          }

        })
        // this.search.currpage = 1;
        // this.search.totalPage = 1;

      },
      changeschoollist(){
        this.search.currpage = 1;
        let belong = null;
        let typeName = null;
        let is211 = null;
        let is985 = null;
        let isFirstClass = null;
        let levelName = null;
        let schoolNatureName = null;
        if (this.bybelong == '全部'){ belong = null; }
        else { belong = this.bybelong; }

        if (this.bycollegetype == '全部'){ typeName = null; }
        else { typeName = this.bycollegetype + '类'; }

        if (this.bycollegelevel == '全部'){ levelName = null; schoolNatureName = null; }
        else {
          if(this.bycollegelevel == '公办' || this.bycollegelevel == '民办') {
            schoolNatureName = this.bycollegelevel;
          }
          if(this.bycollegelevel == '普通本科' || this.bycollegelevel == '专科（高职）'){
            levelName = this.bycollegelevel;
          }
        }

        if (this.bycollegenar == '全部'){ is211 = null; is985 = null; isFirstClass = null; }
        else {
          if (this.bycollegenar == '985'){
            is985 = '1'
          }
          if (this.bycollegenar == '211'){
            is211 = '1'
          }
          if (this.bycollegenar == '双一流'){
            isFirstClass = this.bycollegenar
          }

        }
        //筛选学校的get请求
        selectschool({
          //院校所属
          provinceName: belong,
          //院校类型
          typeName: typeName,
          is211: is211,
          is985: is985,
          isFirstClass: isFirstClass,
          //普通本科和专科（高职）
          levelName: levelName,
          //公办/民办
          schoolNatureName: schoolNatureName,
          startPage: this.search.currpage,
          pageSize: 13,
        }).then(res => {
          this.search.schoollist = res.records;
          this.search.currpage = res.current;
          this.search.totalPage = res.pages;
        })
      }
    },
    watch: {
      bybelong: 'changeschoollist',
      bycollegetype: 'changeschoollist',
      bycollegelevel: 'changeschoollist',
      bycollegenar: 'changeschoollist'
    }
  }
</script>

<style scoped>
  #big_box{

  }
  .search_find{
    height :auto;
    /*width: 70vh;*/
  }
  .content_card{
    display: flex;
    /*flex-grow: 1;*/
    /*min-height: 1100px;*/
    width: inherit;
    height: 2350px;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    border-radius: 4px;
    box-shadow: 5px 5px 6px #888888;
  }
  .showbox{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 75%;
    /*height: 100%;*/
  }
  .paging{
    position: absolute;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: center;
    /*left: 20%;*/
    bottom: 5px;
  }
  .rightbox{
    flex: 1;
    padding: 10px;
  }
  .searchtext{
    display: flex;
    height: 40px;
    padding: 7px;
    justify-content: flex-end;
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
  .rank_box{
    margin-top: 22px;
    width: inherit;
    padding-bottom: 30px;
    border: 1px solid #EBEEF5;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .rank_title_box h2{
    display: inline-block;
    margin-top: 3px;
    margin-bottom: 13px;
    margin-left: 5px;
  }
  .rank_title_box{
    padding-top: 15px;
    display: flex;
    justify-content: center;

  }
  .rank_title_box span{
    display: inline-block;
  }
  .rank_icon{
    width: 41px;
    height: 41px;
    background-image: url("../assets/Tabbar/rank/rank_title.svg");
    margin-top: 1px;
  }
  .rank_content{
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }
</style>