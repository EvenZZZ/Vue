import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'  //引入路由模块
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter)  //使用路由

//配置路由
const routes = [
	{path:'/',name:"homelink",component:Home},
	{path:'/menu',name:"menulink",component:Menu},
	{path:'/admin',name:"adminlink",component:Admin},
	{path:'/about',name:"aboutlink",component:About},
	{path:'/login',name:"loginlink",component:Login},
	{path:'/register',name:"registerlink",component:Register},
	{path:"*",redirect:'/'}
]

//实例化router，将routes放到router里面去
const router = new VueRouter({
	routes,
	mode:'history'  //不配置会自动加一个#
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
