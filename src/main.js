import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuelidate from 'vuelidate'
import 'bootstrap'

// Vue.use(Vuelidate)
createApp(App).use(store).use(router).mount('#app')
