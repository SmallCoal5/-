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
  padding-top: 30vh;
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
  width: #f8d65a;
  height: #f8d65a;
  background: #f8d65a;
  border-radius: #f8d65a;
}
:deep(.van-tab) {
  // position: relative;
  // display: flex;
  // flex: 1;
  // align-items: center;
  // justify-content: center;
  // box-sizing: border-box;
  // padding: 0 var(--van-padding-base);
  // color: var(--van-tab-text-color);
  font-size: 18px;
  //   line-height: var(--van-tab-line-height);
  //   cursor: pointer;
}
</style>
