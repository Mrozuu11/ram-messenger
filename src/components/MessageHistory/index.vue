<template>
  <div class="message-history">
    <div class="message-history__card">
      <MessageCard
        v-for="message in sortedMessages"
        :key="message.id"
        :sent-message="message"
      />
    </div>
  </div>
</template>
<script>
import MessageCard from "@/components/MessageHistory/MessageCard/index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MessageHistory",
  components: {
    MessageCard,
  },
  methods: {
    ...mapActions(["updateMessages"]),
  },
  computed: {
    ...mapGetters(["sortedMessages"]),
  },
};
</script>
<style lang="scss" scoped>
.message-history {
  height: 100%;
}
@media only screen and (min-width: 760px) {
  .message-history {
    display: flex;
    justify-content: center;
    .message-history__card {
      width: 460px;
    }
  }
}
</style>
