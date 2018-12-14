import Wrapper from '../Wrapper/Wrapper.vue'

export default {
  name: 'About',
  components: { Wrapper },
  methods: {
    back (e) {
      this.$router.go(-1)
    }
  }
}
