<template>
  <van-tabbar v-model="active" active-color="#f8d65a" inactive-color="#000">
    <van-tabbar-item icon="home-o" dot>标签</van-tabbar-item>
    <van-tabbar-item icon="search" badge="9">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { ref } from "vue";
const active = ref("");
</script>
<style lang="less" scoped>
.tab {
  border-top: 1px solid #e9e9e9;
}
</style>
