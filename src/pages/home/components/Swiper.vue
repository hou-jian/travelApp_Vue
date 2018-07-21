<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" >
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            // 这里是轮播图的轮子(vue-awesome-swiper)提供的方法，详情查文档
            swiperOption: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl : 'http://img1.qunarzz.com/piao/fusion/1807/22/382624cbe97b0502.jpg_750x200_36a074d6.jpg'
                },
                {
                    id: '0002',
                    imgUrl : 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
                },
                {
                    id: '0003',
                    imgUrl : 'http://img1.qunarzz.com/piao/fusion/1807/b6/23980fda69a67d02.jpg_750x200_8830c8e2.jpg'
                },
                {
                    id: '0004',
                    imgUrl : 'http://img1.qunarzz.com/piao/fusion/1806/c5/8f384b861e4e9e02.jpg_750x200_29d574ba.jpg'
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    // 样式穿透，`.wrapper`下面的所有该class进行穿透。不受scoped限制~
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 26.5%
        background: #eee
        .swiper-img
            width: 100%
</style>
