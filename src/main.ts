import { createApp } from "vue";
import App from "./App.vue";
import { Button, Field, CellGroup, Tab, Popup } from "vant";
import router from "./router";
// import store from './store'
// import "vant/lib/index.css";
import "vant/lib/index.less";
import "uno.css";
const apps = createApp(App);
apps.use(Button).use(Field).use(CellGroup).use(Tab).use(Popup);
apps.use(router);
// apps.use(store);
apps.mount("#app");
