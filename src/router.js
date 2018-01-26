import Router from 'vue-router'
import news from './views/news/news.vue'
import pd from './views/pd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/news', component: news },
    { path: '/pd', component: pd },
    { path: '/', redirect: '/news' },
    { path:'*', redirect: '/'}
  ]
})
