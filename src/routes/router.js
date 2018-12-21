import VueRouter from 'vue-router'

import Home from '../components/Home/Home.vue'
import Form from '../components/Form/Form.vue'
import Result from '../components/Result/Result.vue'
import About from '../components/About/About.vue'
import Visualizer from '../components/Visualizer/Visualizer.vue'

export function Routes () {
  const router = new VueRouter({
    mode: 'hash',
    routes: [
      {
        path: '/', redirect: '/home', meta: { transition: 'slide' }
      },
      {
        path: '/home', component: Home, meta: { transition: 'slide', navigator: { about: true, visualizer: false }, breadcrumb: true }
      },
      {
        path: '/form', component: Form, meta: { transition: 'slide', navigator: { about: true, visualizer: true }, breadcrumb: true }
      },
      {
        path: '/result', component: Result, meta: { transition: 'slide', navigator: { about: true, visualizer: true }, breadcrumb: true }
      },
      {
        path: '/about', component: About, meta: { transition: 'fade', navigator: { about: false, visualizer: false }, breadcrumb: false }
      },
      {
        path: '/visualizer', component: Visualizer, meta: { transition: 'slide', navigator: { about: true, visualizer: false }, breadcrumb: false }
      },
      {
        path: '*', redirect: '/home'
      }
    ]
  })
  return router
}
