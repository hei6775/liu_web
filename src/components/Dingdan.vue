<template>
  <div class="dingdan-main">
    <div class="dingdan-pane">
      <div class="dingdan-name">购买者：name</div>
      <div class="dingdan-tele">联系方式：13800080000</div>
      <div class="dingdan-ttype">门票类型：成年人</div>
      <div class="dingdan-num">门票张数：1张</div>
      <div class="dingdan-money">门票价格：800</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dingdan",
    props: {
      name: String,
      tele: String,
      ttype: String,
      num: Number,
      money: Number
    }
  };
</script>

<style scoped>
  .dingdan-pane {
    margin: 10px;
    margin-left: 30px;
    height: 80px;
    border: 3px solid slategray;
    border-radius: 8px;
    font-family: "YouYuan", "KaiTi";
  }
  .dingdan-name {
    float: left;
    position: absolute;
    margin-left: 10px;
    font-size: 18px;
  }
  .dingdan-tele {
    float: right;
    position: absolute;
    margin-left: 140px;
    font-size: 18px;
  }
  .dingdan-ttype {
    float: right;
    position: absolute;
    margin-top: 40px;
    margin-left: 10px;
    font-size: 18px;
  }
  .dingdan-num {
    float: left;
    position: absolute;
    margin-left: 170px;
    margin-top: 40px;
    font-size: 18px;
  }
  .dingdan-money {
    float: left;
    position: absolute;
    margin-left: 310px;
    margin-top: 40px;
    font-size: 18px;
  }
</style>
