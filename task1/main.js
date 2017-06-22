// var childComponent1 = {
//     template: '#model1',
//     data: function() {
//         return {
//             expirience: '',
//             languages: [],
//             educations: []
//         }
//     },
//     watch: {
//         expirience: function() {
//             this.$emit('filter-changed', this.expirience, this.languages, this.educations);
//             console.log('model1 expirience chanched');
//             console.log(this.expirience);
//         },
//         languages: function() {
//             this.$emit('filter-changed', this.expirience, this.languages, this.educations);
//             console.log('model1 languages chanched');
//             console.log(this.languages);
//         },
//         educations: function() {
//             this.$emit('filter-changed', this.expirience, this.languages, this.educations);
//             console.log('model1 educations chanched');
//             console.log(this.educations);
//         }
//     },
//     methods: {
//         filterChanged: function() {
//             this.$emit('filter-changed', this.expirience, this.languages, this.educations);
//             console.log('model1 $emit event');
//         },
//         clearAll() {

//         }
//     }
// }

var childComponent1 = {
    template: '#model1',
    data: function() {
        return {

        }
    },
    props: ['expirience', 'languages', 'educations'],
    watch: {
        expirience: function() {
            this.$emit('filter-changed', this.expirience, this.languages, this.educations);
            console.log('model1 expirience chanched');
            console.log(this.expirience);
        },
        languages: function() {
            this.$emit('filter-changed', this.expirience, this.languages, this.educations);
            console.log('model1 languages chanched');
            console.log(this.languages);
        },
        educations: function() {
            this.$emit('filter-changed', this.expirience, this.languages, this.educations);
            console.log('model1 educations chanched');
            console.log(this.educations);
        }
    },
    methods: {
        clearAll() {
            this.expirience = '<1';
            this.educations = ['Student'];
            this.languages = ['EN'];
        }
    }
}

var childComponent2 = {
    template: '#model2',
    props: ['expirience', 'languages', 'educations'],
    watch: {

    },
    data: function() {
        return {

        }
    },
    methods: {
        log() {
            console.log('log model2');
            console.log(this.expirience);
            console.log(this.languages);
            console.log(this.educations);
        }
    }
}

var childComponent3 = {
    template: '#model3',
    components: {
        model4: childComponent4
    },
    props: ['expirience', 'languages', 'educations'],
    data: function() {
        return {
            users: [{
                    name: 'Vasiliy',
                    expirience: 0.5,
                    languages: ['RU', 'UK'],
                    education: ['Student']
                },
                {
                    name: 'Petr',
                    expirience: 1,
                    languages: ['RU', 'UK'],
                    education: ['Student']
                },
                {
                    name: 'Ivan',
                    expirience: 2,
                    languages: ['RU', 'UK', 'EN'],
                    education: ['Master']
                },
                {
                    name: 'Sergey',
                    expirience: 7,
                    languages: ['RU', 'EN'],
                    education: ['Master']
                },
                {
                    name: 'Nikolay',
                    expirience: 5,
                    languages: ['EN', 'UK'],
                    education: ['Master']
                },
                {
                    name: 'Georgiy',
                    expirience: 7,
                    languages: ['RU', 'UK', 'EN'],
                    education: ['Prof', 'Student']
                },
                {
                    name: 'Alexandr',
                    expirience: 7,
                    languages: ['RU', 'UK', 'EN'],
                    education: ['Master', 'Student']
                },
                {
                    name: 'Bogdan',
                    expirience: 7,
                    languages: ['RU', 'UK', 'EN'],
                    education: ['Master', 'Prof']
                },
                {
                    name: 'Igor',
                    expirience: 7,
                    languages: ['RU', 'UK', 'EN'],
                    education: ['Master', 'Prof', 'Student']
                }
            ]
        }
    },
    methods: {
        filterEducations: function(user) {
            var fl = 0;
            if (!this.educations || user.education.length !== this.educations.length) {
                return false;
            }
            for (var i = 0; i < this.educations.length; i++) {
                for (var j = 0; j < user.education.length; j++) {
                    if (this.educations[i] === user.education[j]) {
                        fl++;
                        break;
                    }
                }
            }

            if (fl === user.education.length) {
                return true
            } else {
                return false
            }
        },
        filterLanguages: function(user) {
            if (!this.languages) {
                return true;
            }
            for (var i = 0; i < this.languages.length; i++) {
                for (var j = 0; j < user.languages.length; j++) {
                    if (this.languages[i] === user.languages[j]) {
                        break;
                    }
                    if (j === user.languages.length - 1) {
                        return false;
                    }
                }
            }
            return true;
        },
        filterExpirience: function(user) {
            if (this.expirience === '<1') {
                return true;
            } else if (this.expirience === '>=1') {
                if (user.expirience >= 1) return true;
            } else if (this.expirience === '>5') {
                if (user.expirience > 5) return true;
            }
        }
    }
}


// <!--
//             <input class="radio" id="{{ID}}" type="radio" name="{{model}}" value="{{value}}" v-model="{{model}}" checked >
//             <label for="{{ID}}">{{value}}</label>    
// -->
var childComponent4 = {
    template: `
        
        <div>Model 4 component</div>
    `,
    //props: ['ID', 'model', 'value'],
    watch: {},
    methods: {}
}

new Vue({
    el: "#app",
    components: {
        model1: childComponent1,
        model2: childComponent2,
        model3: childComponent3
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