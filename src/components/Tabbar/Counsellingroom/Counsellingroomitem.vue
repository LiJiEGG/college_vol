<template>
    <div class="Counsellingroomitem">
        <slot name="slot_img"></slot>
        <slot name="slot_text"></slot>
    </div>
</template>

<script>
    export default {
        name: "Counsellingroomitem"
    }
</script>

<style scoped>
    .Counsellingroomitem{
        height: 500px;
        text-align: center;
        color:red;
        width: 85%;
        border: 4px solid #EDEEFD;
        margin-top: 20px;
        margin-left: 80px;
    }
</style>