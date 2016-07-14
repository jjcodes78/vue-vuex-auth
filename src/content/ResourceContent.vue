<template>
    <div>
        <h3>Resource Content</h3>

        <button class="btn btn-primary" @click="onButtonClick">get foo.json</button>
        <p><pre><p>fooMessage from this.$data.fooMessage</p>{{ fooMessage }}</pre></p>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                fooMessage: ''
            }
        },
        methods :{
            onButtonClick() {
                this.$http.get('assets/data/foo.json').then(
                (response) => {
                    this.fooMessage = JSON.parse(response.data).msg
                },
                (error) => {
                    console.error(error.statusText)
                })
            }
        }
    }    
</script>