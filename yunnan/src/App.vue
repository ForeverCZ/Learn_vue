<template>
  <div id="app">
    <!-- 这是开始页面-->
    <!-- 只要写router-view就会渲染所有组件不用一一引入 -->
    <!-- keep-alive缓存作用 -->
    <!-- 只用keep-alive包裹全局缓存
    <keep-alive>
      <router-view></router-view>
    </keep-alive>-->
    <!-- 下面是局部缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要缓存的 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
