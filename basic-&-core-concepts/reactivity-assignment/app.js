Vue.createApp({
    data() {
        return {
            counter: 0,
            result: 'Not there yet'
        }
    },
    methods: {
        increment(value) {
            this.counter = this.counter + value
        },
    },
    watch: {
        counter(value) {
            if (value > 37) this.result = 'Too much!'
            else if (value < 37) this.result = 'Not there yet'
            else if (value === 37) this.result = value
        },
        result(value) {
            if (value === 37) {
                const that = this
                setTimeout(() => {
                    that.counter = 0
                }, 5000)
            }
        }
    }
}).mount('#assignment')
