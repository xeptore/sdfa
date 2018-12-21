import Wrapper from '../Wrapper/Wrapper.vue'
import Breadcrumb from '../Breadcrumb/Breadcrumb.vue'

import Globals from '../../globals'

import pleaseWait from 'please-wait'

function showPleaseWait () {
  pleaseWait.pleaseWait({
    backgroundColor: 'white',
    loadingHtml: `<div class="sk-double-bounce">
      <div class="sk-child sk-double-bounce1"></div>
      <div class="sk-child sk-double-bounce2"></div>
      </div>`
  })
  const wait = document.getElementsByClassName('pg-loading-screen')[0]
  wait.style.zIndex = '0'
  const wrapper = document.getElementsByClassName('wrapper')[0]
  wrapper.appendChild(wait)

  setTimeout(() => {
    if (wait) {
      wait.remove()
    }
  }, 3514)
}

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
    if (!Globals.HasPreviousResult) {
      showPleaseWait()
    }
    Globals.HasPreviousResult = true
  },
  methods: {
    goBack: function () {
      Globals.HasPreviousResult = false
      this.$router.push({ path: '/form' })
    },
    goHome: function () {
      Globals.HasPreviousResult = false
      this.$router.push({ path: '/home' })
    }
  }
}
