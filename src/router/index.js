import { createRouter, createWebHistory } from 'vue-router';
import Overviews from '@/views/Overviews.vue';
import Stats from '@/views/Stats.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overviews',
      component: Overviews,
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats, 
    },
  ],
});

export default router;
