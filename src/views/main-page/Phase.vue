<template>
  <div><phaseCon :dingdandata="dingdandata"></phaseCon>></div>
</template>

<script>
  import phaseCon from "@/components/PhaseCon.vue";
  import { dingdandata } from "@/config/config.js";
  export default {
    name: "phase",
    data() {
      return {
        dingdandata
      };
    },
    components: {
      phaseCon
    }
  };
</script>
