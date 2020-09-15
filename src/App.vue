<template>
  <div class="appContainer">
    <!-- 顶部区域 -->
    <mt-header fixed title="Vue Test-Demo"></mt-header>
    <!-- 中间路由区域 -->
    <transition name="tapBox">
      <router-view></router-view>
    </transition>
    <!-- 底部渔区 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.appContainer {
  padding-top: 40px;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;
}

.tapBox-enter {
  opacity: 0;
  transform: translateX(100%);
}
.tapBox-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.tapBox-enter-active,
.tapBox-leave-active {
  transition: 0.3s all ease-out;
  position: absolute;
}
.tapBox-move {
  transition: 0.2s all ease-out;
}
</style>