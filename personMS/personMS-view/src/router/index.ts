//路由配置
import { createRouter,createWebHistory } from "vue-router";
let list = [
    {
        name: "login",
        path: "/login",
        component: ()=> import("../views/LoginPage.vue")
    },
    {
        name: "home",
        path: "/",
        component: ()=> import("../views/HomePage.vue")
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: list
})
export default router