<template>
  <div class="new-message">
    <MessageForm v-if="getCharacters.length" :characters="getCharacters" />
  </div>
</template>

<script>
import MessageForm from "@/components/MessageForm/index.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: { MessageForm },
  methods: {
    ...mapActions(["fetchCharacters"]),
  },
  computed: {
    ...mapGetters(["fetchedCharacters"]),
    getCharacters() {
      return this.fetchedCharacters.response.status === 200
        ? this.fetchedCharacters.response.data.results
        : [];
    },
  },
  async mounted() {
    await this.fetchCharacters();
  },
};
</script>
<style lang="scss" scoped></style>
