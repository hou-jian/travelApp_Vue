// 这里设置默认值城市
let defaultCity = '北京'
// 这里这样写是为了解决：
//   在用户使用“隐身模式”等，导致localStorage出错，从而使页面崩溃的BUG
// try内表示正确时执行的代码，catch表示出错了执行。就不会崩溃了
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch(e) {}

export default {
    city: defaultCity
}
