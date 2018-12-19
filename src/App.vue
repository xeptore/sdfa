<template src="./index.html"></template>

<script>
const routes = ["/home", "/form", "/result", "/visualizer"];

export default {
  name: "App",
  data() {
    return {
      transition: "fade"
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
      next();
    });
  }
};
</script>

