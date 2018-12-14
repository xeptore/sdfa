import VueRouter from 'vue-router'

import Home from '../components/Home/Home.vue'
import Form from '../components/Form/Form.vue'
import Result from '../components/Result/Result.vue'
import About from '../components/About/About.vue'

export function Routes () {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/', redirect: '/home'
      },
      {
        path: '/home', component: Home
      },
      {
        path: '/form', component: Form
      },
      {
        path: '/result', component: Result
      },
      {
        path: '/about', component: About
      }
    ]
  })
}
