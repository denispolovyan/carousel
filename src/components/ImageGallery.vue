<template>
  <div class="image-gallery">
    <header-navbar />
    <image-carousel />
  </div>
</template>

<script>
import HeaderNavbar from "../components/HeaderNavbar.vue";
import ImageCarousel from "../components/ImageCarousel.vue";

export default {
  components: {
    HeaderNavbar,
    ImageCarousel,
  },
};
</script>
