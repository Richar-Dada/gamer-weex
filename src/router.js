import Router from 'vue-router'
import lol from './views/lol.vue'
import pd from './views/pd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/lol', component: lol },
    { path: '/pd', component: pd },
    { path: '/', redirect: '/lol' }
  ]
})
