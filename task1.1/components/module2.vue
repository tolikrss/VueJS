<template>
        <div>
            Filtered by:
            <span>
                expirience:
                {{expirience}}
            </span>
            <span v-if="languages.length !== 0">
                language:
                {{languages}}
            </span>
            <span v-if="educations.length !== 0">
                education:
                {{educations}}
            </span>
        </div>
</template>

<script>
    module.exports = {
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
</script>

<style>

</style>