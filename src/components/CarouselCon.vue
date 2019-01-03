<template>
  <div class="demo-carcon">
    <Carousel
      v-model="value1"
      autoplay=false
    >
      <CarouselItem>
        <div class="demo-carousel"><img src="@/assets/temple.jpg"></div>
      </CarouselItem>
      <!-- <CarouselItem>
        <div class="demo-carousel"><img src="@/assets/wine.jpg"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="@/assets/moondoor.jpg"></div>
      </CarouselItem> -->
    </Carousel>
  </div>
</template>
<script>
export default {
  name: "CarouselCon",
  data() {
    return {
      value1: 0
    };
  }
};
</script>
<style lang="less">
.demo-carcon .ivu-carousel {
  width: 100%;
  height: 100%;
}
.demo-carousel {
  width: 100%;
  height: 100%;
}
</style>
