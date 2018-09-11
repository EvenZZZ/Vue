new Vue({
	el:"#vue-app",
	data:{
		name:"Even",
		age:""
	},
	methods:{
		logName: function(){
			//console.log("你正在输入你的姓名！");
			//this.name = this.$refs.name.value;
			//console.log(this.$refs.name.value);
		},
		logAge: function(){
			//console.log("你正在输入你的年龄！");
			//this.age = this.$refs.age.value;
		}
	}
});