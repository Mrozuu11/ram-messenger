<template>
  <div class="message-form">
    <form action="#" class="form">
      <div class="header">Send a new message</div>
      <div class="input-group">
        <label for="title" class="label">Title</label>
        <input
          id="title"
          placeholder="Enter title here..."
          type="text"
          class="input"
        />
        <span class="error-message"></span>
      </div>
      <div class="input-group">
        <label for="message" class="label">Message</label>
        <textarea
          id="message"
          placeholder="Enter message here..."
          class="input"
        /><span class="error-message"></span>
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
    };
  },
  methods: {
    isExpanded() {
      this.expanded = !this.expanded;
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
    padding: 0 20px;
    .input-group {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 28px;
      font-size: 14px;
      line-height: 18px;
      .label {
        text-align: left;
      }
      .input {
        background: white;
        border: 1px solid $light-grey;
        outline: none;
        font-family: inherit;
        font-size: 14px;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 10px 14px;
        margin-top: 12px;

        &-character {
          border: none;
          padding: 0;
        }
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
