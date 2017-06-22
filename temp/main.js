var Vue = require('vue');
var model1 = require('vue!./components/module1.vue');

var vm = new Vue({
    el: "#app",
    components: {
        model1: model1,

    },
    data: {

    },
    methods: {

    },
    created: function() {

    }
})