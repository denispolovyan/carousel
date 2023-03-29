import { createStore } from "vuex";
import { loadImages } from "../images.js";

export default createStore({
  state() {
    return {
      blackTheme: false,
      photosPage: 1,
      photosQuantity: 5,
      images: "",
      selectedImages: [],
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
    getSelectedImages(state) {
      return state.selectedImages;
    },
  },
  mutations: {
    changeColorTheme(state) {
      state.blackTheme = !state.blackTheme;
    },
    setColorTheme(state, theme) {
      state.blackTheme = theme;
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
    setPhotosQuantity(state, quantity) {
      state.photosQuantity = quantity;
    },
    addSelectedImage(state, image) {
      const coincidence = state.selectedImages.filter((t) => t == image);
      !coincidence.length ? state.selectedImages.push(image) : null;
    },
    setSelectedImages(state, images) {
      state.selectedImages = images;
    },
    deleteSelectedImage(state, image) {
      state.selectedImages = state.selectedImages.filter((t) => t != image);
    },
  },
  actions: {
    async loadImages() {
      const images = await loadImages(
        this.state.photosPage,
        this.state.photosQuantity
      );
      const FilteredImages = images.filter(
        (t) => t.width / t.height < 1.7 && t.height / t.width < 1
      );
      this.commit("setImages", FilteredImages);
    },
  },
});
