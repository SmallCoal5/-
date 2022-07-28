import { createApp } from "vue";
import App from "./App.vue";
import {
  Button,
  Field,
  Cell,
  CellGroup,
  Tab,
  Popup,
  Icon,
  List,
  NavBar,
  Grid,
  GridItem,
  Lazyload,
  Col,
  Row,
  Image as VanImage,
  Divider,
} from "vant";
import router from "./router";
// import store from './store'
// import "vant/lib/index.css";
import "vant/lib/index.less";
import "lib-flexible/flexible";
import "amfe-flexible/index.js";
import "uno.css";
const apps = createApp(App);
apps
  .use(Button)
  .use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Tab)
  .use(Popup)
  .use(Icon)
  .use(List)
  .use(NavBar)
  .use(Grid)
  .use(GridItem)
  .use(Lazyload)
  .use(Col)
  .use(Row)
  .use(VanImage)
  .use(Divider);
apps.use(router);
// apps.use(store);
apps.mount("#app");
