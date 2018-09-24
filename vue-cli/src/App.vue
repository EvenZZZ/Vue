<!-- 1模板: html结构 -->
<!-- 有且只能有一个根元素 -->
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<!-- 2行为: 处理逻辑 -->
<script>

// 局部注册组件
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return {
      title:"这是我的第一个Vue脚手架项目！"
    }
  },
  components:{
  	// "users":Users,
  	"app-header":Header,
  	Users,
  	"app-footer":Footer
  }
}
</script>

<!-- 3样式: 解决样式 -->
<style scoped>
h1{
	color: purple;
}
</style>
