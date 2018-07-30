<template>
    <div>
        <div class="search">
            <input
                v-model="keyword"
                class="search-input"
                type="text"
                placeholder="输入城市名或拼音"
            >
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li
                    class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                >
                    {{ item.name }}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: "CitySearch",
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData() {
            return !this.list.length
        }
    },
    watch: {
        keyword() {
            // 这里做了个节流，100毫秒才执行函数
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                // 存储筛选后的数据
                const result = []
                for (var i in this.cities) {
                    const city = this.cities[i]
                    // console.log('city', city);
                    city.forEach((value) => {
                        const seek = value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1
                        if (seek) {
                            result.push(value)
                        }

                    })
                }
                // console.log('result', result);
                this.list = result
            }, 100)
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .search
        height: .72rem;
        // width: 100%;
        padding: 0 .1rem;
        background: $bgColor;
        .search-input
            box-sizing: border-box;
            width: 100%;
            height: .62rem;
            padding: 0 .1rem;
            line-height: .62rem;
            text-align: center;
            border-radius: .06rem;
            color: #666;
    .search-content
        z-index: 1;
        position: absolute;
        overflow: hidden;
        bottom: 0;
        left: 0;
        right: 0;
        top: 1.58rem;
        background: #eee;
        .search-item
            line-height: .62rem;
            padding-left: .2rem;
            background: #fff;
            color: #666;
</style>
