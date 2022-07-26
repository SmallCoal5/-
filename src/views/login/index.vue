<template>
  <div class="wrapper">
    <van-cell-group inset class="main">
      <van-tabs>
        <van-tab title="登录" name="login"><Login></Login></van-tab>
        <van-tab title="注册" name="register"><Register></Register></van-tab>
      </van-tabs>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
</script>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  background-image: url("/src/assets/backbround.jpg");
  padding-top: 25vh;
}
.main {
  min-height: 30vh;
  margin: 10px;
}
::v-deep .van-tabs__line {
  position: absolute;
  bottom: 15px;
  left: 0;
  z-index: 1;
  width: rgb(0, 8, 255);
  height: rgb(0, 8, 255);
  background: rgb(0, 8, 255);
  border-radius: rgb(0, 8, 255);
}
</style>
