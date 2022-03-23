import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// CSS
import "./assets/tailwind.css";

// Read the docs: https://fontawesome.com/v6/docs/web/use-with/vue/add-icons
import { library } from "@fortawesome/fontawesome-svg-core";

// Specific Icons
import { faBarsStaggard as faBarsStaggard } from "@fortawesome/pro-solid-svg-icons";
import { faToggleOn as faToggleOn } from "@fortawesome/pro-solid-svg-icons";
import { faToggleOff as faToggleOff } from "@fortawesome/pro-solid-svg-icons";

library.add(faBarsStaggard, faToggleOn, faToggleOff);

createApp(App).use(router).mount("#app");
