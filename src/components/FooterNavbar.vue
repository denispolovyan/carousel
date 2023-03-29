<template>
  <div
    class="footer-navbar"
    :class="{
      blackThemeBackground: $store.getters.getColorTheme,
    }"
  >
    <div class="footer-navbar__body">
      <selected-image-carousel />
    </div>
  </div>
</template>

<script>
import SelectedImageCarousel from "./SelectedImageCarousel.vue";
export default {
  components: {
    SelectedImageCarousel,
  },
};
</script>

<style scoped>
.footer-navbar {
  min-height: 40px;
  border-top: 1px solid #e2e2e2;
}

/* black theme */
.blackThemeBackground {
  background-color: #a4a18e;
  border-top: 1px solid #7e7874;
}
</style>
