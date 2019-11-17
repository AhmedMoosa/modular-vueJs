import httpClient from '../../utilities/http/httpClient';

const todosApi = process.env.VUE_APP_TODOS_API;

const getTodosList = (limit) => {
    return httpClient.get(todosApi, {
        params: {
            '_limit': limit
        }
    });
};

export {
    getTodosList
}