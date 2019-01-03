<template>
  <header>
    <slot name="logo"></slot>
    <span
      class="left-icon"
      v-if="goBack"
    >
      <i
        title="返回"
        class="iconfont"
      >&#xe679;</i>
    </span>
    <span
      class="left-icon side-bar"
      v-if="sideBar"
    >
      <i
        title="主菜单"
        class="iconfont"
      >&#xe602;</i>
    </span>
    <span
      class="title-text"
      v-if="headTitle"
    >{{headTitle}}</span>
    <transition name="slide-fade">
      <nav>
        <a><i class="iconfont">&#xe641;</i>景区介绍</a>
        <a><i class="iconfont">&#xe64c;</i>景区公告</a>
        <a><i class="iconfont">&#xe69b;</i>景区服务</a>
        <a><i class="iconfont">&#xe6b2;</i>预订门票</a>
        <a><i class="iconfont">&#xe6af;</i>特色购物</a>
        <a><i class="iconfont">&#xe603;</i>旅行百宝箱</a>
        <a><i class="iconfont">&#xe73d;</i>虚拟旅游</a>
        <a><i class="iconfont">&#xe7f1;</i>餐饮住宿</a>
      </nav>
    </transition>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["goBack", "headTitle", "sideBar", "isShowSideBar", "vrUrl", "vrTitle"]
};
</script>