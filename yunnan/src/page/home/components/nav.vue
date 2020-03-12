<template>
  <div>
    <div class="nav">
      <!-- 和a标签一样跳转 -->
      <router-link to="/">
        <div>
          <img :src="shouyeb" />
          <p>首页</p>
        </div>
      </router-link>
      <router-link to="/Person">
        <div>
          <img :src="wodea" />
          <p>我的</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import引入图片
import shouyeb from "../../../assets/image/shouyeb.png";
import wodea from "../../../assets/image/wodea.png";
export default {
  name: "home-nav",
  data() {
    return {
      shouyeb: shouyeb,
      wodea: wodea
    };
  }
};
</script>
// 引入公用样式
// scoped 设置css局部引用
<style scoped>
@import "../../../assets/style/public_nav";
</style>
