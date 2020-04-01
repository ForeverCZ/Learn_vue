<template>
  <div>
    <!-- <router-link to="/"> -->
    <div class="header-abs" v-show="showVet">
      <!-- 返回上一级 @click="back"-->
      <img src="../../../assets//image/fanhui.png" @click="back" alt />
    </div>
    <!-- </router-link> -->
    <div class="header-fixed" v-show="!showVet">
      <!-- <router-link to="/"> -->
      <div class="header-fixed-back">
        <!-- 返回上一级 @click="back"-->
        <img src="../../../assets//image/fanhui.png" @click="back" alt />
      </div>
      {{culum}}
      <!-- </router-link> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "home-revert",
  props: {
    culum: String
  },
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
    },
    back: function() {
      this.$router.go(-1); //返回上一层
    }
  },
  //   滚动监听
  created() {
    window.addEventListener("scroll", this.revert);
  }
};
</script>
<style lang="" scoped>
@import "../../../assets/style/public_nav";
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
</style>
