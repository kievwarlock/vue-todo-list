import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './routers'
import IsPageExist from './guards/IsPageExist'

Vue.use(Router);

const router = new Router({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (savedPosition) {
                    resolve(savedPosition)
                } else {
                    resolve({x: 0, y: 0})
                }
            }, 500)
        })

    }
});

router.beforeEach(IsPageExist);

export default router