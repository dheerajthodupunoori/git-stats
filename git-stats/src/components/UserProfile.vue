<template>
    <div>

      

        <b-breadcrumb style="width:70%;margin-left:15%;">

            
            <b-container>
                   <b-row>
                     <b-col>
                        <div v-if="!userDetails" class="text-center">Fetching your Github profile</div>
                        <div v-else>
                            <b-img :src="avatar_url" fluid alt="Fluid image" height="300" width="300" rounded></b-img>
                        </div>
                  </b-col>
                  <b-col>
                       <div v-if="!userDetails" class="text-center">Fetching your Github stats</div>
                        <div v-else>
                        <div class="bio">
                                <span>Designation:<strong>{{userDetails.bio}}</strong></span>
                                <span>Company:<strong>{{userDetails.company}}</strong></span>
                                <span>Created At:<strong>{{userDetails.created_at}}</strong></span>
                                <span>Location:<strong>{{userDetails.location}}</strong></span>
                                <span>Public Repos:<strong>{{userDetails.public_repos}}</strong></span>
                                <span>Public Gists:<strong>{{userDetails.public_gists}}</strong></span>
                                <!-- <span>URL:<button></button></span> -->
                            </div>
                        </div>
                  </b-col>
                 </b-row>
            </b-container>

          

        </b-breadcrumb>

    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserProfile',
  data()  {
      return {
          UserName:"",
          userDetails: null,
          avatar_url : "",
      }
  },
  created() {
      console.log(this.$route.params);
      this.UserName = this.$route.params.userName;
      this.fetchUserDetails();
  },
  methods: {
      async fetchUserDetails() {

          let request_url = "http://127.0.0.1:8000/getUserDetails/"+this.UserName;
          console.log(request_url);

          axios.get(request_url).then((response) => {
              console.log(response);
              this.userDetails = response.data;
              this.avatar_url = this.userDetails.avatar_url;
              console.log(this.avatar_url);
          }).catch((error) => {
              console.log(error);
          })

      },
      getAvatarUrl(){
          return this.avatar_url;
      }
  }
    
}
</script>

<style scoped>

.bio{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-items: start;
    align-items: flex-start;
    /* margin-left: 25%; */
}
span{
    padding: 2%;
}

</style>