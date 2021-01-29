/*
 * @Author: zhangyun
 * @Date: 2021-01-29 11:01:58
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-29 11:25:07
 * @FilePath: /react-admin-demo/Users/snake/Desktop/OWN_PROJECT/COMPONENTS_LIBRAY/lib_vue/packages/calendar/index.js
 */
import Calendar from './src/main.vue'

Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar)
}

export default Calendar
