import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import NotePage from "@/views/NotePage.vue";
import TimetablePage from "@/views/TimetablePage.vue";

const routes = [
  {
    name: "main",
    path: "/",
    component: MainPage,
  },
  {
    name: "note",
    path: "/note/:id",
    component: NotePage,
  },
  {
    name: "timetable",
    path: "/timetable/",
    component: TimetablePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
