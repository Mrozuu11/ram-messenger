<template>
  <div class="message-form">
    <form action="#" class="form mobile-padding">
      <div class="header">Send a new message</div>
      <div class="input-group error">
        <label for="title" class="label">Title</label>
        <input
          v-model="title"
          id="title"
          placeholder="Enter title here..."
          type="text"
          class="input error"
        />
        <span v-if="!titleCheck" class="error-message"
          >Please enter the title</span
        >
      </div>
      <div class="input-group">
        <label for="message" class="label">Message</label>
        <textarea
          v-model="message"
          id="message"
          placeholder="Enter message here..."
          class="input"
        /><span v-if="!messageCheck" class="error-message"
          >Invalid message format</span
        >
      </div>
      <div class="input-group">
        <label for="character-select" class="label">Character</label>
        <el-select
          v-model="characters.name"
          placeholder="Pick a character"
          id="character-select"
          :class="['input input-character', { expanded: expanded }]"
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
          >Pick a character!</span
        >
      </div>
      <div class="btn-wrapper">
        <button type="submit" class="send-btn">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
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
      expanded: false,
      title: "",
      message: "",
    };
  },
  methods: {
    isExpanded() {
      this.expanded = !this.expanded;
    },
  },
  computed: {
    titleCheck() {
      return this.title.length >= 3 && this.title.length <= 32 ? true : false;
    },
    messageCheck() {
      return this.message.length > 0 && this.message.length < 256
        ? true
        : false;
    },
    characterCheck() {
      return this.characters.name ? true : false;
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
      .el-input__inner {
        .expanded {
          border-radius: 8px 8px 0 0;
        }
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
