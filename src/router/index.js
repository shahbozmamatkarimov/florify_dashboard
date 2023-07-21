import { createRouter, createWebHistory } from 'vue-router'
import { AdminView, AdminDashboardView, AdminInboxView, AdminProfileView, BillingView, LoginView, RegisterView, Settings, Reset, Phone, Otp } from '../views'

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
        {
          path: '/settings',
          name: 'settings',
          component: Settings,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/reset_password',
      name: 'reset_password',
      component: Reset,
    },  
    {
      path: '/check_phone',
      name: 'check_phone',
      component: Phone,
    },
    {
      path: '/otp_verification',
      name: 'otp_verification',
      component: Otp,
    },     
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'error',
    //   component: Error,
    // },
  ]
})

// router.beforeEach((to, from, next) => {
//   try {
//     axios.get('/admin')
//       .then((res) => {
//         if (res.data && to.name !== 'register') {
//           next({ name: 'register' })
//         } else if (!res.data && to.name !== 'login') {
//           axios.get('test-result', {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           })
//             .then(res => {
//               next()
//             })
//             .catch(err => {
//               if (err.response.data.message == "Token vaqti tugagan!" && to.name !== 'login') {
//                 next({ name: 'login' })
//               } else {
//                 next()
//               }
//             })
//         } else {
//           next()
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// })

export default router
