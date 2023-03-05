<template>
  <div id="card_box">
    <div class="cardtitle">
      <slot name="majorname"></slot>
      <slot name="majortype"></slot>
    </div>
    <div class="cardbody">
      <div class="cardmain"><slot name="majorid"></slot></div>
      <div class="cardmain"><slot name="limityear"></slot></div>
      <div class="cardlast"><slot name="givenname"></slot></div>
      <div class="cardlast"><slot name="sex"></slot></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "majorcard"
  }
</script>

<style scoped>
  #card_box{
    margin: 10px;
    /*background-color: green;*/
    height: 120px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    color: #303133;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    transition: box-shadow 1s;
  }
  .cardtitle{
    padding: 10px;
    height: 50%;
  }
  .cardbody{
    flex-grow: 1;
    display: flex;
  }
  h2{
    margin-top:0;
    margin-bottom: 0;
  }
  h3{
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 35px;
    border-bottom: 1.8px solid red;
  }
  .cardmain{
    padding-top: 3px;
    margin-left: 7px;
  }
  .cardlast{
    padding-top: 3px;
    margin-left: 8px;
  }
  .cardmain span{
    padding-right: 7px;
    border-right:1.3px solid #333333;
  }
  #card_box:hover{
    box-shadow: 10px 10px 5px gray;
  }
  h2:hover{
    color: blue;
    cursor: pointer;
  }
</style>