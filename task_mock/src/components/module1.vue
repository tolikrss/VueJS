<template>

        <h1>Model1</h1>
        
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