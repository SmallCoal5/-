<script setup lang="ts"></script>

<template>
  <van-form validate-trigger="onSubmit" label-width="65px">
    <van-cell-group inset>
      <van-field
        name="username"
        label="用户名"
        placeholder="请输入账号"
        clearable
      />
      <van-field
        type="password"
        name="password"
        placeholder="请输入密码"
        label="密码"
        clearable
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<style lang="less" scoped></style>
