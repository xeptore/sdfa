import Wrapper from '../Wrapper/Wrapper.vue'
import Breadcrumb from '../Breadcrumb/Breadcrumb.vue'

import Globals from '../../globals'

import pleaseWait from 'please-wait'

export default {
  name: 'Result',
  components: {
    Wrapper,
    Breadcrumb
  },
  data () {
    return {
      result: Globals.ValidationResult
    }
  },
  mounted () {
    pleaseWait.pleaseWait({
      backgroundColor: 'white',
      loadingHtml: `<div class="sk-double-bounce">
      <div class="sk-child sk-double-bounce1"></div>
      <div class="sk-child sk-double-bounce2"></div>
      </div>`
    })
    const wait = document.getElementsByClassName('pg-loading-screen')[0]
    const wrapper = document.getElementsByClassName('wrapper')[0]
    wrapper.appendChild(wait)

    setTimeout(() => {
      const loading = document.getElementsByClassName('pg-loading-screen')[0]
      if (loading) {
        loading.remove()
      }
    }, 3514)
  },
  methods: {
    goBack: function () {
      this.$router.push({ path: '/form' })
    },
    goHome: function () {
      this.$router.push({ path: '/home' })
    }
  }
}
