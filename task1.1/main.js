var Vue = require('vue');
var model1 = require('vue!./components/module1.vue');
var model2 = require('vue!./components/module2.vue');
var model3 = require('vue!./components/module3.vue');

new Vue({
    el: "#app",
    components: {
        model1: model1,
        model2: model2,
        model3: model3
    },
    data: {
        expirience: '',
        languages: [],
        educations: []
    },
    methods: {
        filterChange(expirience, languages, educations) {
            this.expirience = expirience;
            this.languages = languages;
            this.educations = educations;
        },
        log() {
            console.log(this.expirience);
            console.log(this.languages);
            console.log(this.educations);
        }
    }
})