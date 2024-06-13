Vue.createApp({
	data() {
		return {
			tasks: [],
			enteredValue: '',
			visibility: true,
			buttonCaption: 'Hide List'
		}
	},
	methods: {
		addTask() {
			this.tasks.push(this.enteredValue)
			this.enteredValue = ''
		},
		toggleVisibility() {
			this.visibility = !this.visibility
			this.buttonCaption = this.visibility ? 'Hide List' : 'Show List'
		}
	},
	watch: {},
}).mount('#assignment')
