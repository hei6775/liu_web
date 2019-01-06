<template>
  <div class="demo-carcon">
    <Carousel
      autoplay
      v-model="value2"
      loop
    >
      <CarouselItem>
        <div class="demo-carousel"><img src="@/assets/app5.jpg" /></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="@/assets/bg2.jpg" /></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="@/assets/app6.jpg" /></div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
export default {
  name: "CarouselCon",
  data() {
    return {
      value2: 0
    };
  }
};
</script>
<style lang="less" scoped>
.demo-carcon .ivu-carousel-list {
  width: 100%;
  height: 100%;
}
.demo-carousel {
  height: 700px;
  overflow: hidden; /*隐藏溢出部分*/
}
img {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
</style>
