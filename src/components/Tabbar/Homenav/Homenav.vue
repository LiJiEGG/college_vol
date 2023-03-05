<template>
  <div id="navtabbar">
    <div class="logo">
      <img src="../../../assets/logoimg/logowhite.png" alt="">
    </div>
    <slot></slot>
<!--    <input type="search">-->
  </div>
</template>

<script>
  export default {
    name: "Homenav"
  }
</script>

<style >
  #navtabbar{
    display: flex;
    height: 70px;
    left: 0;
  }
  /*#navtabbar input{*/
  /*  align-self: center;*/
  /*  height: 30px;*/
  /*  margin-left: 20px;*/
  /*  border-radius: 5px;*/
  /*  color: white;*/
  /*  border-color: rgba(0,0,0,.1);*/
  /*  background-color: rgba(0,0,0,.0);*/
  /*}*/
  .logo{
    /*height: 60px;*/
    width:140px;
    margin-top: 9px;
    margin-left:8px;
  }
  img{
    width: 100%;
    height: auto;
  }
</style>