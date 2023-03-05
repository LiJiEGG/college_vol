<template>
  <div id="searchfindbox">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  import Searchfinditem from "./Searchfinditem";
  export default {
    name: "Searchfind",
    components:{
      Searchfinditem
    }
  }
</script>

<style scoped>
  #searchfindbox{
    display: flex;
    flex-direction: column;
    /*width: 70vh;*/
    margin: 0px;
  }
  ul,li{
    word-break: break-all;
    word-wrap: break-word;
    float: left;

    list-style-type: none;

  }
  ul{

    /*width: 965px;*/
    margin: 0;
    padding-left: 0;
    /*border: 1px solid rgb(240,240,240);*/
    /*border-radius: 4px;*/
  }
  li{
    display: inline-block;
    display: flex;
  }
</style>