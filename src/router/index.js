import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TodosRoutes from '../components/todos/TodosRoutes';
import PostsRoutes from '../components/posts/PostsRoutes';
Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  ...TodosRoutes,
  ...PostsRoutes
];

const router = new VueRouter({
  routes
});

export default router;