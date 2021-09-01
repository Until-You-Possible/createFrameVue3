import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import Button from '../components/Button/index.vue';
import Checkbox from '../components/Checkbox/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'button',
    component: Button
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: Checkbox
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
