<template>
  <div>
    <div class="name">
      <!-- 未登录 -->
      <router-link to="/Login" v-if='!this.userInfo.name'>
        <div class="btn">登录</div>
      </router-link>
      <!-- 已登陆 -->
      <div v-else>
        <img src="../../../assets/image/zhangguo.jpg" alt />
        <p>{{this.userInfo.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
// 固定这么写
import { mapState } from "vuex";
export default {
  name: "my",
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapState(['userInfo'])
  }
};
</script>
<style scoped>
.name {
  background: #477bc7;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn {
  color: white;
  text-align: center;
  background: yellowgreen;
  width: 1rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.08rem;
}
.name img {
  width: 2rem;
  border-radius: 50%;
}
.name p {
  padding-top: 0.3rem;
  text-align: center;
  color: wheat;
  font-size: 0.28rem;
}
</style>