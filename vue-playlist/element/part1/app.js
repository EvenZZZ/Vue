//实例化Vue对象
var app = new Vue({
	el:"#vue-app",
	data:{
		name:"Even",
		job:"Web开发",
		website:"http://www.thenewstep.com",
		websiteTag:"<a href='http://www.thenewstep.com'>TheNewStep</a>"
	},
	methods:{
		greet: function(time){
			return 'Good ' + time + " " + this.name + "!";
		}
	}
});

var app2 = new Vue({
	el:"#app-2",
	data: {
		message: "页面加载于 " + new Date().toLocaleString(),
		seen: false,
		todos: [
			{ text: '吃' },
			{ text: '喝' },
			{ text: '玩' },
			{ text: '乐' }
		]
	}
});
/*
 *el: element  需要获取的元素，一定是html中的根容器元素
 *data: 用于数据的存储
 *methods: 用于存储各种方法
 *data-binding: 给属性绑定对应的值
 */