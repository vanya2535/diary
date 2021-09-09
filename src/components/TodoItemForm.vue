<template>
  <div class="todo-item">
    <main class="todo-item__main">
      <my-input class="todo-item__title" v-model="title" />
      <button class="todo-item__button" @click="onClick">
        <p>✓</p>
      </button>
    </main>
    <footer class="todo-item__footer">
      <my-input class="todo-item__deadline" v-model="deadline" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "TodoItemForm",
  data() {
    return {
      title: "",
      deadline: "",
    };
  },
  methods: {
    onClick() {
      this.$emit("confirm", {
        id: Date.now(),
        title: this.title,
        deadline: this.deadline,
        isComplete: false,
      });
      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/todoItem.scss";
</style>
