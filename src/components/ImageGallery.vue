<template>
  <div class="image-gallery">
    <header-navbar />
    <image-carousel />
    <footer-navbar class="footer-navbar" />
  </div>
</template>

<script>
import HeaderNavbar from "../components/HeaderNavbar.vue";
import FooterNavbar from "../components/FooterNavbar.vue";
import ImageCarousel from "../components/ImageCarousel.vue";

export default {
  components: {
    HeaderNavbar,
    ImageCarousel,
    FooterNavbar,
  },
};
</script>

<style scoped>
.image-gallery {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.footer-navbar {
  flex-grow: 1;
}
</style>
