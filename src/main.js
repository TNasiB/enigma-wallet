import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "/src/router";
import { createVfm } from "vue-final-modal";
import "vue-final-modal/style.css";
import QrReader from "vue3-qr-reader";

createApp(App).use(router).use(QrReader).use(createVfm()).mount("#app");
