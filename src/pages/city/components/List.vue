<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button" @click="backHome">
                            <!-- {{this.$store.state.city}} -->
                            {{ this.city }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                        class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div
                class="area"
                v-for="(items, key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{ key }}</div>
                <div
                    class="item-list"
                    v-for="item of items"
                    :key="item.id"
                    @click="handleCityClick(item.name)"

                >
                    <div class="item border-bottom">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
    name: "CityList",
    props: {
        hot: Array,
        cities: Object,
        letter: String
    },
    watch: {
        letter() {
            // console.log(this.letter);
            if (this.letter) {
                // 因为的循环内，获取到的是一个array需要多加个[0]
                const el = this.$refs[this.letter][0]
                // console.log(el);
                // 这里利用，beetter-scroll 提供的方法跳转到对应元素
                this.scroll.scrollToElement(el)
            }
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        handleCityClick(city) {
            // // 标准流程通过`dispatch`调用`actions`
            // this.$store.dispatch('changeCity', city)
            // 这里足够简单，可直接通过`commit`调用`mutations`
            // this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity']),
        backHome() {
            this.$router.push('/')
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'

    .border-topbottom
        &:before
            border-color: #ccc;
        &:after
            border-color: #ccc;
    .border-bottom
        &:before
            border-color: #ccc;
    .list
        overflow: hidden;
        position: absolute;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        .title
            line-height: .54rem;
            background: #eee;
            padding-left: .2rem;
            color: #666;
            font-size: .26rem;
        .button-list
            overflow: hidden;
            padding: .1rem .6rem .1rem .1rem;
            .button-wrapper
                width: 33.33%;
                float: left;
                .button
                    margin: .1rem;
                    padding: .1rem 0;
                    text-align: center;
                    border: .02rem solid #ccc;
                    border-radius: .06rem
        .item-list
            .item
                line-height: .76rem;
                padding-left: .2rem;
</style>
