<template>
  <div>
    <Covers :culum="culum" :images="images" :alubum="alubum"></Covers>
    <Revert :culum="culum"></Revert>
    <Sliding :alubum="alubum"></Sliding>
    <Collect></Collect>
    <Speech :culum="culum" :lecturer="lecturer" :goods_desc="goods_desc"></Speech>
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
      productId: "", //取到攻略详情页的id
      culum: "",
      images: "",
      alubum: [],
      lecturer:"",
      goods_desc:''
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
        console.log("获取攻略详细信息:", res.data);
        var data = res.data;
        //标题
        this.culum = data.curriculum;
        // 背景相册
        this.images = data.image;
        // 相册
        this.alubum = data.images;
        //语音描述
        this.lecturer=data.lecturer
        // 文章
        this.goods_desc=data.goods_desc
      })
      .catch(err => {
        console.log(err);
      });
  },created(){
    // 取到列表页传过来的Id值(路由跳转过来的)
    this.productId=this.$route.params.id
    console.log("取到列表页传过来的Id值(路由跳转过来的)",this.productId)
  }
};
</script>
<style lang="">
</style>