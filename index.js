Vue.createApp({
    data() {
        return {
            text: null,
            howMany: null,
            errorMessage: null,
            output: null
        }
    },
    methods: {
        repeat(text, howMany) {
            this.text = this.text.trim()
            if (text && this.text.length > 0) {
                this.errorMessage = null
            }
            else {
                this.errorMessage = "No text"
                return
            }
            if (howMany && howMany > 0) {
                this.errorMessage = null
                // https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f
                this.output = new Array(howMany).fill(text)
            }
            else
                this.errorMessage = "No number"
        }
    }
}).mount("#app")