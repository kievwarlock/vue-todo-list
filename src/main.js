import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/index.js'
import './assets/css/main.css';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})