import store from "../../../store";

const startLoader = (request) => {
    store.dispatch('changeIsLoading', true);
    return request;
};

const stopLoader = (response) => {
    store.dispatch('changeIsLoading', false);
    return response;
};

export {
    startLoader,
    stopLoader
}