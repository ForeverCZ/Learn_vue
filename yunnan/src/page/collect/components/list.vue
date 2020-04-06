<template>
  <div class="content-wrap">
    <div v-for="item in listDataSource" v-bind:key="item.goods.id" v-show="listDataSource.length">
      <router-link :to="'/Containner/' + item.goods.id">
        <div class="content">
          <div class="content-img">
            <img :src="item.goods.name.image" alt />
          </div>
          <div class="content-text">
            <div class="content-name">{{item.goods.name.name}}</div>
            <div class="conten-biao">
              <p>{{item.goods.name.title}}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="hint" v-show="!listDataSource.length">还没有收藏哦^^.</div>
  </div>
</template>
<script>
import { listData } from "../../../api/api";
export default {
  name: "list",
  data() {
    return {
      listDataSource: []
    };
  },
  mounted() {
    listData()
      .then(res => {
        console.log("获取收藏列表数据", res.data);
        this.listDataSource = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="" scoped>
@import "../../../assets/style/public_nav";
.content-wrap {
  margin-top: 0.85rem;
}
.hint{
    text-align: center;
    font-size: 0.25rem;
    color: #555;
}
</style>