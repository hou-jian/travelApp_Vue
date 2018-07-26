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
            iconList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '热门景点'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc: '北京必游'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
                desc: '夏日玩水'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                desc: '文化古迹'
            },{
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                desc: '动植物园'
            },{
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                desc: '故宫'
            },{
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc: '一日游'
            },{
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
                desc: '公园'
            },{
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                desc: '游乐场'
            },{
                id: '0010',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                desc: '全部玩乐'
            }],
            swiperOptionTwo: {
                pagination: {
                    el: '.swiper-pagination-two'
                }
            },
        }
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
