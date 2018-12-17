import Wrapper from '../Wrapper/Wrapper.vue'
import Breadcrumb from '../Breadcrumb/Breadcrumb.vue'
import Navigator from '../Navigator/Navigator.vue'

import Globals from '../../globals'

export default {
  name: 'Result',
  components: {
    Wrapper,
    Breadcrumb,
    Navigator
  },
  data () {
    return {
      result: Globals.ValidationResult
    }
  }
}
