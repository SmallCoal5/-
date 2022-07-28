<template>
  <!-- 主体 -->
  <van-nav-bar title="主页">
    <template #left>
      <van-icon name="smile-o" size="25" color="#f8d65a" class="w-19px" />
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
        <van-cell-group
          :inset="true"
          :border="false"
          class="van-hairline--bottom pb-1"
        >
          <van-cell :border="false">
            <template #title>
              <van-row>
                <div class="flex flex-col justify-center">
                  <van-image
                    round
                    width="60px"
                    height="60px"
                    fit="cover"
                    lazy-load
                    src="/src/assets/one1.webp"
                  >
                  </van-image>
                </div>
                <div class="flex flex-col justify-center pl-10px">
                  <div style="font-size: 18px">kiseki</div>
                  <div>2022-10-29</div>
                </div>
              </van-row>
            </template>
          </van-cell>
          <van-cell :border="false">
            <div class="van-multi-ellipsis--l3">
              深圳大学党委书记李清泉表示，习近平总书记在庆祝中国共产主义青年团成立100周年大会上发表的重要讲话中指出，“过去、现在、将来青年工作都是党的工作中一项战略性工作。”要求各级党委（党组）要倾注极大热忱研究青年成长规律和时代特点，拿出极大精力抓青年工作，做青年朋友的知心人、青年工作的热心人、青年群众的引路人。学校党委将按照习近平总书记要求，继续深入落实“党建带团建”制度机制，将共青团建设纳入学校党建总体格局,推行团建与党建同规划、同部署，支持共青团按照群团工作特点和规律创造性地开展工作，提升团组织和团干部的政治站位、政治能力，优化服务青年工作机制，广泛组织动员深大青年建功新时代。要注重从优秀共青团员中培养和发展党员，切实做好“推优入党”工作。
              他说，百年中国青年运动史有力地证明了，中国共青团由党缔造、与党同姓、听党指挥、跟党行动，“党的奋斗主题就是团的奋斗方向。”在学校创建世界一流创新型大学、打造新时代中国特色社会主义标杆大学的奋进征程中，深圳大学的共青团工作要聚焦永远跟党走主旋律，凝练思想引领力；要聚焦团学组织深化改革，锻造组织引领力；要聚焦青年成长与权益维护，优化服务引领力。共青团工作岗位光荣、责任重大。深大的团干部要强化政治锻造，强化工作历练，强化作风锤炼，努力做到政治、思想、能力、作风全面过硬，让党放心、让青年满意。深大的团员青年要坚定理想信念，把稳青春奋斗的正确航向，将国家需要作为个人奋斗的永恒坐标，用奋斗书写新时代的圆满答卷，以自己的赤忱、热血书写实现中华民族伟大复兴中国梦的青春篇章！
            </div>
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
        <!-- <van-divider /> -->
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
  <van-popup
    v-model:show="show"
    position="right"
    closeable
    close-icon-position="top-left"
    class="flex flex-col w-100vw h-100vh"
  >
    <template #default>
      <Popwindow></Popwindow>
    </template>
  </van-popup>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Popwindow from "../components/PopBar/index.vue";
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
/* // ::v-deep .van-icon__image {
//   width: 10em;
//   height: 10em;
//   object-fit: contain;
// } */
::v-deep .van-col {
  display: block;
  box-sizing: border-box;
  /* // height: 50%; */
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
  display: flex;
  flex-direction: column;
  justify-content: center;
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
