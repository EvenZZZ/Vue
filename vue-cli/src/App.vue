<!-- 1模板: html结构 -->
<!-- 有且只能有一个根元素 -->
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users></users>
  </div>
</template>

<!-- 2行为: 处理逻辑 -->
<script>

// 局部注册组件
import Users from './components/Users'

export default {
  name: 'App',
  data(){
    return {
      title:"这是我的第一个Vue脚手架项目！"
    }
  },
  components:{
  	// "users":Users
  	Users
  }
}
</script>

<!-- 3样式: 解决样式 -->
<style>

</style>
