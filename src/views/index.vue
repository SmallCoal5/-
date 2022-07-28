<template>
  <!-- 主体 -->
  <van-nav-bar title="主页">
    <template #left>
      <van-icon name="smile-o" size="25" color="#f8d65a" />
    </template>
    <template #right>
      <van-icon name="search" size="25" color="#f8d65a" />
    </template>
  </van-nav-bar>
  <van-pull-refresh>
    <!-- <van-grid :column-num="2" :gutter="2" :clickable="true">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="/src/assets/one1.webp"
        text="文字"
        v-lazy="value"
      />
    </van-grid> -->
    <van-row justify="space-between" v-for="row in 6" :key="row" :gutter="10">
      <van-col v-for="value in 1" :key="value">
        <van-cell-group :inset="true" :border="true">
          <van-cell :border="false">
            <template #title>
              <van-row>
                <van-col :span="5">
                  <van-image
                    round
                    width="50px"
                    height="50px"
                    fit="cover"
                    lazy-load
                    src="/src/assets/one1.webp"
                  >
                  </van-image>
                </van-col>
                <van-col :span="10">
                  <div style="font-size: 18px">kiseki</div>
                  <div>2022-10-29</div>
                </van-col>
              </van-row>
            </template>
          </van-cell>
          <van-cell :border="false">
            <span>shjadjhsakjdhkjsahdjksahkdhsakdhsajkdhjksah</span>
          </van-cell>
          <van-cell :border="false">
            <van-image lazy-load src="/src/assets/one1.webp"></van-image>
          </van-cell>
          <van-grid
            direction="horizontal"
            :column-num="3"
            :border="false"
            :icon-size="20"
          >
            <van-grid-item icon="share-o" text="分享" />
            <van-grid-item icon="comment-o" text="评论" />
            <van-grid-item icon="good-job-o" text="点赞" />
          </van-grid>
        </van-cell-group>
        <van-divider />
      </van-col>
    </van-row>
    <div class="iamge-list">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </div>
  </van-pull-refresh>
  <!-- 添加账单按钮 -->
  <div class="add-button">
    <van-button round plain size="large">
      <van-icon name="records" size="32" color="#f8d65a" @click="showPopup" />
    </van-button>
  </div>

  <!-- 添加账单弹窗 -->
  <van-popup v-model:show="show" position="bottom" round
    ><van-image lazy-load src="/src/assets/one1.webp"></van-image
  ></van-popup>
</template>
<script setup lang="ts">
import { ref } from "vue";
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const show = ref(false);
const showPopup = () => {
  show.value = !show.value;
};
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};
</script>

<style lang="less" scoped>
::v-deep .van-nav-bar__title {
  color: #f8d65a;
}
// ::v-deep .van-icon__image {
//   width: 10em;
//   height: 10em;
//   object-fit: contain;
// }
::v-deep .van-col {
  display: block;
  box-sizing: border-box;
  // height: 50%;
  width: 100%;
}
::v-deep .van-grid-item__content {
  padding: 0px;
}
.image-list {
  background-color: #f7f8fa;
  padding: 0px 0 10px;
}
.name_css {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1px 0 0px;
}
.add-button {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 90px;
  right: 30px;
  z-index: 999;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
}
</style>
