<template>
    <div class="Counsellingitem">
        <div class="problem">
            <slot name="problem"></slot>
        </div>
        <div class="answer">
            <slot name="answer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Counsellingitem"
    }
</script>

<style scoped>
    .Counsellingitem{
        height: 120px;
        text-align: center;
        color:red;
        width: 85%;
        border: 4px solid #EDEEFD;
        margin-top: 20px;
        margin-left: 80px;
        border-radius: 5%;
    }
    .problem{
        height:90%;
        width: 80%;
        border: 1px solid red;
        margin-top: 5px;
        margin-left: 5px;
        float: left;
    }
    .answer{
        height: 40%;
        width:15%;
        border: 1px solid red;
        margin-top: 60px;
        margin-right: 3px;
        float: right;
    }
</style>