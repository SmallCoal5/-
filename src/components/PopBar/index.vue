<template>
  <div>
    <van-nav-bar title="标题">
      <template #right>
        <van-button round type="primary" size="small" color="#f8d65a" to="/home"
          >取消</van-button
        >
      </template>
    </van-nav-bar>
    <Tabar></Tabar>
  </div>
</template>
<script setup lang="ts">
import Tabar from "./Tabar.vue";
</script>
<style></style>
