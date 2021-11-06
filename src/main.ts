import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/reset.css";
import "ant-design-vue/dist/antd.css";

createApp(App).use(store).use(router).mount("#app");
