<template>
  <div class="intro-main">
    <img src="@/assets/hai1.jpg" class="intro-img" />
    <p class="intro-content">
      福州，别称榕城，简称“榕”，隶属于福建省，位于福建省东部、闽江下游及沿海地区，是福建省省会，福建省的政治、文化、交通中心，海峡西岸经济区中心城市之一。福州建城于公元前202年，历史上曾长期作为福建的政治中心。是中国东南沿海重要都市、东部战区陆军机关驻地。福州地貌属典型的河口盆地，盆地四周被群山峻岭所环抱，其海拔多在600~1000米之间。
      福州是首批14个对外开放的沿海港口城市之一，海上丝绸之路门户以及中国（福建）自由贸易试验区三片区之一；福州也是近代中国最早开放的五个通商口岸之一，福州马尾是中国近代海军的摇篮，中国船政文化的发祥地；曾获“中国优秀旅游城市”、“国家卫生城市”、“滨江滨海生态园林城市”、“国家环保模范城”、“全国双拥模范城市”、“国家历史文化名城”、“全国文明城市”等称号。
      2018年福州6个市辖区、1个县级市、5个县，其中市区面积1786平方公里，建成区面积260平方公里，城镇化率64.8%。
      2016年末全市常住人口757万人，全市海域总面积11.09万平方公里，海岸线长1137公里，占福建省的1/3，当地居民以汉族的闽海系族群为主，通行闽东语福州方言。
      2018年12月，2018中国大陆最佳商业城市排名第25名，获评气候生态类国家气候标志。
    </p>
  </div>
</template>

<script>
  import introCon from "@/components/IntroCon.vue";
  export default {
    name: "intro"
  };
</script>

<style scoped>
  .intro-main {
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 20px;
    margin-right: 20px;
    border: 5px solid slategray;
    border-radius: 8px;
    height: 650px;
  }
  .intro-img {
    float: left;
    width: 250px;
    height: 250px;
    padding: 10px;
    border-radius: 8px;
  }
  .intro-content {
    padding: 15px;
    font-family: "YouYuan", "KaiTi";
    font-size: 18px;
    text-indent: 2em;
    line-height: 30px;
    /* letter-spacing:1px;  文字间距 */
  }
</style>
