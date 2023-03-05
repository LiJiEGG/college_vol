<template>
  <div>
    <ul id="paging">
      <li @click="changepage(pcurrpage-1)">
        <span>
          <img src="../../../assets/Tabbar/paging/prev.svg" alt="" title="上一页">
        </span>
      </li>
      <li @click="changepage(1)">
        <span class="topage">首页</span>
      </li>
      <li
          @click="changepage(i)"
          v-for="i in index"
          class="numberli onmouse"
          :class="{active: i == pcurrpage}"
      >
        <span>{{i}}</span>
      </li>
      <li @click="changepage(totalPage)">
        <span  class="topage">末页</span>
      </li>
      <li @click="changepage(pcurrpage+1)">
        <span>
          <img src="../../../assets/Tabbar/paging/next.svg" alt="" title="下一页">
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Paging",
    data(){
      return{
        ptotalPage: this.totalPage,
        pcurrpage: this.currpage
      };
    },
    props:{
      totalPage: Number,
      currpage: Number
    },
    watch:{
      totalPage: {
        immediate: true,
        handler: function () {
          this.ptotalPage = this.totalPage;
        }
      },
      currpage: {
        immediate: true,
        handler: function () {
          this.pcurrpage = this.currpage;
        }
      },
    },
    methods:{
      // index(i){
      //   if (this.currpage <= 3 || this.totalPage <= 5) return i;
      //   else if(this.currpage >= this.tottalpage -2 )
      //   {
      //     return this.totalPage-5+i;
      //   }
      //   else{
      //     return this.currpage -3+i;
      //   }
      // }
      changepage(i){
        if(i > 0 && i<= this.totalPage){
          this.pcurrpage = i;
          this.$emit('vchangepage',i)
        }
      }
    },
    computed:{
      index: function () {
        var left = 1;
        var right =this.totalPage;
        var ar = [];
        if (this.totalPage >= 5){
          if(this.pcurrpage > 3 && this.pcurrpage < this.totalPage -2){
            left = this.pcurrpage - 2;
            right = this.pcurrpage +2;
          }else{
            if (this.pcurrpage <=3 ){
              left = 1;
              right = 5;
            }else{
              right = this.totalPage;
              left = this.totalPage - 4;
            }
          }
        }
        while (left <= right){
          ar.push(left);
          left ++;
        }
        return ar
      }
    }
  }
</script>

<style scoped>
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
    float: left;
    cursor: pointer;
  }
  li{
    padding: 2px;
    margin-left: 8px;
    /*border-radius: 50%;*/
    /*background-color: blue;*/
    /*color: white;*/
    /*font-family: Bahnschrift;*/
    font-weight: normal;
    line-height: 150%;
    /*font-size: small;*/
  }
  .numberli{
    border-radius: 50%;
    /*background-color: blue;*/
    /*color: white;*/
    width: 26px;
    height: 26px;
    padding: 2px;
    text-align: center;
  }
  #paging .active{
    background-color: skyblue;
    color: white;
  }
  .onmouse:hover{
    background-color: rgb(220,220,220);
  }
  .topage:hover{
    color: blue;
  }
</style>