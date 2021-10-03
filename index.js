Vue.createApp({


    data(){
        return {
            message: "",
            upper: "",
            lower: "",
        }
    },

    methods: {



        ShowWord(){
            this.upper = this.message.toUpperCase()
            this.lower = this.message.toLowerCase()
        }

    }


}).mount("#app")