import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import httpClient from './utilities/http/httpClient';
import store from './store';

Vue.config.productionTip = false;

//global settings
Vue.prototype.$http = httpClient;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');