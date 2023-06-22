import { createRouter, createWebHistory } from 'vue-router'
import { AdminView, AdminDashboardView, AdminInboxView, AdminProfileView, BillingView } from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'admin',
      component: AdminView,
      children: [
        {
          path: '/',
          name: 'admindashboard',
          component: AdminDashboardView,
        },
        {
          path: '/admin_profile',
          name: 'adminprofile',
          component: AdminProfileView,
        },
        {
          path: '/billing',
          name: 'billing',
          component: BillingView,
        },
        {
          path: '/admin_inbox',
          name: 'admin_inbox',
          component: AdminInboxView,
        },
      ]
    },
  ]
})

export default router
