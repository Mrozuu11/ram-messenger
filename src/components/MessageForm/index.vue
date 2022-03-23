<template>
  <div class="message-form">
    <form action="/" class="message-form__form mobile-padding">
      <div class="form__header header">Send a new message</div>
      <div
        :class="['form__field', { error: isSubmitted && titleValidationError }]"
      >
        <label for="title" class="field__label">Title</label>
        <input
          v-model="title"
          id="title"
          placeholder="Enter title here..."
          type="text"
          :class="[
            'field__input',
            { error: isSubmitted && titleValidationError },
          ]"
        />
        <span
          v-if="isSubmitted && titleValidationError"
          class="error-message"
          >{{ titleValidationError }}</span
        >
      </div>
      <div
        :class="['form__field', { error: isSubmitted && !messageValidation }]"
      >
        <label for="message" class="field__label">Message</label>
        <textarea
          v-model="message"
          id="message"
          placeholder="Enter message here..."
          :class="[
            'field__input',
            { error: isSubmitted && !messageValidation },
          ]"
          required
        /><span v-if="isSubmitted && !messageValidation" class="error-message"
          >Message up to 256 characters is required</span
        >
      </div>
      <div
        :class="['form__field', { error: isSubmitted && !characterValidation }]"
      >
        <label for="character-select" class="field__label">Character</label>
        <el-select
          v-model="characterId"
          :popper-append-to-body="false"
          value-key="id"
          placeholder="Pick a character"
          id="character-select"
          :class="[
            'field__input',
            'field__input--character',
            { error: !characterValidation },
          ]"
        >
          <el-option
            v-for="character in characters"
            :key="character.id"
            :label="character.name"
            :value="character.id"
          >
          </el-option>
        </el-select>
        <span v-if="isSubmitted && !characterValidation" class="error-message"
          >Pick a character</span
        >
      </div>
      <div class="button">
        <button
          @click="
            handleSendMessage();
            toggleIsSubmitted();
          "
          type="button"
          class="button__send-btn"
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
    calculateMessageId() {
      return this.messages.length;
    },
    handleSendMessage() {
      const character = this.characters.find(
        (character) => character.id === this.characterId
      );
      const messageObject = {
        id: this.calculateMessageId(),
        title: this.title,
        message: this.message,
        date: new Date(Date.now())
          .toLocaleString()
          .split(",")[0]
          .replaceAll("/", "."),
        character: {
          name: character?.name,
          img: character?.image,
        },
      };
      if (this.isSubmitted && this.formIsValid) {
        this.updateMessages([...this.messages, messageObject]);
        alert(`Message sent to: ${character?.name}`);
        location.reload();
      }
    },
  },
  computed: {
    ...mapGetters(["messages"]),
    titleRegex() {
      // regex to not allow special characters
      return /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    },
    titleValidationError() {
      if (this.titleRegex.test(this.title)) {
        return "The title is in incorrect format";
      }
      if (this.title.length < 3) {
        return "Title is too short";
      }
      if (this.title.length > 32) {
        return "Title is too long";
      }
      return null;
    },
    messageValidation() {
      return this.message.length > 0 && this.message.length < 256;
    },
    characterValidation() {
      return !!this.characterId;
    },
    formIsValid() {
      return !this.titleValidationError &&
        this.messageValidation &&
        this.characterValidation
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
    .message-form__form {
      width: 460px;
    }
  }
}
.message-form {
  height: 100%;
  .message-form__form {
    .form__field {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 28px;
      font-size: $small-font-size;
      .field__label {
        text-align: left;
      }
      .field__input {
        background: white;
        border: 1px solid $light-grey;
        outline: none;
        font-family: inherit;
        font-size: $small-font-size;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 10px 14px;
        margin-top: 12px;

        &--character {
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
    .button {
      display: flex;
      justify-content: flex-end;
      .button__send-btn {
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
