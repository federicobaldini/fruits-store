import { createRouter, createWebHistory } from "vue-router";
import FruitsView from "../fruits/views/FruitsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "fruits",
      component: FruitsView,
    },
  ],
});

export default router;
