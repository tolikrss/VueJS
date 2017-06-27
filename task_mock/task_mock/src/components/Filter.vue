<template>
    <div class="model1">
                
                <model1 :expirience="expirience" :languages="languages" :educations="educations" @filter-changed="filterChange"></model1>
                <div class="model2">
                <!--
                    <model2 :expirience="expirience" :languages="languages" :educations="educations"></model2>
                -->
                </div>
    </div>
    <!--
    <div class="model3">
        <model3 :expirience="expirience" :languages="languages" :educations="educations"></model3>
    </div>
    -->
</template>

<script>
import module1 from './module1.vue'

export default {
    name: 'Filter',
    data: function() {
        return {
            expirience: '',
            languages: [],
            educations: []
        }
    },
    components: {
         model1: module1,
        // model2: model2,
        // model3: model3
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
}
</script>

<style>
    
</style>