<template>
  <div
    class="wrap"
    v-if="isTimetableVisible"
    @click.stop="isTimetableVisible = false"
  />
  <div class="timetable" :style="timetableStyle" ref="timetable" @click.stop>
    <button
      class="timetable__button"
      @click="isTimetableVisible = !isTimetableVisible"
    >
      <p v-if="!isTimetableVisible" key="timetableShowButton">Show timetable</p>
      <p v-else key="timetableHideButton">Hide timetable</p>
    </button>
    <div
      class="timetable__content"
      v-if="getCurrentTimetable"
      ref="timetableContent"
    >
      <div
        class="timetable__item"
        v-for="timetableItem in getCurrentTimetable"
        :key="timetableItem.id"
      >
        <div class="timetable__info">
          <div class="timetable__time">
            <p>{{ timetableItem.time[0] }}</p>
            <p>{{ timetableItem.time[1] }}</p>
          </div>
          <p class="timetable__type">{{ timetableItem.type }}</p>
        </div>
        <h1 class="timetable__name">{{ timetableItem.name }}</h1>
        <h1 class="timetable__cabinet">{{ timetableItem.cabinet }}</h1>
      </div>
      <button
        class="timetable__page-button"
        @click="$router.push({ name: 'timetable' })"
      >
        See full timetable
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MyTimetable",
  data() {
    return {
      isTimetableVisible: false,
      timetableStyle: { top: "calc(100% - 25px)" },
    };
  },
  computed: {
    ...mapGetters(["getCurrentTimetable"]),
  },
  watch: {
    isTimetableVisible() {
      if (this.isTimetableVisible) {
        this.timetableStyle.top = `calc(100% - ${this.$refs.timetableContent.scrollHeight}px - 26px)`;
        this.$refs.timetable.animate(
          [
            { top: "calc(100% - 25px)" },
            {
              top: `calc(100% - ${this.$refs.timetableContent.scrollHeight}px - 26px)`,
            },
          ],
          {
            duration: 300,
          }
        );
      } else {
        this.timetableStyle.top = "calc(100% - 25px)";
        this.$refs.timetable.animate(
          [
            {
              top: `calc(100% - ${this.$refs.timetableContent.scrollHeight}px - 26px)`,
            },
            { top: "calc(100% - 25px)" },
          ],
          {
            duration: 300,
          }
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/timetable.scss";

.wrap {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
}

.timetable {
  position: fixed;
  z-index: 3;
  width: 100%;

  &__button {
    margin-left: calc(50% - 68px);
    border: 1px solid $text-color;
    border-bottom: none;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 4px 8px;
    width: 136px;
    box-shadow: 1px 0 0 $text-color;
    background: $todo-background;
  }

  &__content {
    border-top: 1px solid $text-color;
    padding: 4px;
    width: 100%;
    background: $todo-background;
  }

  &__page-button {
    @include border;

    width: 100%;
  }
}
</style>
