import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// CSS
import "./assets/tailwind.css";
// Read the docs: https://fontawesome.com/v6/docs/web/use-with/vue/add-icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBarsStaggard as faBars } from "@fortawesome/pro-solid-svg-icons";
library.add(faBarsStaggard);

createApp(App).use(router).mount("#app");
