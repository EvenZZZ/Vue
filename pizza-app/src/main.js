import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'  //引入路由模块
import { routes } from './routes'

Vue.use(VueRouter)  //使用路由


//实例化router，将routes放到router里面去
const router = new VueRouter({
	routes,
	mode:'history',  //不配置会自动加一个#
	scrollBehavior(to,from,savedPosition){
		// return { x:0, y:100 }
		// return { selector: '.btn' }
		if (savedPosition){
			return savedPosition
		}else{
			return { x:0, y:0 }
		}
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
