Vue.component("greeting",{
	template:`
	<p>
	{{name}}: 大家好，我系渣渣辉!
	<button v-on:click="changeName">改名</button>
	</p>`,
	data:function(){
		return{
			name:"张家辉"
		}
	},
	methods:{
		changeName:function(){
			this.name = "古天乐";
		}
	}
})


new Vue({
	el:"#vue-app-one"
});

new Vue({
	el:"#vue-app-two"
});
