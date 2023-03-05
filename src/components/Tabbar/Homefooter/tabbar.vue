<template>
  <div class="swiper">
      <img
        @click="changeRouter(index)"
        class="image"
        v-for="(item, index) of images"
        :key="index"
        :src="item.src"
    />
  </div>
</template>

<script>
export default {
  name: "swiper",
  data() {
    return {
      images: [
        {
          url: "https://www.sdzk.cn/",
          src: "https://img2.baidu.com/it/u=398004260,4143519367&fm=15&fmt=auto&gp=0.jpg",
          title: "山东省教育招生考试院",
        },
        {
          url: "https://www.sdzk.cn/",
          src: "https://img2.baidu.com/it/u=3610711259,2674459423&fm=15&fmt=auto&gp=0.jpg",
          title: "山东省教育招生考试院",
        },
        {
          url: "https://www.sdzk.cn/",
          src: "https://img0.baidu.com/it/u=1381649110,709591301&fm=15&fmt=auto&gp=0.jpg",
          title: "山东省教育招生考试院",
        },
        {
          url: "https://www.sdzk.cn/",
          src: "https://img0.baidu.com/it/u=683315811,1255480716&fm=15&fmt=auto&gp=0.jpg",
          title: "山东省教育招生考试院",
        },
        {
          url: "https://www.sdzk.cn/",
          src: "https://img0.baidu.com/it/u=683315811,1255480716&fm=15&fmt=auto&gp=0.jpg",
          title: "山东省教育招生考试院",
        },
        {
          url: "https://www.sdzk.cn/",
          src: "https://img0.baidu.com/it/u=683315811,1255480716&fm=15&fmt=auto&gp=0.jpg",
          title: "山东省教育招生考试院",
        },
      ],
    };
  },
  methods: {
    changeRouter(index) {
      // console.log(this.images[index].url);
      window.open(this.images[index].url)
    },
  },
  mounted() {
    setInterval(() => {
      [this.images[0], this.images[this.images.length]] = [
        this.images[this.images.length],
        this.images[0],
      ];
      this.images.splice(0, 1);
      // console.log(this.images);
    }, "9000");
  },
};
</script>

<style scoped>
  .swiper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    padding: 20px;
}
  .image {
    flex: 1px;
    border-radius: 5px;
    width: 240px;
    height: 125px;
    margin-right: 9px;
    cursor: pointer;
}
</style>