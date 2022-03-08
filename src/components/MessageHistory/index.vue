<template>
  <div class="message-history">
    <div class="card"></div>
  </div>
</template>
<script>
export default {
  name: "MessageHistory",
};
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 760px) {
  .message-history {
    display: flex;
    justify-content: center;
    .card {
      width: 460px;
    }
  }
}
</style>
