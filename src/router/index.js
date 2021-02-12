import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';
import PageNotFound from '@/views/errors/PageNotFound';
import Login from '@/views/Login';

const routes = [
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => PageNotFound
  },
  {
    path: '/',
    name: 'Home',
    meta: { skipAuthorized: true },
    component: () => import('../components/container/Container'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: { skipAuthorized: true },
        component: () => import('../views/Home')
      },
      {
        path: 'login',
        name: 'Login',
        meta: { skipAuthorized: true },
        component: () => Login
      },
      {
        path: 'about',
        name: 'About',
        meta: { skipAuthorized: true },
        component: () => import('../views/About')
      },
      {
        path: 'posts',
        name: 'PostList',
        component: () => import('../views/PostList')
      },
      {
        path: 'posts/create',
        name: 'PostCreate',
        component: () => import('../views/PostCreate')
      },
      {
        path: 'posts/view/:id/edit',
        name: 'PostEdit',
        component: () => import('../views/PostEdit')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(( to, from, next) => {
  if (to.meta.requireAuthorized && !store.state.token) next('/login')
  else next()
})

export default router
