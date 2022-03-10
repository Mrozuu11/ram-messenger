<template>
  <div class="message-form">
    <form action="/" class="form mobile-padding">
      <div class="header">Send a new message</div>
      <div :class="['input-group', { error: !titleCheck }]">
        <label for="title" class="label">Title</label>
        <input
          v-model="title"
          id="title"
          placeholder="Enter title here..."
          type="text"
          :class="['input', { error: !titleCheck }]"
        />
        <span v-if="!titleCheck" class="error-message"
          >Please enter the title</span
        >
      </div>
      <div :class="['input-group', { error: !messageCheck }]">
        <label for="message" class="label">Message</label>
        <textarea
          v-model="message"
          id="message"
          placeholder="Enter message here..."
          :class="['input', { error: !messageCheck }]"
          required
        /><span v-if="!messageCheck" class="error-message"
          >Message is required</span
        >
      </div>
      <div :class="['input-group', { error: !characterCheck }]">
        <label for="character-select" class="label">Character</label>
        <el-select
          v-model="characterId"
          :popper-append-to-body="false"
          value-key="id"
          placeholder="Pick a character"
          id="character-select"
          :class="['input', 'input-character', { error: !characterCheck }]"
        >
          <el-option
            v-for="character in characters"
            :key="character.id"
            :label="character.name"
            :value="character.id"
          >
          </el-option>
        </el-select>
        <span v-if="!characterCheck" class="error-message"
          >Pick a character</span
        >
      </div>
      <div class="btn-wrapper">
        <button
          @click="
            handleSendMessage();
            toggleIsSubmitted();
          "
          type="button"
          class="send-btn"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MessageForm",
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isSubmitted: false,
      title: "",
      message: "",
      characterId: null,
    };
  },
  methods: {
    ...mapActions(["updateMessages"]),
    toggleIsSubmitted() {
      this.isSubmitted = true;
    },
    handleSendMessage() {
      const character = this.characters.find(
        (character) => character.id === this.characterId
      );
      const messageObject = {
        id: this.messageId,
        title: this.title,
        message: this.message,
        date: new Date(Date.now()),
        characterName: character?.name,
        characterImg: character?.image,
      };
      if (this.isSubmitted && this.checkForm) {
        this.updateMessages([...this.messages, messageObject]);
        alert(`Message sent to: ${character?.name}`);
        location.reload();
        /* this.$router.push("/history"); */
      }
    },
  },
  computed: {
    ...mapGetters(["messages"]),
    messageId() {
      return this.messages?.forEach((item, i) => {
        item.id = i + 1;
      });
    },
    titleCheck() {
      const character = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
      if (this.isSubmitted) {
        if (
          !character.test(this.title) &&
          this.title.length >= 3 &&
          this.title.length <= 32
        ) {
          return true;
        }
        return false;
      }
      return true;
    },
    messageCheck() {
      if (this.isSubmitted) {
        if (this.message.length > 0 && this.message.length < 256) {
          return true;
        }
        return false;
      }
      return true;
    },
    characterCheck() {
      if (this.isSubmitted) {
        if (this.characterId) {
          return true;
        }
        return false;
      }
      return true;
    },
    checkForm() {
      return this.titleCheck && this.messageCheck && this.characterCheck
        ? true
        : false;
    },
  },
};
</script>

<style scoped lang="scss">
@media only screen and (min-width: 760px) {
  .message-form {
    display: flex;
    justify-content: center;
    .form {
      width: 460px;
    }
  }
}
.message-form {
  height: 100%;
  .form {
    .input-group {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 28px;
      font-size: $small-font-size;
      .label {
        text-align: left;
      }
      .input {
        background: white;
        border: 1px solid $light-grey;
        outline: none;
        font-family: inherit;
        font-size: $small-font-size;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 10px 14px;
        margin-top: 12px;

        &-character {
          border: none;
          padding: 0;
        }
      }
      .error-message {
        font-size: 12px;
        margin-top: 10px;
        line-height: 13px;
      }
      #message {
        height: 148px;
        resize: none;
      }
    }
    .btn-wrapper {
      display: flex;
      justify-content: flex-end;
      .send-btn {
        font-family: inherit;
        font-size: inherit;
        border-radius: 19px;
        border: none;
        background: $secondary-light-blue;
        color: white;
        width: 90px;
        height: 38px;
        cursor: pointer;
      }
    }
  }
}
</style>
