<template src="./index.html"></template>

<script>
import Navigator from "./components/Navigator/Navigator.vue";

const routes = ["/home", "/form", "/result", "/visualizer"];

export default {
  name: "App",
  components: {
    Navigator
  },
  data() {
    return {
      transition: "fade",
      navigator: {
        about: true,
        visualizer: false
      }
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
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

