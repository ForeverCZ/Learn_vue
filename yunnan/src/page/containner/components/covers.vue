<template>
  <div class="cover-wrap">
    <div class="covers-swipers">
      <img src="http://vue.thexxdd.cn/media/goods/images/gong1.1_Wal4IT0.jpg" alt />
    </div>
    <div class="covers-title">大理</div>
    <div class="covers-image">100图片</div>
    <!-- 小导航图标 -->
    <div class="classify">
      <div>
        <img src="../../../assets//image/jingdian.png" alt />
        <p>景点</p>
      </div>
      <div>
        <img src="../../../assets//image/jingdian.png" alt />
        <p>美食</p>
      </div>
      <div>
        <img src="../../../assets//image/jingdian.png" alt />
        <p>购物</p>
      </div>
      <div>
        <img src="../../../assets//image/jingdian.png" alt />
        <p>景点</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "covers"
};
</script>
<style lang="" scoped>
.cover-wrap {
  position: relative;
}
.covers-swipers img {
  width: 100%;
}
.covers-title {
  position: absolute;
  top: 2.6rem;
  left: 0.5rem;
  font-size: 0.5rem;
  color: white;
}
.covers-image {
  position: absolute;
  top: 3.8rem;
  left: 0.5rem;
  font-size: 0.36rem;
  color: white;
}
.classify {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0.4rem;
  text-align: center;
  width: 100%;
}
.classify img {
  width: 50%;
}
.classify p {
  color: white;
  padding-top: 0.1rem;
  font-size: 0.3rem;
}
</style>