<template>
  <div class="history">
    <div class="header">Message history</div>
    <MessageHistory />
  </div>
</template>
<script>
import MessageHistory from "@/components/MessageHistory/index.vue";
export default {
  name: "History",
  components: {
    MessageHistory,
  },
};
</script>
<style lang="scss" scoped>
.history {
  padding: 0 20px;
}
</style>
