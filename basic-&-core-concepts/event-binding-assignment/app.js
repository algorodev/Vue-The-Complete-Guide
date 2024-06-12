Vue.createApp({
    data() {
        return {
            userInput: '',
            userInput2: '',
            confirmedUserInput: '',
        }
    },
    methods: {
        showAlert() {
            alert('This is an alert!')
        },
        setUserInput(event) {
            this.userInput = event.target.value
        },
        setUserInput2(event) {
            this.userInput2 = event.target.value
        },
        confirmUserInput() {
            this.confirmedUserInput = this.userInput2
        }
    }
}).mount('#assignment')
