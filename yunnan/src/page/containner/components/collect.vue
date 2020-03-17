<template>
  <div class="collect-wrap">
    <div class="collect">
      <img src="../../../assets/image/weishoucang.png" alt />
      <p>未收藏</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "collect"
};
</script>
<style scoped>
.collect-wrap {
  display: flex;
  justify-content: flex-end;
  padding: 0.3rem 0.1rem 0.1rem 0;
}
.collect {
  text-align: center;
}
.collect img {
  width: 0.45rem;
}
.collect p {
  line-height: 0.5rem;
  font-size: 0.25rem;
}
</style>