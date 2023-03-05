<template>
  <div id="cardbox">
    <div class="title">
      <div class="title_left">
        <slot name="sc_name">

        </slot>
        <div class="code">
          <slot name="sc_code">

          </slot>
        </div>
      </div>
      <div class="title_right">
        <h3 style="color: red">推荐专业：</h3>
        <slot name="major_name">

        </slot>
        <div class="code">
          <slot name="major_code">

          </slot>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="bottom_box">
        <slot name="low_rank">

        </slot>
      </div>
      <div class="plan_box">
        <slot name="plan_num">

        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend"
  }
</script>

<style scoped>
  #cardbox{
    margin: 10px;
    /*background-color: green;*/
    height: 140px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    color: #303133;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    transition: box-shadow 1s;
    /*cursor: pointer;*/
  }
  #cardbox:hover{
    box-shadow: 10px 10px 5px gray;
  }
  .title{
    height: 72%;
    width: auto;
    display: flex;
    flex-direction: row;
  }
  .content{
    flex-grow: 1;
  }
  .title_left{
    padding: 8px;
    width: 50%;
  }
  .title_right{
    overflow: hidden;
    padding: 10px;
    flex-grow: 1;
  }
  .title h2{
    margin-top: 2px;
    margin-left: 10px;
    margin-bottom: 0;
    font-size: 30px;
    display: inline-block;
  }
  .code{
    display: inline-block;
    margin-left: 10px;
    font-size: small;
    color: gray;
  }
  .content{
    padding-left: 5px;
  }
  .bottom_box{
    display: inline-block;
    margin-top: 8px;
    margin-left: 10px;
    padding-right: 7px;
    border-right:1.4px solid #888888;
  }
  h3{

    margin-top: 0;
    margin-bottom: 0;
  }
  .plan_box{
    display: inline-block;
    margin-left: 7px;
  }
</style>