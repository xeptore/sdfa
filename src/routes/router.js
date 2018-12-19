import VueRouter from 'vue-router'

import Home from '../components/Home/Home.vue'
import Form from '../components/Form/Form.vue'
import Result from '../components/Result/Result.vue'
import About from '../components/About/About.vue'
import Visualizer from '../components/Visualizer/Visualizer.vue'

export function Routes () {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/', redirect: '/home', meta: { transition: 'slide' }
      },
      {
        path: '/home', component: Home, meta: { transition: 'slide' }
      },
      {
        path: '/form', component: Form, meta: { transition: 'slide' }
      },
      {
        path: '/result', component: Result, meta: { transition: 'slide' }
      },
      {
        path: '/about', component: About, meta: { transition: 'fade', navigator: false }
      },
      {
        path: '/visualizer', component: Visualizer, meta: { transition: 'slide' }
      }
    ]
  })
  return router
}
