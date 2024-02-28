const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: "server.php",
            arrayDischi: [],
        }

    },
    mounted() {
        this.readList()
    },
    methods: {

        readList() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.arrayDischi = response.data
                })
        }
    }
}).mount('#app')

