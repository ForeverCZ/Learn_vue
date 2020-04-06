<template>
  <div class="collect-wrap">
    <div class="collect" v-if="isShow" @click="toCollect">
      <img src="../../../assets/image/weishoucang.png" alt />
      <p>未收藏</p>
    </div>
    <div class="collect" v-else @click="toCancelCollect">
      <img src="../../../assets/image/yishou.png" alt />
      <p>已收藏</p>
    </div>
  </div>
</template>
<script>
import cookie from "../../../axios/cookie.js";
import { getcoll, collect, delectCollect } from "../../../api/api";
export default {
  name: "collect",
  props: {
    productId: ""
  },
  data() {
    return {
      isShow: true
    };
  },
  created() {
    var productId = this.productId;
    // 判断是否登录
    if (cookie.getCookie("token")) {
      // 判断是否收藏
      getcoll(productId)
        .then(res => {
          console.log("判断是否收藏:", res);
          // 已经收藏
          this.isShow = false;
        })
        .catch(err => {
          console.log(err);
          this.isShow = true;
        });
    } else {
      this.isShow = true;
    }
  },
  methods: {
    // 点击收藏
    toCollect() {
      if (cookie.getCookie("token")) {
        collect({
          goods: this.productId
        })
          .then(res => {
            console.log(res);
            console.log("收藏");
            this.isShow = false;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$popus("2秒后跳转登录");
        setTimeout(res => {
          this.$router.push("/Person");
        }, 2000);
      }
    }, // 取消收藏
    toCancelCollect() {
      if (cookie.getCookie("token")) {
        delectCollect(this.productId)
          .then(res => {
            console.log(res);
            console.log("取消收藏");
            this.isShow = true;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$popus("2秒后跳转登录");
        setTimeout(res => {
          this.$router.push("/Person");
        }, 2000);
      }
    }
  }
};
</script>
<style scoped>
.collect-wrap {
  display: flex;
  justify-content: flex-end;
  padding: 0.3rem 0.1rem 0.1rem 0;
}
.collect {
  text-align: center;
}
.collect img {
  width: 0.45rem;
}
.collect p {
  line-height: 0.5rem;
  font-size: 0.25rem;
}
</style>