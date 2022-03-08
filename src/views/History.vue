<template>
  <div class="history">
    <div class="header">Message history</div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "History",
  methods: {
    ...mapActions(["updateMessages"]),
  },
  computed: {
    ...mapGetters(["messages"]),
  },
};
</script>
<style lang="scss" scoped>
.history {
  padding: 0 20px;
}
</style>
