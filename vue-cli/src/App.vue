<!-- 1模板: html结构 -->
<!-- 有且只能有一个根元素 -->
<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">Hello</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<!-- 2行为: 处理逻辑 -->
<script>


export default {
  name: 'App',
  data(){
    return {
     
    }
  }
}
</script>

<!-- 3样式: 解决样式 -->
<style scoped>
h1{
	color: purple;
}
</style>
