<template>
  <div id="app">
   
      <Username @fetchUserDetails="fetchUserDetails"></Username>
       <router-view></router-view>
      <!-- <UserProfile userName="userName"></UserProfile> -->
  </div>
</template>

<script>
import Username from './components/Username.vue';
// import UserProfile from './components/UserProfile.vue';

export default {
  name: 'App',
  data()  {
      return {
        userName:"",
      }
  },
  components:{
    Username,
    // UserProfile
  },
  methods: {
    fetchUserDetails(userName) {

      this.userName = userName;
      console.log("username" , this.userName);
      this.$router.push(`/profle/${this.userName}`)

    }
  }
   
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> 
