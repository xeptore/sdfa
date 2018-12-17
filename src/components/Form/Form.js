import Wrapper from '../Wrapper/Wrapper.vue'
import Breadcrumb from '../Breadcrumb/Breadcrumb.vue'
import Navigator from '../Navigator/Navigator.vue'

import { Validator } from './validator'

import Globals from '../../globals'

export default {
  name: 'Form',
  components: {
    Wrapper,
    Breadcrumb,
    Navigator
  },
  methods: {
    submit: function (e) {
      e.preventDefault()
      const input = document.getElementById('input')
      if (input && input.value && input.value.length !== 0) {
        const validator = new Validator()
        validator.Validate(input.value, Globals.DFA)
        this.$router.push({ path: '/result' })
      }
    }
  }
}
