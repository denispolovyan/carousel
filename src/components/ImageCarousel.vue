<template>
  <div class="image-carousel">
    <div class="image-carousel__body">
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      imgQuantity: 5,
    };
  },
};
</script>

<style scoped>
.image-carousel {
	margin: 20px 0px;
	padding: 0px 30px;
}
.image-carousel__body {
}
.image {
}
</style>
