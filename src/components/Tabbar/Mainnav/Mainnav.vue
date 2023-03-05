<template>
  <div id="navtabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Mainnav"
  }
</script>

<style scoped>
  #navtabbar{
    position: absolute;
    right: 0;
    display: flex;
    justify-content: flex-end;
    height: 70px;
    flex-direction: row;
    text-align: center;
    align-items: center;
  }
</style>