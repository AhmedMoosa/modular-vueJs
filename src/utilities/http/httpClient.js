import Axios from 'axios';
import toastrInterceptor from './interceptors/toastr.interceptor';
import * as loader from './interceptors/loader.interceptor';

const httpClient = Axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        'content-type': 'application/json'
    }
});

//toastr
httpClient.interceptors.response.use(toastrInterceptor);
//loader
httpClient.interceptors.request.use(loader.startLoader);
httpClient.interceptors.response.use(loader.stopLoader);

export default httpClient;