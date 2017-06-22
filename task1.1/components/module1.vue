<template>
        <button id="Show" @click="show"><i class="fa fa-bars" aria-hidden="true"></i> Show/Hide filters</button>
        <div class="filters" v-if="isShow">
            <button id="ClearAll" @click="clearAll"><i class="fa fa-minus-circle" aria-hidden="true"></i> Clear All</button>
            <fieldset>
                <legend>Expirience</legend>
                <input class="radio" id="less_1" type="radio" name="expirience" value="<1" v-model="expirience" checked >
                <label for="less_1"><1</label>                
                <br>
                <input class="radio" id="more_1" type="radio" name="expirience" value=">=1" v-model="expirience">
                <label for="more_1">>=1</label>      
                <br>
                <input class="radio" id="more_5" type="radio" name="expirience" value=">5" v-model="expirience">
                <label for="more_5">>5</label>    
                <div>Выбрано: {{expirience}}</div>
            </fieldset>
            <fieldset>
                <legend>Language</legend>
                <div>
                    <input class="checkbox" type="checkbox" id="EN" name="interest" value="EN" v-model="languages" checked >
                    <label for="EN">EN</label>
                </div>
                <div>
                    <input class="checkbox" type="checkbox" id="RU" name="interest" value="RU" v-model="languages">
                    <label for="RU">RU</label>
                </div>
                <div>
                    <input class="checkbox" type="checkbox" id="UK" name="interest" value="UK" v-model="languages">
                    <label for="UK">UK</label>
                </div>
                <span>Выбрано: {{languages}}</span>
            </fieldset>
            <fieldset>
                <legend>Education</legend>
                <div>
                    <input class="checkbox" type="checkbox" id="Student" name="interest" value="Student" v-model="educations" checked>
                    <label for="Student">Student</label>
                </div>
                <div>
                    <input class="checkbox" type="checkbox" id="Master" name="interest" value="Master" v-model="educations">
                    <label for="Master">Master</label>
                </div>
                <div>
                    <input class="checkbox" type="checkbox" id="Prof" name="interest" value="Prof" v-model="educations">
                    <label for="Prof">Prof</label>
                </div>
                <span>Выбрано: {{educations}}</span>
            </fieldset>
        </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                isShow: true
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
            },
            show() {
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style>

</style>