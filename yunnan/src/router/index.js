import Vue from 'vue'
import Router from 'vue-router'
// 引入父组件home
import home from '@/page/home/home.vue'
// person
import person from '@/page/person/person.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/Person',
        name: 'person',
        component: person
    }]
})