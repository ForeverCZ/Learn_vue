<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyWord" placeholder="请输入目的地/攻略" @keyup.enter="submitData" />
      <router-link to="/">
        <p>取消</p>
      </router-link>
    </div>
    <!-- 搜索出来的数据 -->
    <div v-if="searchData.length">
      <div v-for="(item, index) in searchData" :key="item.name.id">
        <router-link :to="'/Containner/' + item.name.id">
          <div class="content">
            <div class="content-img">
              <img :src="item.name.image" alt />
            </div>
            <div class="content-text">
              <div class="content-name">{{item.name.name}}</div>
              <div class="conten-biao">
                <p>{{item.name.title}}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- 没有搜索出来数据 -->
    <div v-if="!searchData.length" class="nosearch">
      <img src="../../assets/image/rekong.png" alt />
    </div>
  </div>
</template>
<script>
import { searchData } from "../../api/api";
export default {
  name: "Search",
  data() {
    return {
      //   搜索词
      keyWord: "",
      searchData: []
    };
  },
  methods: {
    submitData() {
      searchData(this.keyWord)
        .then(res => {
          console.log(res.data);
          this.searchData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
@import "../../assets/style/public_nav";
.search {
  display: flex;
  height: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.search input {
  background: #eee;
  width: 80%;
  padding: 0.1rem 0 0.1rem 0.2rem;
  border-radius: 0.1rem;
}
.search p {
  color: #fe642e;
  margin-right: 0.3rem;
}
.nosearch {
  text-align: center;
}
.nosearch img {
  width: 60%;
}
</style>