<template>
  <div class="main-page">
    <my-header @buttonClick="isFormVisible = !isFormVisible" />
    <main class="main">
      <div class="main__list">
        <note-item
          class="main__item"
          v-for="noteItem in noteList"
          :key="noteItem.id"
          :noteItem="noteItem"
          @delete="deleteNote"
        />
        <note-item-form v-show="isFormVisible" @confirm="onConfirm" />
      </div>
    </main>
    <footer class="footer">
      <my-timetable />
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      isFormVisible: false,
    };
  },
  computed: {
    ...mapState(["noteList"]),
  },
  methods: {
    ...mapMutations(["deleteNote", "updateNote"]),
    onConfirm(noteItem) {
      if (noteItem.title.length) this.updateNote(noteItem);
      this.isFormVisible = false;
    },
  },
  mounted() {
    document.body.style.backgroundColor = "$todo-background";
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/page.scss";
</style>
