<template>
    <div>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="categoryList"></detail-list>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

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
            bannerImg: '',
            sightName: '',
            gallaryImgs: [],
            categoryList: [],
        }
    },
    methods: {
        getDetailInfo() {
            // console.log('?', this.$route.params.id);
            // axios.get('/api/detail.json?id' + this.$router.params.id)
            axios.get(process.env.API_HOST + 'detail.json', {
                params: {
                    id: this.$route.params.id
                }
            })
            .then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.bannerImg = data.bannerImg
                this.sightName = data.sightName
                this.gallaryImgs = data.gallaryImgs
                this.categoryList = data.categoryList

            }
        }
    },
    mounted() {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 40rem;
</style>
