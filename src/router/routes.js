import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [

        // Dashboards

        {
            path: '/',
            name: 'analytics',
            component: () => import('../views/Dashboards/Analytics.vue'),
        },

        // Pages

        {
            path: '/pages/login-boxed',
            name: 'login-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../views/UserPages/LoginBoxed.vue'),
        },
        {
            path: '/pages/register-boxed',
            name: 'register-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../views/UserPages/RegisterBoxed.vue'),
        },
        {
            path: '/pages/forgot-password-boxed',
            name: 'forgot-password-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../views/UserPages/ForgotPasswordBoxed.vue'),
        }
    ]
})
