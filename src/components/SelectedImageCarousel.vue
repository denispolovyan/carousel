<template>
  <div class="selected-image-carousel">
    <div class="selected-image-carousel__body">
      <swiper :slides-per-view="$store.getters.getSelectedImages.length" :space-between="20">
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
  methods: {
    deleteImage(url) {
      this.$store.commit("deleteSelectedImage", url);
    },
  },
  created() {
    const selectedImages = localStorage.getItem("selected-images");
    if (selectedImages) {
      this.$store.commit("setSelectedImages", JSON.parse(selectedImages));
    }
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
