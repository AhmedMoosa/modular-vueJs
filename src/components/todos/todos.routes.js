import AppRouterView from '../AppRouterView.vue';
const TodosList = () => import( /* webpackChunkName: 'todos-module' */ './pages/TodosList.vue');
const TodosDetails = () => import( /* webpackChunkName: 'todos-module' */ './pages/TodosDetails.vue');
const todosRoutes = [{
    path: '/todos',
    component: AppRouterView,
    children: [{
            path: '/',
            component: TodosList
        },
        {
            path: ':id',
            name: 'todos-deails',
            component: TodosDetails
        }
    ]
}];
export default todosRoutes;