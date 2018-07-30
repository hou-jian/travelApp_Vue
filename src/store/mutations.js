export default {
    changeCity(state, city) {
        state.city = city
        // 这里在改变城市时，存入本地
        try {
            localStorage.city = city
        } catch (e) {}
    }
}
