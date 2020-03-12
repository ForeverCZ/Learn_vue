<template>
  <div>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide class="swiper-slide" v-for="item in banner" :key="item.id">
        <img class="swiperImage" :src="item.image" :alt="item.name" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { banner } from "../../../api/api";
export default {
  name: "swiperhome",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 1000,
        effect: "coverflow",
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 20,
          modifier: 2,
          slideShadows: true
        }
      },
      banner: []
    };
  },
  // 钩子函数
  mounted() {
    // 这里有无{}都可以为了好看
    banner({})
      .then(res => {
        console.log("banner数据:", res.data);
        this.banner = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
</style>