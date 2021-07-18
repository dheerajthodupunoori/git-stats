<template>
    <b-breadcrumb style="width:70%;margin-left:15%">
    <b-container>
      <b-row>
        <b-col>
           <b-form-group label-cols="4" label-cols-lg="2" label="Github Username:" label-for="input-default">
            <b-form-input v-model="UserName"  placeholder="Enter your Github Username"></b-form-input>
            </b-form-group>
              <b-button pill variant="outline-secondary" @click="getUserDetails">Get Git Stats</b-button>
           <div class="mt-3 mx-auto" v-if="UserName">Username: <strong>{{ UserName }}</strong></div>
            <b-alert show variant="danger" class="mt-2 w-25 text-center mx-auto" v-if="noUserName">Enter Github username to get your github stats.</b-alert>
        </b-col>
      </b-row>
    </b-container>
    
    </b-breadcrumb>
</template>

<script>

export default {
  name: 'Username',
  data()  {
      return {
          UserName:"",
          noUserName: false,
      }
  },
  
  methods: {
      getUserDetails() {

          if(this.UserName!==undefined && this.UserName!==null && this.UserName!=="") {
              console.log(this.UserName);
              this.$emit('fetchUserDetails',this.UserName);
              this.noUserName = false;
          }
          else {
            console.log("");
            this.noUserName =true;
          }

      },
  }
};
</script>