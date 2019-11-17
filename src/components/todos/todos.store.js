import * as service from './todos.service';
const todosStore = {
    state: {
        todosList: [],
        limit: 0,
        pageSize: 3
    },
    mutations: {
        setTodosList(state, value) {
            state.todosList = value.list;
            state.limit = value.limit;
        },
    },
    actions: {
        loadTodos: async ({
            commit,
            state
        }) => {
            const limit = state.limit + state.pageSize;
            const response = await service.getTodosList(limit);
            commit('setTodosList', {
                list: response.data,
                limit
            });
        }
    },
    getters: {
        getTodoById: state => id => {
            return state.todosList.find(t => t.id == id);
        }
    }
};

export default todosStore;