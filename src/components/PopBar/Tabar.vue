<template>
  <div>
    <van-tabbar v-model="active" active-color="#f8d65a" inactive-color="#000">
      <van-tabbar-item icon="photo-o" />
      <van-tabbar-item icon="label-o" />
      <van-tabbar-item icon="setting-o" />
    </van-tabbar>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const active = ref("");
</script>
<style></style>
