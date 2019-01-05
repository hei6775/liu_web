<template>
  <div class="show-main">
    <img v-bind:src="img1" v-on:click="handleChange(1)"></img>
    <img v-bind:src="img2" v-on:click="handleChange(2)"></img>
    <img v-bind:src="img3" v-on:click="handleChange(3)"></img>
    <img v-bind:src="img4" v-on:click="handleChange(4)"></img>
  </div>
</template>

<script>
  import {pathresolve,imgList} from "@/config/config.js"
  export default {
    name: "shows",
    data() {
      return {
        img1:require("@/assets/hai1.jpg"),
        img2:require("@/assets/hai1.jpg"),
        img3:require("@/assets/hai1.jpg"),
        img4:require("@/assets/hai1.jpg"),
        imgList
      }
    },
    created() {
    },
    methods: {
      handleChange :function (i) {
          this.imgList.sort(function(){
              return 0.5-Math.random()
          });
          if (i ===1) {
            this.img1 = this.imgList[0];
          }else if (i === 2) {
            this.img2 = this.imgList[0];
          }else if (i===3) {
            this.img3 = this.imgList[0];
          }else if (i===4){
            this.img4 = this.imgList[0];
          }

      }
    },
  };
</script>
<style scoped>
  .show-main {
    border: 3px solid slategray;
    margin: 15px;
    height: 670px;
    border-radius: 10px;
  }
  img {
    width: 50%;
    height: 50%;
  }
</style>
