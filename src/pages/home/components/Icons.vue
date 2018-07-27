<template>
    <div class="icons">
        <swiper :options="swiperOptionTwo">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div
                    class="icon"
                    v-for="item of page"
                    :key="item.id"
                >
                    <div class="icon-img">
                        <img :src="item.imgUrl" :alt="item.desc">
                    </div>
                    <p>{{ item.desc }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination-two" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data() {
        return {
            swiperOptionTwo: {
                pagination: {
                    el: '.swiper-pagination-two'
                }
            }
        }
    },
    props: {
        iconList: Array    
    },
    computed: {
        pages() {
            const pages = []
            this.iconList.forEach((item, index) => {
                // 一组8个，这里判断：超过8个元素时，添加给第二个数组（pages[1]）
                const page = Math.floor(index / 8)
                // 未定义就赋值给已给新的array，如：pages[0]一开始是没有的，这里就会给其赋值
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    .icons
        position: relative;
        overflow: hidden
        height: 0
        padding-bottom: 50%
        .icon
            position: relative
            // overflow: hidden;
            float: left
            width: 25%;
            height: 0;
            padding-bottom: 20%
            .icon-img
                position: absolute;
                top: .06rem;
                left: 0;
                right: 0;
                bottom: .3rem
                padding: .1rem
                img
                    height: 100%;
            p
                position: absolute
                margin: 0;
                left: 0;
                right: 0;
                bottom: 0;
                height: .3rem;
                font-size: .28rem
    .icons >>> .swiper-pagination-two
        position: absolute;
        bottom: -0.6rem
    .icons >>> .swiper-container
        overflow: visible;
    .icons >>> .swiper-pagination-bullet-active
        background: rgba(0, 175, 190, 0.8)
    .icons >>> .swiper-pagination-bullet
        width: .12rem;
        height: .12rem;
</style>
