<template>
  <div id="navitem">
<!--      <h3 class="h3" :class="{active: isActive}">-->
<!--        <slot></slot>-->
<!--      </h3>-->
      <span @click="itemClick" :class="{active: isActive}">
        <slot>
        </slot>
      </span>
  </div>
</template>

<script>
  export default {
    name: "Mainnavitem",
    props:{
      path: String
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
        // console.log(this.$route.path.indexOf(this.path))
      }
    }
  }
</script>

<style scoped lang="stylus">
  #navitem{
    position relative;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 35px;
  }
  h3{
    font-weight: bold;
    transition: border-bottom 0.3s ease;
    /*vertical-align: initial;*/
  }
  .h3:hover{
    border-bottom: 3px solid skyblue;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  .active{
    border-bottom: 2px solid deepskyblue;
  }
  span{
    font-size: large;
    font-family Unito;
  }
  span {
  &:before,
  &:after {
     content: "";
     position: absolute;
     width: 0%;
     height: 2px;
     bottom: -2px;
     margin-top: -0.5px;
     background: deepskyblue;
   }

  &:before {
     left: -0.8px;
   }
  &:after {
     right: 0.8px;
     background: deepskyblue;
     transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
   }

  &:hover {
  &:before {
     background: deepskyblue;
     width: 100%;
     transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
   }

  &:after {
     background: transparent;
     width: 100%;
     transition: 0s;
   }
  }
  }
</style>