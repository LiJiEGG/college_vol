<template>
  <div id="cardbox" class="cardAct">
    <div class="leftscimg">
      <slot name="img"></slot>
    </div>
    <div class="rightcardinfo">
      <div class="cardtitle">
        <div class="cardtitleleft">
          <div class="scname" style="cursor: pointer">
            <slot name="name"></slot>
          </div>
          <div class="scaddress">
            <slot name="address"></slot>
          </div>
        </div>
        <div class="cardtitleright"></div>
      </div>
      <div class="cardfoot">
        <slot name="ul"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Schoolcard"
  }
</script>

<style scoped>
  #cardbox{
    margin: 10px;
    /*background-color: green;*/
    height: 150px;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    color: #303133;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    transition: box-shadow 1s;
    /*cursor: pointer;*/
  }
  .leftscimg{
    width: 120px;
    /*background-color: #FFA99F;*/
  }
  .rightcardinfo{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .cardfoot{
    height: 30px;
  }
  .cardtitle{
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
  .cardtitleleft{
    position: relative;
    text-align: left;
    width: 80%;
  }
  .cardtitleright{
    flex-grow: 1;
  }
  .scname{
    margin-left: 15px;
  }
  .scaddress{
    position: absolute;
    border: 1.5px solid deepskyblue;
    border-radius: 4px;
    left: 18%;
  }
  p{
    margin: 0;
    font-size: 14px;
  }
  ul,li{
    /*list-style-image: url("../../../../assets/Tabbar/schoolcard/liststyle.svg");*/
    list-style: none;
    float: left;
    margin-top: 6px;
    margin-left: 25px;
    font-size: small;

  }
  .cardfoot ul{
    margin: 0;
    padding: 0;
  }
  #cardbox:hover{
    box-shadow: 10px 10px 5px gray;
  }
  img{
    margin: 10px;
    width: 110px;
  }
  h2:hover{
    color: blue;
  }
</style>