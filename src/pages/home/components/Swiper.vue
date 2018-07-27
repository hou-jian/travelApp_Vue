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
                },
                autoplay: true
            }
        }
    },
    props: {
        swiperList: Array
    },
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
