<template>
    <div class="contacts" v-if="true">
      <div>
        <h1>My contacts</h1>
        <hr/>
        <div>
          <div> E-mail: {{activeUserEmail}} </div>
        </div>
        <div>
          <label for="contacts-phone">Phone: </label>
          <input id="contacts-phone" type="text" v-model="phone"/>
        </div>
        <div>eMail: {{activeUserEmail}}</div>  
        <div>phone: {{phone}}</div>  
        <div>activeUserID: {{activeUserID}}</div>      
        <button v-on:click="addPhone"> Save </button>
      </div>
    </div>
</template>

<script>


export default {
  data: function() {
    return {
        phone: ''
    }
  },
  computed: {
      activeUserID() {
        return this.$store.state.activeUserID;
      },
      activeUserEmail() {
        return this.$store.getters.getActiveUserEmail;
      }
  },
  methods: {
    addPhone() {
      this.$store.commit('setActiveUserPhone', this.phone);
      console.log('addPhone() from contacts worked, ===================');
      console.log('usersList');
      console.log(this.$store.state.usersList);
      console.log('usersData');
      console.log(this.$store.state.usersData);
      //======
      this.$router.push('/');
    }
  }
}
</script>

<style>
    .contacts {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 50px;
    }
    .contacts > div {
      border: 2px solid black;
      padding: 20px;
      border-radius: 10px;
    }
    .contacts > div > div {
      margin: 10px 0;
      text-align: right;
    }
    .contacts button {
      cursor: pointer;
    }
</style>