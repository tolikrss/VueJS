var Vue = require('vue');
var VueResource = require('vue-resource');
var comp1 = require('vue!./components/comp1.vue');
var comp2 = require('vue!./components/comp2.vue');

Vue.use(VueResource);



var vm = new Vue({
    el: "#app",
    components: {
        comp1: comp1,
        comp2: comp2
    },
    data: {
        filmsLink: 'http://www.omdbapi.com/',
        films: [],
        message: "message"
    },
    methods: {
        changeMessage(mess) {
            this.message = mess;
        }
    },
    created: function() {

    }
});



//http: //www.omdbapi.com/?apikey=ff8acd7c&y=2017&s=f