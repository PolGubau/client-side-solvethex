import EditView from '@/views/EditView.vue'
import TakeTokenView from '@/views/TakeTokenView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsertView from '../views/InsertView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/add',
      name: 'insert',
      component: InsertView
    },{
      path: '/edit/:id',
      name: 'edit',
      component: EditView
    },{
      path: '/token',
      name: 'token',
      component: TakeTokenView
    },{
      // default page:
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
    
  ]
})

export default router
