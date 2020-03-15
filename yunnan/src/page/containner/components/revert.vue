<template>
  <div>
    <router-link to="/">
      <div class="header-abs" v-show="showVet">
        <img src="../../../assets//image/fanhui.png" alt />
      </div>
    </router-link>
    <div class="header-fixed" v-show="!showVet">
      <router-link to="/">
        <div class="header-fixed-back">
          <img src="../../../assets//image/fanhui.png" alt />
        </div>回到首页
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "home-revert",
  data() {
    return {
      showVet: true
    };
  },
  methods: {
    revert() {
      var add = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(add);
      if (add > 48) {
        this.showVet = false;
      } else {
        this.showVet = true;
      }
    }
  },
  //   滚动监听
  created() {
    window.addEventListener("scroll", this.revert);
  }
};
</script>
<style lang="">
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.7rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
}
.header-abs img {
  width: 0.6rem;
  color: white;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: white;
  background: rgba(255, 127, 36, 0.5);
  font-size: 0.35rem;
  z-index: 2;
}
.header-fixed-back {
  position: absolute;
  top: 0;
  left: 0;
  height: 0.6rem;
  width: 0.6rem;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
.header-fixed-back img {
  height: 0.6rem;
  width: 0.6rem;
}
a {
  color: #fff;
}
</style>