<template>
  <my-header />
  <div class="timetable">
    <div
      class="timetable__section"
      v-for="(day, index) in getTimetable"
      :key="index"
    >
      <h1 class="timetable__day">{{ getDay(index) }}</h1>
      <div class="timetable__item" v-for="(timetableItem, id) in day" :key="id">
        <div class="timetable__info">
          <div class="timetable__time">
            <p>{{ timetableItem.time[0] }}</p>
            <p>{{ timetableItem.time[1] }}</p>
          </div>
          <p class="timetable__type" v-if="timetableItem.type">
            {{ timetableItem.type }}
          </p>
        </div>
        <h1 class="timetable__name">{{ timetableItem.name }}</h1>
        <h1 class="timetable__cabinet">{{ timetableItem.cabinet }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      week: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    };
  },
  computed: {
    ...mapGetters(["getTimetable"]),
    getDay() {
      return (index) => {
        return this.week[index];
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/timetable.scss";

.timetable {
  padding: 10px 4%;

  &__day {
    margin-bottom: 6px;
  }

  &__section {
    @include border;

    margin-bottom: 10px;
    padding: 10px;
  }
}
</style>
