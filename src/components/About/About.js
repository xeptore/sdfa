import Wrapper from '../Wrapper/Wrapper.vue'
import Breadcrumb from '../Breadcrumb/Breadcrumb.vue'

export default {
  name: 'About',
  components: { Wrapper, Breadcrumb },
  methods: {
    back (e) {
      this.$router.go(-1)
    }
  }
}
