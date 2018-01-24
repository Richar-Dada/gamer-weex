import App from './App.vue'

// new Vue(Vue.util.extend({ el: '#root' }, App))
new Vue({
  el: '#root',
  render (h) {
    return h(App)
  }
})