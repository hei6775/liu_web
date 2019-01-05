<template>
  <div class="tell-main">
    <Collapse v-model="value1">
      <template v-for="item in tellsdatas">
        <Panel>
          {{ item.title }}
          <p slot="content" class="tell-content">{{ item.content }}</p>
        </Panel>
      </template>
    </Collapse>
  </div>
</template>
<script>
  import tellsCon from "@/components/TellsCon.vue";
  import { tellsdatas } from "@/config/config.js";
  export default {
    name: "tells",
    data() {
      return {
        value1: "1",
        tellsdatas
      };
    },
    components: {
      tellsCon
    },
    created() {
      console.log(tellsdatas);
    }
  };
</script>
<style scoped>
  .tell-main {
    margin: 10px 30px;
    font-size: 20px;
    font-family: "YouYuan", "KaiTi";
  }
  .tell-content {
    text-indent: 2em;
    font-size: 16px;
  }
</style>
