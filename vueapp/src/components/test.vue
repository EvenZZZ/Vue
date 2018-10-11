<template>
	<div class="test">
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p>
		<p v-text="user.lastName"></p>

		<!-- v-if -->
		<p v-if="showName">{{user.firstName}}</p>
		<!-- v-else -->
		<p v-else>Nobody</p>

		<!-- v-for -->
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>

		<!-- v-on -->
		<button v-on:click="greet('Hello everybody!')">Say Greeting</button>

		<!-- 键盘事件 -->
		<input type="text" v-on:keyup="presskey" v-on:keyup.alt.enter="enterHit">
		<hr>
		<!-- computed 计算属性 -->
		<label>First Name:</label>
		<input type="text" v-model="user.firstName">
		<br>
		<label>Last Name:</label>
		<input type="text" v-model="user.lastName">
		<br>

		<h3>{{fullName}}</h3>

		<!-- props 属性 -->
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	export default {
		name:"test",
		props:{
			msg:{
				type:String,
				default:"默认是当前文字！"
			}
		},
		data(){
			return {
				title: "Hello Vue.js!",
				user:{
					firstName:"Even",
					lastName:"Zhu"
				},
				showName:false,
				items:[
					{title:"item 1"},
					{title:"item 2"},
					{title:"item 3"}
				]
			}
		},
		methods:{
			greet:function(greet){
				alert(greet)
			},
			presskey:function(){
				console.log("pressed...")
			},
			enterHit:function(){
				console.log("you pressed enter key!")
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName + " " + this.user.lastName;
			}
		}
	}
</script>

<style scoped>
	
</style>