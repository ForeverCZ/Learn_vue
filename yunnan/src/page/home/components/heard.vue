<template>
  <div>
    <div class="search">
      <img src="../../../assets/image/feizhu.png" />
      <router-link to="/Search/">
        <input type="text" disabled placeholder="输入目的地、攻略、游记" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "home-heard"
};
</script>
<style scoped>
.search {
  display: flex;
  height: 1rem;
  align-items: center;
  padding: 0 0.2rem;
}
.search img {
  width: 1.9rem;
  height: 0.76rem;
}
.search input {
  margin-left: 0.05rem;
  height: 0.4rem;
  width: 95%;
  border-radius: 0.2rem;
  padding: 0.06rem 0.25rem;
  font-size: 0.26rem;
}
</style>