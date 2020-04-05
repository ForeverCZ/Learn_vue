<template>
  <div class="business" v-if="this.userInfo.name">
    <div>
      <img src="../../../assets/image/myshou.png" alt />
      <p>我的收藏</p>
    </div>
    <div @click="exit">
      <img src="../../../assets/image/tuichu.png" alt />
      <p>退出登录</p>
    </div>
  </div>
</template>
<script>
// 固定这么写
import { mapState } from "vuex";
// 引入cookie
import cookie from "../../../axios/cookie";
export default {
  name: "Business",
  methods: {
    exit() {
      cookie.delCookie("token");
      cookie.delCookie("name");
      //更新数据仓库列数据
      this.$store.dispatch("users");
      // 跳到首页 跳转路由
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>
<style lang="">
.business {
  display: flex;
  justify-content: space-around;
}
.business div {
  margin-top: 0.3rem;
  padding: 0.3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2c65bb;
  width: 43%;
  border-radius: 0.15rem;
}
.business img {
  width: 25%;
}
.business p{
  color: whitesmoke;
  padding-top: 0.3rem;
}
</style>