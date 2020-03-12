<template>
  <div>
    <div class="nav">
      <!-- 和a标签一样跳转 -->
      <router-link to="/">
        <div>
          <img :src="shouyea" />
          <p>首页</p>
        </div>
      </router-link>
      <router-link to="/Person">
        <div>
          <img :src="wodeb" />
          <p>我的</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import引入图片
import shouyea from "../../../assets/image/shouyea.png";
import wodeb from "../../../assets/image/wodeb.png";
export default {
  name: "home-nav",
  data() {
    return {
      shouyea: shouyea,
      wodeb: wodeb
    };
  }
};
</script>
// 引入公用样式
// scoped 设置css局部引用
<style scoped>
@import "../../../assets/style/public_nav";
</style>
