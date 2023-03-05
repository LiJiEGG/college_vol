<template>
  <div :style="{height:this.height,width:this.width}" class="cardsty">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Card",
    data(){
      return{

      }
    },
    methods:{

    },
    props:{
      height: String,
      width: String
    }
  }
</script>

<style scoped>
  .cardsty{
    height: 170px;
    width: 170px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #EBEEF5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
</style>