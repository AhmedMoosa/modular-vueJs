import * as service from './posts.service';
const postsStore = {
    state: {
        postsList: [],
        limit: 0,
        pageSize: 3
    },
    mutations: {
        setPostsList(state, value) {
            state.postsList = value.list;
            state.limit = value.limit;
        },
    },
    actions: {
        loadPosts: async ({
            commit,
            state
        }) => {
            const limit = state.limit + state.pageSize;
            const response = await service.getPostsList(limit);
            commit('setPostsList', {
                list: response.data,
                limit
            });
        }
    },
    getters: {
        getPostById: state => id => {
            return state.postsList.find(t => t.id == id);
        }
    }
};

export default postsStore;