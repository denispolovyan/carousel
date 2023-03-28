<template>
  <div class="wrapper">
    <image-gallery />
  </div>
</template>

<script>
import ImageGallery from "./components/ImageGallery.vue";

export default {
  name: "App",
  components: {
    ImageGallery,
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
