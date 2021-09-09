<template>
  <div class="todo-list">
    <div
      class="todo-item"
      :class="{ 'todo-item_completed': todoItem.isComplete }"
      v-for="todoItem in todoList"
      :key="todoItem.id"
    >
      <p>{{ todoItem.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";

.todo-list {
  @include border;
  @include sub-item-size;

  border-bottom: none;
  border-radius: 0;
  font-size: 14px;
  background: $todo-background;
}

.todo-item {
  margin-bottom: 2px;

  &_completed p {
    text-decoration: line-through;
  }
}
</style>
