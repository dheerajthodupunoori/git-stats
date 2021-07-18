import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BFormInput } from 'bootstrap-vue'
import { BContainer,BRow,BCol } from 'bootstrap-vue'
import { BBreadcrumb } from 'bootstrap-vue'
import { BFormGroup } from 'bootstrap-vue'
import { BButton } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import UserProfile from './components/UserProfile.vue'
// import Username from './components/Username.vue'
import { BAlert } from 'bootstrap-vue'
Vue.component('b-alert', BAlert)
import { BImg } from 'bootstrap-vue'
Vue.component('b-img', BImg)

Vue.component('b-button', BButton)
Vue.component('b-form-group', BFormGroup)
Vue.component('b-breadcrumb', BBreadcrumb)

Vue.component('b-row', BRow)
Vue.component('b-col', BCol)

Vue.component('b-container', BContainer)
Vue.component('b-form-input', BFormInput)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
  { path: '/profle/:userName', 
  component: UserProfile ,
  props: true},
]})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
