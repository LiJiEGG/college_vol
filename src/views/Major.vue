<template>
  <div id="big_box">
    <div class="search_find"></div>
    <div class="content_card">
      <div class="majorview">
        <Card width="auto" height="150px auto" class="Cardsty">
          <h2>{{majorinfo.typeDetail}}</h2>
          <h3>{{majorinfo.name}}</h3>
          <div class="majortype_box">
            <span class="span_box">{{majorinfo.level1Name}}</span>
            <span class="span_box">专业代码：{{majorcode}}</span>
            <span class="span_box">修业年限：{{majorinfo.limitYear}}</span>
            <span class="span_box">授予学位：{{majorinfo.degree}}</span>
            <span style="margin-left: 12px">
              专业满意度：{{majorsat}}
              <span v-if="majorsat === null">--</span>
            </span>
          </div>
        </Card>
      </div>
      <div class="majorinfo">
        <h2 style="border-bottom:2px solid #9999ff">做什么？</h2>
        <div class="majorbox">
          <p>
            {{majorinfo.doWhat}}
          </p>
        </div>
        <h2 style="border-bottom:2px solid #9999ff">培养目标：</h2>
        <div class="majorbox">
           <P>
              {{majorinfo.content}}
           </P>
        </div>
        <h2 style="border-bottom:2px solid #9999ff">新高考选科要求：</h2>
        <div class="majorbox">

            {{majorinfo.selAdv}}

        </div>
<!--        <h2 style="border-bottom:2px solid #9999ff">就业率：</h2>-->
<!--        <div class="majorbox">-->
<!--          <P>-->

<!--          </P>-->
<!--        </div>-->
        <h2 style="border-bottom:2px solid #9999ff">相关课程：</h2>
        <div class="majorbox">
          <P>
            {{majorinfo.course}}
          </P>
        </div>
        <h2 style="border-bottom:2px solid #9999ff">社会名人：</h2>
        <div class="majorbox">
          <P>
            {{majorinfo.celebrity}}
          </P>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Card from "../components/Tabbar/Card/Card";
  import {getmajorbyid,getmajorsat,getmajorcodebyid} from "../network/api";

  export default {
    name: "Major",
    data(){
      return{
        majorid: this.$route.params.id,
        majorinfo: {},
        majorsat: '',
        majorcode: '--'
      }
    },
    components:{
      Card
    },
    created() {
      getmajorbyid({
        id: this.majorid
      }).then(res => {
        this.majorinfo = res;
        // console.log(res)
        getmajorsat({
          specialName: this.majorinfo.name,
        }).then(res => {
          this.majorsat = res.sat;
        });
        getmajorcodebyid({
          specialId: this.majorinfo.id,
        }).then(res => {
          this.majorcode = res.spcode;
        })
      });

    }
  }
</script>

<style scoped>
  #big_box{

  }
  .search_find{
    height :80px
  }
  .content_card{
    display: flex;
    flex-direction: column;
    width: inherit;
    /*height: 1900px;*/
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    border-radius: 4px;
    box-shadow: 5px 5px 6px #888888;
  }
  .majorview{
    padding: 25px;
    width: auto;
  }
  .majorinfo{
    flex-grow: 1;
    padding: 10px;
  }
  .Cardsty h2,h3{
    margin: 15px;
    padding: 5px;
  }
  .majortype_box{
    padding-left: 6px;
    padding-top: 10px;
    display: inline-block;
    border-top: 1px solid gray;

  }
  .span_box{
    padding-right: 7.5px;
    margin-left: 12px;
    border-right: 1px solid rgb(220,220,220);
  }
  .majorbox{
    padding: 15px;
    width: auto;
    background-color: #F6F7F9;
    margin-bottom: 80px;
    margin-left: 20px;
    border-radius: 8px;
    word-wrap:break-word;
  }
</style>