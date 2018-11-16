<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            lastCity: '',
            // city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo() {
            axios.get(process.env.API_HOST + 'index.json?city=' + this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                // console.log('dudu', data)
                // this.city = data.city
                this.iconList = data.iconList
                this.swiperList = data.swiperList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    // 生命周期函数，在页面元素加载完，挂载到页面前执行
    mounted() {
        this.lastCity = this.city
        this.getHomeInfo()
    },
    // 在使用了<keep-alive>，会多出一个activated生命周期函数，
    // 在页面重新显示时调用
    activated() {
        if (this.lastCity !== this.city) {
            this.lastCity = this.city
            // 重新发ajax请求，因为城市变了
            this.getHomeInfo()
        }

    }
}
</script>

<style lang="stylus" scoped>
    div
        overflow: hidden;
</style>
