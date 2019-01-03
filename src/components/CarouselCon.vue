<template>
  <div class="demo-carcon">
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem>
        <div class="demo-carousel"><img src="@/assets/temple.jpg" /></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="@/assets/temple.jpg" /></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img src="@/assets/temple.jpg" /></div>
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
<style lang="less">
  .demo-carcon .ivu-carousel-list .demo-carousel {
    width: 100%;
    height: 100%;
  }
</style>
