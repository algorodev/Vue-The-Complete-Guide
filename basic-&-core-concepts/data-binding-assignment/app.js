Vue.createApp({
    data() {
        return {
            name: 'Alejandro Gonzalez',
            age: 27,
            imageSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afb86caa-39ba-4a91-ba30-89b096bb4c5b/dhjbw22-a5eab753-ed86-41f7-8330-2e925bd95f7b.jpg/v1/fit/w_828,h_1042,q_70,strp/bunyip_by_candra_dhjbw22-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2FmYjg2Y2FhLTM5YmEtNGE5MS1iYTMwLTg5YjA5NmJiNGM1YlwvZGhqYncyMi1hNWVhYjc1My1lZDg2LTQxZjctODMzMC0yZTkyNWJkOTVmN2IuanBnIiwid2lkdGgiOiI8PTg1OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cQnp9bxHm8UnuMHfm3V3PSqfqx_CBhi8wYYLjih1OeU',
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5
        },
        generateRandomNumber() {
            return Math.random()
        }
    }
}).mount('#assignment')
