<template>
  <div class="image-carousel">
    <div class="image-carousel__body">
      <div class="image">
        <span class="image__body" v-for="image in $store.getters.getImages" :key="image">
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
  margin: 20px 0px;
  padding: 0px 30px;
}
.image {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.image__body img {
  height: 200px;
}
</style>
