<script setup lang="ts">
// import {onMounted} from 'vue'
// import request from '@/utils/request'

// import { ref } from 'vue'
// const xxx = ref(1)
// onMounted(() => {
//   request({
//     url: '/api/user/login',
//     method: 'post',
//     data: {
//       username: 'admin',
//       password: '111111'
//     }
//   }).then(res => {
//     console.log(res)
//   })
// })
</script>

<template>
  <h2>测试</h2>
  <!--sVg：图标外层容器节点，内部需要与use标签结合使用,属性必须以#icon-图标名称，使用-->
  <svg>
    <use xlink:href="#icon-home">></use>
  </svg>

  <!--使用SvgIcon组件-->
  <svg-icon name="home"></svg-icon>
</template>

<style scoped lang="scss">
h2 {
  color: $red;
}
</style>
