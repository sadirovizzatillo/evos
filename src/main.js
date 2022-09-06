import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bulma/css/bulma.css'
// import Bulma from '../src/assets/main.scss'

Vue.config.productionTip = false
console.log(router.currentRoute)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
