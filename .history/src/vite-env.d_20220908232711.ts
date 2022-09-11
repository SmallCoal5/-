/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "js-md5" {
  import md5 from "js-md5";
  export default md5;
}
declare module "nprogress";
declare module "qs";
declare module "vue-avatar";
declare module "vue3-video-play";
