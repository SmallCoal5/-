<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const onSubmit = async () => {
  try {
    router.push({ name: "home" });
  } catch (error) {
    console.log("error: ", error);
  }
};
</script>

<template>
  <van-form validate-trigger="onSubmit" label-width="65px">
    <van-cell-group inset>
      <van-field
        name="username"
        label="用户名"
        placeholder="请输入账号"
        clearable
        style="font-size: 16px"
      />
      <van-field
        type="password"
        name="password"
        placeholder="请输入密码"
        label="密码"
        clearable
        style="font-size: 16px"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button
        plain
        block
        type="primary"
        native-type="submit"
        @click="onSubmit"
      >
        登录
      </van-button>
    </div>
  </van-form>
</template>

<style lang="less" scoped>
::v-deep .van-button--primary {
  color: #f8d65a;
  // background: #f8d65a;
  border: 1px solid #f8d65a;
}
::v-deep .van-cell::after {
  border-bottom: 1px solid #fdd237;
}
</style>
