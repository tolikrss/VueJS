<template>
            <ul>
                    <li class="user" v-for="user in users | filterBy filterExpirience | filterBy filterLanguages | filterBy filterEducations">
                        <div>
                            Name: {{ user.name }}
                        </div>
                        <div>
                            Expirience: {{ user.expirience }}
                        </div>
                        <div>
                            Languages: {{ user.languages }}
                        </div>
                        <div>
                            Education: {{ user.education }}
                        </div>
                    </li>
            </ul>
            <div class="state">
                Состояние данных в model3:
                <div>Выбрано: {{expirience}}</div>
                <div>Выбрано: {{languages}}</div>
                <div>Выбрано: {{educations}}</div>
            </div>
</template>

<script>
    module.exports = {
    components: {
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
</script>

<style>

</style>