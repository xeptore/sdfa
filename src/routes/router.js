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
        path: '/home', component: Home, meta: { transition: 'slide', navigator: { about: true, visualizer: false } }
      },
      {
        path: '/form', component: Form, meta: { transition: 'slide', navigator: { about: true, visualizer: true } }
      },
      {
        path: '/result', component: Result, meta: { transition: 'slide', navigator: { about: true, visualizer: true } }
      },
      {
        path: '/about', component: About, meta: { transition: 'fade', navigator: { about: false, visualizer: false } }
      },
      {
        path: '/visualizer', component: Visualizer, meta: { transition: 'slide', navigator: { about: true, visualizer: false } }
      }
    ]
  })
  return router
}
