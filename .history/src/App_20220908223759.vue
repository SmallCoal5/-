<template>
  <TopBar v-show="showTabbar" class="top"></TopBar>
  <router-view />
  <Tabbar v-show="showTabbar" />
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Tabbar from "./components/Tabbar/index.vue";
import { useRoute } from "vue-router";
import TopBar from "./components/TopBar/index.vue";
const showTabbar = ref(true);
const route = useRoute();
// 不需要展示标签栏的理由
const noShowTabbarRouteList = [
  "/",
  "/login",
  // "/detail",
  // "/update-password",
  // "/upload-avatar",
];
// watchEffect 和 watch 都是监听器
// watchEffect 与 watch 的区别主要有以下几点：
// 1.不需要手动传入依赖 2.每次初始化时会执行一次回调函数来自动获取依赖 3.无法获取到原值，只能得到变化后的值
watchEffect(() => {
  showTabbar.value = !noShowTabbarRouteList.includes(route.path);
});
</script>
<style scoped>
.top {
  position: sticky;
  top: 0;
}
</style>
