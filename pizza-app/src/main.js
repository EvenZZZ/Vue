import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'  //引入路由模块
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

Vue.use(VueRouter)  //使用路由

//配置路由
const routes = [
	{path:'/',name:"homelink",component:Home},
	{path:'/menu',name:"menulink",component:Menu},
	{path:'/admin',name:"adminlink",component:Admin},
	{path:'/about',name:"aboutlink",redirect:'/about/contact',component:About, children:[
		{path:'/about/contact',name:'contactLink',redirect:'/personName',component:Contact,children:[
			{path:'/phone',name:'phoneNumber',component:Phone},
			{path:'/personName',name:'personName',component:PersonName},
		]},
		{path:'/history',name:'historyLink',component:History},
		{path:'/delivery',name:'deliveryLink',component:Delivery},
		{path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
	]},
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
