import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/app/pages/404'
import Home from '@/app/pages/Home'

Vue.use(Router);

export const routes  = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound
    },
];


