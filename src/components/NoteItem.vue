<template>
  <div
    class="note-item"
    @click="$router.push({ name: 'note', params: { id: noteItem.id } })"
  >
    <p class="note-item__title">{{ noteItem.title }}</p>
    <button
      class="note-item__button"
      @click.stop="$emit('delete', noteItem.id)"
    >
      <p>x</p>
    </button>
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
};
</script>

<style lang="scss" scoped>
@import "../assets/noteItem.scss";
</style>
