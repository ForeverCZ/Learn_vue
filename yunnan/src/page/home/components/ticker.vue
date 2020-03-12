<template>
  <div class="ticker">
    <div>
      <img src="../../../assets//image/jipiao.jpg" alt />
      <p>机票</p>
    </div>
    <div>
      <img src="../../../assets//image/jiudian.jpg" alt />
      <p>酒店</p>
    </div>
    <div>
      <img src="../../../assets//image/huochepiao.jpg" alt />
      <p>火车票</p>
    </div>
    <div>
      <img src="../../../assets//image/qichepiao.jpg" alt />
      <p>汽车票</p>
    </div>
    <div>
      <img src="../../../assets//image/menpiao.jpg" alt />
      <p>门票</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ticket"
};
</script>
<style scoped>
.ticker {
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
}
.ticker img {
  margin-bottom: 0.05rem;
  width: 100%;
}
</style>