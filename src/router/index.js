import { createRouter, createWebHistory } from "vue-router";
import Overviews from "@/views/Overviews.vue";
import Stats from "@/views/Stats.vue";
import ButtonPages from "@/views/buttonPages.vue";
import GridSystem from "@/views/GridSystem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "overviews",
      component: Overviews,
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats,
    },
    {
      path: "/buttonPages",
      name: "buttonPages",
      component: ButtonPages,
    },
    {
      path: "/GridSystem",
      name: "GridSytem",
      component: GridSystem,
    },
  ],
});

export default router;
