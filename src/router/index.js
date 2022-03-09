import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/details/:jobid',
    component: Details,
    props: true,
    name: 'Details',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;