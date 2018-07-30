import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


// 新建并导出了一个Vuex实例，命名为Store
export default new Vuex.Store({
    state,
    mutations
    // 标准流程是先调用这里,不过这里不需要这么麻烦,注释了
    // actions: {
    //     changeCity(ctx, city) {
    //         ctx.commit('changeCity', city)
    //     }
    // },
})
