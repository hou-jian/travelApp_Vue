<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data() {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/03/77a8f60ea243465fdf2c937e2edd33dd.jpg_200x200_51dd1e90.jpg',
                title: '国色天乡·水上乐园',
                desc: '准备好喉咙，其他的担心也没有用，尽情的尖叫吧!'
            },
            {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/03/77a8f60ea243465fdf2c937e2edd33dd.jpg_200x200_51dd1e90.jpg',
                title: '国色天乡·水上乐园',
                desc: '准备好喉咙，其他的担心也没有用，尽情的尖叫吧!'
            },
            {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/03/77a8f60ea243465fdf2c937e2edd33dd.jpg_200x200_51dd1e90.jpg',
                title: '国色天乡·水上乐园',
                desc: '准备好喉咙，其他的担心也没有用，尽情的尖叫吧!'
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
            overflow: hidden;
            display: flex;
            height: 2rem;
            // background: pink
            .item-img
                width: 1.8rem;
                height: 1.8rem;
                padding: .1rem
            .item-info
                flex: 1
                padding: .2rem
                min-width: 0
                p
                    margin: 0;
                    text-align: left;
                    ellipsis()
                .item-title
                    font-size: .32rem
                    line-height: .54rem
                .item-desc
                    line-height: .4rem
                    font-size: .28rem
                    color: #ccc
                .item-button
                    display: block
                    line-height: .44rem
                    margin-top: .2rem
                    background: #ff9300;
                    border: 0
                    border-radius: .06rem
                    color: #fff
                    font-size: .24rem
                    outline:none;
</style>
