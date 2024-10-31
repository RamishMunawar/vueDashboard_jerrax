import { createRouter, createWebHistory } from 'vue-router'
import SidebarView from '@/views/SidebarView.vue'
import EditProfileView from '@/views/EditProfileView.vue'
import SettingsPage from '@/views/SettingsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SidebarView',
      component: SidebarView
    },
    {
      path: '/EditProfileView',
      name: 'EditProfileView',
      component: EditProfileView
    },
    {
      path: '/SettingsPage',
      name: 'SettingsPage',
      component: SettingsPage
    }
  ]
})

export default router
