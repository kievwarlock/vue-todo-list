import Vue from "vue";
import Vuex from "vuex";
import todo from "./todo.module";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        todo,
    },
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        }
    }
});