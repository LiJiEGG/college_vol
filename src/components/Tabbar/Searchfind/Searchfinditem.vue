<template>
    <li>
      <span class="typename"><slot></slot></span>
      <i class="icon"><img src="../../../assets/Tabbar/searchfind/Menu_Put away.svg" alt=""></i>
      <div>
        <span
            class="fonthover"
            v-for="(item,index) in this.list"
            :class="{active: activeclass === index}"
            @click="spanclick(index,item)">
          {{item}}
        </span>
      </div>
    </li>
</template>

<script>
  export default {
    name: "Searchfinditem",
    data(){
      return{
        typename: '',
        activeclass: 0,
        // addresslist:['全部','北京','上海','天津','河南','河北','山东']
      }
    },
    methods:{
      spanclick(index,item){
        this.activeclass = index;
        this.typename = item;
        this.$emit('changetype',item)
      }
    },
    props: {
      list: [],
    }
  }
</script>

<style scoped>
  li .typename{
    float: left;
    cursor: default;
  }
  .icon{
    float: left;
    position: relative;
  }
  li{

    width: 100%;
    margin-top: 15px;
    position: relative;
    float: left;
  }
  img{
    position: absolute;
    top: 4.2px;
    left: 3px;
    width: 14px;
  }
  div{
    width: 850px;
    display: block;
    /*注释*/
    /*margin-left: 115px;*/
  }
  span{
    float: left;
    margin-left: 15px;
    cursor: pointer;
  }
  .active{
    color: blue;
  }
  .fonthover:hover{
    color: blue;
  }
  .fonthover{
    transition: .5s;
  }
</style>