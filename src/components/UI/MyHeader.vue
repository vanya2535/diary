<template>
  <header class="header">
    <h1 class="header__title" @click="$router.push({ name: 'main' })">
      {{ title }}
    </h1>
    <button class="header__button" @click="$emit('buttonClick')">+</button>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    title: {
      type: String,
      default: "Diary",
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  border-bottom: 3px solid #33322e;
  width: 100%;
  min-height: 56px;
  background: #b0e3ff;

  &__title {
    margin-right: 30px;
    margin-left: 4%;
    font-size: 24px;
  }

  &__button {
    margin-right: 4%;
    margin-left: auto;
    border: none;
    font-size: 48px;
  }

  &__title,
  &__button {
    cursor: pointer;
  }
}
</style>
