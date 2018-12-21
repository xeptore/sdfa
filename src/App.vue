<template src="./index.html"></template>

<script>
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.vue";
import Navigator from "./components/Navigator/Navigator.vue";

const routes = ["/home", "/form", "/result", "/visualizer"];

export default {
  name: "App",
  components: {
    Breadcrumb,
    Navigator
  },
  data() {
    return {
      transition: "fade",
      navigator: {
        about: true,
        visualizer: false
      },
      breadcrumb: {
        show: true,
        page: (this.$route && this.$route.path) || "/home"
      }
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.breadcrumb = {
        page: to.path,
        show: to.meta.breadcrumb
      };

      if (to.path.includes("about") || from.path.includes("about")) {
        this.transition = "fade";
      } else if (routes.indexOf(to.path) > routes.indexOf(from.path)) {
        this.transition = "slide-right";
      } else {
        this.transition = "slide-left";
      }

      if (to.meta && to.meta.navigator) {
        // about page navigator
        this.navigator.about = to.meta.navigator.about;

        // visualizer page navigator
        this.navigator.visualizer = to.meta.navigator.visualizer;
      }

      next();
    });
  }
};
</script>

