new Vue({
	el: "#vue-app",
	data: {
		message: 'Hello Vue.js'
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
});