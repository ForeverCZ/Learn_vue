import Vue from 'vue'
import Router from 'vue-router'
// 引入父组件home
import home from '@/page/home/home.vue'
// person
import person from '@/page/person/person.vue'
// 引入详情页
import containner from '@/page/containner/containner'
//引入搜索
import search from '@/page/search/search'
//注册登录
import login from '@/page/login/login'
// 登陆的
import loginend from '@/page/login/components/loginend.vue'
// 注册的
import regist from '@/page/login/components/regist.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: home,
            meta: {
                keepAlive: true //该页面需要缓存
            }
        }, {
            path: '/Person',
            name: 'person',
            component: person
        },
        // 详情页
        {
            path: '/Containner/:id',
            name: 'containner',
            component: containner
        },
        {
            path: '/Search',
            name: 'search',
            component: search,
            meta: {
                keepAlive: true //该页面需要缓存
            }
        },
        {
            // 登录注册
            path: '/Login',
            name: 'login',
            component: login,
            // 重定向 实现tab切换
            redirect: "/Loginend",
            children: [{
                    // 登陆的 二级路由
                    path: '/Loginend',
                    name: 'loginend',
                    component: loginend,
                },
                {
                    // 注册的 二级路由
                    path: '/Regist',
                    name: 'regist',
                    component: regist,
                },
            ]
        },

    ]
})