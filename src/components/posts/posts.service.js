import httpClient from '../../utilities/http/httpClient';

const todosApi = process.env.VUE_APP_POSTS_API;

const getPostsList = (limit) => {
    return httpClient.get(todosApi, {
        params: {
            '_limit': limit
        }
    });
};

export {
    getPostsList
};