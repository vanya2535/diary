import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import NotePage from "../views/NotePage.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
