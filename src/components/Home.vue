<!--
 * @Author: zhangyun
 * @Date: 2021-01-29 10:58:29
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-01-29 15:57:06
 * @FilePath: /react-admin-demo/Users/snake/Desktop/OWN_PROJECT/COMPONENTS_LIBRAY/lib_vue/src/components/Home.vue
-->
<template>
  <div class="hello">
    <div class="components-tabs">
      <button type="button" v-for="item of componentList" :key="item.name" @click="getComponent(item.name)">
        {{ item.label }}
      </button>
    </div>

    <component :is="componentName"></component>
  </div>
</template>

<script>
import Calendar from '../../packages/calendar'
export default {
  name: 'Home',
  components: { Calendar },
  props: {
    msg: String,
  },
  data() {
    return {
      componentList: [{ name: 'Calendar', label: '日历' }],
      componentName: '',
    }
  },
  methods: {
    getComponent(name) {
      this.componentName = name
    },
  },
}
</script>

<style scoped>
.components-tabs {
  margin: 10px;
}
</style>
