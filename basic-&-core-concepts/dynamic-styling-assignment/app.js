Vue.createApp({
    data() {
        return {
            cssClass: '',
            visibility: false,
            backgroundColor: ''
        }
    },
    methods: {
        toggleVisibility() {
            this.visibility = !this.visibility
        }
    }
}).mount('#assignment')
