import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import Books from './components/books.vue'
import Contacts from './components/contacts.vue'
import store from './store/index'

Vue.use(VueResource)
Vue.use(VueRouter)



var router = new VueRouter({
    routes: [
        { path: '/', component: Books },
        { path: '/contacts', component: Contacts },
        { path: '/signup', component: SignUp }, // /about => About.vue
        { path: '/login', component: LogIn } // /main => Main.vue
    ]
})



new Vue({
    el: '#app',
    store: store,
    router: router,
    components: {

    },
    data: {


    },
    computed: {
        auth() {
            return this.$store.state.auth;
        }
    },
    methods: {
        logOut() {
            this.$store.state.auth = false;
            localStorage.setItem('auth', JSON.stringify(this.$store.state.auth));
            console.log('logout() from main.js worked');
        }
    },
    created: function() {
        console.log('main.js created, auth in main.js - ', this.auth);
        this.$store.commit('importFromStorage');
    }
})