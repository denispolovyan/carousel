import { createStore } from "vuex";
import { loadImages } from "../images.js";

export default createStore({
  state() {
    return {
      blackTheme: false,
      photosPage: 1,
      images: "",
    };
  },
  getters: {
    getColorTheme(state) {
      return state.blackTheme;
    },
    getPhotosPage(state) {
      return state.photosPage;
    },
    getImages(state) {
      return state.images;
    },
  },
  mutations: {
    changeColorTheme(state) {
      state.blackTheme = !state.blackTheme;
    },
    setColorTheme(state, blackTheme) {
      state.blackTheme = blackTheme;
    },
    plusPhotosPage(state) {
      state.photosPage++;
    },
    minusPhotosPage(state) {
      state.photosPage--;
    },
    setPhotosPage(state, page) {
      state.photosPage = page;
    },
    setImages(state, images) {
      state.images = images;
    },
  },
  actions: {
    async loadImages() {
      const images = await loadImages(this.state.photosPage, 5);
      this.commit("setImages", images);
    },
  },
});
