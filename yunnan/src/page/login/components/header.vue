<template>
  <div>
    <div class="header-fixed">
      <!-- 一级路由 -->
      <router-link to="/Person">
      <div class="header-fixed-back">
        <img src="../../../assets//image/fanhui.png" alt />
      </div>
      登录
      </router-link>
    </div>
    <div class="login-img">
        <img src="../../../assets//image/fengmian.jpeg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="" scoped>
 @import '../../../assets/style/public_nav';
 .login-img{
     width: 100%;
 }
</style>