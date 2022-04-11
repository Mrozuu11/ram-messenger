<template>
  <div class="message-form">
    <form action="/" class="message-form__form mobile-padding">
      <div class="form__header header">Send a new message</div>
      <div
        :class="[
          'message-form__field',
          { error: isSubmitted && titleValidationErrorMessage },
        ]"
      >
        <label for="title" class="message-form__label">Title</label>
        <input
          v-model="title"
          id="title"
          placeholder="Enter title here..."
          type="text"
          :class="[
            'message-form__input',
            { error: isSubmitted && titleValidationErrorMessage },
          ]"
        />
        <span
          v-if="isSubmitted && titleValidationErrorMessage"
          class="message-fomr__error-message"
          >{{ titleValidationErrorMessage }}</span
        >
      </div>
      <div
        :class="[
          'message-form__field',
          { error: isSubmitted && !messageValidation },
        ]"
      >
        <label for="message" class="message-form__label">Message</label>
        <textarea
          v-model="message"
          id="message"
          placeholder="Enter message here..."
          :class="[
            'message-form__input',
            { error: isSubmitted && !messageValidation },
          ]"
          required
        /><span
          v-if="isSubmitted && !messageValidation"
          class="message-form__error-message"
          >Message up to 256 characters is required</span
        >
      </div>
      <div
        :class="[
          'message-form__field',
          { error: isSubmitted && !characterValidation },
        ]"
      >
        <label for="character-select" class="message-form__label"
          >Character</label
        >
        <el-select
          v-model="characterId"
          :popper-append-to-body="false"
          value-key="id"
          placeholder="Pick a character"
          id="character-select"
          :class="[
            'message-form__input',
            'message-form__input--character',
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
        <span
          v-if="isSubmitted && !characterValidation"
          class="message-form__error-message"
          >Pick a character</span
        >
      </div>
      <div class="message-form__send">
        <button
          @click="submitMessage()"
          type="button"
          class="message-form__submit-btn"
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
    submitMessage() {
      this.isSubmitted = true;
      if (this.formIsValid) {
        this.handleSendMessage();
      }
    },
    generateRandomMessageId() {
      return Math.floor(Math.random() * 100);
    },
    handleSendMessage() {
      const character = this.characters.find(
        (character) => character.id === this.characterId
      );
      const messageObject = {
        id: this.generateRandomMessageId(),
        title: this.title,
        message: this.message,
        date: new Date(Date.now()).toLocaleString(),
        character: {
          name: character.name,
          img: character.image,
        },
      };
      this.updateMessages([...this.messages, messageObject]);
      alert(`Message sent to: ${character.name}`);
      location.reload();
    },
  },
  computed: {
    ...mapGetters(["messages"]),
    titleForbiddenCharactersRegex() {
      // regex to not allow special characters
      return /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    },
    titleValidationErrorMessage() {
      if (this.titleForbiddenCharactersRegex.test(this.title)) {
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
      return !this.titleValidationErrorMessage &&
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
    &__form {
      width: 460px;
    }
  }
}
.message-form {
  height: 100%;
  &__field {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
    font-size: $small-font-size;
  }
  &__label {
    text-align: left;
  }
  &__input {
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
  &__error-message {
    font-size: 12px;
    margin-top: 10px;
    line-height: 13px;
  }
  #message {
    height: 148px;
    resize: none;
  }
  &__send {
    display: flex;
    justify-content: flex-end;
  }
  &__submit-btn {
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
</style>
