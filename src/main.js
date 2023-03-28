// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";
import store from "./store/store"

const app = createApp(App);
app.use(VueSplide);
app.use(store);
app.mount("#app");
