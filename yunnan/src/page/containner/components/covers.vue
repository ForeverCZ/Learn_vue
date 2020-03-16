<template>
  <!-- 标题组件 -->
  <div class="cover-wrap">
    <div class="covers-swipers">
      <img :src="images" alt />
    </div>
    <div class="covers-title">{{culum}}</div>
    <div class="covers-image" @click="imageSholw">{{alubum.length}}张图片</div>
    <!-- 小导航图标 -->
    <div class="classify">
      <div>
        <img src="../../../assets//image/jingdian.png" alt />
        <p>景点</p>
      </div>
      <div>
        <img src="../../../assets//image/jingdian.png" alt />
        <p>美食</p>
      </div>
      <div>
        <img src="../../../assets//image/jingdian.png" alt />
        <p>购物</p>
      </div>
      <div>
        <img src="../../../assets//image/jingdian.png" alt />
        <p>景点</p>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from "../../../assets/bus/bus.js";
export default {
  name: "covers",
  //props接收员父组件传来的值，culum：右边填写传递过来值的数据类型
  props: {
    culum: "",
    images: "",
    alubum: Array
  },
  data() {
    return {
      showSwiper: ""
    };
  },
  methods: {
    imageSholw() {
      this.showSwiper = true;
      // 把已经改变的showSwiper传送到csliding页面
      Bus.$emit("val", this.showSwiper);
    }
  },
  mounted() {
    // 接受从轮播相册组件传来的数据
    Bus.$on("val", data => {
      console.log("轮播相册传来的数据", data);
      this.showSwiper = data;
    });
  }
};
</script>
<style lang="" scoped>
.cover-wrap {
  position: relative;
}
.covers-swipers img {
  width: 100%;
}
.covers-title {
  position: absolute;
  top: 2.3rem;
  left: 0.5rem;
  font-size: 0.45rem;
  color: white;
}
.covers-image {
  position: absolute;
  top: 3.3rem;
  left: 0.5rem;
  font-size: 0.36rem;
  color: white;
}
.classify {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0.4rem;
  text-align: center;
  width: 100%;
}
.classify img {
  width: 50%;
}
.classify p {
  color: white;
  padding-top: 0.1rem;
  font-size: 0.3rem;
}
</style>