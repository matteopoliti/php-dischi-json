const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: "server.php",
            arrayDischi: [],
            selectedDisk: null,
            isActive: false
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
        },
        selectDisk(disk) {
            this.selectedDisk = disk;
            this.isActive = !this.isActive;
        },
        toggleOpenClose() {
            this.isActive = !this.isActive;
        },
    }
}).mount('#app')

