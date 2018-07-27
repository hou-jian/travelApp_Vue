<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-desc">{{ item.desc }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        weekendList: Array
    }
}
</script>

<style lang="stylus" scoped>
    // 关于@，可以在build/webpack.base.conf.js中找到resolve，查看。
    // ~：这里不是js表达式，需要加`~`表示项目根目录下
    @import '~@/assets/styles/varibles.styl'
    .title
        font-size: .32rem
        background: #ebebeb
        text-align: left
        width: 100%
        padding-left: .2rem
        height: 0.7rem
        line-height: 0.7rem
    ul
        list-style: none
        margin: 0
        padding: 0
        .item
            height: 4.32rem;
            .item-img
                display: block
                width: 100%;
                height: 3rem;
                padding: .1rem 0
            p
                margin: 0;
                margin-top: .1rem;
                margin-left: .2rem;
                text-align: left;
                font-size: .28rem
                display: block;
                ellipsis()
</style>
