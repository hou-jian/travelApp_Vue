<template>
    <div>
        <router-link
            tag="div"
            to="/"
            class="header-abs"
            v-show="showAbs"
        >
            <span class="iconfont header-abs-back">&#xe624;</span>
        </router-link>
        <div
            class="header-fixed"
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <span class="iconfont header-fixed-back">&#xe624;</span>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>

export default {
    name: 'DetailHeader',
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll() {
            // console.log('du')
            // 获取滚距top
            const top = document.documentElement.scrollTop
            if (top > 0) {
                // 到200px即完全显示，否则通过:style="opacityStyle 设置透明度，实现渐隐渐现效果
                let opacity = top / 200
                // 设置透明度
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle.opacity = opacity
                // 隐藏header-abs
                this.showAbs = false
            } else {
                // 隐藏header-fixed
                this.showAbs = true
            }
        }
    },
    // 页面一被展示，该钩子就会被执行(keep-alive提供)
    activated() {
        window.addEventListener('scroll', this.handleScroll)
    },
    // 同上，页面离开时执行
    deactivated() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .header-abs
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        border-radius: .4rem;
        background: rgba(0, 0, 0, 0.8);
        text-align: center;
        .header-abs-back
            color: #fff;
            font-size: .4rem;
    .header-fixed
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        font-size: .32rem
        height: $headerHeight
        line-height: $headerHeight
        text-align: center;
        color: #fff;
        background: $bgColor
        .header-fixed-back
            position: absolute;
            top: 0;
            left: 0;
            width: .64rem;
            color: #fff;
            font-size: .4rem;
</style>
