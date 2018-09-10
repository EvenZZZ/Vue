//实例化Vue对象
new Vue({
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

/*
 *el: element  需要获取的元素，一定是html中的根容器元素
 *data: 用于数据的存储
 *methods: 用于存储各种方法
 *data-binding: 给属性绑定对应的值
 */