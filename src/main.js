/*
 * @Author: zhangyun
 * @Date: 2021-01-29 10:58:29
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-29 11:19:59
 * @FilePath: /react-admin-demo/Users/snake/Desktop/OWN_PROJECT/COMPONENTS_LIBRAY/lib_vue/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Calendar from '../packages/calendar/index.js'

Vue.config.productionTip = false
const components = [Calendar]

const install = function(Vue, opts = {}) {
  // locale.use(opts.locale)
  console.log('===opts===', opts)
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

new Vue({
  render: (h) => h(App),
}).$mount('#app')
