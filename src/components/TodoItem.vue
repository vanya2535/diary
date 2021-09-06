<template>
  <div
    class="todo-item"
    :class="{ 'todo-item_completed': todoItem.isComplete }"
  >
    <main class="todo-item__main">
      <button
        class="todo-item__checkbox"
        @click.stop="$emit('toggle', todoItem.id)"
      />
      <p class="todo-item__title">{{ todoItem.title }}</p>
      <button
        class="todo-item__button"
        @click.stop="$emit('delete', todoItem.id)"
      >
        <p>x</p>
      </button>
    </main>
    <footer class="todo-item__footer" v-if="todoItem.deadline">
      <p class="todo-item__deadline">{{ todoItem.deadline }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todoItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/todoItem.scss";
</style>
