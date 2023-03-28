<template>
  <div
    class="image-carousel"
    :class="{
      blackThemeBackground: $store.getters.getColorTheme,
    }"
  >
    <div class="image-carousel__body">
      <div class="image">
        <span
          class="image__body"
          v-for="image in $store.getters.getImages"
          :key="image"
        >
          <img :src="image.download_url" alt="random image" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      images: [],
    };
  },
  methods: {
    loadImages() {
      this.$store.dispatch("loadImages");
    },
  },
  created() {
    this.loadImages();
  },
};
</script>

<style scoped>
.image-carousel {
  padding: 20px 30px;
}
.image {
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow: hidden;
}
.image__body img {
  height: 300px;
}

/* black theme */
.blackThemeBackground {
  background-color: #e1e2e3;
}
</style>
