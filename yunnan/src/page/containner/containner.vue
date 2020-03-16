<template>
  <div>
    <Covers :culum="culum" :images="images" :alubum="alubum"></Covers>
    <Revert :culum="culum"></Revert>
    <Sliding :alubum="alubum"></Sliding>
    <Collect></Collect>
    <Speech></Speech>
    <div style="height:10rem"></div>
  </div>
</template>
<script>
import Covers from "./components/covers";
import Revert from "./components/revert";
import Sliding from "./components/sliding";
import Collect from "./components/collect";
import Speech from "./components/speech";
// 父组件引入api父传子
import { goods } from "../../api/api";
export default {
  name: "home-containner",
  data() {
    return {
      productId: 1, //取到攻略详情页的id
      culum: "",
      images: "",
      alubum: []
    };
  },
  components: {
    Covers,
    Revert,
    Sliding,
    Collect,
    Speech
  },
  mounted() {
    goods(this.productId)
      .then(res => {
        console.log("获取攻略详细信息1", res.data);
        var data = res.data;
        //标题
        this.culum = data.curriculum;
        // 背景相册
        this.images = data.image;
        // 相册
        this.alubum = data.images;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="">
</style>