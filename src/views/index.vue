<script setup lang="ts"></script>
<template>
  <!-- 主体 -->
  <div class="bill-header bg-red-100">
    <div class="total">
      <div>
        <span>总支出：</span>
        <span class="total-count">100</span>
      </div>
      <div style="margin-left: 15px">
        <span>总收入：</span>
        <span class="total-count">100</span>
      </div>
    </div>
    <div class="select-type-date">
      <div>
        <span><van-icon name="arrow-down" /></span>
      </div>
      <div style="margin-left: 10px">
        <span> <van-icon name="arrow-down" /></span>
      </div>
    </div>
  </div>
  <van-pull-refresh>
    <div class="bill-list">
      <van-list finished-text="没有更多了"></van-list>
    </div>
  </van-pull-refresh>
  <!-- 添加账单按钮 -->
  <div class="add-button">
    <van-button round plain size="large">
      <van-icon name="records" size="32" color="#007fff" />
    </van-button>
  </div>

  <!-- 添加账单弹窗 -->
  <van-popup position="bottom" round>dsf</van-popup>
  <van-popup position="bottom" round></van-popup>
</template>

<style lang="less" scoped>
.bill-header {
  background-color: #007fff;
  color: #fff;
  font-size: 14px;
  .total {
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    .total-count {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .select-type-date {
    display: flex;
    justify-content: flex-end;
    padding: 0 10px 8px;
    div {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 30px;
      padding: 2px 10px;
    }
  }
}
.bill-list {
  background-color: #f7f8fa;
  padding: 1px 0 10px;
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
