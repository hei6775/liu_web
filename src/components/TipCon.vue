<template>
  <Tooltip :content="content" :placement="placement"> </Tooltip>
</template>

<script>
  export default {
    name: "TipCon",
    data() {
      return {};
    },
    props: {
      content: {
        type: String,
        default: ""
      },
      placement: {
        type: String,
        default: "bottom"
      }
    },
    created() {
      console.log(this.content);
    }
  };
</script>

<style scoped></style>
