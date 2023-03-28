<template>
  <div
    class="header-navbar"
    :class="{
      blackThemeBackground: $store.getters.getColorTheme,
    }"
  >
    <div class="header-navbar__body">
      <div class="header-navbar__logo">
        <img
          src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2019/08/feature-vuejs.png?ssl=1"
          alt="vue logo"
        />
      </div>
      <div class="header-navbar__list">
        <div class="header-navbar__item">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item" @click="minusPage()">
                <a class="page-link" href="#">Previous</a>
              </li>
              <li class="page-item" @click="plusPage()">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="heade-navbar__item">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" @click="photosQuantity = 5">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" @click="photosQuantity = 10"
                  >10</a
                >
              </li>
              <li class="page-item">
                <a class="page-link" href="#" @click="photosQuantity = 15"
                  >15</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="heade-navbar__item">
          <div class="header-navbar__switcher">
            <div class="custom-control custom-switch">
              <input
                v-model="blackTheme"
                type="checkbox"
                class="custom-control-input"
                id="customSwitches"
              />
              <label class="custom-control-label" for="customSwitches"
                >{{ blackTheme ? "Black" : "White" }} theme</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      blackTheme: false,
      photosPage: 1,
      photosQuantity: "",
    };
  },
  methods: {
    plusPage() {
      this.photosPage++;
      if (this.photosPage < 100) {
        this.$store.commit("plusPhotosPage");
        localStorage.setItem("photos-page", JSON.stringify(this.photosPage));
        this.$store.dispatch("loadImages");
      }
    },
    minusPage() {
      this.photosPage--;
      if (this.photosPage > 0) {
        this.$store.commit("minusPhotosPage");
        localStorage.setItem("photos-page", JSON.stringify(this.photosPage));
        this.$store.dispatch("loadImages");
      }
    },
  },
  watch: {
    blackTheme() {
      localStorage.setItem("color-theme", JSON.stringify(this.blackTheme));
		this.$store.commit("setColorTheme", this.blackTheme);
    },
    photosQuantity() {
      this.$store.commit("setPhotosQuantity", this.photosQuantity);
      this.$store.dispatch("loadImages");
    },
  },
  created() {
    // color theme
    let colorTheme = localStorage.getItem("color-theme");
    if (colorTheme) {
      let parsedColorTheme = JSON.parse(colorTheme);
      this.blackTheme = parsedColorTheme;
      console.log(parsedColorTheme);
      this.$store.commit("setColorTheme", parsedColorTheme);
    }

    //  photos page
    let photosPage = localStorage.getItem("photos-page");
    if (photosPage) {
      let parsedPhotosPage = JSON.parse(photosPage);
      this.photosPage = parsedPhotosPage;
      this.$store.commit("setPhotosPage", parsedPhotosPage);
    }
  },
};
</script>

<style scoped>
.header-navbar {
  padding: 0px 40px;
  border-bottom: 1px solid #e2e2e2;
}
.header-navbar__body {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-navbar__logo img {
  height: 80px;
  width: 80px;
}
.header-navbar__list {
  display: flex;
  gap: 20px;
}
.header-navbar__list {
  align-items: center;
}
.header-navbar__item {
  max-height: 100%;
  margin: auto px;
}
/* bootstrap classes  */
.mb-3,
.my-3 {
  margin-bottom: 0px !important;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  margin-top: 15px;
}

/* black theme */
.blackThemeBackground {
  background-color: #a4a18e;
  color: #fff;
  border-bottom: 1px solid #7e7874;
}
</style>
