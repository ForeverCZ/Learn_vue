// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 轮播Css
import 'swiper/dist/css/swiper.css'

// 全局引入Css文件
import './assets/style/reset.css'
Vue.config.productionTip = false

// 使用轮播
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})