<template>
    <ul class="list" >
        <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "CityAlphabet",
    props: {
        cities: Object
    },
    computed: {
        letters() {
            const letters = []
            for (var i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    // 因为列表是通过ajax获取到的数据渲染的(一开始cities={})，所以需要在数据更新后再执行，以获取a的高度
    updated() {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick(e) {
            console.log('e.target.innerText');
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart() {
            this.tochStatus = true
        },
        handleTouchMove(e) {
            // 阻止浏览器的下拉刷新事件
            event.preventDefault();
            // 仅在tochStatus为true才运行函数
            if (this.tochStatus) {
                // 用于清除定时器
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                // 限制执行频率以提高性能
                    // 注意,由于不熟悉箭头函数踩了个坑！！
                        // 这里如果不用箭头函数的话，this的指向会出问题,
                        // 需要提前保存好this(如 var this_ = this),同样下面的this都要替换掉，
                        // 箭头函数就不存在了(2018-7-30 08:10:51)
                this.timer = setTimeout(() => {
                    // 下面两行在计算，滑动到的字母是谁
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 20)

                    if (index >= 0 && index < this.letters.length) {
                        // 传给父组件
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd() {
            this.tochStatus = false

        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .list
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;
        .item
            line-height: .4rem;
            text-align: center;
            color: $bgColor;
</style>
