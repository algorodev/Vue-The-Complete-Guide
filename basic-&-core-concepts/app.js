const app = Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: '',
		}
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue)
		},
		removeGoal(index) {
			this.goals.splice(index, 1)
		}
	},
	computed: {},
	watch: {},
})

app.mount('#user-goals')
