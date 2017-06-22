<template>
    <h1>Comp1 works!</h1>
    <h2>Состояние message в компоненте - {{message}}</h2>
    <input v-model="message"></input>
    <ul class="comp1__list">
        <li v-for="film in films">
            <!--
            <img v-bind:src="film.Poster">
            -->
            <div>
                <div>{{film.Title}}</div>
                <div>{{film.Type}}</div>
                <div>{{film.Year}}</div>
                <div>{{film.imdbID}}</div>
            </div>
        </li>
    </ul>
</template>

<script>
module.exports = {
        data: function() {
            return {
                films: [],
                filmsLink: 'http://www.omdbapi.com/'
            }
        },
        computed: {
        },
        props: ['message'],
        watch: {
            message: function() {
                this.$emit('changed', this.message);
            }
        },
        methods: {
            getAllFilms: function() {
                var options = {
                    params: {
                        apikey: 'ff8acd7c',
                        y: 2017,
                        s: 'f'
                    }
                }
                this.$http.get(this.filmsLink, options).then(function(response) {
                    this.films = response.body.Search;;
                }, function(error) {
                    //error
                })
            }
        },
        created: function() {
            this.getAllFilms();
        }
}
</script>

<style>
    h1 {
        color: red;
    }
    .comp1__list {
        list-style-type: none;
    }
    .comp1__list li {
        padding: 20px;
        width: 400px;
        height: 100px;
        background-color: #eee;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        margin: 10px 0;
    }
    .comp1__list li img {
        display: inline-block;
        width: 100px;
        height: 100px;
    }
    .comp1__list li div {
        margin-left: 15px;
        display: inline-block;
        width: 300px;
    }
</style>