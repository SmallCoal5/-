import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Button, Field, CellGroup, Tab } from "vant";
import router from "./router";
// import store from './store'
// import "vant/lib/index.css";
import "vant/lib/index.less";
const apps = createApp(App);
apps.use(Button).use(Field).use(CellGroup).use(Tab);
apps.use(router);
// apps.use(store);
apps.mount("#app");
