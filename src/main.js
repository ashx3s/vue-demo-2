import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// CSS
import "./assets/tailwind.css";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Specific Icons
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
