<template>
  <div class="help-container">
    <div class="help-main">
      <h2>景区求助</h2>
      <h4>人身安全紧急求助热线：110</h4>
      <h4>火灾紧急求助热线：119</h4>
      <h4>景区保安处：5322567</h4>
      <h4 class="help-foot">Edit by hei。</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpCon",
  data() {
    return {
      IMG_URL: process.env.IMG_URL
    };
  }
};
</script>

<style lang="scss" scoped>
.help-container {
  width: 100%;
  box-sizing: border-box;
  height: 700px;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  background: url("~@/assets/app9.jpg");
  .help-main {
    width: 50%;
    height: 450px;
    padding-top: 30px;
    color: ivory;
    background-color: rgba(0, 0, 0, 0.3);
    font-family: "YouYuan", "KaiTi";
    font-size: 22px;
    .help-foot {
      margin-top: 30%;
      position: relative;
      text-align: right;
    }
  }
}
</style>
