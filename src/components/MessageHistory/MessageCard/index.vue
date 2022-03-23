<template>
  <div class="message-card">
    <div class="message-card__title">{{ sentMessage.title }}</div>
    <div class="message-card__character">
      <div class="character__img">
        <img
          :src="sentMessage.character.img"
          :alt="sentMessage.character.name"
        />
      </div>
      <div class="character__text">
        <div>Sent to: {{ sentMessage.character.name }}</div>
        <div>Date: {{ sentMessage.date }}</div>
      </div>
    </div>
    <div class="message-card__message hide-scrollbar">
      {{ sentMessage.message }}
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageCard",
  props: {
    sentMessage: {
      typre: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.message-card {
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 24px;
  padding-bottom: 20px;
  margin-bottom: 36px;
  .message-card__title {
    font-size: $small-font-size;
    font-weight: 600;
    height: 10px;
  }
  .message-card__character {
    display: flex;
    height: 48px;
    gap: 16px;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 20px;
    .character__img {
      width: 48px;
      height: 48px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 24px;
      }
    }
    .character__text {
      font-size: $small-font-size;
    }
  }
  .message-card__message {
    height: 240px;
    overflow: scroll;
  }
}
@media only screen and (min-width: 760px) {
  .message-card {
    padding-bottom: 24px;
    .message-card__message {
      height: 180px;
    }
  }
}
</style>
