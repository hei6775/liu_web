<template>
  <Panel name="everyone.name">
    {{ everyone.title }}
    <p slot="content">{{ everyone.content }}</p>
  </Panel>
</template>
<script>
  export default {
    name: "tellsCon",
    data() {
      return {};
    },
    props: {
      everyone: {
        Type: Object,
        default: () => ({})
      }
    }
  };
</script>

<style scoped></style>
