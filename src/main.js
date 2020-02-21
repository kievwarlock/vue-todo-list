import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/index.js'
import './assets/scss/main.scss';

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});