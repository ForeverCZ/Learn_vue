<template>
  <div>
    <div class="name">
      <!-- 未登录 -->
      <router-link to="/Login">
        <div class="btn">登录</div>
      </router-link>
      <!-- 已登陆 -->
      <div v-show="show">
        <img src="../../../assets/image/zhangguo.jpg" alt />
        <p>张国荣</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "my",
  data() {
    return {
      show: false
    };
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
  margin-top: 0.1rem;
  text-align: center;
  color: #ccc;
  font-size: 0.26rem;
}
</style>