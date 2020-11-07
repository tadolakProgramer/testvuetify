import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register'
import Login from "../views/Login";

import failure from "../views/failure/failure";
import newfailure from "../views/failure/newfailure";
import failureHistory from "../views/failure/failureHistory";

import notification from "../views/notification/notification";
import newnotification from "../views/notification/newnotification";
import AllfailureHistory from "../views/failure/AllfailureHistory";
import editfailure from "../views/failure/editfailure";
import allParts from "../views/parts/allParts";

import monthlySalesCharts from "../components/charts/MonthlySalesChart"
import failurePreMonth from "../components/charts/MonthlyFailureChart"

import treePartsByMachine from "@/views/parts/treePartsByMachine";

import IsLogin from './isLogin'



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter: IsLogin
    },
    {
        path: '/Login',
        name: 'login',
        component: Login
    },
    {
        path: '/notification',
        name: 'notification',
        component: notification,
        beforeEnter: IsLogin
    },
    {
        path: '/notification/new/',
        name: 'newnotification',
        component: newnotification,
        beforeEnter: IsLogin
    },
    {
        path: '/failure',
        name: 'failure',
        component: failure,
        beforeEnter: IsLogin
    },
    {
        path: '/failure/new/:IDS',
        name: 'newfailure',
        component: newfailure,
        beforeEnter: IsLogin
    },
    {
        path: '/failure/history/:IDS',
        name: 'failureHistory',
        component: failureHistory,
        beforeEnter: IsLogin
    },
    {
        path: '/failure/all',
        name: 'failureAll',
        component: AllfailureHistory,
        beforeEnter: IsLogin
    },
    {
        path: '/failure/edit/:ID_AWARIA',
        name: 'editFailure',
        component: editfailure,
        beforeEnter: IsLogin
    },
    {
        path: '/failure/edit/parts',
        name: 'allParts',
        component: allParts,
        beforeEnter: IsLogin
    },
    {
        path: '/charts/line',
        name: 'chartsLine',
        component: monthlySalesCharts,
        beforeEnter: IsLogin
    },
    {
        path: '/charts/failurePermonth',
        name: 'failurePreMonth',
        component: failurePreMonth,
        //beforeEnter: IsLogin
    },
    {
        path: '/parts/treeParts:IDS',
        name: 'treePartsByMachine',
        component: treePartsByMachine,
        //beforeEnter: IsLogin
    },
]

const router = new VueRouter({
    routes
})

export default router
