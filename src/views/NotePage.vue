<template>
  <div class="note-page" v-if="noteItemCopy">
    <my-header
      :title="noteItemCopy.title"
      @buttonClick="isFormVisible = !isFormVisible"
    />
    <main class="main">
      <div class="main__list">
        <todo-item
          class="main__item"
          v-for="todoItem in noteItemCopy.todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
          @toggle="onToggle"
          @delete="onDelete"
        />
        <todo-item-form v-show="isFormVisible" @confirm="onConfirm" />
      </div>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      isFormVisible: false,
      noteItemCopy: null,
    };
  },
  computed: {
    ...mapGetters(["getNoteById"]),
    noteItem() {
      return this.getNoteById(Number(this.$route.params.id));
    },
  },
  methods: {
    ...mapMutations(["updateNote"]),
    onToggle(id) {
      this.noteItemCopy.todoList.forEach((item) => {
        if (item.id === id) item.isComplete = !item.isComplete;
      });
    },
    onDelete(id) {
      this.noteItemCopy.todoList = this.noteItemCopy.todoList.filter(
        (item) => item.id !== id
      );
    },
    onConfirm(todoItem) {
      if (todoItem.title.length) this.noteItemCopy.todoList.push(todoItem);
      this.isFormVisible = false;
    },
  },
  mounted() {
    this.noteItemCopy = this.noteItem;
    document.body.style.backgroundColor = "$note-background";
  },
  watch: {
    noteItemCopy: {
      handler(newValue, oldValue) {
        if (oldValue) this.updateNote(newValue);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/page.scss";
</style>
