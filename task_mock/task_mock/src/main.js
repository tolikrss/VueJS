import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import comp from './components/comp.vue'
import About from './components/About.vue'
import Main from './components/Main.vue'
import Filter from './components/Filter.vue'


Vue.use(VueResource)
Vue.use(VueRouter)



var router = new VueRouter({
    routes: [
        { path: '/comp', component: comp },
        { path: '/filter', component: Filter },
        { path: '/about', component: About }, // /about => About.vue
        { path: '/main', component: Main } // /main => Main.vue
    ]
})



new Vue({
    el: '#app',
    router: router,
    components: {

    },
    data: {

    },
    methods: {

    }
})