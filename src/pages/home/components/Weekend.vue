<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data() {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
                title: '成都必游TOP10',
                desc: '成都的标志，也是现代人对老成都的记忆'
            },
            {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
                title: '远离烧烤模式',
                desc: '周末还在搓麻将？快出门赏美景'
            },
            {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
                title: '慢游成都最美古镇',
                desc: '撷取一份悠闲，寻觅散落在时光里的幸福'
            }]
        }
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
