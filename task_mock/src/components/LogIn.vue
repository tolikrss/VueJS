<template>
    <div class="log_in">
      <div>
        <h1>Log in</h1>
        <hr/>
        <div>
          <label for="sign-up-mail">E-mail: </label>
          <input id="sign-up-mail" type="text" v-model="obj.eMail"/>
        </div>
        <div>
          <label for="sign-up-password">Password: </label>
          <input id="sign-up-password" type="password" v-model="obj.password"/>
        </div>  
        <div>eMail: {{obj.eMail}}</div>  
        <div>password: {{obj.password}}</div>
        <button v-on:click="logIn"> Sign in </button>
      </div>
    </div>
</template>

<script>
import module1 from './module1.vue'

export default {
    data: function() {
        return {
            obj: {
              eMail: '',
              password: ''
            }
        }
    },
    components: {
         model1: module1,
    },
    methods: {
      logIn() {
         this.$store.commit('logInUser', this.obj);
         this.$router.push('/');
      }
    }
}
</script>

<style>
    .log_in {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 50px;
    }
    .log_in > div {
      border: 2px solid black;
      padding: 20px;
      border-radius: 10px;
    }
    .log_in > div > div {
      margin: 10px 0;
      text-align: right;
    }
    .sign_in button {
      cursor: pointer;
    }
</style>