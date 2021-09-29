Vue.createApp({
    data() {
        return {
            message: "",
            upper:"",
            lower:""
        }
    },
    methods:
    {
        ShowIt() {
            console.log()
            this.upper = this.message.toUpperCase()
            this.lower = this.message.toLowerCase()
        }
        
        
     
    }
}).mount("#app")