<template>
  <div
    class="footer-navbar"
    :class="{
      blackThemeBackground: $store.getters.getColorTheme,
    }"
  >
    <div class="footer-navbar__body"></div>
  </div>
</template>

<style scoped>
.footer-navbar {
  padding-bottom: 100%;
  /* height:100%; */
  border-top: 1px solid #e2e2e2;
}
.footer-navbar__body {
}

/* black theme */
.blackThemeBackground {
  background-color: #a4a18e;
  border-top: 1px solid #7e7874;
}
</style>
