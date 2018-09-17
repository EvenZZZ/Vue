var one = new Vue({
	el:"#vue-app-one",
	data:{
		title:"app one的内容"
	},
	methods:{
		
	},
	computed:{
		greet:function(){
			return "Hello App One"
		}
	}
});

var two = new Vue({
	el:"#vue-app-two",
	data:{
		title:"app two的内容"
	},
	methods:{
		changeTitle:function(){
			one.title = "改过名字的one"
		}
	},
	computed:{
		greet:function(){
			return "Hello App Two"
		}
	}
});

two.title = "改过名字的two"