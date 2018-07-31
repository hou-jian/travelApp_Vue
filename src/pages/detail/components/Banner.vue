<template>
<div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_600x330_38a5c69c.jpg">
    <div class="banner-info">
        <div class="banner-title">峨眉山(AAAAA景区)</div>
        <div class="banner-number">
            <span class="iconfont banner-icon">&#xe626;</span>
            31
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        .banner-img
            width: 100%;
        .banner-info
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: .6rem;
            color: #fff;
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
            .banner-title
                flex: 1;
                font-size: .32rem;
                padding: 0 .2rem;
            .banner-number
                margin-top: .14rem;
                padding: 0 .4rem;
                height: .32rem;
                line-height: .32rem;
                border-radius: .2rem;
                background: rgba(0, 0, 0, .8);
                font-size: .24rem;
                .banner-icon
                    font-size: .24rem;

</style>
