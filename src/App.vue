<template>
  <div class="wrapper">
    <gallery-app />
  </div>
</template>

<script>
import GalleryApp from "./components/GalleryApp.vue";

export default {
  name: "App",
  components: {
    GalleryApp,
  },
};
</script>

<style scoped>
@import url("./assets/css/nullstyle.css");

#app {
  height: 100vh;
}
.wrapper {
  height: 100vh;
}
main {
  height: 100vh;
}
</style>
