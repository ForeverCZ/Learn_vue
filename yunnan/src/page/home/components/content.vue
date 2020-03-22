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
.content {
  display: flex;
  height: auto;
  overflow: hidden;
  padding: 0.2rem 0;
  justify-content: space-between;
  border-bottom: 1px solid #bdafaf;
}
.content-img {
  width: 100%;
  height: auto;
  margin-left: 0.1rem;
  margin-right: 0.2rem;
}
.content-img img {
  width: 100%;
  display: block;
}
.content-text {
  width: 100%;
  margin-right: 0.1rem;
  position: relative;
}
.content-name {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 0.3rem;
  font-weight: bold;
  line-height: 1.5;
  color: #1c1c1c;
}
.conten-biao {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.24rem;
}
.conten-biao p {
  border-radius: 0.5rem;
  border: 0.02rem solid #40ff00;
  padding: 0.08rem 0.15rem;
  color: #f78181;
}
.content-wrap {
  margin-bottom: 1.2rem;
}
.loding div {
  text-align: center;
  color: #333;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.3rem;
}
</style>