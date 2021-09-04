<template>
  <div class="note-item">
    <my-input class="note-item__title" v-model="title" />
    <button class="note-item__button" @click="onClick">
      <p>✓</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "NoteItemForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onClick() {
      this.$emit("confirm", {
        id: Date.now(),
        title: this.title,
        todoList: [],
      });
      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/noteItem.scss";
</style>
