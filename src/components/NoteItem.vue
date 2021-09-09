<template>
  <div
    class="note-item"
    @click="$router.push({ name: 'note', params: { id: noteItem.id } })"
  >
    <main class="note-item__main">
      <p class="note-item__title">{{ noteItem.title }}</p>
      <button
        class="note-item__button"
        @click.stop="$emit('delete', noteItem.id)"
      >
        <p>x</p>
      </button>
    </main>
    <footer class="note-item__footer" v-if="noteItem.todoList.length > 0">
      <todo-list :todoList="noteItem.todoList" v-show="isTodoListVisible" />
      <button
        class="note-item__footer-button"
        @click.stop="isTodoListVisible = !isTodoListVisible"
      >
        <p v-if="!isTodoListVisible" :key="`showButton_${noteItem.id}`">Show</p>
        <p v-else :key="`hideButton_${noteItem.id}`">Hide</p>
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "NoteItem",
  props: {
    noteItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isTodoListVisible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/noteItem.scss";
</style>
