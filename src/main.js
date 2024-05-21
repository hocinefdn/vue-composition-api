import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";

const penia = createPinia();
createApp(App).use(penia).use(router).mount("#app");
