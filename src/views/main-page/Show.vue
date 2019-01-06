<template>
  <div class="show-main">

    <img
      v-bind:src="img1"
      v-on:click="handleChange(1)"
    ></img>

    <img
      v-bind:src="img2"
      v-on:click="handleChange(2)"
    ></img>

    <img
      v-bind:src="img3"
      v-on:click="handleChange(3)"
    ></img>

    <img
      v-bind:src="img4"
      v-on:click="handleChange(4)"
    ></img>
  </div>
</template>

<script>
import show_bg1 from "@/assets/show/show_bg1.jpg";
import show_bg2 from "@/assets/show/show_bg2.jpg";
import show_bg3 from "@/assets/show/show_bg3.jpg";
import show_bg4 from "@/assets/show/show_bg4.jpg";
import show_bg5 from "@/assets/show/show_bg5.jpg";
import show_bg6 from "@/assets/show/show_bg6.jpg";
export default {
  name: "shows",
  data() {
    return {
      img1: require("@/assets/show/show_bg1.jpg"),
      img2: require("@/assets/hai1.jpg"),
      img3: require("@/assets/hai1.jpg"),
      img4: require("@/assets/hai1.jpg"),
      imgList: [show_bg1, show_bg2, show_bg3, show_bg4, show_bg5, show_bg6]
    };
  },
  created() {},
  methods: {
    handleChange: function(i) {
      console.log(i);
      let max = this.imgList.length;
      let temp = parseInt(Math.random() * max, 10);

      console.log(temp);
      if (i == 1) {
        this.img1 = this.imgList[temp];
      } else if (i == 2) {
        this.img2 = this.imgList[temp];
      } else if (i == 3) {
        this.img3 = this.imgList[temp];
      } else if (i == 4) {
        this.img4 = this.imgList[temp];
      }
    }
  }
};
</script>
<style scoped>
.show-main {
  border: 3px solid slategray;
  margin: 15px;
  height: 670px;
  border-radius: 10px;
  overflow: hidden;
}

img {
  width: 50%;
  min-width: 50%;
}
</style>
