<template>
  <div class="content-wrap">
    <div v-for="item in homesData" v-bind:key="item.id">
      <router-link :to="'/Containner/' + item.id">
        <div class="content">
          <div class="content-img">
            <img :src="item.image" alt />
          </div>
          <div class="content-text">
            <div class="content-name">{{item.name}}</div>
            <div class="conten-biao">
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="loding">
      <div class="startLoding" v-show="showLoding">{{finishiText}}</div>
    </div>
  </div>
</template>
<script>
import { homes } from "../../../api/api";
export default {
  name: "content",
  data() {
    return {
      homesData: [],
      //进入当前页面请求第一页的数据
      pages: 1,
      // 提示
      showLoding: false,
      // 提示文字
      finishiText: "加载中..."
    };
  },
  methods: {
    hodeData() {
      homes(this.pages)
        .then(value => {
          console.log("攻略:", value);
          //判断数据是否为空
          if (value.data.results != null) {
            if (this.pages == 1) {
              this.homesData = value.data.results;
            } else {
              // 上拉加载请求后的数据合并起来
              this.showLoding = false;
              this.homesData = this.homesData.concat(value.data.results);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  //   滚动监听
  created() {},
  mounted() {
    this.hodeData();
    // 上拉加载
    window.onscroll = () => {
      // 滚动条滚动时距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)
      // 可视化区域的高度
      var windowHeigth =
        document.documentElement.clientHeight || document.body.clientHeight;
      // console.log(windowHeigth);
      // 滚动条总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // console.log(scrollHeight);
      if (scrollTop + windowHeigth == scrollHeight) {
        // console.log(true)
        this.pages++;
        this.showLoding = true;
        if (this.pages < 5) this.hodeData();
        else {
          this.finishiText = "没有更多数据了";
        }
      }
    };
  }
};
</script>

<style scoped>
@import "../../../assets/style/public_nav";
</style>