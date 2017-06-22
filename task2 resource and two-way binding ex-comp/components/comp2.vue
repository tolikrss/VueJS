<template>
    <h1>Comp2 works!</h1>
    <h2>{{value}}</h2>
    <ul class="list">
        <li>adsdgfd</li>
    </ul>
</template>

<script>
module.exports = {
        data: function() {
            return {
                value: ''
            }
        },
        computed: {
            
        },
        props: [],
        watch: {
            value: function() {
                console.log('value at comp1 changed to - ' + this.value);
            }
        },
        methods: {

        },
        created: function() {
            
        }
}
</script>

<style>
    h1 {
        color: red;
    }
</style>