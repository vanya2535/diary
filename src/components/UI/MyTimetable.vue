<template>
  <div
    class="wrap"
    v-if="isTimetableVisible"
    @click.stop="isTimetableVisible = false"
  />
  <div class="my-timetable" :style="timetableStyle" ref="timetable" @click.stop>
    <button
      class="my-timetable__button"
      @click="isTimetableVisible = !isTimetableVisible"
    >
      <p v-if="!isTimetableVisible" key="timetableShowButton">Show timetable</p>
      <p v-else key="timetableHideButton">Hide timetable</p>
    </button>
    <div class="my-timetable__content" ref="timetableContent">
      <div
        class="my-timetable__item"
        v-for="timetableItem in timetable"
        :key="timetableItem.id"
      >
        <div class="my-timetable__info">
          <div class="my-timetable__time">
            <p>{{ timetableItem.time[0] }}</p>
            <p>{{ timetableItem.time[1] }}</p>
          </div>
          <p class="my-timetable__type">{{ timetableItem.type }}</p>
        </div>
        <h1 class="my-timetable__name">{{ timetableItem.name }}</h1>
        <h1 class="my-timetable__cabinet">{{ timetableItem.cabinet }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "MyTimetable",
  data() {
    return {
      isTimetableVisible: false,
      week:
        Math.floor(
          (Math.round(new Date().getMonth() * 30.4167) + new Date().getDate()) /
            7
        ) % 2,
      timetableStyle: { top: "calc(100% - 25px)" },
    };
  },
  computed: {
    ...mapState(["timetable"]),
    ...mapGetters(["getCurrentTimetable"]),
    timetable() {
      return this.getCurrentTimetable(this.week);
    },
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

<style lang="scss">
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/colors.scss";

.wrap {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
}

.my-timetable {
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

  &__item {
    @include border;

    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  &__info {
    border-right: 1px solid $text-color;
    min-width: 50px;
    font-size: 14px;
    text-align: end;
  }

  &__time {
    padding: 2px 4px;
    width: 100%;
  }

  &__type {
    border-top: 1px solid $text-color;
    padding: 0 4px 4px 0;
    width: 100%;
  }

  &__name {
    padding: 2px 4px;
    width: 100%;
  }

  &__cabinet {
    border-left: 1px solid $text-color;
    padding: 2px;
    width: 50px;
    font-size: 14px;
  }
}
</style>
