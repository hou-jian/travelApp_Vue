<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data() {
        return {
            list: [{
                title: '一级标题',
                children: [{
                    title: '二级标题',
                    children: [{
                        title: '三级标题'
                    }]
                },{
                    title: '二级标题',
                    children: [{
                        title: '三级标题'
                    }]
                }]
            },{
                title: '一级标题'
            },{
                title: '一级标题'
            },{
                title: '一级标题'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 40rem;
</style>
