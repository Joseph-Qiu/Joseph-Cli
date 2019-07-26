import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
const router = new Router({
    mode:"hash",
    routes:[
        {
            path:"/",
            component: () => import('pages/home.vue')
        },
        {
            path:"/login",
            component: () =>  import('pages/login.vue')
        }
    ]
});
export default router
