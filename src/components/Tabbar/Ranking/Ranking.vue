<template>
    <div class="rangking">
        <div class="rangkingitem"
             @mouseover="mouseover(index)"
             @mouseout="mouseout(index)"
             v-for="(item, index) of list"
             :key="index"
             v-show="item.src"
             @click="changelink(item.url)"
        >
            <span class="item_number" :class="{item_num1: index == 1 ,item_num2 : index == 2 , item_num3 : index == 3 }">{{ item.schoolid }}</span>
            <img :class="item.srcstyle" :src="item.src" />
            <div class="item_right">
                <span :class="item.rihtTitle">{{ item.schoolname }}</span>
                <span v-show="item.ifhiddentext" class="rihtText">{{
          item.schoolscore
        }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ranking",
        data() {
            return {
                index: "0",
                list: [
                    {},
                    {
                        schoolid: "1",
                        src: "http://47.94.8.95:8181/static/120.jpg",
                        srcstyle: "crcnoselected",
                        url: "120",
                        rihtTitle: "titlenoselected",
                        schoolname: "中国石油大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "2",
                        src: "http://47.94.8.95:8181/static/542.jpg",
                        url: "542",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        schoolname: "山东农业大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "3",
                        src: "http://47.94.8.95:8181/static/547.jpg",
                        srcstyle: "crcnoselected",
                        url: "547",
                        rihtTitle: "titlenoselected",
                        schoolname: "齐鲁工业大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "4",
                        src: "http://47.94.8.95:8181/static/622.jpg",
                        srcstyle: "crcnoselected",
                        url: "622",
                        rihtTitle: "titlenoselected",
                        schoolname: "山东师范大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "5",
                        src: "http://47.94.8.95:8181/static/535.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "535",
                        schoolname: "山东财经大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "6",
                        src: "http://47.94.8.95:8181/static/555.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "555",
                        schoolname: "鲁东大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "7",
                        src: "http://47.94.8.95:8181/static/507.jpg",
                        srcstyle: "crcnoselected",
                        url: "507",
                        rihtTitle: "titlenoselected",
                        schoolname: "青岛科技大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "8",
                        src: "http://47.94.8.95:8181/static/554.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "554",
                        schoolname: "烟台大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "9",
                        src: "http://47.94.8.95:8181/static/537.jpg",
                        srcstyle: "crcnoselected",
                        url: "537",
                        rihtTitle: "titlenoselected",
                        schoolname: "山东科技大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "10",
                        src: "http://47.94.8.95:8181/static/528.jpg" ,
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "528",
                        schoolname: "山东建筑大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "11",
                        src:"http://47.94.8.95:8181/static/526.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "526",
                        schoolname: "山东工商学院",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "12",
                        src: "http://47.94.8.95:8181/static/460.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "460",
                        schoolname: "河南科技大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "13",
                        src:"http://47.94.8.95:8181/static/173.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "173",
                        schoolname: "扬州大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "14",
                        src: "http://47.94.8.95:8181/static/86.jpg" ,
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "86",
                        schoolname: "江南大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "15",
                        src:"http://47.94.8.95:8181/static/79.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "79",
                        schoolname: "天津师范大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "16",
                        src: "http://47.94.8.95:8181/static/491.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "491",
                        schoolname: "青岛农业大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "17",
                        src: "http://47.94.8.95:8181/static/496.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "496",
                        schoolname: "临沂大学",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "18",
                        src:"http://47.94.8.95:8181/static/550.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "550",
                        schoolname: "泰山学院",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {
                        schoolid: "19",
                        src:"http://47.94.8.95:8181/static/1210.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "1210",
                        schoolname: "滨州学院",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },   {
                        schoolid: "20",
                        src:"http://47.94.8.95:8181/static/1246.jpg",
                        srcstyle: "crcnoselected",
                        rihtTitle: "titlenoselected",
                        url: "1246",
                        schoolname: "枣庄学院",
                        ifhiddentext: false,
                        schoolscore: "历年分数线详情",
                    },
                    {},
                ],
            };
        },
        methods: {
            changelink(id) {
                // console.log(event);
                let route_url = this.$router.resolve({path: '/search/college/' + id })
                window.open(route_url.href,'_blank');
                // this.$router.replace('/search/college/' +id);
            },
            mouseout(index) {
                this.list[index].ifhiddentext = false;
                this.list[index].srcstyle = "crcnoselected";
                this.list[index].rihtTitle = "titlenoselected";
            },
            mouseover(index) {
                // console.log(this.list[index]);
                this.index = index;
                this.list[index].ifhiddentext = true;
                this.list[index].srcstyle = "crcselected";
                this.list[index].rihtTitle = "titleselected";
                for (let i in this.list) {
                    this.list[i].ifhiddentext = false;
                    this.list[i].srcstyle = "crcnoselected";
                    this.list[i].rihtTitle = "titlenoselected";
                    this.list[index].ifhiddentext = true;
                    this.list[index].srcstyle = "crcselected";
                    this.list[index].rihtTitle = "titleselected";
                }
            },
        },
        mounted() {
            setInterval(() => {
                let temple = this.index - 1;
                if (this.index >= 1 && this.index <= this.list.length) {
                    this.list[temple].ifhiddentext = false;
                    this.list[temple].srcstyle = "crcnoselected";
                    this.list[temple].rihtTitle = "titlenoselected";

                    this.list[this.index].ifhiddentext = true;
                    this.list[this.index].srcstyle = "crcselected";
                    this.list[this.index].rihtTitle = "titleselected";
                }
                if (this.index !== this.list.length - 1) {
                    this.index++;
                } else {
                    this.index = "1";
                    this.list[this.list.length - 1].ifhiddentext = false;
                    this.list[this.list.length - 1].srcstyle = "crcnoselected";
                    this.list[this.list.length - 1].rihtTitle = "titlenoselected";
                }
            }, "1500");
        },
    };
</script>

<style scoped>
    .rangking {
        display: flex;
        flex-direction: column;
        width:200px;
    }

    .rangkingitem {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;
    }

    .crcnoselected {
        width: 20px;
        height: 20px;
    }

    .crcselected {
        width: 50px;
        height: 50px;
    }
    .rangking .item_num1{
        background-color: red;
    }
    .rangking .item_num2{
        background-color: #eb4910;
    }
    .rangking .item_num3{
        background-color: #eb9110;
    }
    .item_number {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 16px;
        width: 15px;
        font-size: 0.6vw;
        padding: 3px;
        background-color: #999;
        margin: 0 10px 0 20px;
        color: #fff;
        border-radius: 10px;
    }

    .item_right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
        text-align: left;
    }

    .rihtText {
        color: #999;
        font-size: 12px;
    }

    .titlenoselected {
        font-weight: bold;
        color: black;
    }

    .titleselected {
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100px;
        font-weight: bold;
        color: red;
    }
</style>