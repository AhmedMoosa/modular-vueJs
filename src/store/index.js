import Vue from 'vue';
import Vuex from 'vuex';
import todosStore from '../components/todos/todos.store';
import postsStore from '../components/posts/posts.store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    }
  },
  actions: {
    changeIsLoading({
      commit
    }, value) {
      commit('setIsLoading', value);
    }
  },
  modules: {
    todosModule: todosStore,
    postsModule: postsStore,
  }
});