import AppRouterView from '../AppRouterView.vue';
const postsList = () => import( /* webpackChunkName: 'posts-module' */ './pages/PostsList.vue');
const postsDetails = () => import( /* webpackChunkName: 'posts-module' */ './pages/PostsDetails.vue');
const routes = [{
    path: '/posts',
    component: AppRouterView,
    children: [{
            path: '/',
            component: postsList
        },
        {
            path: ':id',
            name: 'posts-deails',
            component: postsDetails
        }
    ]
}];
export default routes;