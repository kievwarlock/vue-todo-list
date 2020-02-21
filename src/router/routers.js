import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/app/pages/404';
import TodoEdit from '@/app/pages/TodoEdit';
import Home from '@/app/pages/Home';

Vue.use(Router);

export const routes  = [
    {
        path: '/',
        name: 'home-page',
        component: Home,
    },
    {
        path: '/todo/edit/:id',
        name: 'todo-edit',
        component: TodoEdit,
        props: true,
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound
    },
];


