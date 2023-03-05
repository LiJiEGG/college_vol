<template>
    <div class="main">
             <div :class="{dialog:propsItem.rgba}" v-if="propsItem.isMask">
                 <div class="content" v-bind:style="propsItem.widthHeight">
                    <span class="close big" @click="close">X</span>
                     <h1 class="title">{{propsItem.title}}</h1>
                    <div class="mainContent">
                        {{propsItem.contents}}
                         <slot></slot>
                    </div>

                </div>
             </div>
           </div>
</template>

<script>
    export default {
        name: "Dialog",
        props:{
                 //   接受父组件传的值
                   propsItem:{
                  type:Object
               }
       },
       data(){
               return {

                  }
       },
       methods:{
               close(){
                       this.propsItem.isMask = false
                   },
               okCallback(){
                       this.$emit('child-ok')
                       this.propsItem.isMask = false
                   },
               cancelCallback(){
                      this.$emit('child-cancel')
                       this.propsItem.isMask = false
                   }
           }
    }
</script>

<style scoped>

        .mainContent{
                        width: 100%;
                       height: 65%;
                       margin-bottom: 5%;
                   }
         .dialog{
                        background-color: rgba(0,0,0,0.8);
                       position:absolute;
                       top: 0;
                       left:0;
                       width: 100%;
                       height: 100%;
                  }
        .close.big {
                       -webkit-transform: scale(2);
                       -moz-transform: scale(2);
                      -ms-transform: scale(2);
                       -o-transform: scale(2);
                        transform: scale(2);
                   }
         .close{
                        position: absolute;
                        display: inline-block;
                        overflow: hidden;
                        right: 20px;
                        top:20px;
                        color:#000;
                    }
         .close:hover{
             cursor:pointer;
         }
         .content{
             position:absolute;
             top:50%;
             left:50%;
             transform:translate(-50%,-50%);
             background-color: #fff;
             width: 500px;

             border-radius: 4%;
                        padding: 30px;
                        z-index: 999;
                        text-align: left;
                        box-shadow:5px 5px 13px #ccc;
                    }
         .cancel,.ok{
                        position: absolute;
                        bottom: 10px;
                         right: 10px;
                     }
         .ok{
                        right:100px;
                    }
</style>