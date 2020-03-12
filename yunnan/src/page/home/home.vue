<template>
  <!-- 首页、大组件 -->
  <div>
    <heard></heard>
    <SwiperHome></SwiperHome>
    <Ticket></Ticket>
    <Content></Content>
    <Naver></Naver>
  </div>
</template>
<script>
import Naver from "./components/nav.vue";
import Heard from "./components/heard.vue";
import SwiperHome from "./components/swiper.vue";
import Ticket from "./components/ticker.vue";
import Content from "./components/content";
export default {
  name: "home",
  components: {
    Naver,
    Heard,
    SwiperHome,
    Ticket,
    Content
  }
};
</script>
<style lang="">
</style>