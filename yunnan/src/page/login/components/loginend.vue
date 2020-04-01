<template>
  <div>
    <form class="submit">
      <input type="text" placeholder="请输入手机号" />
      <input type="password" placeholder="请输入密码" />
      <input type="button" value="登录" />
    </form>
  </div>
</template>
<script>
export default {
  name: "Loginend"
};
</script>
<style scoped>
.submit {
  padding: 0 0.8rem;
}
input {
  width: 100%;
  padding: 0.2rem 0;
  margin: 0.2rem 0;
}
input[type="button"] {
  font-size: 0.27rem;
  color: #fff;
  background: #fe642e;
  border-radius: 0.5rem;
  margin-top: 0.6rem;
}
input:not([type="button"]) {
  border: 1px solid#5858FA;
}
input:nth-child(1){
  margin-top: 1rem;
}
input:nth-child(1):hover {
  border: 1px solid#FE642E;
}
input:nth-child(2):hover {
  border: 1px solid#82FA58;
}
</style>