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

//配置路由
export const routes = [
	{path:'/',name:"homelink",components:{
		default:Home,
		'orderingGuide':OrderingGuide,
		'delivery':Delivery,
		'history':History
	}},
	{path:'/menu',name:"menulink",component:Menu},
	{path:'/admin',name:"adminlink",component:Admin,
		// beforeEnter: (to,from,next)=>{
		// 路由独享守卫
		// alert("非登录状态，不能访问此页面！");
		// next(false);
		// 判断store.gettes.isLogin === false
			// if(to.path == '/login' || to.path == '/register'){
			// 	next();
			// }else{
			// 	alert("还没有登陆，请先登陆！");
			// 	next('/login');
			// }
		// }
	},
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

// 全局守卫
// router.beforeEach((to,from,next) =>{
// 	// alert("还没有登陆，请先登陆！");
// 	// next();
// 	// console.log(to);

// 	// 判断store.gettes.isLogin === false
// 	if(to.path == '/login' || to.path == '/register'){
// 		next();
// 	}else{
// 		alert("还没有登陆，请先登陆！");
// 		next('/login');
// 	}
// })

// 后置钩子
// router.afterEach((to,from) =>{
// 	alert("after each");
// })