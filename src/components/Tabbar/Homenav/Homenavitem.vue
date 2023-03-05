<template>
  <div class="navitem" @click="itemClick">
    <div><h3 :class="{ active: path=='/'}" class="h3"><slot></slot></h3></div>
  </div>
</template>
<script>
  export default {
    name: "Homenavitem",
    data() {
      return{
      }
    },
    props:{
      path: String,
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style >
  .navitem{
    color: white;
    text-align: center;
    /*flex: 0px;*/
    margin-left: 20px;
    cursor: pointer;
  }
  .h3{
    vertical-align: initial;
    font-weight: normal;
  }
  div .navitem h3:hover {
    text-shadow: 5px 5px 5px rgb(120, 120, 120);
    font-weight: bolder;
  }
  .navitem .active{
    text-shadow: 5px 5px 5px rgb(120, 120, 120);
    font-weight: bolder;
  }
</style>