import App from './App.vue'
import router from './router'

new Vue(Vue.util.extend({ el: '#root' , router }, App))

router.push('/')