<template>
  <div class="business">
    <div>
      <img src="../../../assets/image/myshou.png" alt />
      <p>我的收藏</p>
    </div>
    <div>
      <img src="../../../assets/image/tuichu.png" alt />
      <p>退出登录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Business"
};
</script>
<style lang="">
.business{
    display: flex;
    justify-content: space-around;
}
.business div{
    margin-top: 0.3rem;
    padding: 0.3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #245eb6;
    width: 43%;
    border-radius: 0.15rem;
}
.business img{
    width: 25%;
}
</style>