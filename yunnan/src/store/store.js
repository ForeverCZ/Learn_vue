import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cookie from '../axios/cookie'
const userInfo = {
    name: cookie.getCookie('name') || '',
    token: cookie.getCookie('token') || ''
}
const state = {
    userInfo
}
export default new Vuex.Store({
    state,
    actions: {
        // actions调用mutations改变state里的值
        users(user) {
            console.log(user)
            user.commit("usersinfo")
        }
    },
    mutations: {
        usersinfo(state) {
            state.userInfo = {
                name: cookie.getCookie('name') || '',
                token: cookie.getCookie('token') || ''
            }
        }
    }
})