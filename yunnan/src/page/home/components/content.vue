<template>
  <div class="content-wrap">
    <div v-for="item in homesData" v-bind:key="item.id" @click="test">
      <router-link to="/Containner">
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
  </div>
</template>
<script>
import { homes } from "../../../api/api";
export default {
  name: "content",
  data() {
    return {
      homesData: []
    };
  },
  methods: {
    
  },
  mounted() {
    homes()
      .then(value => {
        console.log("攻略:", value);
        this.homesData = value.data.results;
      })
      .catch(err => {
        console.log(err);
      });
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
  margin-bottom: 1rem;
}
</style>