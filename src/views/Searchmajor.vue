<template>
  <div id="big_box">
    <div class="search_find">
      <div class="selectbox">
        <Searchfind>
          <Searchfinditem :list="this.levellist" @changetype="changelevel">专业层次</Searchfinditem>
          <Searchfinditem :list="this.typelist" @changetype="changetype">专业门类</Searchfinditem>
        </Searchfind>
      </div>
      <div class="searchtext">
        <Search @inputmessage="search_major_byname" :searchmessage="'请输入专业名称查询'"></Search>
      </div>
    </div>
    <div class="content_card">
      <div class="showbox">
        <majorcard v-for="item in this.search.majorlist" :key="item.id">
          <h2 slot="majorname" @click="tomajor(item.id)">{{item.name}}</h2>
          <h3 slot="majortype">{{item.typeDetail}}</h3>
          <span slot="majorid">{{item.level1Name}}</span>
          <span slot="limityear">{{item.limitYear}}</span>
          <span slot="givenname">授予学位：{{item.degree}}</span>
<!--          <span slot="sex">选科要求：{{item.selAdv}}</span>-->
        </majorcard>
        <div v-if="this.search.majorlist.length == 0" class="none_box">
          <span class="none_icon"></span>
          <h1>
            暂无此项数据
          </h1>
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
  import {getspecial,selectmajor,getmajorbyname} from "../network/api";
  import majorcard from "../components/Tabbar/Searchmajor/majorcard/majorcard";
  import Paging from "../components/Tabbar/Pagingbar/Paging";
  import Searchfind from "../components/Tabbar/Searchfind/Searchfind";
  import Searchfinditem from "../components/Tabbar/Searchfind/Searchfinditem";
  import Search from "../components/Tabbar/Searchinput/Search";

  export default {
    name: "Searchmajor",
    data(){
      return{
        search:{
          majorlist: [],
          totalPage: 61,
          currpage: 1
        },
        levellist: ['本科','专科'],
        level: '本科',
        typelist: ['全部','哲学','经济学','法学','教育学','文学','历史学','理学','工学','农学','医学','管理学','艺术学'],
        type: '全部',
        searchmessage: ''
      };
    },
    created() {
      getspecial({
        startPage: 1,
        pageSize: 8
      }).then(res => {
        this.search.majorlist = res.records;
        this.search.currpage = res.current;
        this.search.totalPage = res.pages;
        // console.log(res);
      })

    },
    components:{
      majorcard,
      Paging,
      Searchfind,
      Searchfinditem,
      Search
    },
    methods:{
      vchangepage(params){
        let levelName = this.level;
        let type = '';
        if (this.type == '全部' ){
          type = null
        }
        else{
          type = this.type;
        }
        // console.log('select');
        selectmajor({
          type: type,
          levelName: levelName,
          startPage: params,
          pageSize: 8
        }).then(res => {
          this.search.majorlist = res.records;
          this.search.currpage = params;
          this.search.totalPage = res.pages;
        })

        this.search.currpage = params;
      },
      changelevel(item){
        this.level = item;
      },
      changetype(item){
        this.type = item;
      },
      tomajor(id){
        this.$router.push('major/' + id);
      },
      search_major_byname(message){
        this.searchmessage = message;

        getmajorbyname({
          name: message
        }).then(res => {
          if(res == null){
            alert('未查询到相关专业请输入其他关键字进行查询')
          }
          else{
            var temp = new Array();
            temp = this.search.majorlist;
            this.search.majorlist = [];
            temp[0] = res;
            this.search.majorlist = temp;
          }

        })
      },
      changemajorlist(){
        let levelName = this.level;
        let type = '';
        if (this.type == '全部' ){
          type = null
        }
        else{
          type = this.type;
        }

        selectmajor({
          type: type,
          levelName: levelName,
          startPage: 1,
          pageSize: 8
        }).then(res => {
          this.search.majorlist = res.records;
          this.search.currpage = res.current;
          this.search.totalPage = res.pages;
        })

      }

    },
    watch:{
      type: 'changemajorlist',
      level: 'changemajorlist'
    }
  }
</script>

<style scoped>
  #big_box{

  }
  .search_find{
    height : auto;
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
  .showbox{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
  }
  .rightbox{
    flex: 1;
  }
  .paging{
    position: absolute;
    left: 25%;
    bottom: 5px;
  }
  .selectbox{
    height: auto;
  }
  .searchtext{
    padding-top: 30px;
    height: 45px;
    display: flex;
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
</style>