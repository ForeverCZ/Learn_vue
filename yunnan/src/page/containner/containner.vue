<template>
  <div>
    <Covers></Covers>
    <Revert></Revert>
    <div style="height:10rem"></div>
  </div>
</template>
<script>
import Covers from "./components/covers";
import Revert from "./components/revert";
// 父组件引入api父传子
import { goods } from "../../api/api";
export default {
  name: "home-containner",
  data() {
    return {
      productId: 1
    };
  },
  components: {
    Covers,
    Revert
  },
  mounted() {
    goods(this.productId)
      .then(res => {
        console.log("获取攻略详细信息1",res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="">
</style>