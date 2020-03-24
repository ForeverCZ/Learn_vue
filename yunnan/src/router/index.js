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
    ]
})