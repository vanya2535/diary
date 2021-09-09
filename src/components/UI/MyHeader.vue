<template>
  <header class="my-header">
    <div class="my-header__main-content">
      <img class="my-header__logo" src="@/assets/logo.svg" alt="" width="24" />
      <h1 class="my-header__title" @click="$router.push({ name: 'main' })">
        {{ title }}
      </h1>
    </div>
    <button class="my-header__button" @click="$emit('buttonClick')">
      <p>+</p>
    </button>
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
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/colors.scss";

.my-header {
  display: flex;
  align-items: center;
  border-bottom: 3px solid $text-color;
  width: 100%;
  min-height: 56px;
  background: $header-background;

  &__main-content {
    display: flex;
    margin-right: 30px;
    margin-left: 4%;
    font-size: 24px;
  }

  &__button {
    margin-right: 4%;
    margin-left: auto;
    border: none;
    font-size: 48px;

    p {
      @include button-paragraph;

      font-size: 48px;
    }
  }

  &__title,
  &__button {
    cursor: pointer;
  }
}
</style>
