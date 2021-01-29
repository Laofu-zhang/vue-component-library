<!--
 * @Author: zhangyun
 * @Date: 2021-01-29 10:58:29
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-29 11:24:57
 * @FilePath: /react-admin-demo/Users/snake/Desktop/OWN_PROJECT/COMPONENTS_LIBRAY/lib_vue/src/App.vue
-->
<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
