require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router';
import routes from './routes';
import Navbar from './components/Navbar.vue';


Vue.component('navbar', Navbar);
Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
});