<template>
  <div>
    <!-- 登录注册切换 -->
    <div class="switches">
      <!-- 二级路由 -->
      <router-link to="/Loginend">
        <div
          :class="{effect:isEffectLogin}"
          @touchstart="touchstartLogin()"
          @touchend="touchend()"
        >登录</div>
      </router-link>
      <!-- 二级路由 只要是路由就可以渲染 渲染了不一显示 你得进这个路由才可以 -->
      <router-link to="/Regist">
        <div
          :class="{effect:isEffectRgister}"
          @touchstart="touchstartRegister()"
          @touchend="touchend()"
        >注册</div>
      </router-link>
    </div>
    <!-- 二级路由渲染 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Loginpage",
  data() {
    return {
      isEffectLogin: false,
      isEffectRgister: false
    };
  },
  methods: {
    touchstartLogin() {
      this.isEffectLogin = true;
    },
    touchstartRegister() {
      this.isEffectRgister = true;
    },
    touchend() {
      this.isEffectLogin = false;
      this.isEffectRgister = false;
    }
  }
};
</script>
<style lang="" scoped>
.switches {
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
  font-size: 0.28rem;
}
.switches div {
  padding: 0.2rem 0.45rem;
  text-align: center;
}
.effect {
  box-shadow: 0 0 0.2rem #555;
  border-radius: 0.16rem;
  border: 1px solid #777;
}
</style>