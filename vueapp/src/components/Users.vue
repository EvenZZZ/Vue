<template>
	<div class="users">
		<h1>Users</h1>

		<!-- 添加用户信息 -->
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter name">
			<input type="text" v-model="newUser.email" placeholder="Enter email">
			<input type="submit" value="Submit">
		</form>

		<!-- 展示用户信息 -->
		<ul>
			<li v-for="user in users">
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<span :class="{contacted:user.contacted}">
				{{user.name}} ： {{user.email}}
				<button v-on:click="deleteUser(user)">删除</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"users",
		data(){
			return {
				newUser:{},
				users:[
					{
						name:"Even Zhu",
						email:"344487017@qq.com",
						contacted:false
					},
					{
						name:"Yangyang Zhang",
						email:"123456789@qq.com",
						contacted:false
					},
					{
						name:"Bobby Dog",
						email:"987654321@qq.com",
						contacted:false
					}
				]
			}
		},
		methods:{
			addUser:function(e){
				// console.log("hello");
				this.users.push({
					name:this.newUser.name,
					email:this.newUser.email,
					contacted:false
				})
				e.preventDefault();
			},
			deleteUser:function(user){
				// console.log("shanchu");
				this.users.splice(this.users.indexOf(user),1);
			}
		},
		created:function(){
			// console.log("23123")
			this.$http.get("https://jsonplaceholder.typicode.com/users")
			.then(function(resopnse){
				this.users = resopnse.data;
			})
		}
	}
</script>

<style scoped>
	.contacted{
		text-decoration: line-through;
	}
</style>