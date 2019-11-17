import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import todosRoutes from '../components/todos/todos.routes';
import postsRoutes from '../components/posts/posts.routes';
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
  ...todosRoutes,
  ...postsRoutes
];

const router = new VueRouter({
  routes
});

export default router;