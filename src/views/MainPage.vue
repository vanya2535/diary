<template>
  <div class="main-page">
    <my-header @buttonClick="isFormVisible = !isFormVisible" />
    <main class="main">
      <div class="main__note-list">
        <note-item
          class="main__note-item"
          v-for="noteItem in noteList"
          :key="noteItem.id"
          :noteItem="noteItem"
          @delete="deleteNote"
        />
        <note-item-form v-show="isFormVisible" @confirm="onConfirm" />
      </div>
    </main>
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
    document.body.style.backgroundColor = "#f9f3e5";
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/page.scss";
</style>
