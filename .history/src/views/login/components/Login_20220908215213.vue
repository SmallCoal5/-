<template>
  <van-form validate-trigger="onSubmit" label-width="65px">
    <van-cell-group inset>
      <van-field
        name="username"
        label="用户名"
        placeholder="请输入账号"
        clearable
        style="font-size: 16px"
        v-model="loginForm.username"
      />
      <van-field
        type="password"
        name="password"
        placeholder="请输入密码"
        label="密码"
        clearable
        style="font-size: 16px"
        v-model="loginForm.password"
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

<script setup lang="ts">
import { reactive } from "vue";
import { Login } from "@/api/interface/index";
import { useRouter } from "vue-router";
import md5 from "js-md5";
import { loginApi } from "@/api/modules/login";
// 登录表单 v-model实现双向绑定
const loginForm = reactive<Login.ReqLoginForm>({
  username: "",
  password: "",
});
const router = useRouter();
const onSubmit = async () => {
  try {
    let requestLoginForm: Login.ReqLoginForm = {
      username: loginForm.username,
      password: md5(loginForm.password),
      // password: loginForm.password,
    };
    let res = await loginApi(requestLoginForm);
    console.log(res);
    router.push({ name: "home" });
  } catch (error) {
    console.log("error: ", error);
  }
};
</script>
<style lang="less" scoped>
:deep(.van-button--primary) {
  color: #f8d65a;
  // background: #f8d65a;
  border: 1px solid #f8d65a;
}
:deep(.van-cell::after) {
  border-bottom: 1px solid #fdd237;
}
</style>
