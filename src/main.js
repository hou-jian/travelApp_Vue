// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
// 这里在引用vuex,用变量store指向了他
import store from './store/index'

import '@/assets/styles/reset.css'
import '@/assets/styles/border.min.css'
import '@/assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // 传入store
    store,
    components: {
        App
    },
    template: '<App/>'
})
