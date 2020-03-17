<template>
  <!-- 相册轮播组件 -->
  <div class="sliding" v-show="showSwiper" @click="disPage">
    <div class="sliding-swiper">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide v-for="item in alubum" :key="item.id">
          <img :src="item.image" :alt="item.Fullname" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import Bus from "../../../assets/bus/bus.js";
export default {
  name: "sliding",
  props: {
    alubum: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        paginationType: "fraction",
        zoom: true,
        effect: "fade"
      },
      banner: [],
      showSwiper: false
    };
  },
  methods: {
    disPage() {
      this.showSwiper = false;
    }
  },
  mounted() {
    //子组件与子组件传值使用bus
    // 把showSwiper传送到covers页面
    Bus.$emit("val", this.showSwiper);
    // 接受从标题组件传来的数据
    Bus.$on("val", data => {
      console.log("轮播相册传来的数据", data);
      this.showSwiper = data;
    });
  }
};
</script>
<style scoped>
.sliding {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 1);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center;不能使用这个，因为会使图片居中，展示错乱 */
}
.sliding-swiper {
  margin-bottom: 3rem;
}
.swiper-pagination {
  position: fixed;
  bottom: 1rem;
  color: blanchedalmond;
}
</style>