<template>
  <van-form validate-trigger="onSubmit" label-width="65px">
    <van-cell-group inset>
      <van-field
        v-model="loginForm.username"
        name="username"
        label="用户名"
        placeholder="输入用户名"
        clearable
        style="font-size: 16px"
      >
      </van-field>
      <van-field
        v-model="loginForm.password"
        type="password"
        name="password"
        label="密码"
        placeholder="输入密码"
        clearable
        style="font-size: 16px"
      >
      </van-field>
      <van-field
        v-model="loginForm.password2"
        type="password"
        name="password"
        label="重复密码"
        placeholder="再次输入密码"
        clearable
        style="font-size: 16px"
      >
      </van-field>
    </van-cell-group>
    <div style="margin: 16px">
      <van-button
        plain
        block
        type="primary"
        native-type="submit"
        @click="onRegister"
      >
        注册
      </van-button>
    </div>
  </van-form>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { Login } from "@/api/interface/index";
import { useRouter } from "vue-router";
import md5 from "js-md5";
import { signupApi } from "@/api/modules/login";
import { Dialog } from "vant";
const loginForm = reactive<Login.RegisterForm>({
  username: "",
  password: "",
  password2: "",
});
// let isShow = ref<boolean>(false);
const router = useRouter();
const onRegister = async () => {
  if (loginForm.password == loginForm.password2) {
    try {
      let requestRegisterForm: Login.ReqLoginForm = {
        username: loginForm.username,
        password: md5(loginForm.password),
      };
      let res = await signupApi(requestRegisterForm);
      console.log(res);
      Dialog.alert({
        message: "注册成功",
      }).then(() => {
        Dialog.close;
      });
      router.push({ name: "login" });
    } catch (error) {
      console.log("error: ", error);
    }
  } else {
    setTimeout(() => {
      loginForm.password = "";
      loginForm.password2 = "";
      loginForm.username = "";
    }, 100);
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
