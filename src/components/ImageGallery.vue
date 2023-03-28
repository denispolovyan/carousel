<template>
  <div class="image-gallery">
    <header-navbar />
    <image-carousel />
    <footer-navbar />
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
