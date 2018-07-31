import Vue from 'vue'
import Router from 'vue-router'

// 这里引入组件(页面)
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

// 设置各个页面的信息，并导出个main.js 去注册给Vue
export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/city',
        name: 'City',
        component: City
    }, {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }]
})
