<script setup lang="ts"></script>

<template>
  <van-form validate-trigger="onSubmit" label-width="65px">
    <van-cell-group inset>
      <van-field
        name="username"
        label="用户名"
        placeholder="输入用户名"
        clearable
      >
        <template #left-icon> </template>
        >
        <template #right-icon>
          <van-icon name="info-o" />
        </template>
        <template #extra> </template>
      </van-field>
      <van-field
        type="password"
        name="password"
        label="密码"
        placeholder="输入密码"
        clearable
      >
        <template #left-icon>
          <van-loading size="20" />
          <van-icon />
        </template>
        <template #right-icon>
          <van-icon />
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>
</template>

<style lang="less" scoped></style>
