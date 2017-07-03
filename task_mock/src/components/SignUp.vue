<template>
    <div class="sign_up">
      <div>
        <h1>Sign up</h1>
        <hr/>
        <div>
          <label for="sign-up-mail">E-mail: </label>
          <input id="sign-up-mail" type="text" v-model="obj.eMail"/>
        </div>
        <div>
          <label for="sign-up-password">Password: </label>
          <input id="sign-up-password" type="password" v-model="obj.password"/>
        </div>
        <div>
          <label for="sign-up-conf-password">Confirm password: </label>
          <input id="sign-up-conf-password" type="password" v-model="obj.confPassword"/>
        </div>   
        <div>eMail: {{obj.eMail}}</div>  
        <div>password: {{obj.password}}</div>      
        <div>confPassword: {{obj.confPassword}}</div>  
        <button v-on:click="signUp"> Sign up </button>   
      </div>
    </div>
</template>

<script>

export default {
  data: function() {
    return {
      obj: {
        password: '',
        confPassword: '',
        eMail: ''
      }
    }
  },
  computed: {

  },
  methods: {
    signUp: function() {
      this.$store.commit('signUpUser', this.obj);
      //======
      console.log('usersList');
      console.log(this.$store.state.usersList);
      console.log('usersData');
      console.log(this.$store.state.usersData);
      //======
      this.$router.push('/contacts');
    }
  }
}
</script>

<style>
    .sign_up {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 50px;
    }
    .sign_up > div {
      border: 2px solid black;
      padding: 20px;
      border-radius: 10px;
    }
    .sign_up > div > div {
      margin: 10px 0;
      text-align: right;
    }
    .sign_up button {
      cursor: pointer;
    }
</style>