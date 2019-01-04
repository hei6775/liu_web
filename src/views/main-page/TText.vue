<template>
  <div class="ttext-main">
    <div class="ttext-container">
      <div
        class="ttext-container-item"
        v-for="(v, i) in appList"
        :key="i"
        :class="[v.name]"
        @click="toCenter(v.link)"
      >
        <img :src="v.src" alt="" />
        <p>{{ v.title }}</p>
        <div class="bg"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ttext",
    data() {
      return {
        IMG_URL: process.env.IMG_URL,
        List: [
          require("@/assets/app9.jpg"),
          require("@/assets/app3.jpg"),
          require("@/assets/app4.jpg"),
          require("@/assets/app5.jpg"),
          require("@/assets/app6.jpg"),
          require("@/assets/app8.jpg")
        ],
        appList: [
          {
            name: "one",
            title: "看攻略",
            src: require("@/assets/film-icon.png"),
            link: "videoGallery"
          },
          {
            name: "two",
            title: "看地图",
            src: require("@/assets/music-icon.png"),
            link: ""
          },
          {
            name: "thr",
            title: "看帮助",
            src: require("@/assets/game-icon.png"),
            link: "games"
          },
          {
            name: "four",
            title: "买门票",
            src: require("@/assets/news-icon.png"),
            link: "news"
          },
          {
            name: "fif",
            title: "看简介",
            src: require("@/assets/duanzi-icon.png"),
            link: "jokes"
          }
        ]
      };
    },
    computed: {
      bgList() {
        // 随机排序
        this.List.sort(function() {
          return 0.5 - Math.random();
        });
        return this.List;
      }
    },
    methods: {
      toCenter(link) {
        this.$router.push({ path: link });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .ttext-container {
    width: 100%;
    height: 100%;
    /* position: absolute; */
    left: 0;
    top: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    background: url("F:\\web\\guidePro\\guidePro\\src\\assets\\app3.jpg");
    box-sizing: border-box;
    .ttext-container-item {
      background-color: rgba(0, 0, 0, 0.3);
      text-align: center;
      color: #fff;
      font-size: 26px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border-radius: 5px;
      p {
        line-height: 26px;
        font-family: "YouYuan", "KaiTi";
        transition: transform 0.5s;
        transform: scale(1);
      }
      img {
        width: 140px;
        margin-bottom: 20px;
        transition: transform 0.5s;
        transform: rotateY(0);
      }
      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        transition: transform 0.3s;
        transform: translateY(100%);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
    .one {
      width: 300px;
      height: 350px;
      margin: 30px 60px;
    }
    .two {
      width: 400px;
      height: 430px;
      margin: 10px 20px;
    }
    .thr {
      width: 430px;
      height: 260px;
      margin: 18px;
    }
    .four {
      width: 400px;
      height: 200px;
      margin: 8px;
    }
    .fif {
      width: 340px;
      height: 200px;
      margin: 15px;
    }
  }
</style>
