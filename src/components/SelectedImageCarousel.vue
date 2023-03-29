<template>
  <div class="selected-image-carousel">
    <div class="selected-image-carousel__body">
      <swiper :slides-per-view="previewSlide" :space-between="20">
        <swiper-slide
          v-for="image in $store.getters.getSelectedImages"
          :key="image"
          style="text-align: center"
          @click="deleteImage(image)"
          ><img class="image" :src="image" alt="random image"
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
      previewSlide: "",
    };
  },
  methods: {
    deleteImage(url) {
      let selectedImages = localStorage.getItem("selected-images");
      selectedImages = JSON.parse(selectedImages).filter((t) => t != url);
      localStorage.setItem("selected-images", JSON.stringify(selectedImages));
      this.$store.commit("deleteSelectedImage", url);
    },
    getWindowSize() {
      this.clientWidth = window.screen.width;
      this.clientWidth > 1500 ? (this.previewSlide = 8) : null;
      this.clientWidth > 2000 ? (this.previewSlide = 10) : null;
      this.clientWidth < 1500 ? (this.previewSlide = 6) : null;
      this.clientWidth < 1100 ? (this.previewSlide = 5) : null;
      this.clientWidth < 900 ? (this.previewSlide = 4) : null;
      this.clientWidth < 850 ? (this.previewSlide = 3) : null;
      this.clientWidth < 550 ? (this.previewSlide = 2) : null;
      this.clientWidth < 400 ? (this.previewSlide = 1) : null;
    },
  },
  created() {
    // іselected images
    const selectedImages = localStorage.getItem("selected-images");
    if (selectedImages) {
      this.$store.commit("setSelectedImages", JSON.parse(selectedImages));
    }

    //  preview slide
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
.selected-image-carousel {
  padding: 40px 30px;
}

.image {
  height: 100px;
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
