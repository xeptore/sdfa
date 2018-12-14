import './components/_shared/styles/main.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Routes } from './routes/router'

Vue.use(VueRouter)

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router: Routes(),
  el: '#app'
})
