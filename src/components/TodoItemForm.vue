<template>
  <div class="todo-item">
    <my-input class="todo-item__title" v-model="title" />
    <button class="todo-item__button" @click="onClick">
      <p>✓</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoItemForm",
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
        isComplete: false,
      });
      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/todoItem.scss";
</style>
