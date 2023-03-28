<template>
  <div
    class="image-carousel"
    :class="{
      blackThemeBackground: $store.getters.getColorTheme,
    }"
  >
    <div class="image-carousel__body">
      <swiper :slides-per-view="previewSlide" :space-between="20">
        <swiper-slide
          v-for="image in $store.getters.getImages"
          :key="image"
          style="padding: 20px; text-align: center"
          ><img class="image" :src="image.download_url" alt="random image"
        /></swiper-slide>
        ...
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => {
    return {
      images: [],
      previewSlide: 3,
      clientWidth: "",
    };
  },
  methods: {
    loadImages() {
      this.$store.dispatch("loadImages");
    },
    getWindowSize() {
      this.clientWidth = window.screen.width;
      this.clientWidth > 1750 ? (this.previewSlide = 3) : null;
      this.clientWidth > 2000 ? (this.previewSlide = 4) : null;
      this.clientWidth < 1500 ? (this.previewSlide = 2) : null;
      this.clientWidth < 1000 ? (this.previewSlide = 1) : null;
    },
  },
  created() {
    this.loadImages();
    this.getWindowSize();
  },
  mounted() {
    window.removeEventListener("resize", this.getWindowSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.getWindowSize);
  },
};
</script>

<style scoped>
.image-carousel {
  padding: 40px 30px;
}

.image {
  height: 300px;
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  
}

/* black theme */
.blackThemeBackground {
  background-color: #e1e2e3;
}
@media (max-width: 700px) {
  .image {
    width: 100%;
    height: 100%;
    display: flex;
    align-self: center;
  }
}
</style>
